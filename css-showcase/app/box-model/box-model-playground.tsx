"use client"

import { useState, useCallback } from "react"
import styles from "./page.module.css"

interface PlaygroundValues {
  contentWidth: number
  contentHeight: number
  padding: number
  borderWidth: number
  margin: number
  borderBox: boolean
}

export function BoxModelPlayground() {
  const [values, setValues] = useState<PlaygroundValues>({
    contentWidth: 200,
    contentHeight: 100,
    padding: 20,
    borderWidth: 5,
    margin: 20,
    borderBox: false,
  })

  const update = useCallback(
    (key: keyof PlaygroundValues, value: number | boolean) => {
      setValues((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const totalWidth = values.borderBox
    ? values.contentWidth
    : values.contentWidth + values.padding * 2 + values.borderWidth * 2

  const totalHeight = values.borderBox
    ? values.contentHeight
    : values.contentHeight + values.padding * 2 + values.borderWidth * 2

  const cssCode = `.box {
    width: ${values.contentWidth}px;
    height: ${values.contentHeight}px;
    padding: ${values.padding}px;
    border: ${values.borderWidth}px solid;
    margin: ${values.margin}px;
    box-sizing: ${values.borderBox ? "border-box" : "content-box"};
}`

  return (
    <div className={styles.playgroundContainer}>
      <div className={styles.controlsPanel}>
        <h3>Adjust Properties</h3>

        <div className={styles.controlGroup}>
          <label htmlFor="content-width">Content Width</label>
          <input
            type="range"
            id="content-width"
            min={100}
            max={400}
            value={values.contentWidth}
            onChange={(e) => update("contentWidth", Number(e.target.value))}
          />
          <span className={styles.valueDisplay}>{values.contentWidth}px</span>
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="content-height">Content Height</label>
          <input
            type="range"
            id="content-height"
            min={50}
            max={200}
            value={values.contentHeight}
            onChange={(e) => update("contentHeight", Number(e.target.value))}
          />
          <span className={styles.valueDisplay}>{values.contentHeight}px</span>
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="padding-value">Padding</label>
          <input
            type="range"
            id="padding-value"
            min={0}
            max={50}
            value={values.padding}
            onChange={(e) => update("padding", Number(e.target.value))}
          />
          <span className={styles.valueDisplay}>{values.padding}px</span>
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="border-width">Border Width</label>
          <input
            type="range"
            id="border-width"
            min={0}
            max={20}
            value={values.borderWidth}
            onChange={(e) => update("borderWidth", Number(e.target.value))}
          />
          <span className={styles.valueDisplay}>{values.borderWidth}px</span>
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="margin-value">Margin</label>
          <input
            type="range"
            id="margin-value"
            min={0}
            max={50}
            value={values.margin}
            onChange={(e) => update("margin", Number(e.target.value))}
          />
          <span className={styles.valueDisplay}>{values.margin}px</span>
        </div>

        <div className={styles.controlGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={values.borderBox}
              onChange={(e) => update("borderBox", e.target.checked)}
            />
            Use border-box
          </label>
        </div>
      </div>

      <div className={styles.playgroundDemo}>
        <div className={styles.playgroundWrapper}>
          <div
            className={styles.playgroundBox}
            style={{
              width: values.contentWidth,
              height: values.contentHeight,
              padding: values.padding,
              borderWidth: values.borderWidth,
              margin: values.margin,
              boxSizing: values.borderBox ? "border-box" : "content-box",
            }}
          >
            <span className={styles.labelTop}>
              Total: {totalWidth}px × {totalHeight}px
            </span>
            <div className={styles.boxContent}>Content Area</div>
          </div>
        </div>
        <div className={styles.playgroundCode}>
          <pre>
            <code>{cssCode}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
