"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/code-block"
import styles from "./page.module.css"

type Scenario = "cards" | "dashboard" | "centering"

const scenarios: { key: Scenario; label: string; description: string }[] = [
  {
    key: "cards",
    label: "Card Layout",
    description: "Equal-height cards that wrap across rows",
  },
  {
    key: "dashboard",
    label: "Dashboard",
    description: "Complex layout with spanning elements",
  },
  {
    key: "centering",
    label: "Centering",
    description: "Centering content vertically and horizontally",
  },
]

const codeSnippets: Record<Scenario, { flex: string; grid: string }> = {
  cards: {
    flex: `.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 200px;
    /* Items grow/shrink from 200px basis */
    /* Cannot control exact column count */
}`,
    grid: `.cards {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    /* Exact control: always fills the row */
    /* Consistent column widths */
}`,
  },
  dashboard: {
    flex: `.dashboard {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

/* Spanning requires width hacks */
.wide { flex: 1 1 100%; }
.half { flex: 1 1 calc(50% - 0.5rem); }
/* Alignment across rows is fragile */`,
    grid: `.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

/* Native spanning — clean and precise */
.wide { grid-column: span 4; }
.half { grid-column: span 2; }
.tall { grid-row: span 2; }`,
  },
  centering: {
    flex: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
}

/* Works perfectly for single items.
   Flexbox centering is the classic approach */`,
    grid: `.container {
    display: grid;
    place-items: center;
    min-height: 200px;
}

/* Even simpler with place-items shorthand.
   Both Flexbox and Grid excel here */`,
  },
}

export function FlexVsGrid() {
  const [scenario, setScenario] = useState<Scenario>("cards")

  return (
    <div className="space-y-6">
      {/* Scenario selector */}
      <div className={styles.scenarioTabs}>
        {scenarios.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setScenario(s.key)}
            className={`${styles.scenarioTab} ${scenario === s.key ? styles.scenarioTabActive : ""}`}
            aria-pressed={scenario === s.key}
          >
            <span className={styles.scenarioTabLabel}>{s.label}</span>
            <span className={styles.scenarioTabDesc}>{s.description}</span>
          </button>
        ))}
      </div>

      {/* Side-by-side comparison */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Flexbox side */}
        <div className={styles.comparisonPanel}>
          <div className={styles.comparisonHeader}>
            <span className={styles.comparisonBadge}>Flexbox</span>
            <span className={styles.comparisonSubtext}>One-dimensional</span>
          </div>
          <div className={styles.comparisonDemo}>
            {scenario === "cards" && <FlexCards />}
            {scenario === "dashboard" && <FlexDashboard />}
            {scenario === "centering" && <FlexCentering />}
          </div>
          <CodeBlock
            code={codeSnippets[scenario].flex}
            language="css"
            title="Flexbox"
          />
        </div>

        {/* Grid side */}
        <div className={styles.comparisonPanel}>
          <div className={styles.comparisonHeader}>
            <span className={`${styles.comparisonBadge} ${styles.comparisonBadgeGrid}`}>
              Grid
            </span>
            <span className={styles.comparisonSubtext}>Two-dimensional</span>
          </div>
          <div className={styles.comparisonDemo}>
            {scenario === "cards" && <GridCards />}
            {scenario === "dashboard" && <GridDashboard />}
            {scenario === "centering" && <GridCentering />}
          </div>
          <CodeBlock
            code={codeSnippets[scenario].grid}
            language="css"
            title="Grid"
          />
        </div>
      </div>

      {/* Verdict */}
      <div className={styles.verdictBox}>
        {scenario === "cards" && (
          <p>
            <strong>Verdict:</strong> Both work, but Grid&apos;s{" "}
            <code>auto-fit</code> + <code>minmax()</code> gives consistent
            column widths. Flexbox items may grow unevenly on the last row.
          </p>
        )}
        {scenario === "dashboard" && (
          <p>
            <strong>Verdict:</strong> Grid wins clearly. Native{" "}
            <code>grid-column: span</code> and <code>grid-row: span</code>{" "}
            create complex layouts that Flexbox can only approximate with width hacks.
          </p>
        )}
        {scenario === "centering" && (
          <p>
            <strong>Verdict:</strong> Both excel at centering.{" "}
            <code>place-items: center</code> is the shortest syntax, but{" "}
            <code>justify-content</code> + <code>align-items</code> is equally
            effective. Use whichever you&apos;re already using.
          </p>
        )}
      </div>
    </div>
  )
}

/* ── Scenario demo components ── */

function FlexCards() {
  return (
    <div className={styles.flexCardsDemo}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className={styles.compCard}>
          {n}
        </div>
      ))}
    </div>
  )
}

function GridCards() {
  return (
    <div className={styles.gridCardsDemo}>
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className={styles.compCard}>
          {n}
        </div>
      ))}
    </div>
  )
}

function FlexDashboard() {
  return (
    <div className={styles.flexDashDemo}>
      <div className={`${styles.compCard} ${styles.flexDashWide}`}>Wide</div>
      <div className={`${styles.compCard} ${styles.flexDashHalf}`}>Half</div>
      <div className={`${styles.compCard} ${styles.flexDashHalf}`}>Half</div>
      <div className={styles.compCard}>1/4</div>
      <div className={styles.compCard}>1/4</div>
      <div className={styles.compCard}>1/4</div>
      <div className={styles.compCard}>1/4</div>
    </div>
  )
}

function GridDashboard() {
  return (
    <div className={styles.gridDashDemo}>
      <div className={`${styles.compCard} ${styles.gridDashWide}`}>Wide</div>
      <div className={`${styles.compCard} ${styles.gridDashHalf}`}>Half</div>
      <div className={`${styles.compCard} ${styles.gridDashHalf}`}>Half</div>
      <div className={styles.compCard}>1/4</div>
      <div className={styles.compCard}>1/4</div>
      <div className={styles.compCard}>1/4</div>
      <div className={styles.compCard}>1/4</div>
    </div>
  )
}

function FlexCentering() {
  return (
    <div className={styles.flexCenterDemo}>
      <div className={styles.compCard}>Centred</div>
    </div>
  )
}

function GridCentering() {
  return (
    <div className={styles.gridCenterDemo}>
      <div className={styles.compCard}>Centred</div>
    </div>
  )
}
