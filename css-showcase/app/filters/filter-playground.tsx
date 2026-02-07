"use client"

import { useState, useCallback } from "react"
import { CodeBlock } from "@/components/code-block"
import styles from "./page.module.css"

interface FilterState {
  blur: number
  brightness: number
  contrast: number
  grayscale: number
  hueRotate: number
  saturate: number
  sepia: number
}

const defaults: FilterState = {
  blur: 0,
  brightness: 100,
  contrast: 100,
  grayscale: 0,
  hueRotate: 0,
  saturate: 100,
  sepia: 0,
}

const controls: {
  key: keyof FilterState
  label: string
  min: number
  max: number
  step: number
  unit: string
}[] = [
  { key: "blur", label: "Blur", min: 0, max: 20, step: 0.5, unit: "px" },
  { key: "brightness", label: "Brightness", min: 0, max: 200, step: 1, unit: "%" },
  { key: "contrast", label: "Contrast", min: 0, max: 200, step: 1, unit: "%" },
  { key: "grayscale", label: "Grayscale", min: 0, max: 100, step: 1, unit: "%" },
  { key: "hueRotate", label: "Hue Rotate", min: 0, max: 360, step: 1, unit: "deg" },
  { key: "saturate", label: "Saturate", min: 0, max: 200, step: 1, unit: "%" },
  { key: "sepia", label: "Sepia", min: 0, max: 100, step: 1, unit: "%" },
]

function buildFilterString(state: FilterState): string {
  const parts: string[] = []
  if (state.blur !== 0) parts.push(`blur(${state.blur}px)`)
  if (state.brightness !== 100) parts.push(`brightness(${state.brightness}%)`)
  if (state.contrast !== 100) parts.push(`contrast(${state.contrast}%)`)
  if (state.grayscale !== 0) parts.push(`grayscale(${state.grayscale}%)`)
  if (state.hueRotate !== 0) parts.push(`hue-rotate(${state.hueRotate}deg)`)
  if (state.saturate !== 100) parts.push(`saturate(${state.saturate}%)`)
  if (state.sepia !== 0) parts.push(`sepia(${state.sepia}%)`)
  return parts.length > 0 ? parts.join("\n        ") : "none"
}

function buildCSSCode(filterStr: string): string {
  if (filterStr === "none") {
    return `.element {\n    filter: none;\n}`
  }
  const parts = filterStr.split("\n        ")
  if (parts.length === 1) {
    return `.element {\n    filter: ${parts[0]};\n}`
  }
  return `.element {\n    filter:\n        ${parts.join("\n        ")};\n}`
}

export function FilterPlayground() {
  const [state, setState] = useState<FilterState>(defaults)

  const handleChange = useCallback((key: keyof FilterState, value: number) => {
    setState((prev) => ({ ...prev, [key]: value }))
  }, [])

  const handleReset = useCallback(() => {
    setState(defaults)
  }, [])

  const filterStr = buildFilterString(state)
  const cssFilter = filterStr === "none" ? "none" : filterStr.replace(/\n\s+/g, " ")
  const cssCode = buildCSSCode(filterStr)

  const isDefault =
    state.blur === 0 &&
    state.brightness === 100 &&
    state.contrast === 100 &&
    state.grayscale === 0 &&
    state.hueRotate === 0 &&
    state.saturate === 100 &&
    state.sepia === 0

  return (
    <div className={styles.playgroundContainer}>
      <div className={styles.controlsPanel}>
        <h3 className={styles.controlsTitle}>Adjust Filters</h3>

        {controls.map(({ key, label, min, max, step, unit }) => (
          <div key={key} className={styles.controlGroup}>
            <div className={styles.controlHeader}>
              <label htmlFor={`filter-${key}`} className={styles.controlLabel}>
                {label}
              </label>
              <span className={styles.valueDisplay}>
                {state[key]}
                {unit}
              </span>
            </div>
            <input
              type="range"
              id={`filter-${key}`}
              min={min}
              max={max}
              step={step}
              value={state[key]}
              onChange={(e) => handleChange(key, parseFloat(e.target.value))}
              className={styles.rangeSlider}
            />
          </div>
        ))}

        <button
          onClick={handleReset}
          className={styles.resetButton}
          disabled={isDefault}
        >
          Reset All
        </button>
      </div>

      <div className={styles.playgroundPreview}>
        <div
          className={styles.playgroundImage}
          style={{ filter: cssFilter }}
        />
        <CodeBlock code={cssCode} language="css" />
      </div>
    </div>
  )
}
