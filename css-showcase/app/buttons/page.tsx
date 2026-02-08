import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Buttons | CSS Showcase",
  description:
    "Beautiful CSS button designs and effects — from simple and elegant to absolutely creative. Pure CSS magic!",
}

export default function ButtonsPage() {
  return (
    <>
      <PageHero
        title="Brilliant Buttons"
        subtitle="From simple and elegant to absolutely bonkers — explore button styles that make users actually want to click. No framework needed, just pure CSS magic!"
      />

      {/* ───── Basic Button Styles ───── */}
      <Section
        title="Basic Button Styles"
        intro="Clean, accessible button designs for every occasion. These fundamentals form the building blocks for all button patterns."
        id="basic"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Primary Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`.btn-primary {
    background: var(--colour-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>Primary</button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>Large Primary</button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSmall}`}>Small</button>
              <button className={`${styles.btn} ${styles.btnPrimary}`} disabled>Disabled</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Secondary & Outline Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`.btn-secondary {
    background: var(--colour-secondary);
    color: white;
}

.btn-outline {
    background: transparent;
    color: var(--colour-primary);
    border: 2px solid var(--colour-primary);
}

.btn-outline:hover {
    background: var(--colour-primary);
    color: white;
}

.btn-ghost {
    background: transparent;
    color: var(--colour-text);
}

.btn-ghost:hover {
    background: var(--colour-surface-alt);
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>Secondary</button>
              <button className={`${styles.btn} ${styles.btnOutline}`}>Outline</button>
              <button className={`${styles.btn} ${styles.btnGhost}`}>Ghost</button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnRounded}`}>Rounded</button>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnRounded}`}>Pill</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Icon Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`.btn-icon {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-icon-only {
    width: 44px;
    height: 44px;
    padding: 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnIcon}`}>
                <span aria-hidden="true">↓</span> Download
              </button>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnIcon}`}>
                <span aria-hidden="true">♥</span> Like
              </button>
              <button className={`${styles.btn} ${styles.btnOutline} ${styles.btnIcon}`}>
                <span aria-hidden="true">⚙</span> Settings
              </button>
              <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnIconOnly}`}>
                <span aria-hidden="true">✕</span>
              </button>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Hover Effects ───── */}
      <Section
        title="Hover Effects"
        intro="Buttons that respond beautifully to user interaction. Hover to see the magic in action."
        id="hover"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Slide Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Slide right fill */
.btn-slide-right {
    background: var(--colour-primary);
    color: white;
    z-index: 1;
}

.btn-slide-right::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--colour-primary-dark);
    transition: left 0.3s ease;
    z-index: -1;
}

.btn-slide-right:hover::before {
    left: 0;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnSlideRight}`}>Slide Right</button>
              <button className={`${styles.btn} ${styles.btnSlideUp}`}>Slide Up</button>
              <button className={`${styles.btn} ${styles.btnSlideDown}`}>Slide Down</button>
              <button className={`${styles.btn} ${styles.btnSlideDiagonal}`}>Diagonal</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Gradient Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Gradient shift on hover */
.btn-gradient {
    background: linear-gradient(
        135deg,
        var(--colour-primary) 0%,
        var(--colour-secondary) 100%
    );
    background-size: 200% 200%;
    background-position: 0% 0%;
}

.btn-gradient:hover {
    background-position: 100% 100%;
}

/* Rainbow animation on hover */
.btn-rainbow {
    background: linear-gradient(90deg,
        red, orange, yellow, green, blue, indigo, violet);
    background-size: 400% 100%;
    animation: rainbow 3s linear infinite paused;
}

