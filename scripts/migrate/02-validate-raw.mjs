#!/usr/bin/env node

/**
 * 02-validate-raw.mjs — Validate extracted Webflow data + audit HTML
 *
 * Reads data/raw/*.json + 00-manifest.json, validates counts, required fields,
 * relations, slugs, images, and audits RichText HTML content.
 *
 * Exit code 1 if any ERROR found.
 *
 * Usage:
 *   node scripts/migrate/02-validate-raw.mjs
 *   node scripts/migrate/02-validate-raw.mjs --check-images
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'data');
const RAW_DIR = join(DATA_DIR, 'raw');
const SCHEMAS_DIR = join(RAW_DIR, 'schemas');
const REPORTS_DIR = join(DATA_DIR, 'reports');

const checkImages = process.argv.includes('--check-images');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf-8'));
}

function writeJson(filePath, data) {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

const errors = [];
const warnings = [];

function error(collection, msg) {
  errors.push({ collection, msg });
  console.error(`  [ERROR] ${msg}`);
}

function warn(collection, msg) {
  warnings.push({ collection, msg });
  console.warn(`  [WARN]  ${msg}`);
}

function ok(msg) {
  console.log(`  [OK]    ${msg}`);
}

// ---------------------------------------------------------------------------
// Load all raw data
// ---------------------------------------------------------------------------

function loadAllRaw(manifest) {
  const rawData = {};
  for (const entry of manifest) {
    const rawPath = join(RAW_DIR, entry.outputFile);
    if (!existsSync(rawPath)) {
      error(entry.canonicalName, `Missing raw file: ${entry.outputFile}`);
      continue;
    }
    rawData[entry.canonicalName] = loadJson(rawPath);
  }
  return rawData;
}

function loadAllSchemas(manifest) {
  const schemas = {};
  for (const entry of manifest) {
    const schemaPath = join(SCHEMAS_DIR, `${entry.canonicalName}.json`);
    if (existsSync(schemaPath)) {
      schemas[entry.canonicalName] = loadJson(schemaPath);
    }
  }
  return schemas;
}

// ---------------------------------------------------------------------------
// Build ID index per collection (for relation checks)
// ---------------------------------------------------------------------------

function buildIdIndex(rawData) {
  const index = {};
  for (const [name, data] of Object.entries(rawData)) {
    index[name] = new Set(data.items.map(i => i.id));
  }
  return index;
}

// ---------------------------------------------------------------------------
// Validation: Counts
// ---------------------------------------------------------------------------

function validateCounts(manifest, rawData) {
  console.log('\n=== Count validation ===');
  for (const entry of manifest) {
    const data = rawData[entry.canonicalName];
    if (!data) continue;
    if (data.itemCount === entry.expectedCount) {
      ok(`${entry.canonicalName}: ${data.itemCount} items`);
    } else {
      error(entry.canonicalName,
        `Count mismatch: got ${data.itemCount}, expected ${entry.expectedCount}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Validation: Required fields
// ---------------------------------------------------------------------------

function validateRequiredFields(manifest, rawData) {
  console.log('\n=== Required fields ===');
  for (const entry of manifest) {
    const data = rawData[entry.canonicalName];
    if (!data) continue;
    let missing = 0;
    for (const item of data.items) {
      const fd = item.fieldData || {};
      for (const field of entry.requiredFields) {
        const val = fd[field];
        if (val === undefined || val === null || val === '') {
          error(entry.canonicalName,
            `Item "${fd.name || item.id}" (slug: ${fd.slug || '?'}) missing required field: ${field}`);
          missing++;
        }
      }
    }
    if (missing === 0) {
      ok(`${entry.canonicalName}: all required fields present`);
    }
  }
}

// ---------------------------------------------------------------------------
// Validation: Slug uniqueness
// ---------------------------------------------------------------------------

function validateSlugs(manifest, rawData) {
  console.log('\n=== Slug uniqueness ===');
  for (const entry of manifest) {
    const data = rawData[entry.canonicalName];
    if (!data) continue;
    const slugs = new Map();
    let dupes = 0;
    for (const item of data.items) {
      const slug = item.fieldData?.slug;
      if (!slug) continue;
      if (slugs.has(slug)) {
        error(entry.canonicalName,
          `Duplicate slug: "${slug}" (items: ${slugs.get(slug)}, ${item.id})`);
        dupes++;
      } else {
        slugs.set(slug, item.id);
      }
    }
    if (dupes === 0) {
      ok(`${entry.canonicalName}: all slugs unique (${slugs.size})`);
    }
  }
}

// ---------------------------------------------------------------------------
// Validation: Relations
// ---------------------------------------------------------------------------

function validateRelations(manifest, rawData, schemas, idIndex) {
  console.log('\n=== Relations ===');

  // Build a map of collection ID → canonical name
  const collectionIdToName = {};
  for (const entry of manifest) {
    collectionIdToName[entry.webflowCollectionId] = entry.canonicalName;
  }

  for (const entry of manifest) {
    const data = rawData[entry.canonicalName];
    const schema = schemas[entry.canonicalName]?.schema;
    if (!data || !schema) continue;

    // Find reference fields in schema
    const refFields = (schema.fields || []).filter(f =>
      f.type === 'ItemRef' || f.type === 'ItemRefSet' ||
      f.type === 'Reference' || f.type === 'MultiReference'
    );

    if (refFields.length === 0) {
      ok(`${entry.canonicalName}: no relations`);
      continue;
    }

    let orphans = 0;
    for (const field of refFields) {
      const targetCollectionId = field.validations?.collectionId;
      const targetName = targetCollectionId ? collectionIdToName[targetCollectionId] : null;
      const targetIds = targetName ? idIndex[targetName] : null;

      for (const item of data.items) {
        const val = item.fieldData?.[field.slug];
        if (!val) continue;

        const refs = Array.isArray(val) ? val : [val];
        for (const refId of refs) {
          if (typeof refId !== 'string') continue;
          if (targetIds && !targetIds.has(refId)) {
            warn(entry.canonicalName,
              `Orphan ref in "${item.fieldData?.name}" field ${field.slug}: ${refId} not found in ${targetName || 'unknown'}`);
            orphans++;
          }
        }
      }
    }

    if (orphans === 0) {
      ok(`${entry.canonicalName}: all relations valid (${refFields.length} ref fields)`);
    } else {
      warn(entry.canonicalName, `${orphans} orphan reference(s) found`);
    }
  }
}

// ---------------------------------------------------------------------------
// Images inventory
// ---------------------------------------------------------------------------

function inventoryImages(manifest, rawData, schemas) {
  console.log('\n=== Image inventory ===');
  const inventory = [];

  for (const entry of manifest) {
    const data = rawData[entry.canonicalName];
    const schema = schemas[entry.canonicalName]?.schema;
    if (!data || !schema) continue;

    const imageFields = (schema.fields || []).filter(f =>
      f.type === 'ImageRef' || f.type === 'Image' ||
      f.type === 'MultiImage' || f.type === 'MultiImageRef'
    );

    for (const item of data.items) {
      for (const field of imageFields) {
        const val = item.fieldData?.[field.slug];
        if (!val) continue;

        const images = Array.isArray(val) ? val : [val];
        for (const img of images) {
          const url = typeof img === 'string' ? img : img?.url;
          if (url) {
            inventory.push({
              collection: entry.canonicalName,
              itemSlug: item.fieldData?.slug,
              itemName: item.fieldData?.name,
              field: field.slug,
              url,
              alt: img?.alt || null,
            });
          }
        }
      }
    }
  }

  writeJson(join(REPORTS_DIR, 'image-inventory.json'), {
    generatedAt: new Date().toISOString(),
    totalImages: inventory.length,
    images: inventory,
  });

  ok(`${inventory.length} images inventoried → reports/image-inventory.json`);
  return inventory;
}

// ---------------------------------------------------------------------------
// HTML audit
// ---------------------------------------------------------------------------

function auditHtml(manifest, rawData, schemas) {
  console.log('\n=== HTML audit ===');
  const audit = [];

  for (const entry of manifest) {
    const data = rawData[entry.canonicalName];
    const schema = schemas[entry.canonicalName]?.schema;
    if (!data || !schema) continue;

    const richTextFields = (schema.fields || []).filter(f =>
      f.type === 'RichText'
    );

    if (richTextFields.length === 0) continue;

    for (const item of data.items) {
      for (const field of richTextFields) {
        const html = item.fieldData?.[field.slug];
        if (!html || typeof html !== 'string') continue;

        const inlineImages = (html.match(/<img[^>]*>/gi) || []).length;
        const iframes = (html.match(/<iframe[^>]*>/gi) || []).length;
        const scripts = (html.match(/<script[^>]*>/gi) || []).length;
        const embeds = (html.match(/<embed[^>]*>/gi) || []).length + (html.match(/<object[^>]*>/gi) || []).length;
        const internalLinks = (html.match(/href=["'][^"']*airsaas\.io[^"']*/gi) || []).length +
          (html.match(/href=["']\/[^"']*/gi) || []).length;
        const cdnAssets = (html.match(/uploads-ssl\.webflow\.com/gi) || []).length;

        audit.push({
          collection: entry.canonicalName,
          itemSlug: item.fieldData?.slug,
          itemName: item.fieldData?.name,
          field: field.slug,
          htmlLength: html.length,
          inlineImages,
          iframes,
          scripts,
          embeds,
          internalLinks,
          cdnAssets,
        });
      }
    }
  }

  // Summary
  const totalRichText = audit.length;
  const withInlineImages = audit.filter(a => a.inlineImages > 0).length;
  const withIframes = audit.filter(a => a.iframes > 0).length;
  const withScripts = audit.filter(a => a.scripts > 0).length;
  const withEmbeds = audit.filter(a => a.embeds > 0).length;
  const withInternalLinks = audit.filter(a => a.internalLinks > 0).length;
  const withCdnAssets = audit.filter(a => a.cdnAssets > 0).length;

  writeJson(join(REPORTS_DIR, 'html-audit.json'), {
    generatedAt: new Date().toISOString(),
    summary: {
      totalRichTextFields: totalRichText,
      withInlineImages,
      withIframes,
      withScripts,
      withEmbeds,
      withInternalLinks,
      withCdnAssets,
    },
    entries: audit,
  });

  ok(`${totalRichText} RichText fields audited → reports/html-audit.json`);
  if (withInlineImages > 0) warn('html-audit', `${withInlineImages} fields with inline <img>`);
  if (withIframes > 0) warn('html-audit', `${withIframes} fields with <iframe>`);
  if (withScripts > 0) warn('html-audit', `${withScripts} fields with <script>`);
  if (withInternalLinks > 0) warn('html-audit', `${withInternalLinks} fields with internal links`);
  if (withCdnAssets > 0) warn('html-audit', `${withCdnAssets} fields with Webflow CDN assets`);

  return audit;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const manifest = loadJson(join(__dirname, '00-manifest.json'));

  console.log('=== Webflow Raw Data Validation ===');
  console.log(`Collections: ${manifest.length}`);

  const rawData = loadAllRaw(manifest);
  const schemas = loadAllSchemas(manifest);
  const idIndex = buildIdIndex(rawData);

  validateCounts(manifest, rawData);
  validateRequiredFields(manifest, rawData);
  validateSlugs(manifest, rawData);
  validateRelations(manifest, rawData, schemas, idIndex);
  inventoryImages(manifest, rawData, schemas);
  auditHtml(manifest, rawData, schemas);

  // Write report
  writeJson(join(REPORTS_DIR, 'validation-report.json'), {
    generatedAt: new Date().toISOString(),
    errors: errors.length,
    warnings: warnings.length,
    errorDetails: errors,
    warningDetails: warnings,
  });

  // Summary
  console.log('\n=== Summary ===');
  console.log(`Errors:   ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);
  console.log(`Report:   data/reports/validation-report.json`);

  if (errors.length > 0) {
    console.error('\nValidation FAILED');
    process.exit(1);
  } else {
    console.log('\nValidation PASSED ✓');
  }
}

main();
