"use client"

import { useState, useCallback } from "react"
import { CodeBlock } from "@/components/code-block"
import styles from "./page.module.css"

type GradientType = "linear" | "radial" | "conic"

interface GradientState {
  type: GradientType
  angle: number
  colour1: string
  colour2: string
  colour3: string
  stop1: number
  stop2: number
  stop3: number
  useThirdColour: boolean
}

const defaults: GradientState = {
  type: "linear",
  angle: 135,
  colour1: "#3b82f6",
  colour2: "#8b5cf6",
  colour3: "#ec4899",
  stop1: 0,
  stop2: 100,
  stop3: 100,
  useThirdColour: false,
}

function buildGradientCSS(s: GradientState): string {
  const stops = s.useThirdColour
    ? `${s.colour1} ${s.stop1}%, ${s.colour2} ${s.stop2}%, ${s.colour3} ${s.stop3}%`
    : `${s.colour1} ${s.stop1}%, ${s.colour2} ${s.stop2}%`

  switch (s.type) {
    case "linear":
      return `linear-gradient(${s.angle}deg, ${stops})`
    case "radial":
      return `radial-gradient(circle, ${stops})`
    case "conic":
      return `conic-gradient(from ${s.angle}deg, ${stops})`
  }
}

function buildCodeString(s: GradientState): string {
  const gradient = buildGradientCSS(s)
  return `.element {\n    background: ${gradient};\n}`
}

export function GradientBuilder() {
  const [state, setState] = useState<GradientState>(defaults)

  const update = useCallback(<K extends keyof GradientState>(key: K, value: GradientState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }))
  }, [])

  const reset = useCallback(() => setState(defaults), [])

  const gradient = buildGradientCSS(state)
  const code = buildCodeString(state)

  return (
    <div className={styles.builderContainer}>
      <div className={styles.builderControls}>
        <h3 className={styles.builderTitle}>Build Your Gradient</h3>

        {/* Gradient type */}
        <div className={styles.builderField}>
          <label className={styles.builderLabel}>Type</label>
          <div className={styles.builderSegmented}>
            {(["linear", "radial", "conic"] as GradientType[]).map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.builderSegBtn} ${state.type === t ? styles.builderSegBtnActive : ""}`}
                onClick={() => update("type", t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Angle (for linear / conic) */}
        {(state.type === "linear" || state.type === "conic") && (
          <div className={styles.builderField}>
            <div className={styles.builderFieldHeader}>
              <label className={styles.builderLabel}>
                {state.type === "linear" ? "Angle" : "Start Angle"}
              </label>
              <span className={styles.builderValue}>{state.angle}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              value={state.angle}
              onChange={(e) => update("angle", Number(e.target.value))}
              className={styles.builderSlider}
            />
          </div>
        )}

        {/* Colours */}
        <div className={styles.builderField}>
          <label className={styles.builderLabel}>Colours</label>
          <div className={styles.builderColourRow}>
            <div className={styles.builderColourPicker}>
              <input
                type="color"
                value={state.colour1}
                onChange={(e) => update("colour1", e.target.value)}
                className={styles.builderColourInput}
              />
              <span className={styles.builderColourHex}>{state.colour1}</span>
            </div>
            <div className={styles.builderColourPicker}>
              <input
                type="color"
                value={state.colour2}
                onChange={(e) => update("colour2", e.target.value)}
                className={styles.builderColourInput}
              />
              <span className={styles.builderColourHex}>{state.colour2}</span>
            </div>
            {state.useThirdColour && (
              <div className={styles.builderColourPicker}>
                <input
                  type="color"
                  value={state.colour3}
                  onChange={(e) => update("colour3", e.target.value)}
                  className={styles.builderColourInput}
                />
                <span className={styles.builderColourHex}>{state.colour3}</span>
              </div>
            )}
          </div>
          <button
            type="button"
            className={styles.builderAddColour}
            onClick={() => update("useThirdColour", !state.useThirdColour)}
          >
            {state.useThirdColour ? "− Remove third colour" : "+ Add third colour"}
          </button>
        </div>

        {/* Colour stops */}
        <div className={styles.builderField}>
          <div className={styles.builderFieldHeader}>
            <label className={styles.builderLabel}>Stop 1</label>
            <span className={styles.builderValue}>{state.stop1}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={state.stop1}
            onChange={(e) => update("stop1", Number(e.target.value))}
            className={styles.builderSlider}
          />
        </div>
        <div className={styles.builderField}>
          <div className={styles.builderFieldHeader}>
            <label className={styles.builderLabel}>Stop 2</label>
            <span className={styles.builderValue}>{state.stop2}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={state.stop2}
            onChange={(e) => update("stop2", Number(e.target.value))}
            className={styles.builderSlider}
          />
        </div>
        {state.useThirdColour && (
          <div className={styles.builderField}>
            <div className={styles.builderFieldHeader}>
              <label className={styles.builderLabel}>Stop 3</label>
              <span className={styles.builderValue}>{state.stop3}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={state.stop3}
              onChange={(e) => update("stop3", Number(e.target.value))}
              className={styles.builderSlider}
            />
          </div>
        )}

        <button
          type="button"
          onClick={reset}
          className={styles.builderReset}
        >
          Reset
        </button>
      </div>

      <div className={styles.builderPreview}>
        <div
          className={styles.builderSwatch}
          style={{ background: gradient }}
        />
        <CodeBlock code={code} language="css" />
      </div>
    </div>
  )
}