.btn-rainbow:hover {
    animation-play-state: running;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnGradient}`}>Gradient Shift</button>
              <button className={`${styles.btn} ${styles.btnGradientRadial}`}>Radial Gradient</button>
              <button className={`${styles.btn} ${styles.btnGradientSweep}`}>Sweep</button>
              <button className={`${styles.btn} ${styles.btnGradientRainbow}`}>Rainbow</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Border Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Animated border draw */
.btn-border-draw {
    background: transparent;
    color: var(--colour-primary);
    position: relative;
}

.btn-border-draw::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 0; height: 0;
    border-top: 2px solid var(--colour-primary);
    border-right: 2px solid var(--colour-primary);
    transition: all 0.3s;
}

.btn-border-draw:hover::before {
    width: 100%;
    height: 100%;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnBorderDraw}`}>Draw Border</button>
              <button className={`${styles.btn} ${styles.btnBorderSpin}`}>Spin Border</button>
              <button className={`${styles.btn} ${styles.btnBorderScale}`}>Scale Border</button>
              <button className={`${styles.btn} ${styles.btnBorderCorners}`}>Corner Borders</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Shadow Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Growing shadow */
.btn-shadow-grow {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.btn-shadow-grow:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

/* Neon glow pulse */
.btn-shadow-glow:hover {
    animation: glow-pulse 1.5s infinite;
}

@keyframes glow-pulse {
    0% { box-shadow: 0 0 0 0 rgba(239,68,68,0.7); }
    70% { box-shadow: 0 0 0 10px rgba(239,68,68,0); }
    100% { box-shadow: 0 0 0 0 rgba(239,68,68,0); }
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnShadowGrow}`}>Shadow Grow</button>
              <button className={`${styles.btn} ${styles.btnShadowInset}`}>Shadow Inset</button>
              <button className={`${styles.btn} ${styles.btnShadowMultiple}`}>Multi Shadow</button>
              <button className={`${styles.btn} ${styles.btnShadowGlow}`}>Neon Glow</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Transform Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Scale on hover */
.btn-grow:hover {
    transform: scale(1.1);
}

.btn-shrink:hover {
    transform: scale(0.95);
}

/* Rotate + scale */
.btn-rotate:hover {
    transform: rotate(5deg) scale(1.05);
}

/* Skew */
.btn-skew:hover {
    transform: skewX(-10deg);
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnTransformGrow}`}>Grow</button>
              <button className={`${styles.btn} ${styles.btnTransformShrink}`}>Shrink</button>
              <button className={`${styles.btn} ${styles.btnTransformRotate}`}>Rotate</button>
              <button className={`${styles.btn} ${styles.btnTransformSkew}`}>Skew</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Text Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Text slide replacement */
.btn-text-slide span {
    position: relative;
    transition: all 0.3s;
}

.btn-text-slide:hover span {
    color: transparent;
}

.btn-text-slide span::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: -100%;
    color: white;
    transition: top 0.3s;
}

.btn-text-slide:hover span::after {
    top: 0;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnTextSlide}`}>
                <span data-text="Slide Text">Slide Text</span>
              </button>
              <button className={`${styles.btn} ${styles.btnTextReveal}`}>Reveal</button>
              <button className={`${styles.btn} ${styles.btnTextRotate}`}>
                <span>Rotate</span>
                <span>Click Me!</span>
              </button>
              <button className={`${styles.btn} ${styles.btnTextGlitch}`} data-text="GLITCH">GLITCH</button>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Animated Buttons ───── */}
      <Section
        title="Animated Buttons"
        intro="Buttons with personality that demand attention. These use @keyframes for continuous or triggered animations."
        id="animated"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Pulse & Breathe"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Pulsing ring effect */
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(37,99,235,0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(37,99,235,0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(37,99,235,0);
    }
}

.btn-pulse {
    animation: pulse 2s infinite;
}

/* Gentle breathing */
@keyframes breathe {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.btn-breathe {
    animation: breathe 3s ease-in-out infinite;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnPulse}`}>Pulse</button>
              <button className={`${styles.btn} ${styles.btnBreathe}`}>Breathe</button>
              <button className={`${styles.btn} ${styles.btnHeartbeat}`}>Heartbeat</button>
              <button className={`${styles.btn} ${styles.btnShake}`}>Shake</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Loading States"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Spinner animation */
@keyframes spin {
    to { transform: rotate(360deg); }
}

.btn-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

