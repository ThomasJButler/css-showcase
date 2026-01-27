#!/bin/bash
# ============================================
# Ralph Wiggum Full Loop Script
# Project: CSS Showcase
# ============================================
# Full cycle: PLAN → BUILD → TEST → REPEAT
#
# Usage:
#   ./loop-full.sh      # Run continuously
#   ./loop-full.sh 1    # Run 1 cycle
#   ./loop-full.sh 5    # Run 5 cycles
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
MAX_CYCLES=${1:-0}  # 0 = unlimited

CYCLE=0

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔄 Ralph Wiggum FULL Loop - CSS Showcase"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Branch: $CURRENT_BRANCH"
[ $MAX_CYCLES -gt 0 ] && echo "Cycles: $MAX_CYCLES" || echo "Cycles: unlimited"
echo ""
echo "Each cycle:"
echo "  1. 📋 PLAN  - Examine screenshots, update plan"
echo "  2. 🔨 BUILD - Implement one task"
echo "  3. 📸 TEST  - Capture new screenshots"
echo "  4. ⏳ WAIT  - 3 minutes for completion"
echo ""
echo "Safeguards:"
echo "  ✓ No main/master pushes"
echo "  ✓ No pull requests"
echo "  ✓ UK English commits"
echo "  ✓ No Co-Author tags"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verify prompt files exist
if [ ! -f "PROMPT_plan.md" ]; then
    echo "❌ Error: PROMPT_plan.md not found"
    exit 1
fi

if [ ! -f "PROMPT_build.md" ]; then
    echo "❌ Error: PROMPT_build.md not found"
    exit 1
fi

# Check localhost is running
echo "Checking localhost:8080..."
if ! curl -s -o /dev/null -w "%{http_code}" http://localhost:8080 | grep -q "200"; then
    echo "⚠️  WARNING: localhost:8080 not responding"
    echo "   Screenshots will fail without the dev server"
    echo ""
    echo "Start with: python -m http.server 8080"
    echo ""
    read -p "Continue anyway? [y/N] " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Confirm before starting
read -p "Start Ralph full loop? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
fi

echo ""
echo "🚀 Starting Ralph full loop... (Ctrl+C to stop)"
echo ""

while true; do
    if [ $MAX_CYCLES -gt 0 ] && [ $CYCLE -ge $MAX_CYCLES ]; then
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "✅ Completed $MAX_CYCLES cycles"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        break
    fi

    CYCLE=$((CYCLE + 1))
    echo ""
    echo "════════════════════════════════════════"
    echo "  CYCLE $CYCLE $([ $MAX_CYCLES -gt 0 ] && echo "/ $MAX_CYCLES")"
    echo "════════════════════════════════════════"

    # ----------------------------------------
    # PHASE 1: PLAN
    # ----------------------------------------
    echo ""
    echo "📋 PHASE 1: PLAN"
    echo "   Examining screenshots and updating plan..."
    echo "────────────────────────────────────────"

    cat PROMPT_plan.md | claude -p \
        --dangerously-skip-permissions \
        --output-format stream-json \
        --model opus \
        --verbose

    echo ""
    echo "   ✓ Plan phase complete"

    # ----------------------------------------
    # PHASE 2: BUILD
    # ----------------------------------------
    echo ""
    echo "🔨 PHASE 2: BUILD"
    echo "   Implementing next task..."
    echo "────────────────────────────────────────"

    cat PROMPT_build.md | claude -p \
        --dangerously-skip-permissions \
        --output-format stream-json \
        --model opus \
        --verbose

    echo ""
    echo "   ✓ Build phase complete"

    # ----------------------------------------
    # PUSH CHANGES (only if there are new commits)
    # ----------------------------------------
    echo ""

    # Check if there are unpushed commits
    UNPUSHED=$(git log origin/"$CURRENT_BRANCH".."$CURRENT_BRANCH" --oneline 2>/dev/null | wc -l | tr -d ' ')

    if [ "$UNPUSHED" -gt 0 ]; then
        echo "📤 Pushing $UNPUSHED commit(s) to $CURRENT_BRANCH..."
        git push origin "$CURRENT_BRANCH" 2>/dev/null || {
            echo "   Creating remote branch..."
            git push -u origin "$CURRENT_BRANCH"
        }
        echo "   ✓ Pushed"
    else
        echo "⚠️  No new commits to push (BUILD phase may have exited early)"
        echo "   Check if IMPLEMENTATION_PLAN.md is marked COMPLETE"
    fi

    # ----------------------------------------
    # PHASE 3: TEST (Screenshots)
    # ----------------------------------------
    echo ""
    echo "📸 PHASE 3: TEST"
    echo "   Capturing screenshots with visual-test.js..."
    echo "────────────────────────────────────────"

    node visual-test.js

    echo ""
    echo "   ✓ Screenshots captured"

    # ----------------------------------------
    # WAIT
    # ----------------------------------------
    echo ""
    echo "⏳ Waiting 3 minutes for screenshots to settle..."

    # Countdown display
    for i in $(seq 180 -10 10); do
        echo -ne "\r   ${i}s remaining...  "
        sleep 10
    done
    echo -ne "\r   Done!              \n"

    # ----------------------------------------
    # CYCLE COMPLETE
    # ----------------------------------------
    echo ""
    echo "────────────────────────────────────────"
    echo "✅ CYCLE $CYCLE COMPLETE"
    echo "────────────────────────────────────────"

done

echo ""
echo "Ralph full loop complete."
echo "Review commits: git log --oneline -20"
echo ""
echo "When ready to merge, do it MANUALLY:"
echo "  git checkout main"
echo "  git merge $CURRENT_BRANCH"
echo "  git push origin main"
echo ""
