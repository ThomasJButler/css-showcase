"use client"

import { useState } from "react"
import styles from "./page.module.css"

export function HtmlCompare() {
  const [styled, setStyled] = useState(true)

  return (
    <div className={styles.compareContainer}>
      <div className={styles.compareControls}>
        <button
          className={`${styles.compareBtn} ${!styled ? styles.compareBtnActive : ""}`}
          onClick={() => setStyled(false)}
          aria-pressed={!styled}
        >
          <span className={styles.compareBtnIcon}>{"<>"}</span>
          Plain HTML
        </button>
        <button
          className={`${styles.compareBtn} ${styled ? styles.compareBtnActive : ""}`}
          onClick={() => setStyled(true)}
          aria-pressed={styled}
        >
          <span className={styles.compareBtnIcon}>{"{ }"}</span>
          Styled with CSS
        </button>
      </div>

      <div className={styles.compareViewport}>
        <div className={styled ? styles.compareStyled : styles.comparePlain}>
          <h1>Welcome to My Website</h1>
          <p>
            This is an example paragraph showing the difference CSS makes. Without
            styling, HTML elements use the browser&apos;s default appearance.
          </p>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <blockquote>
            &ldquo;CSS is the language that brings beauty to the web.&rdquo;
          </blockquote>
          <button type="button">Click Me</button>
        </div>
      </div>

      <p className={styles.compareCaption}>
        {styled
          ? "With CSS: custom fonts, colours, spacing, and visual hierarchy transform raw content into a designed experience."
          : "Plain HTML: browser defaults only. Functional, but visually bare \u2014 every element uses Times New Roman, default margins, and no colour."}
      </p>
    </div>
  )
}
