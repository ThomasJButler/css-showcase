"use client"

import { useState } from "react"
import styles from "./page.module.css"

type Device = "mobile" | "tablet" | "desktop"

const devices: { key: Device; label: string; width: number; icon: string }[] = [
  { key: "mobile", label: "Mobile", width: 375, icon: "📱" },
  { key: "tablet", label: "Tablet", width: 768, icon: "📋" },
  { key: "desktop", label: "Desktop", width: 1200, icon: "🖥" },
]

export function DevicePreview() {
  const [active, setActive] = useState<Device>("desktop")
  const device = devices.find((d) => d.key === active)!

  return (
    <div className={styles.devicePreviewContainer}>
      {/* Device selector */}
      <div className={styles.deviceSelector}>
        {devices.map((d) => (
          <button
            key={d.key}
            type="button"
            onClick={() => setActive(d.key)}
            className={`${styles.deviceBtn} ${active === d.key ? styles.deviceBtnActive : ""}`}
            aria-pressed={active === d.key}
          >
            <span className={styles.deviceBtnIcon} aria-hidden="true">
              {d.icon}
            </span>
            <span>{d.label}</span>
            <span className={styles.deviceBtnWidth}>{d.width}px</span>
          </button>
        ))}
      </div>

      {/* Device frame */}
      <div className={styles.deviceFrameOuter}>
        <div
          className={`${styles.deviceFrame} ${styles[`deviceFrame${active.charAt(0).toUpperCase() + active.slice(1)}`]}`}
          style={{ maxWidth: Math.min(device.width, 1200) }}
        >
          {/* Notch / top bar */}
          <div className={styles.deviceTopBar}>
            <div className={styles.deviceStatusDots}>
              <span />
              <span />
              <span />
            </div>
            <span className={styles.deviceUrl}>example.com</span>
          </div>

          {/* Content area with container query */}
          <div
            className={styles.deviceContent}
            style={{ containerType: "inline-size" }}
          >
            {/* Sample responsive layout */}
            <div className={styles.previewHeader}>
              <div className={styles.previewLogo}>Logo</div>
              <nav className={styles.previewNav}>
                <span>Home</span>
                <span>About</span>
                <span>Work</span>
                <span>Contact</span>
              </nav>
              <button
                className={styles.previewHamburger}
                aria-label="Example hamburger button"
              >
                ☰
              </button>
            </div>

            <div className={styles.previewHero}>
              <h3>Responsive Design</h3>
              <p>Content that adapts to every screen</p>
            </div>

            <div className={styles.previewGrid}>
              <div className={styles.previewCard}>
                <div className={styles.previewCardImg} />
                <div className={styles.previewCardBody}>
                  <strong>Card 1</strong>
                  <span>Adapts to available space</span>
                </div>
              </div>
              <div className={styles.previewCard}>
                <div className={styles.previewCardImg} />
                <div className={styles.previewCardBody}>
                  <strong>Card 2</strong>
                  <span>Flexible layout</span>
                </div>
              </div>
              <div className={styles.previewCard}>
                <div className={styles.previewCardImg} />
                <div className={styles.previewCardBody}>
                  <strong>Card 3</strong>
                  <span>Responsive grid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.deviceCaption}>
        {active === "mobile" &&
          "Mobile: Single column, hamburger menu, stacked cards. Touch-friendly targets."}
        {active === "tablet" &&
          "Tablet: Two-column card grid, full navigation visible, comfortable spacing."}
        {active === "desktop" &&
          "Desktop: Three-column grid, spacious layout, horizontal navigation."}
      </p>
    </div>
  )
}