/* Bouncing dots */
@keyframes dot-bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnLoading}`}>
                <span className={styles.btnSpinner} />
                <span>Loading...</span>
              </button>
              <button className={`${styles.btn} ${styles.btnLoading}`}>
                <span className={styles.btnDots}>
                  <span />
                  <span />
                  <span />
                </span>
              </button>
              <button className={`${styles.btn} ${styles.btnLoading}`}>
                Upload
                <span className={styles.btnProgress} />
              </button>
            </div>
          </DemoCard>

          <DemoCard
            title="Morphing Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Round morph on hover */
.btn-morph-round {
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.btn-morph-round:hover {
    border-radius: 9999px;
}

/* Square morph on hover */
.btn-morph-square {
    border-radius: 9999px;
    transition: all 0.3s ease;
}

.btn-morph-square:hover {
    border-radius: 0;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnMorphRound}`}>Round Morph</button>
              <button className={`${styles.btn} ${styles.btnMorphSquare}`}>Square Morph</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Particle Effects"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Confetti burst on click */
.btn-confetti::before {
    content: '🎉';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    opacity: 0;
    pointer-events: none;
}

.btn-confetti:active::before {
    animation: confetti-burst 0.5s ease-out;
}

/* Ripple effect */
.btn-ripple::after {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 0; height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-ripple:active::after {
    width: 300px;
    height: 300px;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnConfetti}`}>Confetti</button>
              <button className={`${styles.btn} ${styles.btnSparkle}`}>Sparkle</button>
              <button className={`${styles.btn} ${styles.btnRipple}`}>Ripple</button>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Creative Buttons ───── */}
      <Section
        title="Creative Buttons"
        intro="When ordinary just won&rsquo;t do — buttons that break the mould and push CSS to its limits."
        id="creative"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="3D Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* 3D push button */
.btn-3d {
    transform: translateY(-4px);
    box-shadow: 0 4px 0 var(--colour-primary-dark);
    transition: all 0.1s;
}

.btn-3d:active {
    transform: translateY(-2px);
    box-shadow: 0 2px 0 var(--colour-primary-dark);
}

/* 3D flip on hover */
.btn-3d-flip {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.btn-3d-flip:hover {
    transform: rotateX(180deg);
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btn3d}`}>3D Push</button>
              <button className={`${styles.btn} ${styles.btn3dFlip}`}>3D Flip</button>
              <button className={`${styles.btn} ${styles.btn3dRotate}`}>3D Rotate</button>
              <button className={`${styles.btn} ${styles.btn3dFloat}`}>3D Float</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Neon Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Neon glow button */
.btn-neon-blue {
    background: transparent;
    color: #00ffff;
    border: 2px solid #00ffff;
    text-shadow: 0 0 10px #00ffff;
    box-shadow:
        0 0 20px #00ffff,
        inset 0 0 20px rgba(0,255,255,0.1);
}

.btn-neon-blue:hover {
    background: rgba(0,255,255,0.1);
    box-shadow:
        0 0 40px #00ffff,
        inset 0 0 20px rgba(0,255,255,0.2);
}`}
          >
            <div className={styles.neonBg}>
              <div className={styles.buttonGroup}>
                <button className={`${styles.btn} ${styles.btnNeon} ${styles.btnNeonBlue}`}>Neon Blue</button>
                <button className={`${styles.btn} ${styles.btnNeon} ${styles.btnNeonPink}`}>Neon Pink</button>
                <button className={`${styles.btn} ${styles.btnNeon} ${styles.btnNeonGreen}`}>Neon Green</button>
                <button className={`${styles.btn} ${styles.btnNeon} ${styles.btnNeonFlicker}`}>Flicker</button>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Liquid Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Liquid fill from bottom */
.btn-liquid {
    position: relative;
    z-index: 1;
}

.btn-liquid::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: var(--colour-primary-dark);
    transition: height 0.3s ease;
    z-index: -1;
}

.btn-liquid:hover::before {
    height: 100%;
}

/* Blob morph */
.btn-blob {
    border-radius: 50% 40% 50% 40%;
    animation: blob-morph 8s ease-in-out infinite;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnLiquid}`}>Liquid Fill</button>
              <button className={`${styles.btn} ${styles.btnBlob}`}>Blob</button>
              <button className={`${styles.btn} ${styles.btnWave}`}>Wave</button>
              <button className={`${styles.btn} ${styles.btnBubble}`}>Bubble</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Special Buttons"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Union Jack reveal */
