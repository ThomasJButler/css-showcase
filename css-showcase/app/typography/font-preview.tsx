"use client"

import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import styles from "./page.module.css"

const fontOptions = [
  {
    value: "system-sans",
    label: "System Sans-Serif",
    stack: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  {
    value: "system-serif",
    label: "System Serif",
    stack: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
  {
    value: "system-mono",
    label: "System Monospace",
    stack: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
  },
  {
    value: "nunito-sans",
    label: "Nunito Sans",
    stack: 'var(--font-sans)',
  },
  {
    value: "nunito",
    label: "Nunito",
    stack: 'var(--font-display)',
  },
  {
    value: "jetbrains-mono",
    label: "JetBrains Mono",
    stack: 'var(--font-jetbrains-mono), ui-monospace, monospace',
  },
]

const previewText = "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!"

export function FontPreview() {
  const [selectedFont, setSelectedFont] = useState("system-sans")
  const [fontSize, setFontSize] = useState(18)
  const [fontWeight, setFontWeight] = useState(400)

  const currentFont = fontOptions.find((f) => f.value === selectedFont)

  return (
    <div className={styles.fontPreviewContainer}>
      <div className={styles.fontPreviewControls}>
        <div className={styles.fontPreviewControl}>
          <Label htmlFor="font-select">Font Family</Label>
          <Select value={selectedFont} onValueChange={setSelectedFont}>
            <SelectTrigger id="font-select" className={styles.fontSelect}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map((font) => (
                <SelectItem key={font.value} value={font.value}>
                  {font.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className={styles.fontPreviewControl}>
          <div className={styles.sliderHeader}>
            <Label htmlFor="font-size">Font Size</Label>
            <span className={styles.fontPreviewValue}>{fontSize}px</span>
          </div>
          <Slider
            id="font-size"
            min={12}
            max={48}
            step={1}
            value={[fontSize]}
            onValueChange={([v]) => setFontSize(v)}
          />
        </div>

        <div className={styles.fontPreviewControl}>
          <div className={styles.sliderHeader}>
            <Label htmlFor="font-weight">Font Weight</Label>
            <span className={styles.fontPreviewValue}>{fontWeight}</span>
          </div>
          <Slider
            id="font-weight"
            min={100}
            max={900}
            step={100}
            value={[fontWeight]}
            onValueChange={([v]) => setFontWeight(v)}
          />
        </div>
      </div>

      <div className={styles.fontPreviewOutput}>
        <div className={styles.fontPreviewMeta}>
          <span className={styles.fontPreviewLabel}>{currentFont?.label}</span>
          <span className={styles.fontPreviewDetail}>
            {fontSize}px / {fontWeight}
          </span>
        </div>
        <p
          className={styles.fontPreviewText}
          style={{
            fontFamily: currentFont?.stack,
            fontSize: `${fontSize}px`,
            fontWeight,
          }}
        >
          {previewText}
        </p>
        <div className={styles.fontPreviewAlphabet}>
          <p
            style={{
              fontFamily: currentFont?.stack,
              fontWeight,
            }}
          >
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
          <p
            style={{
              fontFamily: currentFont?.stack,
              fontWeight,
            }}
          >
            abcdefghijklmnopqrstuvwxyz
          </p>
          <p
            style={{
              fontFamily: currentFont?.stack,
              fontWeight,
            }}
          >
            0123456789 !@#$%&amp;*()
          </p>
        </div>
      </div>

      <div className={styles.fontPreviewCode}>
        <pre>
          <code>{`font-family: ${currentFont?.stack.replace(/var\(--font-[^)]+\)/g, (m) => {
            const name = m.match(/--font-(.+)\)/)?.[1]
            if (name === "sans") return '"Nunito Sans", sans-serif'
            if (name === "display") return '"Nunito", sans-serif'
            if (name === "jetbrains-mono") return '"JetBrains Mono", monospace'
            return m
          })};\nfont-size: ${fontSize}px;\nfont-weight: ${fontWeight};`}</code>
        </pre>
      </div>
    </div>
  )
}
