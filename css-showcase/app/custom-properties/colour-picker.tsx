"use client"

import { useState, useCallback, useRef } from "react"
import styles from "./page.module.css"

interface ColourState {
  hue: number
  saturation: number
  lightness: number
}

const defaults: ColourState = {
  hue: 220,
  saturation: 70,
  lightness: 55,
}

const controls: {
  key: keyof ColourState
  label: string
  min: number
  max: number
  unit: string
}[] = [
  { key: "hue", label: "Hue", min: 0, max: 360, unit: "°" },
  { key: "saturation", label: "Saturation", min: 0, max: 100, unit: "%" },
  { key: "lightness", label: "Lightness", min: 0, max: 100, unit: "%" },
]

export function ColourPicker() {
  const [state, setState] = useState<ColourState>(defaults)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleChange = useCallback(
    (key: keyof ColourState, value: number) => {
      setState((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const hslValue = `hsl(${state.hue}, ${state.saturation}%, ${state.lightness}%)`

  return (
    <div className={styles.colourPickerDemo}>
      <div
        ref={previewRef}
        className={styles.colourPreview}
        style={{
          background: hslValue,
        }}
      >
        <p>Dynamic Colour</p>
      </div>
      <div className={styles.colourControls}>
        {controls.map(({ key, label, min, max, unit }) => (
          <div key={key} className={styles.colourControlGroup}>
            <div className={styles.colourControlHeader}>
              <label
                htmlFor={`colour-${key}`}
                className={styles.colourControlLabel}
              >
                {label}
              </label>
              <span className={styles.colourControlValue}>
                {state[key]}
                {unit}
              </span>
            </div>
            <input
              type="range"
              id={`colour-${key}`}
              min={min}
              max={max}
              value={state[key]}
              onChange={(e) => handleChange(key, parseInt(e.target.value))}
              className={styles.colourSlider}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
