"use client"

import { useState, useCallback } from "react"
import { CodeBlock } from "@/components/code-block"
import styles from "./page.module.css"

type PatternType = "stripes" | "dots" | "checkerboard" | "grid"

interface PatternState {
  type: PatternType
  colour1: string
  colour2: string
  size: number
  angle: number
}

const defaults: PatternState = {
  type: "stripes",
  colour1: "#3b82f6",
  colour2: "#60a5fa",
  size: 20,
  angle: 45,
}

function buildPattern(s: PatternState): string {
  switch (s.type) {
    case "stripes":
      return `repeating-linear-gradient(${s.angle}deg, ${s.colour1}, ${s.colour1} ${s.size / 2}px, ${s.colour2} ${s.size / 2}px, ${s.colour2} ${s.size}px)`
    case "dots":
      return `radial-gradient(circle, ${s.colour1} 25%, transparent 25%)`
    case "checkerboard":
      return `conic-gradient(${s.colour1} 0deg 90deg, ${s.colour2} 90deg 180deg, ${s.colour1} 180deg 270deg, ${s.colour2} 270deg)`
    case "grid":
      return `linear-gradient(${s.colour1}40 1px, transparent 1px), linear-gradient(90deg, ${s.colour1}40 1px, transparent 1px)`
  }
}

function buildBgSize(s: PatternState): string | undefined {
  switch (s.type) {
    case "dots":
      return `${s.size}px ${s.size}px`
    case "checkerboard":
      return `${s.size}px ${s.size}px`
    case "grid":
      return `${s.size}px ${s.size}px`
    default:
      return undefined
  }
}

function buildBgColour(s: PatternState): string | undefined {
  if (s.type === "dots") return s.colour2
  if (s.type === "grid") return s.colour2
  return undefined
}

function buildCode(s: PatternState): string {
  const bg = buildPattern(s)
  const size = buildBgSize(s)
  const bgc = buildBgColour(s)

  let code = `.element {\n    background: ${bg};`
  if (size) code += `\n    background-size: ${size};`
  if (bgc) code += `\n    background-color: ${bgc};`
  code += "\n}"
  return code
}

export function PatternCustomiser() {
  const [state, setState] = useState<PatternState>(defaults)

  const update = useCallback(<K extends keyof PatternState>(key: K, value: PatternState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }))
  }, [])

  const reset = useCallback(() => setState(defaults), [])

  const bgImage = buildPattern(state)
  const bgSize = buildBgSize(state)
  const bgColour = buildBgColour(state)
  const code = buildCode(state)

  return (
    <div className={styles.customiserContainer}>
      <div className={styles.customiserControls}>
        <h3 className={styles.customiserTitle}>Customise Pattern</h3>

        {/* Pattern type */}
        <div className={styles.customiserField}>
          <label className={styles.customiserLabel}>Pattern</label>
          <div className={styles.customiserSegmented}>
            {(["stripes", "dots", "checkerboard", "grid"] as PatternType[]).map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.customiserSegBtn} ${state.type === t ? styles.customiserSegBtnActive : ""}`}
                onClick={() => update("type", t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Colours */}
        <div className={styles.customiserField}>
          <label className={styles.customiserLabel}>Colours</label>
          <div className={styles.customiserColourRow}>
            <div className={styles.customiserColourPicker}>
              <input
                type="color"
                value={state.colour1}
                onChange={(e) => update("colour1", e.target.value)}
                className={styles.customiserColourInput}
              />
              <span className={styles.customiserColourHex}>{state.colour1}</span>
            </div>
            <div className={styles.customiserColourPicker}>
              <input
                type="color"
                value={state.colour2}
                onChange={(e) => update("colour2", e.target.value)}
                className={styles.customiserColourInput}
              />
              <span className={styles.customiserColourHex}>{state.colour2}</span>
            </div>
          </div>
        </div>

        {/* Size */}
        <div className={styles.customiserField}>
          <div className={styles.customiserFieldHeader}>
            <label className={styles.customiserLabel}>Size</label>
            <span className={styles.customiserValue}>{state.size}px</span>
          </div>
          <input
            type="range"
            min={5}
            max={60}
            value={state.size}
            onChange={(e) => update("size", Number(e.target.value))}
            className={styles.customiserSlider}
          />
        </div>

        {/* Angle (stripes only) */}
        {state.type === "stripes" && (
          <div className={styles.customiserField}>
            <div className={styles.customiserFieldHeader}>
              <label className={styles.customiserLabel}>Angle</label>
              <span className={styles.customiserValue}>{state.angle}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              value={state.angle}
              onChange={(e) => update("angle", Number(e.target.value))}
              className={styles.customiserSlider}
            />
          </div>
        )}

        <button
          type="button"
          onClick={reset}
          className={styles.customiserReset}
        >
          Reset
        </button>
      </div>

      <div className={styles.customiserPreview}>
        <div
          className={styles.customiserSwatch}
          style={{
            backgroundImage: bgImage,
            backgroundSize: bgSize,
            backgroundColor: bgColour,
          }}
        />
        <CodeBlock code={code} language="css" />
      </div>
    </div>
  )
}
