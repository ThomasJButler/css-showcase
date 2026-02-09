import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { AnimationTimeline } from "./animation-timeline"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Animations | CSS Showcase",
  description:
    "Master CSS Animations — bring your designs to life with keyframes, timing functions, and creative effects.",
}

export default function AnimationsPage() {
  return (
    <>
      <PageHero
        title="CSS Animations"
        subtitle="Bring your designs to life with smooth, performant animations. Master keyframe sequences, timing functions, and creative effects that captivate your users."
      />

      {/* ───── Keyframe Basics ───── */}
      <Section
        title="Keyframe Basics"
        intro="Keyframes define the stages of your animation. Create complex motion by specifying styles at various points during the animation sequence."
        id="keyframes"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Simple Bounce"
            code={`@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-50px);
    }
}

.ball {
    animation: bounce 1s ease-in-out infinite;
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.bounceBall} />
            </div>
          </DemoCard>

          <DemoCard
            title="Rotation"
            code={`@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.square {
    animation: rotate 2s linear infinite;
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.rotateSquare} />
            </div>
          </DemoCard>

          <DemoCard
            title="Pulse Effect"
            code={`@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.circle {
    animation: pulse 2s ease-in-out infinite;
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.pulseCircle} />
            </div>
          </DemoCard>

          <DemoCard
            title="Colour Shift"
            code={`@keyframes colorShift {
    0% { background: #3b82f6; }
    25% { background: #8b5cf6; }
    50% { background: #ec4899; }
    75% { background: #f59e0b; }
    100% { background: #3b82f6; }
}

.element {
    animation: colorShift 4s ease infinite;
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.colorShift} />
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Animation Properties ───── */}
      <Section
        title="Animation Properties"
        intro="Control every aspect of your animations with these powerful properties."
        id="properties"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Timing Functions"
            code={`/* Timing functions */
.linear { animation-timing-function: linear; }
.ease { animation-timing-function: ease; }
.ease-in { animation-timing-function: ease-in; }
.ease-out { animation-timing-function: ease-out; }
.ease-in-out { animation-timing-function: ease-in-out; }

/* Custom cubic-bezier */
.bounce {
    animation-timing-function:
        cubic-bezier(0.68, -0.55, 0.265, 1.55);
}`}
          >
            <div className={styles.timingDemos} style={{ containerType: "inline-size" }}>
              {[
                { label: "linear", cls: styles.timingLinear },
                { label: "ease", cls: styles.timingEase },
                { label: "ease-in", cls: styles.timingEaseIn },
                { label: "ease-out", cls: styles.timingEaseOut },
                { label: "ease-in-out", cls: styles.timingEaseInOut },
                { label: "cubic-bezier", cls: styles.timingCubic },
              ].map(({ label, cls }) => (
                <div key={label} className={styles.timingRow} style={{ containerType: "inline-size" }}>
                  <span className={styles.timingLabel}>{label}</span>
                  <div className={`${styles.timingBox} ${cls}`} />
                </div>
              ))}
            </div>
          </DemoCard>

          <DemoCard
            title="Direction & Fill Mode"
            code={`/* Animation direction */
.normal { animation-direction: normal; }
.reverse { animation-direction: reverse; }
.alternate { animation-direction: alternate; }

/* Fill modes */
.forwards { animation-fill-mode: forwards; }
.backwards { animation-fill-mode: backwards; }
.both { animation-fill-mode: both; }`}
          >
            <div className={styles.directionDemos}>
              <div className={styles.directionCell}>
                <div className={styles.dirNormal}>normal</div>
              </div>
              <div className={styles.directionCell}>
                <div className={styles.dirReverse}>reverse</div>
              </div>
              <div className={styles.directionCell}>
                <div className={styles.dirAlternate}>alternate</div>
              </div>
              <div className={styles.directionCell}>
                <div className={styles.dirFillBoth}>fill: both</div>
              </div>
            </div>
            <div className={styles.propertyList}>
              <h4>Understanding Fill Modes</h4>
              <ul>
                <li>
                  <strong>none:</strong> Element returns to its original state
                  before/after the animation
                </li>
                <li>
                  <strong>forwards:</strong> Element retains the styles from the
                  last keyframe
                </li>
                <li>
                  <strong>backwards:</strong> Element applies styles from the
                  first keyframe during the delay period
                </li>
                <li>
                  <strong>both:</strong> Combines forwards and backwards —
                  the most common choice
                </li>
              </ul>
            </div>
          </DemoCard>

          <DemoCard
            title="Play State"
            code={`/* Control animation playback */
.animated {
    animation: slide 3s infinite;
    animation-play-state: running;
}

.animated:hover {
    animation-play-state: paused;
}

/* JavaScript control */
element.style.animationPlayState = 'paused';`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.playStateBox}>Hover to pause</div>
            </div>
            <p className={styles.demoHint}>
              Hover over the element to pause its animation
            </p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Creative Effects ───── */}
      <Section
        title="Creative Effects"
        intro="Combine animations to create stunning visual effects that captivate your users."
        id="effects"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Loading Spinner"
            code={`@keyframes spin {
    to { transform: rotate(360deg); }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`}
          >
            <div className={styles.animationDemoDark}>
              <div className={styles.loadingSpinner} />
            </div>
          </DemoCard>

          <DemoCard
            title="Typing Effect"
            code={`@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    50% { border-color: transparent; }
}

.typing {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid;
    animation:
        typing 3s steps(13),
        blink 1s infinite;
}`}
          >
            <div className={styles.animationDemo}>
              <p className={styles.typingText}>Hello, World!</p>
            </div>
          </DemoCard>

          <DemoCard
            title="Floating Elements"
            code={`@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

.floating {
    animation: float 3s ease-in-out infinite;
}

/* Stagger animations */
.delay-1 { animation-delay: 0.5s; }
.delay-2 { animation-delay: 1s; }`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.floatingContainer}>
                <div className={styles.floatingElement}>
                  <span aria-hidden="true">&#9733;</span>
                </div>
                <div
                  className={styles.floatingElement}
                  style={{ animationDelay: "0.5s" }}
                >
                  <span aria-hidden="true">&#9830;</span>
                </div>
                <div
                  className={styles.floatingElement}
                  style={{ animationDelay: "1s" }}
                >
                  <span aria-hidden="true">&#9827;</span>
                </div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Morphing Shape"
            code={`@keyframes morph {
    0% {
        border-radius: 50%;
        transform: rotate(0deg);
    }
    50% {
        border-radius: 0%;
        transform: rotate(180deg);
    }
    100% {
        border-radius: 50%;
        transform: rotate(360deg);
    }
}

.shape {
    animation: morph 4s ease-in-out infinite;
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.morphShape} />
            </div>
          </DemoCard>

          <DemoCard
            title="Wave Animation"
            code={`@keyframes wave {
    0%, 60%, 100% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(-15px);
    }
}

.wave-dot {
    animation: wave 1.5s infinite;
}

.wave-dot:nth-child(2) { animation-delay: 0.1s; }
.wave-dot:nth-child(3) { animation-delay: 0.2s; }
.wave-dot:nth-child(4) { animation-delay: 0.3s; }
.wave-dot:nth-child(5) { animation-delay: 0.4s; }`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.waveContainer}>
                <span className={styles.waveDot} />
                <span
                  className={styles.waveDot}
                  style={{ animationDelay: "0.1s" }}
                />
                <span
                  className={styles.waveDot}
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className={styles.waveDot}
                  style={{ animationDelay: "0.3s" }}
                />
                <span
                  className={styles.waveDot}
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Glitch Effect"
            code={`@keyframes glitch {
    0%, 100% {
        text-shadow:
            2px 2px 0 #ff00ff,
            -2px -2px 0 #00ffff;
    }
    25% {
        text-shadow:
            -2px 2px 0 #ff00ff,
            2px -2px 0 #00ffff;
    }
}

.glitch {
    animation: glitch 0.5s infinite;
}`}
          >
            <div className={styles.animationDemoDark}>
              <span
                className={styles.glitchText}
                data-text="GLITCH"
                aria-label="Glitch text effect"
              >
                GLITCH
              </span>
            </div>
          </DemoCard>

          <DemoCard
            title="3D Card Flip"
            code={`/* 3D card flip */
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <h4>Front Side</h4>
                    <p>Hover to flip</p>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h4>Back Side</h4>
                    <p>Hidden content!</p>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.demoHint}>
              Hover over the card to see the 3D flip effect
            </p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Performance & Best Practices ───── */}
      <Section
        title="Performance & Best Practices"
        intro="Writing animations that look great and perform well requires understanding what happens under the hood."
        id="performance"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Animation Performance Tips"
            code={`/* Prefer GPU-accelerated properties */
.element {
    animation: slide 0.3s ease;
    will-change: transform; /* hint to the browser */
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
    .element {
        animation: none;
    }
}`}
          >
            <div className={styles.tipBox}>
              <h4>Key Principles</h4>
              <p>
                <strong>Stick to transform and opacity</strong> — these
                properties are composited on the GPU and won&apos;t trigger
                layout recalculations. Animating <code>width</code>,{" "}
                <code>height</code>, <code>top</code>, or{" "}
                <code>left</code> forces the browser to recalculate layout on
                every frame.
              </p>
              <p>
                <strong>Use <code>will-change</code> sparingly</strong> —
                it hints the browser to optimise, but overuse wastes memory.
                Only apply it to elements that will actually animate.
              </p>
              <p>
                <strong>Respect <code>prefers-reduced-motion</code></strong> —
                always provide a reduced-motion alternative. Some users
                experience motion sickness from animations. Use{" "}
                <code>@media (prefers-reduced-motion: reduce)</code> to disable
                or simplify animations.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Animation Timeline ───── */}
      <Section
        title="Animation Lab"
        intro="Experiment with animation presets, adjust duration and easing in real time, and watch the progress timeline visualise each keyframe cycle."
        id="lab"
      >
        <AnimationTimeline />
      </Section>

      {/* ───── Continue Your Journey ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Animations mastered! Explore filters for visual effects, or revisit
          transitions for state-based animation.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/filters" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>Filters & Effects</h3>
              <p>Apply blur, brightness, and creative visual effects</p>
            </div>
          </Link>
          <Link href="/transitions" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              *
            </span>
            <div>
              <h3>CSS Transitions</h3>
              <p>Smooth state changes between CSS property values</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
