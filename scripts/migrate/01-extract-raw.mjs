#!/usr/bin/env node

/**
 * 01-extract-raw.mjs — Extract Webflow CMS data via REST API v2
 *
 * Extracts site metadata, collection schemas, and published items
 * for all collections defined in 00-manifest.json.
 *
 * Usage:
 *   node scripts/migrate/01-extract-raw.mjs
 *   node scripts/migrate/01-extract-raw.mjs --skip-existing
 *   node scripts/migrate/01-extract-raw.mjs --only author,speaker
 *
 * Requires: WEBFLOW_API_TOKEN in .env.local
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'data');
const RAW_DIR = join(DATA_DIR, 'raw');
const SCHEMAS_DIR = join(RAW_DIR, 'schemas');

const SITE_ID = '609552290d93fd43ba0f0849';
const BASE_URL = 'https://api.webflow.com/v2';
const MAX_RETRIES = 3;
const ITEMS_PER_PAGE = 100;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadToken() {
  const envPaths = [
    join(__dirname, '../../.env.local'),
    join(__dirname, '../../.env'),
  ];
  for (const p of envPaths) {
    if (existsSync(p)) {
      const content = readFileSync(p, 'utf-8');
      const match = content.match(/^WEBFLOW_API_TOKEN=(.+)$/m);
      if (match) return match[1].trim();
    }
  }
  // Also check process.env
  if (process.env.WEBFLOW_API_TOKEN) return process.env.WEBFLOW_API_TOKEN;
  return null;
}

function loadManifest() {
  return JSON.parse(readFileSync(join(__dirname, '00-manifest.json'), 'utf-8'));
}

function parseArgs() {
  const args = process.argv.slice(2);
  const skipExisting = args.includes('--skip-existing');
  const onlyIdx = args.indexOf('--only');
  const only = onlyIdx !== -1 && args[onlyIdx + 1]
    ? args[onlyIdx + 1].split(',').map(s => s.trim())
    : null;
  return { skipExisting, only };
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, token, attempt = 1) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'accept-version': '2.0.0',
    },
  });

  if (res.status === 429) {
    const retryAfter = parseInt(res.headers.get('Retry-After') || '60', 10);
    console.warn(`  [429] Rate limited. Waiting ${retryAfter}s...`);
    await sleep(retryAfter * 1000);
    return fetchWithRetry(url, token, attempt);
  }

  if (!res.ok) {
    if (attempt < MAX_RETRIES) {
      const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
      console.warn(`  [${res.status}] Retry ${attempt}/${MAX_RETRIES} in ${delay / 1000}s...`);
      await sleep(delay);
      return fetchWithRetry(url, token, attempt + 1);
    }
    const body = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} on ${url}: ${body}`);
  }

  return res.json();
}

function writeJson(filePath, data) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

// ---------------------------------------------------------------------------
// Extraction steps
// ---------------------------------------------------------------------------

async function extractSiteMeta(token) {
  console.log('\n--- Site metadata ---');
  const outPath = join(RAW_DIR, 'site.json');
  const data = await fetchWithRetry(`${BASE_URL}/sites/${SITE_ID}`, token);

  // Also fetch locales
  let locales = null;
  try {
    const localeData = await fetchWithRetry(`${BASE_URL}/sites/${SITE_ID}/locales`, token);
    locales = localeData;
  } catch (e) {
    console.warn(`  [WARN] Could not fetch locales: ${e.message}`);
  }

  const output = {
    extractedAt: new Date().toISOString(),
    siteId: SITE_ID,
    site: data,
    locales,
  };
  writeJson(outPath, output);
  console.log(`  ✓ site.json`);
  return output;
}

async function extractSchema(token, entry) {
  const url = `${BASE_URL}/collections/${entry.webflowCollectionId}`;
  const data = await fetchWithRetry(url, token);
  const outPath = join(SCHEMAS_DIR, `${entry.canonicalName}.json`);
  writeJson(outPath, {
    extractedAt: new Date().toISOString(),
    canonicalName: entry.canonicalName,
    collectionId: entry.webflowCollectionId,
    schema: data,
  });
  console.log(`  ✓ schema: ${entry.canonicalName} (${data.fields?.length || '?'} fields)`);
  return data;
}

async function extractItems(token, entry) {
  const endpoint = `/v2/collections/${entry.webflowCollectionId}/items/live`;
  const allItems = [];
  let offset = 0;
  let total = null;
  let pagesRequested = 0;
  const startedAt = new Date().toISOString();

  while (true) {
    const url = `${BASE_URL}/collections/${entry.webflowCollectionId}/items/live?limit=${ITEMS_PER_PAGE}&offset=${offset}`;
    const data = await fetchWithRetry(url, token);
    pagesRequested++;

    const items = data.items || [];
    const pageTotal = data.pagination?.total ?? data.total ?? items.length;

    // Coherence check: total should not change between pages
    if (total !== null && pageTotal !== total) {
      console.error(`  [ERROR] Total changed during pagination: was ${total}, now ${pageTotal}`);
      throw new Error(`Pagination inconsistency for ${entry.canonicalName}`);
    }
    total = pageTotal;

    allItems.push(...items);

    if (allItems.length >= total || items.length < ITEMS_PER_PAGE) {
      break;
    }
    offset += ITEMS_PER_PAGE;
  }

  const finishedAt = new Date().toISOString();
  const outPath = join(RAW_DIR, entry.outputFile);
  const output = {
    canonicalName: entry.canonicalName,
    collectionId: entry.webflowCollectionId,
    endpoint,
    startedAt,
    finishedAt,
    totalFromApi: total,
    itemCount: allItems.length,
    pagesRequested,
    items: allItems,
  };
  writeJson(outPath, output);

  const countMatch = allItems.length === entry.expectedCount ? '✓' : `✗ expected ${entry.expectedCount}`;
  console.log(`  ✓ items: ${entry.canonicalName} — ${allItems.length} items (${countMatch}), ${pagesRequested} page(s)`);
  return output;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const token = loadToken();
  if (!token) {
    console.error('ERROR: WEBFLOW_API_TOKEN not found.');
    console.error('Add it to .env.local: WEBFLOW_API_TOKEN=your_token_here');
    process.exit(1);
  }

  const manifest = loadManifest();
  const { skipExisting, only } = parseArgs();

  const collections = only
    ? manifest.filter(e => only.includes(e.canonicalName))
    : manifest;

  if (only) {
    console.log(`Extracting only: ${only.join(', ')}`);
  }

  console.log(`\n=== Webflow CMS Extraction ===`);
  console.log(`Collections: ${collections.length}`);
  console.log(`Endpoint: /items/live (published only)`);
  console.log(`Site: ${SITE_ID}`);

  // 1. Site metadata (requires sites:read scope — skip gracefully if missing)
  try {
    await extractSiteMeta(token);
  } catch (e) {
    if (e.message.includes('403') || e.message.includes('missing_scopes')) {
      console.warn(`\n  [WARN] Skipping site metadata (token missing sites:read scope)`);
      console.warn(`  → Add sites:read scope to your Webflow API token to fix this`);
    } else {
      throw e;
    }
  }

  // 2. Schemas + Items for each collection
  let errors = 0;
  for (const entry of collections) {
    console.log(`\n--- ${entry.canonicalName} ---`);

    const rawPath = join(RAW_DIR, entry.outputFile);
    if (skipExisting && existsSync(rawPath)) {
      console.log(`  [SKIP] ${entry.outputFile} already exists`);
      continue;
    }

    try {
      await extractSchema(token, entry);
      await extractItems(token, entry);
    } catch (err) {
      console.error(`  [ERROR] ${entry.canonicalName}: ${err.message}`);
      errors++;
    }
  }

  // 3. Summary
  console.log(`\n=== Done ===`);
  console.log(`Extracted: ${collections.length - errors}/${collections.length} collections`);
  if (errors > 0) {
    console.error(`Errors: ${errors}`);
    process.exit(1);
  }
}

main();
