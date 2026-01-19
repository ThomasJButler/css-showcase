# Critical: Fix GitHub Repository Link

## Priority: CRITICAL

## Overview

The "View on GitHub" link in the About section points to the wrong URL.

## Current State

- Link points to: `https://github.com/ThomasJButler` (user profile)
- Should point to: `https://github.com/ThomasJButler/css-showcase` (repository)

## Fix Required

Update the href attribute to the correct repository URL.

## Location

The link is likely in:
- `about.html` - in the About section
- Possibly also in `index.html` or footer

## Acceptance Criteria

- [ ] All "View on GitHub" links point to `https://github.com/ThomasJButler/css-showcase`
- [ ] Link opens in new tab (`target="_blank"`)
- [ ] Link has appropriate `rel="noopener noreferrer"` for security
- [ ] Verify no other GitHub links are broken
