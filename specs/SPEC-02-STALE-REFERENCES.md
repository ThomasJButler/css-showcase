# SPEC-02: Stale Reference Cleanup

## Purpose

This specification identifies and defines cleanup for stale references to deleted pages (animations-advanced.html and tables-advanced.html) that remain in JavaScript files after the page merges were completed.

## Background

During the UX/Visual Improvement Phase, two pages were merged and deleted:
- `animations-advanced.html` merged into `animations.html` (content: 3D Card Flip demo)
- `tables-advanced.html` merged into `tables.html` (content: Sortable Table, Data Table with Filters, Fixed Header Table)

The HTML files and sidebar navigation were properly updated, but references remain in JavaScript files.

## Current State

### File: visual-test.js

**Line 26:**
```javascript
{ name: 'animations-advanced', path: '/animations-advanced.html' },
```

**Line 32:**
```javascript
{ name: 'tables-advanced', path: '/tables-advanced.html' },
```

**Impact:** Running `node visual-test.js` will attempt to capture screenshots of deleted pages, resulting in 404 errors and failed test runs.

### File: scripts/search.js

**Line 43:**
```javascript
{ title: 'Advanced Animations', url: 'animations-advanced.html', category: 'Visual Effects', tags: ['animation', 'keyframes', 'advanced', 'complex'] },
```

**Line 46:**
```javascript
{ title: 'Advanced Tables', url: 'tables-advanced.html', category: 'Components', tags: ['table', 'data', 'sorting', 'advanced'] },
```

**Impact:** Searching for "Advanced Animations" or "Advanced Tables" returns broken links that lead to 404 errors.

## Requirements

### 1. Update visual-test.js (CRITICAL)

**File:** `/Users/tombutler/Repos/css-showcase/visual-test.js`

**Action:** Remove entries for deleted pages from the pages array.

**Before (approximate lines 20-35):**
```javascript
const pages = [
  { name: 'index', path: '/index.html' },
  // ... other pages ...
  { name: 'animations-advanced', path: '/animations-advanced.html' },  // ← REMOVE
  // ... other pages ...
  { name: 'tables-advanced', path: '/tables-advanced.html' },         // ← REMOVE
  // ... other pages ...
];
```

**After:**
```javascript
const pages = [
  { name: 'index', path: '/index.html' },
  // ... other pages ...
  // animations-advanced.html merged into animations.html
  // ... other pages ...
  // tables-advanced.html merged into tables.html
  // ... other pages ...
];
```

**Verification:**
```bash
node visual-test.js
# Should complete without 404 errors for animations-advanced or tables-advanced
# Should capture exactly 31 pages (not 33)
```

---

### 2. Update scripts/search.js (CRITICAL)

**File:** `/Users/tombutler/Repos/css-showcase/scripts/search.js`

**Action:** Remove search entries for deleted pages from the searchData array.

**Before (approximate lines 40-50):**
```javascript
const searchData = [
  // ... other entries ...
  { title: 'Advanced Animations', url: 'animations-advanced.html', category: 'Visual Effects', tags: ['animation', 'keyframes', 'advanced', 'complex'] },  // ← REMOVE
  // ... other entries ...
  { title: 'Advanced Tables', url: 'tables-advanced.html', category: 'Components', tags: ['table', 'data', 'sorting', 'advanced'] },                      // ← REMOVE
  // ... other entries ...
];
```

**After:**
```javascript
const searchData = [
  // ... other entries ...
  // Advanced Animations content merged into animations.html
  // ... other entries ...
  // Advanced Tables content merged into tables.html
  // ... other entries ...
];
```

**Optional:** Consider updating the existing "Animations" and "Tables" entries to include tags from the deleted pages:

```javascript
// Example: Enhanced Animations entry
{
  title: 'Animations',
  url: 'animations.html',
  category: 'Visual Effects',
  tags: ['animation', 'keyframes', 'transition', 'transform', '3d', 'flip', 'advanced']  // ← Added '3d', 'flip', 'advanced'
},

// Example: Enhanced Tables entry
{
  title: 'Tables',
  url: 'tables.html',
  category: 'Components',
  tags: ['table', 'data', 'grid', 'sorting', 'filters', 'fixed-header', 'advanced']  // ← Added 'sorting', 'filters', 'fixed-header', 'advanced'
},
```

**Verification:**
1. Open the site in a browser
2. Open search functionality (Cmd/Ctrl+K)
3. Search for "Advanced Animations" → Should return 0 results OR redirect to animations.html
4. Search for "Advanced Tables" → Should return 0 results OR redirect to tables.html
5. Search for "3D Card Flip" → Should return animations.html
6. Search for "Sortable Table" → Should return tables.html

---

### 3. Page Count Verification (MEDIUM)

After cleanup, verify the page count is correct:

**Command:**
```bash
find /Users/tombutler/Repos/css-showcase -name "*.html" -maxdepth 1 -not -name "sidebar-snippet.html" | wc -l
```

**Expected:** 31 pages (not 33)

**Breakdown:**
- Total HTML files in root: 32 (including sidebar-snippet.html)
- Exclude sidebar-snippet.html: 31 content pages
- Previously: 33 (before animations-advanced.html and tables-advanced.html were deleted)

---

## Acceptance Criteria

This specification is complete when:

1. ✅ `visual-test.js` contains 31 page entries (not 33)
2. ✅ `visual-test.js` has no references to animations-advanced.html or tables-advanced.html
3. ✅ `scripts/search.js` has no entries for "Advanced Animations" or "Advanced Tables"
4. ✅ Running `node visual-test.js` completes without 404 errors
5. ✅ Searching for deleted page titles returns 0 results or redirects to merged pages
6. ✅ Searching for merged content (e.g., "3D Card Flip", "Sortable Table") returns the correct parent pages

---

## Priority

**CRITICAL** - This cleanup must be completed before:
- Running visual verification tests
- Deploying the site (broken search results create poor UX)
- Any QA testing or user acceptance testing

---

## Estimated Effort

- **visual-test.js cleanup:** 5 minutes
- **search.js cleanup:** 10 minutes (if enhancing parent page tags)
- **Verification testing:** 5 minutes
- **Total:** ~20 minutes

---

## Related Specifications

- SPEC-01-UX-VERIFICATION.md (requires this cleanup before execution)
- IMPLEMENTATION_PLAN.md lines 146-190 (page merge documentation)
