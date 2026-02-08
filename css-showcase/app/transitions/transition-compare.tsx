"use client"

import { useState } from "react"
import styles from "./page.module.css"

type Scenario = {
  label: string
  description: string
  property: string
  before: Record<string, string>
  after: Record<string, string>
  code: string
}

const scenarios: Scenario[] = [
  {
    label: "Transform",
    description: "GPU-accelerated transform with scale, rotation, and translation",
    property: "transform",
    before: {
      width: "120px",
      height: "120px",
      borderRadius: "1rem",
      background: "linear-gradient(135deg, var(--primary), var(--secondary))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "700",
      fontSize: "0.875rem",
      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
    after: {
      width: "120px",
      height: "120px",
      borderRadius: "1rem",
      background: "linear-gradient(135deg, var(--primary), var(--secondary))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "700",
      fontSize: "0.875rem",
      transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      transform: "scale(1.15) rotate(5deg) translateY(-8px)",
    },
    code: `.element {\n    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.element:hover {\n    transform: scale(1.15) rotate(5deg) translateY(-8px);\n}`,
  },
  {
    label: "Box Shadow",
    description: "Smooth shadow elevation for card lift effects",
    property: "box-shadow",
    before: {
      width: "180px",
      padding: "1.5rem",
      borderRadius: "1rem",
      background: "var(--card)",
      border: "1px solid var(--border)",
      textAlign: "center" as string,
      transition: "box-shadow 0.4s ease, transform 0.4s ease",
      boxShadow: "0 2px 8px oklch(0 0 0 / 0.06)",
    },
    after: {
      width: "180px",
      padding: "1.5rem",
      borderRadius: "1rem",
      background: "var(--card)",
      border: "1px solid var(--border)",
      textAlign: "center" as string,
      transition: "box-shadow 0.4s ease, transform 0.4s ease",
      boxShadow: "0 20px 40px oklch(0 0 0 / 0.15), 0 8px 16px oklch(0 0 0 / 0.08)",
      transform: "translateY(-4px)",
    },
    code: `.card {\n    box-shadow: 0 2px 8px oklch(0 0 0 / 0.06);\n    transition: box-shadow 0.4s ease, transform 0.4s ease;\n}\n.card:hover {\n    box-shadow: 0 20px 40px oklch(0 0 0 / 0.15),\n               0 8px 16px oklch(0 0 0 / 0.08);\n    transform: translateY(-4px);\n}`,
  },
  {
    label: "Background",
    description: "Colour and gradient transitions for interactive feedback",
    property: "background",
    before: {
      width: "160px",
      padding: "1rem 1.5rem",
      borderRadius: "0.75rem",
      background: "var(--primary)",
      color: "white",
      fontWeight: "600",
      fontSize: "0.9375rem",
      textAlign: "center" as string,
      transition: "background 0.5s ease, border-radius 0.5s ease",
      border: "none",
    },
    after: {
      width: "160px",
      padding: "1rem 1.5rem",
      borderRadius: "2rem",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      fontWeight: "600",
      fontSize: "0.9375rem",
      textAlign: "center" as string,
      transition: "background 0.5s ease, border-radius 0.5s ease",
      border: "none",
    },
    code: `.button {\n    background: var(--primary);\n    border-radius: 0.75rem;\n    transition: background 0.5s ease, border-radius 0.5s ease;\n}\n.button:hover {\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    border-radius: 2rem;\n}`,
  },
  {
    label: "Opacity + Filter",
    description: "Fade and blur for focus/reveal interactions",
    property: "opacity + filter",
    before: {
      width: "140px",
      height: "140px",
      borderRadius: "1rem",
      background: "linear-gradient(135deg, #f59e0b, #ef4444)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "700",
      fontSize: "2rem",
      transition: "opacity 0.4s ease, filter 0.4s ease",
      opacity: "0.4",
      filter: "blur(4px) grayscale(1)",
    },
    after: {
      width: "140px",
      height: "140px",
      borderRadius: "1rem",
      background: "linear-gradient(135deg, #f59e0b, #ef4444)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "700",
      fontSize: "2rem",
      transition: "opacity 0.4s ease, filter 0.4s ease",
      opacity: "1",
      filter: "blur(0px) grayscale(0)",
    },
    code: `.image {\n    opacity: 0.4;\n    filter: blur(4px) grayscale(1);\n    transition: opacity 0.4s ease, filter 0.4s ease;\n}\n.image:hover {\n    opacity: 1;\n    filter: blur(0) grayscale(0);\n}`,
  },
]

const labels: Record<string, string> = {
  Transform: "Box",
  "Box Shadow": "Card",
  Background: "Button",
  "Opacity + Filter": "★",
}

export function TransitionCompare() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isAfter, setIsAfter] = useState(false)
  const scenario = scenarios[activeIdx]

  return (
    <div className={styles.compareContainer}>
      {/* Scenario tabs */}
      <div className={styles.compareTabs}>
        {scenarios.map((s, i) => (
          <button
            key={s.label}
            type="button"
            className={`${styles.compareTab} ${i === activeIdx ? styles.compareTabActive : ""}`}
            onClick={() => {
              setActiveIdx(i)
              setIsAfter(false)
            }}
            aria-pressed={i === activeIdx}
          >
            {s.label}
          </button>
        ))}
      </div>

      <p className={styles.compareDescription}>{scenario.description}</p>

      {/* Before / After toggle */}
      <div className={styles.compareToggleRow}>
        <button
          type="button"
          className={`${styles.compareStateBtn} ${!isAfter ? styles.compareStateBtnActive : ""}`}
          onClick={() => setIsAfter(false)}
        >
          Before
        </button>
        <button
          type="button"
          className={`${styles.compareStateBtn} ${isAfter ? styles.compareStateBtnActive : ""}`}
          onClick={() => setIsAfter(true)}
        >
          After
        </button>
      </div>

      {/* Preview area */}
      <div className={styles.comparePreview}>
        <div
          style={isAfter ? scenario.after : scenario.before}
        >
          {labels[scenario.label] ?? "Demo"}
        </div>
      </div>

      {/* Code display */}
      <pre className={styles.compareCode}>
        <code>{scenario.code}</code>
      </pre>
    </div>
  )
}
