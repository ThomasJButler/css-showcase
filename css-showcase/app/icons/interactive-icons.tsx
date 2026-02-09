"use client"

import { useState } from "react"
import styles from "./page.module.css"

function IconCard({
  children,
  name,
  className,
}: {
  children: React.ReactNode
  name: string
  className: string
}) {
  return (
    <div className={styles.iconCard}>
      <div className={styles.iconWrapper}>{children}</div>
      <h3>{name}</h3>
      <code>{className}</code>
    </div>
  )
}

export function InteractiveIconsGrid() {
  const [menuActive, setMenuActive] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div className={styles.iconsGrid}>
      <IconCard name="Menu Toggle" className=".menu-to-close">
        <button
          className={`${styles.menuToClose} ${menuActive ? styles.menuToCloseActive : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuActive(!menuActive)}
        >
          <span className={styles.menuMiddleBar} />
        </button>
      </IconCard>

      <IconCard name="Play/Pause" className=".play-pause">
        <button
          className={`${styles.playPause} ${playing ? styles.playPausePlaying : ""}`}
          aria-label="Play or pause"
          onClick={() => setPlaying(!playing)}
        />
      </IconCard>

      <IconCard name="Like Button" className=".like-button">
        <button
          className={`${styles.likeButton} ${liked ? styles.likeButtonLiked : ""}`}
          aria-label="Like"
          onClick={() => setLiked(!liked)}
        >
          <span className={styles.likeSpan} />
        </button>
      </IconCard>

      <IconCard name="Share" className=".share-icon">
        <button className={styles.shareIcon} aria-label="Share">
          <span className={styles.shareNode} />
          <i className={styles.shareLines} />
        </button>
      </IconCard>

      <IconCard name="Mail Hover" className=".hover-mail">
        <div className={styles.hoverMail} />
      </IconCard>

      <IconCard name="Expand" className=".expand-icon">
        <div className={styles.expandIcon} />
      </IconCard>
    </div>
  )
}
