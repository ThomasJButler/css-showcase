"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import styles from "./page.module.css"

type AnimationPreset = {
  label: string
  keyframes: string
  duration: number
  timingFunction: string
  iterationCount: string
  description: string
}

const presets: AnimationPreset[] = [
  {
    label: "Bounce",
    keyframes: "bounce",
    duration: 1,
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    description: "Classic bounce using translateY at 0%, 50%, and 100%",
  },
  {
    label: "Spin",
    keyframes: "spin",
    duration: 2,
    timingFunction: "linear",
    iterationCount: "infinite",
    description: "Full 360° rotation from 0deg to 360deg",
  },
  {
    label: "Pulse",
    keyframes: "pulse",
    duration: 2,
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    description: "Scale oscillation between 1× and 1.2× with opacity change",
  },
  {
    label: "Morph",
    keyframes: "morph",
    duration: 4,
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    description: "Border-radius and rotation morph through 4 keyframe stops",
  },
  {
    label: "Slide",
    keyframes: "slideRotate",
    duration: 3,
    timingFunction: "ease-in-out",
    iterationCount: "infinite",
    description: "Combined translateX and rotate for organic slide motion",
  },
]

export function AnimationTimeline() {
  const [presetIdx, setPresetIdx] = useState(0)
  const [duration, setDuration] = useState(presets[0].duration)
  const [timingFn, setTimingFn] = useState(presets[0].timingFunction)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)

  const preset = presets[presetIdx]
  const animName = preset.keyframes

  // Track progress bar animation
  useEffect(() => {
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }

    startRef.current = performance.now() - progress * duration * 1000

    const tick = (now: number) => {
      const elapsed = now - startRef.current
      const totalMs = duration * 1000
      const pct = (elapsed % totalMs) / totalMs
      setProgress(pct)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [paused, duration, presetIdx]) // eslint-disable-line react-hooks/exhaustive-deps

  const selectPreset = useCallback((idx: number) => {
    setPresetIdx(idx)
    setDuration(presets[idx].duration)
    setTimingFn(presets[idx].timingFunction)
    setPaused(false)
    setProgress(0)
    startRef.current = performance.now()
  }, [])

  return (
    <div className={styles.timelineContainer}>
      {/* Preset selector */}
      <div className={styles.timelinePresets}>
        {presets.map((p, i) => (
          <button
            key={p.label}
            type="button"
            className={`${styles.timelinePresetBtn} ${i === presetIdx ? styles.timelinePresetBtnActive : ""}`}
            onClick={() => selectPreset(i)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p className={styles.timelineDescription}>{preset.description}</p>

      {/* Animation preview */}
      <div className={styles.timelinePreview}>
        <div
          className={styles.timelineElement}
          style={{
            animation: `${animName} ${duration}s ${timingFn} ${preset.iterationCount}`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>

      {/* Progress bar */}
      <div className={styles.timelineBar}>
        <div
          className={styles.timelineProgress}
          style={{ width: `${progress * 100}%` }}
        />
        <div className={styles.timelineKeyframeDots}>
          <span className={styles.timelineKeyframeDot} style={{ left: "0%" }} title="0%" />
          <span className={styles.timelineKeyframeDot} style={{ left: "25%" }} title="25%" />
          <span className={styles.timelineKeyframeDot} style={{ left: "50%" }} title="50%" />
          <span className={styles.timelineKeyframeDot} style={{ left: "75%" }} title="75%" />
          <span className={styles.timelineKeyframeDot} style={{ left: "100%" }} title="100%" />
        </div>
      </div>

      {/* Controls */}
      <div className={styles.timelineControls}>
        <button
          type="button"
          className={styles.timelinePlayBtn}
          onClick={() => {
            if (paused) {
              startRef.current = performance.now() - progress * duration * 1000
            }
            setPaused(!paused)
          }}
        >
          {paused ? "▶ Play" : "❚❚ Pause"}
        </button>

        <div className={styles.timelineControlGroup}>
          <label className={styles.timelineControlLabel}>Duration</label>
          <input
            type="range"
            min={0.2}
            max={6}
            step={0.1}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className={styles.timelineSlider}
          />
          <span className={styles.timelineControlValue}>{duration.toFixed(1)}s</span>
        </div>

        <div className={styles.timelineControlGroup}>
          <label className={styles.timelineControlLabel}>Easing</label>
          <select
            value={timingFn}
            onChange={(e) => setTimingFn(e.target.value)}
            className={styles.timelineSelect}
          >
            <option value="linear">linear</option>
            <option value="ease">ease</option>
            <option value="ease-in">ease-in</option>
            <option value="ease-out">ease-out</option>
            <option value="ease-in-out">ease-in-out</option>
            <option value="cubic-bezier(0.68, -0.55, 0.265, 1.55)">bounce</option>
          </select>
        </div>
      </div>

      {/* Generated code */}
      <pre className={styles.timelineCode}>
        <code>{`.element {\n    animation: ${animName} ${duration.toFixed(1)}s ${timingFn} ${preset.iterationCount};\n}`}</code>
      </pre>
    </div>
  )
}
