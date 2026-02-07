"use client"

import { useState } from "react"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export function ExpandingCardDemo() {
  const [expanded, setExpanded] = useState(false)

  return (
    <DemoCard
      title="Expanding Card"
      code={`/* Expanding card */
.card-expand {
    cursor: pointer;
}

.expand-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.card-expand.expanded .expand-content {
    max-height: 200px;
}

.expand-toggle {
    background: none;
    border: none;
    color: var(--colour-primary);
    cursor: pointer;
    font-weight: 600;
}`}
    >
      <div className={styles.cardExpand}>
        <h4>Click to Expand</h4>
        <p className={styles.expandPreview}>
          This card contains more information...
        </p>
        <div
          className={`${styles.expandContent} ${expanded ? styles.expandContentOpen : ""}`}
        >
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
            Here&apos;s the additional content that was hidden. You can include
            detailed information, images, or any other content that appears on
            interaction.
          </p>
        </div>
        <button
          className={styles.expandToggle}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less \u2191" : "Show More \u2193"}
        </button>
      </div>
    </DemoCard>
  )
}
