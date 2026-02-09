"use client"

import { useState, useCallback } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import styles from "./page.module.css"

interface PlaygroundValues {
  contentWidth: number
  contentHeight: number
  padding: number
  borderWidth: number
  margin: number
  borderBox: boolean
}

const sliderConfig = [
  { key: "contentWidth" as const, label: "Content Width", min: 100, max: 400, unit: "px" },
  { key: "contentHeight" as const, label: "Content Height", min: 50, max: 200, unit: "px" },
  { key: "padding" as const, label: "Padding", min: 0, max: 50, unit: "px" },
  { key: "borderWidth" as const, label: "Border Width", min: 0, max: 20, unit: "px" },
  { key: "margin" as const, label: "Margin", min: 0, max: 50, unit: "px" },
]

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

        {sliderConfig.map(({ key, label, min, max, unit }) => (
          <div className={styles.controlGroup} key={key}>
            <div className={styles.sliderHeader}>
              <Label htmlFor={key}>{label}</Label>
              <span className={styles.valueDisplay}>
                {values[key]}{unit}
              </span>
            </div>
            <Slider
              id={key}
              min={min}
              max={max}
              step={1}
              value={[values[key]]}
              onValueChange={([v]) => update(key, v)}
            />
          </div>
        ))}

        <div className={styles.controlGroup}>
          <label className={styles.switchLabel}>
            <Switch
              checked={values.borderBox}
              onCheckedChange={(checked) => update("borderBox", checked)}
            />
            <span>Use border-box</span>
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
