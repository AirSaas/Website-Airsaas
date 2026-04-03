#!/usr/bin/env node

/**
 * 03-normalize.mjs — Transform raw Webflow data → stable import format
 *
 * Reads data/raw/*.json and produces data/normalized/*.json with:
 * - Clean field names (Webflow quirks removed)
 * - Bucketed structure: fields, relations, images, richText, meta, options
 * - Webflow IDs preserved for future Strapi import mapping
 *
 * Usage:
 *   node scripts/migrate/03-normalize.mjs
 *   node scripts/migrate/03-normalize.mjs --only author,article
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAW_DIR = join(__dirname, 'data', 'raw');
const NORMALIZED_DIR = join(__dirname, 'data', 'normalized');

// ---------------------------------------------------------------------------
// Field mapping per collection
//
// Each collection maps Webflow field slugs → normalized buckets.
// Buckets: fields, relations, images, richText, meta, options, links
// ---------------------------------------------------------------------------

const FIELD_MAPS = {
  author: {
    fields: {
      'job-title': 'jobTitle',
      'short-description': 'shortDescription',
      'featured': 'featured',
    },
    images: {
      'portrait-photo': 'portraitPhoto',
      'background-image': 'backgroundImage',
    },
    links: {
      'google-link': 'googleLink',
      'facebook-link': 'facebookLink',
      'twitter-link': 'twitterLink',
    },
  },

  speaker: {
    fields: {
      'job-title': 'jobTitle',
      'email': 'email',
      'phone-number': 'phoneNumber',
      'pro': 'pro',
    },
    images: {
      'profile-picture': 'profilePicture',
    },
    richText: {
      'bio': 'bio',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
    options: {
      'category': 'category',
    },
    links: {
      'linkedin-link': 'linkedinLink',
      'facebook-link': 'facebookLink',
    },
  },

  'integration-category': {
    fields: {
      'description': 'description',
      'color': 'color',
    },
    images: {
      'icon': 'icon',
    },
  },

  'testimonial-quote': {
    fields: {
      'poste-du-temoignant': 'jobTitle',
      'temoignage': 'testimonial',
      'date-temoignage': 'date',
      'odre-d-apparition': 'displayOrder',
    },
    images: {
      'photo-du-temoignant': 'photo',
    },
    options: {
      'type': 'type',
      'place-2': 'place2',
      'place-3': 'place3',
    },
    links: {
      'lien-vers-le-temoignage': 'testimonialLink',
    },
  },

  'newsletter-cio': {
    fields: {
      'post-summary': 'postSummary',
      'featured': 'featured',
      'date': 'date',
      'color': 'color',
    },
    images: {
      'main-image': 'mainImage',
    },
    richText: {
      'post-body': 'postBody',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
    options: {
      'language': 'language',
    },
  },

  'product-update': {
    fields: {
      'feature': 'feature',
      'date': 'date',
    },
    images: {
      'main-image': 'mainImage',
    },
    richText: {
      'body': 'body',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
  },

  'legal-page': {
    richText: {
      'content': 'content',
    },
  },

  quote: {
    fields: {
      'quote': 'quoteText',
      'featured': 'featured',
    },
    relations: {
      'speaker': { key: 'speaker', type: 'single' },
      'customer': { key: 'customers', type: 'multi' },
    },
  },

  article: {
    fields: {
      'date': 'date',
      'slug-dossier-multilingue': 'multilingualSlug',
      'video': 'video',
      'color': 'color',
      'featured': 'featured',
    },
    relations: {
      'autor': { key: 'author', type: 'single' },
      'speaker-2': { key: 'speakers', type: 'multi' },
      'quotes': { key: 'quotes', type: 'multi' },
    },
    images: {
      'main-image': 'mainImage',
      'thumbnail-image-2': 'thumbnail',
    },
    richText: {
      'post-body': 'postBody',
      'pour-aller-plus-loin': 'furtherReading',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
    options: {
      'top': 'top',
      'last': 'last',
      'language': 'language',
    },
  },

  'podcast-episode': {
    fields: {
      'date': 'date',
      'video-link-podcast': 'videoLink',
      'featured': 'featured',
      'color': 'color',
      'episode': 'episodeNumber',
    },
    relations: {
      'speaker-3': { key: 'primarySpeaker', type: 'single' },
      'speaker2-2': { key: 'secondarySpeaker', type: 'single' },
      'podcasts-category': { key: 'categories', type: 'multi' },
      'quotes': { key: 'quotes', type: 'multi' },
    },
    images: {
      'meta-image': 'metaImage',
    },
    richText: {
      'post-body': 'postBody',
      'post-body2': 'postBody2',
      'transcription': 'transcription',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
    options: {
      'lenguaje': 'language',
      'pro': 'pro',
      'alliacy-saisons': 'alliacySeason',
      'infortive-saison': 'infortiveSeason',
      'valiantys-saison': 'valiantysSeason',
    },
    links: {
      'apple': 'appleLink',
      'spotify': 'spotifyLink',
      'deezer': 'deezerLink',
    },
  },

  'customer-story': {
    fields: {
      'date': 'date',
      'company': 'company',
      'video': 'video',
      'color': 'color',
      'featured': 'featured',
      'number-of-employees': 'numberOfEmployees',
      'airsaas-users': 'airsaasUsers',
      'sector': 'sector',
      'favorite-feature': 'favoriteFeature',
    },
    relations: {
      'author-2': { key: 'author', type: 'single' },
      'collaborating-speaker': { key: 'speakers', type: 'multi' },
      'testimonial': { key: 'testimonials', type: 'multi' },
    },
    images: {
      'logo': 'logo',
      'photo': 'photo',
      'meta-image': 'metaImage',
    },
    richText: {
      'post-body': 'postBody',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
  },

  integration: {
    fields: {
      'description': 'description',
      'coming-soon': 'comingSoon',
      'alert': 'alert',
      'construction-notification': 'constructionNotification',
      'date': 'date',
    },
    relations: {
      'category': { key: 'categories', type: 'multi' },
    },
    images: {
      'logo': 'logo',
      'picture': 'picture',
    },
    richText: {
      'description': 'description',
    },
    meta: {
      'meta-title': 'metaTitle',
      'meta-description': 'metaDescription',
    },
    links: {
      'link': 'externalLink',
    },
  },
};

// ---------------------------------------------------------------------------
// Normalize an image value from Webflow
// ---------------------------------------------------------------------------

function normalizeImage(val) {
  if (!val) return null;
  if (typeof val === 'string') return { url: val, alt: null };
  return { url: val.url, alt: val.alt || null, fileId: val.fileId || null };
}

// ---------------------------------------------------------------------------
// Normalize one item
// ---------------------------------------------------------------------------

function normalizeItem(item, mapping) {
  const fd = item.fieldData || {};
  const result = {
    webflowId: item.id,
    cmsLocaleId: item.cmsLocaleId || null,
    slug: fd.slug,
    name: fd.name,
    createdOn: item.createdOn,
    lastPublished: item.lastPublished,
    fields: {},
    relations: {},
    images: {},
    richText: {},
    meta: {},
    options: {},
    links: {},
  };

  // Fields
  if (mapping.fields) {
    for (const [src, dest] of Object.entries(mapping.fields)) {
      if (fd[src] !== undefined) result.fields[dest] = fd[src];
    }
  }

  // Relations
  if (mapping.relations) {
    for (const [src, config] of Object.entries(mapping.relations)) {
      const val = fd[src];
      if (!val) continue;
      if (config.type === 'single') {
        result.relations[config.key] = val;
      } else {
        result.relations[config.key] = Array.isArray(val) ? val : [val];
      }
    }
  }

  // Images
  if (mapping.images) {
    for (const [src, dest] of Object.entries(mapping.images)) {
      const img = normalizeImage(fd[src]);
      if (img) result.images[dest] = img;
    }
  }

  // RichText
  if (mapping.richText) {
    for (const [src, dest] of Object.entries(mapping.richText)) {
      if (fd[src]) result.richText[dest] = fd[src];
    }
  }

  // Meta
  if (mapping.meta) {
    for (const [src, dest] of Object.entries(mapping.meta)) {
      if (fd[src]) result.meta[dest] = fd[src];
    }
  }

  // Options
  if (mapping.options) {
    for (const [src, dest] of Object.entries(mapping.options)) {
      if (fd[src] !== undefined) result.options[dest] = fd[src];
    }
  }

  // Links
  if (mapping.links) {
    for (const [src, dest] of Object.entries(mapping.links)) {
      if (fd[src]) result.links[dest] = fd[src];
    }
  }

  // Remove empty buckets
  for (const key of ['fields', 'relations', 'images', 'richText', 'meta', 'options', 'links']) {
    if (Object.keys(result[key]).length === 0) delete result[key];
  }

  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const manifest = JSON.parse(readFileSync(join(__dirname, '00-manifest.json'), 'utf-8'));
  const args = process.argv.slice(2);
  const onlyIdx = args.indexOf('--only');
  const only = onlyIdx !== -1 && args[onlyIdx + 1]
    ? args[onlyIdx + 1].split(',').map(s => s.trim())
    : null;

  const collections = only
    ? manifest.filter(e => only.includes(e.canonicalName))
    : manifest;

  mkdirSync(NORMALIZED_DIR, { recursive: true });

  console.log('=== Normalization ===');
  console.log(`Collections: ${collections.length}`);

  for (const entry of collections) {
    const mapping = FIELD_MAPS[entry.canonicalName];
    if (!mapping) {
      console.error(`  [ERROR] No field mapping for ${entry.canonicalName}`);
      continue;
    }

    const rawPath = join(RAW_DIR, entry.outputFile);
    const raw = JSON.parse(readFileSync(rawPath, 'utf-8'));

    const normalizedItems = raw.items.map(item => normalizeItem(item, mapping));

    const output = {
      canonicalName: entry.canonicalName,
      normalizedAt: new Date().toISOString(),
      sourceFile: entry.outputFile,
      itemCount: normalizedItems.length,
      items: normalizedItems,
    };

    const outPath = join(NORMALIZED_DIR, entry.outputFile);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');

    console.log(`  ✓ ${entry.canonicalName}: ${normalizedItems.length} items normalized`);
  }

  console.log('\nDone.');
}

main();