.btn-union-jack::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background:
        linear-gradient(to right,
            transparent 45%, #fff 45%, #fff 55%,
            transparent 55%),
        linear-gradient(to bottom,
            transparent 45%, #fff 45%, #fff 55%,
            transparent 55%),
        linear-gradient(45deg,
            transparent 40%, #C8102E 40%,
            #C8102E 60%, transparent 60%),
        linear-gradient(-45deg,
            transparent 40%, #C8102E 40%,
            #C8102E 60%, transparent 60%);
    transition: left 0.3s ease;
}

.btn-union-jack:hover::before {
    left: 0;
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnUnionJack}`}>Union Jack</button>
              <button className={`${styles.btn} ${styles.btnTea}`}>☕ Tea Time</button>
              <button className={`${styles.btn} ${styles.btnMindTheGap}`}>Mind the Gap</button>
              <button className={`${styles.btn} ${styles.btnQueue}`}>Join Queue</button>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Button Recipes ───── */}
      <Section
        title="Button Recipes"
        intro="The CSS behind the magic — copy these patterns as starting points for your own button designs."
        id="recipes"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Button Structure"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Base button styles */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

/* Primary button */
.btn-primary {
    background: var(--colour-primary);
    color: white;
}

.btn-primary:hover {
    background: var(--colour-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>Preview</button>
            </div>
          </DemoCard>

          <DemoCard
            title="Loading Animation"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Spinner button */
@keyframes spin {
    to { transform: rotate(360deg); }
}

.btn-spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

/* Bouncing dots */
@keyframes dot-bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}

.btn-dots span {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin: 0 2px;
    animation: dot-bounce 1.4s infinite ease-in-out both;
}

.btn-dots span:nth-child(1) { animation-delay: -0.32s; }
.btn-dots span:nth-child(2) { animation-delay: -0.16s; }`}
          >
            <div className={styles.buttonGroup}>
              <button className={`${styles.btn} ${styles.btnLoading}`}>
                <span className={styles.btnSpinner} />
              </button>
              <button className={`${styles.btn} ${styles.btnLoading}`}>
                <span className={styles.btnDots}>
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section
        title="Button Best Practices"
        id="best-practices"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Accessibility & Performance Tips"
            collapsibleCode
            codeDefaultOpen={false}
            code={`/* Ensure good focus states */
.btn:focus-visible {
    outline: 2px solid var(--colour-primary);
    outline-offset: 2px;
}

/* Touch target minimum */
.btn {
    min-height: 44px;
    min-width: 44px;
}

/* GPU-accelerated animations */
.btn {
    transition: transform 0.3s, box-shadow 0.3s;
    /* transform & opacity are GPU-accelerated */
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
    .btn {
        animation: none;
        transition: none;
    }
}`}
          >
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">*</span>
                <h4>Accessibility First</h4>
                <p>
                  Always ensure buttons have proper contrast ratios and focus states for keyboard navigation.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">#</span>
                <h4>Touch Targets</h4>
                <p>
                  Make buttons at least 44&times;44 pixels for comfortable mobile tapping.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">!</span>
                <h4>Performance</h4>
                <p>
                  Use <code>transform</code> and <code>opacity</code> for animations — they&apos;re GPU accelerated!
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Continue Your Journey ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Buttons mastered! Apply your skills to form components, or explore tables
          for structured data presentation.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/forms" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ☐
            </span>
            <div>
              <h3>Forms</h3>
              <p>Build beautiful, accessible form components</p>
            </div>
          </Link>
          <Link href="/tables" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ≡
            </span>
            <div>
              <h3>Tables</h3>
              <p>Present data with style and clarity</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
