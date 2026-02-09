"use client"

import { useState, useCallback } from "react"
import styles from "./page.module.css"

const timings = [
  { name: "linear", label: "linear" },
  { name: "ease", label: "ease" },
  { name: "ease-in", label: "ease-in" },
  { name: "ease-out", label: "ease-out" },
  { name: "ease-in-out", label: "ease-in-out" },
] as const

export function TimingDemo() {
  const [running, setRunning] = useState(false)

  const runDemo = useCallback(() => {
    if (running) return
    setRunning(true)
    setTimeout(() => setRunning(false), 2500)
  }, [running])

  return (
    <div className={styles.timingDemo}>
      <div className={styles.timingComparison}>
        {timings.map((t) => (
          <div
            key={t.name}
            className={styles.timingBox}
            data-timing={t.name}
          >
            <span className={styles.timingLabel}>{t.label}</span>
            <div
              className={`${styles.timingRunner} ${running ? styles.timingRunnerActive : ""}`}
              style={{ transitionTimingFunction: t.name }}
            />
          </div>
        ))}
      </div>
      <button
        className={styles.runButton}
        onClick={runDemo}
        disabled={running}
      >
        {running ? "Running…" : "Run Demo"}
      </button>
    </div>
  )
}
