# SPEC-01: UX/Visual Improvement Verification Protocol

## Purpose

This specification defines the verification protocol for confirming that UX/visual improvements meet their stated targets.

## Background

The UX/Visual Improvement Phase (January 2025-2026) implemented 10 items aimed at reducing page heights and improving user experience. While all implementation work was completed, the verification protocol was never executed.

## Requirements

### 1. Stale Reference Cleanup (CRITICAL)

Before any verification can occur, stale references to deleted pages must be removed:

#### 1.1 Update visual-test.js
**File:** `/Users/tombutler/Repos/css-showcase/visual-test.js`

**Remove references to deleted pages:**
- Line 26: Remove `{ name: 'animations-advanced', path: '/animations-advanced.html' }`
- Line 32: Remove `{ name: 'tables-advanced', path: '/tables-advanced.html' }`

**Verification:** Running `node visual-test.js` should not attempt to capture screenshots of deleted pages.

#### 1.2 Update search.js
**File:** `/Users/tombutler/Repos/css-showcase/scripts/search.js`

**Remove search entries for deleted pages:**
- Line 43: Remove `{ title: 'Advanced Animations', url: 'animations-advanced.html', category: 'Visual Effects', tags: ['animation', 'keyframes', 'advanced', 'complex'] }`
- Line 46: Remove `{ title: 'Advanced Tables', url: 'tables-advanced.html', category: 'Components', tags: ['table', 'data', 'sorting', 'advanced'] }`

**Verification:** Searching for "Advanced Animations" or "Advanced Tables" should not return results.

---

### 2. Visual Test Re-execution (HIGH)

After stale references are cleaned up, execute the verification protocol:

#### 2.1 Capture New Screenshots
**Command:** `node visual-test.js`

**Expected Output:**
- New screenshots in `docs/visual-testing/screenshots/desktop/`
- New screenshots in `docs/visual-testing/screenshots/mobile/`
- New screenshots in `docs/visual-testing/screenshots/dark-mode/`
- All screenshots should have current timestamps (after improvements were implemented)

#### 2.2 Measure Page Heights

Use the new screenshots to measure:

| Page | Viewport | Target | Previous | Current | Status |
|------|----------|--------|----------|---------|--------|
| grid.html | Desktop | < 6,000px | 15,706px | TBD | ⏳ |
| index.html | Mobile | < 4,000px | 13,434px | TBD | ⏳ |

**Measurement Method:**
1. Open screenshot in image viewer
2. Check image height in pixels
3. Compare against target
4. Mark ✅ if target met, ❌ if not met

---

### 3. Verification Checklist Completion (HIGH)

Complete the checklist at IMPLEMENTATION_PLAN.md lines 404-415:

```markdown
After all changes:
- [ ] Run `node visual-test.js` to capture new screenshots
- [ ] Compare before/after page heights
- [ ] Verify grid.html <6,000px desktop
- [ ] Verify index.html <4,000px mobile
- [ ] All navigation links work (no 404 errors)
- [ ] Dark mode styling intact
- [ ] Mobile layouts responsive
- [ ] All interactive demos functional
- [ ] Page count = 31 (down from 33)
- [ ] No content overlap or layout breaking
- [ ] Hover states still work
```

**Each item must be explicitly checked or marked incomplete with explanation.**

---

### 4. Documentation Updates (MEDIUM)

#### 4.1 Update Target Metrics Table
**File:** `IMPLEMENTATION_PLAN.md` lines 379-386

Replace "Not started" with actual measured values:

```markdown
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Total pages | 31 | 31 | ✓ Complete |
| grid.html height | [MEASURED]px | <6,000px | ✓/❌ |
| index.html mobile height | [MEASURED]px | <4,000px | ✓/❌ |
| Pages >6,000px | [COUNT] | 0 | ✓/❌ |
| Empty sections | 0 | 0 | ✓ Complete |
| Global spacing | 50-60% | 50-60% | ✓ Complete |
```

#### 4.2 Update Visual Testing Documentation
**File:** `docs/visual-testing/summary.md`

Add "After Implementation" section with:
- New measurements
- Comparison to targets
- Status of each improvement item
- List of any remaining issues

---

### 5. Acceptance Criteria

The UX/Visual Improvement Phase can only be marked "Fully Complete" when:

1. ✅ All 10 implementation items completed (CURRENT STATUS: Complete)
2. ⏳ Stale references removed from visual-test.js and search.js (CURRENT STATUS: Incomplete)
3. ⏳ New screenshots captured after improvements (CURRENT STATUS: Not performed)
4. ⏳ Page height targets verified by measurement (CURRENT STATUS: Not measured)
5. ⏳ Verification checklist 100% complete (CURRENT STATUS: 0% complete)
6. ⏳ Documentation updated with actual results (CURRENT STATUS: Contains pre-improvement data)

**Current Phase Status:** Implementation Complete (10/10), Verification Incomplete (0/6)

---

### 6. Automated Verification (OPTIONAL)

Consider adding automated verification to visual-test.js:

```javascript
// Example: Measure screenshot heights
const sharp = require('sharp');

async function verifyPageHeights() {
  const targets = {
    'grid.png': 6000,
    'index-mobile.png': 4000
  };

  for (const [file, maxHeight] of Object.entries(targets)) {
    const metadata = await sharp(`screenshots/desktop/${file}`).metadata();
    const status = metadata.height <= maxHeight ? '✅' : '❌';
    console.log(`${file}: ${metadata.height}px ${status} (target: <${maxHeight}px)`);
  }
}
```

---

## Timeline

- **Implementation Phase:** Completed January 25, 2026
- **Verification Phase:** Not started (as of January 25, 2026)
- **Target Completion:** Before project deployment

## References

- Original visual testing: `docs/visual-testing/summary.md`
- Implementation plan: `IMPLEMENTATION_PLAN.md` lines 7-467
- Verification checklist: `IMPLEMENTATION_PLAN.md` lines 404-415
