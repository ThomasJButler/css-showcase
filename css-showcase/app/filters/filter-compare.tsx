"use client"

import { useState, useRef, useCallback } from "react"
import styles from "./page.module.css"

type FilterPreset = {
  label: string
  filter: string
  description: string
  code: string
}

const presets: FilterPreset[] = [
  {
    label: "Vintage",
    filter: "contrast(1.2) brightness(1.1) sepia(0.3) saturate(1.4)",
    description: "Warm, nostalgic look with boosted contrast and subtle sepia",
    code: `filter:\n    contrast(1.2)\n    brightness(1.1)\n    sepia(0.3)\n    saturate(1.4);`,
  },
  {
    label: "Noir",
    filter: "grayscale(1) contrast(1.4) brightness(0.9)",
    description: "Classic black-and-white with punchy contrast",
    code: `filter:\n    grayscale(1)\n    contrast(1.4)\n    brightness(0.9);`,
  },
  {
    label: "Dream",
    filter: "blur(1px) brightness(1.15) saturate(1.3)",
    description: "Soft, dreamy glow with boosted saturation",
    code: `filter:\n    blur(1px)\n    brightness(1.15)\n    saturate(1.3);`,
  },
  {
    label: "Cyberpunk",
    filter: "hue-rotate(180deg) saturate(1.8) contrast(1.3)",
    description: "Intense colour inversion with oversaturated neon tones",
    code: `filter:\n    hue-rotate(180deg)\n    saturate(1.8)\n    contrast(1.3);`,
  },
  {
    label: "Faded",
    filter: "brightness(1.1) contrast(0.85) saturate(0.6)",
    description: "Washed-out, low-contrast aesthetic",
    code: `filter:\n    brightness(1.1)\n    contrast(0.85)\n    saturate(0.6);`,
  },
]

export function FilterCompare() {
  const [presetIdx, setPresetIdx] = useState(0)
  const [sliderPct, setSliderPct] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const preset = presets[presetIdx]

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setSliderPct(pct)
  }, [])

  const handleMouseDown = useCallback(() => {
    draggingRef.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    draggingRef.current = false
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (draggingRef.current) updateSlider(e.clientX)
    },
    [updateSlider]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateSlider(e.touches[0].clientX)
    },
    [updateSlider]
  )

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      updateSlider(e.clientX)
    },
    [updateSlider]
  )

  return (
    <div className={styles.filterCompareContainer}>
      {/* Preset tabs */}
      <div className={styles.filterCompareTabs}>
        {presets.map((p, i) => (
          <button
            key={p.label}
            type="button"
            className={`${styles.filterCompareTab} ${i === presetIdx ? styles.filterCompareTabActive : ""}`}
            onClick={() => {
              setPresetIdx(i)
              setSliderPct(50)
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p className={styles.filterCompareDescription}>{preset.description}</p>

      {/* Comparison slider */}
      <div
        ref={containerRef}
        className={styles.filterCompareSlider}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
        role="slider"
        aria-label="Filter comparison slider"
        aria-valuenow={Math.round(sliderPct)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        {/* "After" (filtered) — full background */}
        <div
          className={styles.filterCompareLayer}
          style={{ filter: preset.filter }}
        />

        {/* "Before" (original) — clipped to left of slider */}
        <div
          className={styles.filterCompareLayer}
          style={{ clipPath: `inset(0 ${100 - sliderPct}% 0 0)` }}
        />

        {/* Slider line */}
        <div
          className={styles.filterCompareHandle}
          style={{ left: `${sliderPct}%` }}
        >
          <div className={styles.filterCompareHandleGrip}>
            <span>⟨</span>
            <span>⟩</span>
          </div>
        </div>

        {/* Labels */}
        <span className={styles.filterCompareLabelLeft}>Original</span>
        <span className={styles.filterCompareLabelRight}>Filtered</span>
      </div>

      {/* Code output */}
      <pre className={styles.filterCompareCode}>
        <code>{`.element {\n    ${preset.code}\n}`}</code>
      </pre>
    </div>
  )
}
