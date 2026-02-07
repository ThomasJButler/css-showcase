#!/bin/bash
# ============================================
# Ralph Wiggum Loop Script
# Project: CSS Showcase
# ============================================
# SAFEGUARDS:
# - NEVER runs on main/master
# - NEVER creates pull requests
# - UK English commits only
# - No Co-Author tags
# ============================================

set -euo pipefail

# ============================================
# STRICT SAFETY CHECKS
# ============================================
CURRENT_BRANCH=$(git branch --show-current)

# BLOCK: main/master branches
if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "master" ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🛑 BLOCKED: Cannot run on $CURRENT_BRANCH!"
    echo ""
    echo "Create a work branch first:"
    echo "  git checkout -b ralph/ui-improvements"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi

# BLOCK: gh-pages branch (deployment)
if [ "$CURRENT_BRANCH" = "gh-pages" ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🛑 BLOCKED: Cannot run on gh-pages!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi

# Verify branch starts with ralph/
if [[ ! "$CURRENT_BRANCH" =~ ^ralph/ ]]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "⚠️  WARNING: Branch doesn't start with 'ralph/'"
    echo "   Current branch: $CURRENT_BRANCH"
    echo ""
    echo "Recommended: git checkout -b ralph/ui-improvements"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    read -p "Continue anyway? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# ============================================
# Parse arguments
# ============================================
if [ "${1:-}" = "plan" ]; then
    MODE="plan"
    PROMPT_FILE="PROMPT_plan.md"
    MAX_ITERATIONS=${2:-0}
elif [[ "${1:-}" =~ ^[0-9]+$ ]]; then
    MODE="build"
    PROMPT_FILE="PROMPT_build.md"
    MAX_ITERATIONS=$1
else
    MODE="build"
    PROMPT_FILE="PROMPT_build.md"
    MAX_ITERATIONS=${1:-0}
fi

ITERATION=0

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔄 Ralph Wiggum Loop - CSS Showcase"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Mode:   $MODE"
echo "Prompt: $PROMPT_FILE"
echo "Branch: $CURRENT_BRANCH"
[ $MAX_ITERATIONS -gt 0 ] && echo "Max:    $MAX_ITERATIONS iterations"
echo ""
echo "Safeguards:"
echo "  ✓ No main/master pushes"
echo "  ✓ No pull requests"
echo "  ✓ UK English commits"
echo "  ✓ No Co-Author tags"
echo "  ✓ Uses /frontend-design skill for implementation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verify prompt file exists
if [ ! -f "$PROMPT_FILE" ]; then
    echo "❌ Error: $PROMPT_FILE not found"
    exit 1
fi

# Confirm before starting
read -p "Start Ralph loop? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
fi

echo ""
echo "🚀 Starting Ralph loop... (Ctrl+C to stop)"
echo ""

while true; do
    if [ $MAX_ITERATIONS -gt 0 ] && [ $ITERATION -ge $MAX_ITERATIONS ]; then
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "✅ Completed $MAX_ITERATIONS iterations"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        break
    fi

    ITERATION=$((ITERATION + 1))
    echo ""
    echo "════════════════════════════════════════"
    echo "  ITERATION $ITERATION $([ $MAX_ITERATIONS -gt 0 ] && echo "/ $MAX_ITERATIONS")"
    echo "════════════════════════════════════════"
    echo ""

    # Run Claude in headless mode
    cat "$PROMPT_FILE" | claude -p \
        --dangerously-skip-permissions \
        --output-format stream-json \
        --model opus \
        --verbose

    # Push to CURRENT branch only (never main)
    echo ""
    echo "📤 Pushing to $CURRENT_BRANCH..."
    git push origin "$CURRENT_BRANCH" 2>/dev/null || {
        echo "Creating remote branch..."
        git push -u origin "$CURRENT_BRANCH"
    }

done

echo ""
echo "Ralph loop complete."
echo "Review commits: git log --oneline -20"
echo ""
echo "When ready to merge, do it MANUALLY:"
echo "  git checkout main"
echo "  git merge $CURRENT_BRANCH"
echo "  git push origin main"
