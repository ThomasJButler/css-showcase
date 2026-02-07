import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Gradient Patterns | CSS Showcase",
  description:
    "Advanced gradient patterns and techniques — create stunning textures, animated backgrounds, and complex designs with pure CSS gradients.",
}

export default function GradientPatternsPage() {
  return (
    <>
      <PageHero
        title="Gradient Patterns"
        subtitle="Combine multiple gradients to create stunning patterns, textures, and animated backgrounds with pure CSS"
      />

      {/* ───── Geometric Patterns ───── */}
      <Section
        title="Geometric Patterns"
        intro="Create repeating patterns like stripes, chevrons, dots, and grids using gradient repetition."
        id="geometric"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Pattern Gallery"
            code={`/* Diagonal stripes */
.stripes {
    background: repeating-linear-gradient(
        45deg,
        #3b82f6,
        #3b82f6 10px,
        #60a5fa 10px,
        #60a5fa 20px
    );
}

/* Polka dots */
.dots {
    background-color: #ddd3ee;
    background-image: radial-gradient(
        circle,
        #8b5cf6 25%,
        transparent 25%
    );
    background-size: 20px 20px;
}

/* Grid pattern */
.grid {
    background:
        linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px);
    background-size: 20px 20px;
    background-color: #f3f4f6;
}

/* Chevron pattern */
.chevron {
    background:
        repeating-linear-gradient(
            45deg,
            #3b82f6,
            #3b82f6 10px,
            transparent 10px,
            transparent 20px
        ),
        repeating-linear-gradient(
            -45deg,
            #8b5cf6,
            #8b5cf6 10px,
            transparent 10px,
            transparent 20px
        );
}`}
            collapsibleCode
          >
            <div className={styles.patternRow}>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternStripes}`} />
                <p className={styles.patternLabel}>Stripes</p>
              </div>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternChevron}`} />
                <p className={styles.patternLabel}>Chevron</p>
              </div>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternDots}`} />
                <p className={styles.patternLabel}>Polka Dots</p>
              </div>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternGrid}`} />
                <p className={styles.patternLabel}>Grid</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          The key to creating patterns is using <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">repeating-linear-gradient()</code> or{" "}
          <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">repeating-radial-gradient()</code> with carefully placed colour stops. By setting
          a <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">background-size</code>, you control the pattern&apos;s scale.
        </p>
      </Section>

      {/* ───── Organic Textures ───── */}
      <Section
        title="Organic Textures"
        intro="Layer multiple gradients to create realistic textures like paper, fabric, and carbon fibre."
        id="textures"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Texture Gallery"
            code={`/* Paper texture */
.paper {
    background:
        radial-gradient(
            ellipse at top,
            rgba(255,255,255,0.5),
            transparent
        ),
        radial-gradient(
            ellipse at bottom,
            rgba(0,0,0,0.1),
            transparent
        ),
        #f5f5f5;
}

/* Carbon fibre */
.carbon {
    background:
        linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
        linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0,
        linear-gradient(27deg, #222 5px, transparent 5px) 0 10px,
        linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
        linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
        linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%,
            transparent 50%, transparent 75%, #242424 75%, #242424);
    background-size: 20px 20px;
    background-color: #131313;
}

/* Fabric weave */
.fabric {
    background:
        repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 2px
        ),
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.05) 1px,
            transparent 1px,
            transparent 2px
        ),
        #e5e7eb;
}`}
            collapsibleCode
          >
            <div className={styles.patternRow}>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternNoise}`} />
                <p className={styles.patternLabel}>Noise</p>
              </div>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternPaper}`} />
                <p className={styles.patternLabel}>Paper</p>
              </div>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternFabric}`} />
                <p className={styles.patternLabel}>Fabric</p>
              </div>
              <div className={styles.patternShowcase}>
                <div className={`${styles.patternBox} ${styles.patternCarbon}`} />
                <p className={styles.patternLabel}>Carbon</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
          Complex textures are built by layering multiple gradients with different angles,
          sizes, and positions. The magic happens when you combine transparency with
          subtle colour variations.
        </p>
      </Section>

      {/* ───── Animated Gradients ───── */}
      <Section
        title="Animated Gradients"
        intro="Bring your gradients to life with CSS animations. Perfect for hero sections and attention-grabbing backgrounds."
        id="animated"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Animation Showcase"
            code={`/* Animated gradient background */
@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animated-gradient {
    background: linear-gradient(
        -45deg,
        #ee7752,
        #e73c7e,
        #23a6d5,
        #23d5ab
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

/* Rotating conic gradient */
@keyframes rotate {
    to { transform: rotate(360deg); }
}

.rotating {
    background: conic-gradient(
        from 0deg,
        #3b82f6,
        #8b5cf6,
        #ec4899,
        #f59e0b,
        #3b82f6
    );
    animation: rotate 5s linear infinite;
}

/* Wave effect */
@keyframes wave {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
}

.wave {
    background: linear-gradient(
        90deg,
        #3b82f6,
        #8b5cf6,
        #ec4899,
        #3b82f6
    );
    background-size: 200% 100%;
    animation: wave 4s linear infinite;
}`}
            collapsibleCode
          >
            <div className={styles.animatedGrid}>
              <div className={`${styles.animatedBox} ${styles.gradientWave}`}>
                <span className={styles.animatedLabel}>Wave</span>
              </div>
              <div className={`${styles.animatedBox} ${styles.gradientPulse}`}>
                <span className={styles.animatedLabel}>Pulse</span>
              </div>
              <div className={`${styles.animatedBox} ${styles.gradientRotate}`}>
                <span className={styles.animatedLabel}>Rotate</span>
              </div>
              <div className={`${styles.animatedBox} ${styles.gradientShift}`}>
                <span className={styles.animatedLabel}>Shift</span>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
        <div className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            To animate gradients, you can&apos;t directly animate the gradient itself. Instead, create
            a large gradient (using <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">background-size</code>) and animate the{" "}
            <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">background-position</code>. For conic gradients, animate the{" "}
            <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">transform: rotate()</code> property instead.
          </p>
          <p>
            <strong>Performance tip:</strong> Animated gradients can be resource-intensive. Use them
            sparingly and test on lower-end devices. Consider using{" "}
            <code className="rounded bg-[var(--surface-alt)] px-1.5 py-0.5 text-xs font-medium">will-change: transform</code>{" "}
            for rotation animations to hint to the browser about optimisation.
          </p>
        </div>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section title="Gradient Best Practices" id="best-practices">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">~</span>
            <h3>Smooth Transitions</h3>
            <p>
              Use colour stops at 0% and 100% to avoid harsh edges at gradient
              boundaries. For smoother blends, add intermediate colour stops.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">!</span>
            <h3>Performance</h3>
            <p>
              Complex gradients and animations can impact performance. Test on
              lower-end devices and consider simplifying patterns for mobile.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">*</span>
            <h3>Accessibility</h3>
            <p>
              Ensure sufficient contrast when placing text over gradients. Use
              tools like WebAIM&apos;s contrast checker to verify readability.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Gradient patterns mastered! Explore more visual effects to create stunning designs.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/filters" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">~</span>
            <div>
              <h3>CSS Filters</h3>
              <p>Apply Instagram-like effects with CSS</p>
            </div>
          </Link>
          <Link href="/animations" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">*</span>
            <div>
              <h3>Animations</h3>
              <p>Combine gradients with motion</p>
            </div>
          </Link>
          <Link href="/gradients" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">~</span>
            <div>
              <h3>Back to Gradient Basics</h3>
              <p>Review linear, radial, and conic gradients</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
