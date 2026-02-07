import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Gradients | CSS Showcase",
  description:
    "Master CSS Gradients — create stunning colour transitions with linear, radial, and conic gradients.",
}

export default function GradientsPage() {
  return (
    <>
      <PageHero
        title="CSS Gradients"
        subtitle="Paint the web with smooth colour transitions and creative patterns"
      />

      {/* ───── Linear Gradients ───── */}
      <Section
        title="Linear Gradients"
        intro="Create smooth transitions between colours along a straight line. Control direction, colour stops, and create stunning effects."
        id="linear"
      >
        <DemoGrid columns={3}>
          {/* Basic Linear Gradients */}
          <DemoCard
            title="Basic Linear Gradients"
            code={`/* Two colour gradient */
.gradient {
    background: linear-gradient(
        to right,
        #3b82f6,
        #8b5cf6
    );
}

/* Multi colour */
.rainbow {
    background: linear-gradient(
        to right,
        #ff0000,
        #ff8800,
        #ffff00,
        #00ff00,
        #0088ff,
        #8800ff
    );
}

/* Diagonal */
.diagonal {
    background: linear-gradient(
        45deg,
        #f06,
        #48f
    );
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearBasic}`} />
                <p className={styles.gradientLabel}>Two Colour</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearMulti}`} />
                <p className={styles.gradientLabel}>Multi Colour</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearDiagonal}`} />
                <p className={styles.gradientLabel}>Diagonal</p>
              </div>
            </div>
          </DemoCard>

          {/* Colour Stops */}
          <DemoCard
            title="Colour Stops"
            code={`/* Custom colour stops */
.custom-stops {
    background: linear-gradient(
        to right,
        #3b82f6 0%,
        #3b82f6 20%,
        #8b5cf6 80%,
        #8b5cf6 100%
    );
}

/* Hard stops (no blend) */
.hard-stops {
    background: linear-gradient(
        to right,
        #f06 50%,
        #48f 50%
    );
}

/* Repeating gradient */
.stripes {
    background: repeating-linear-gradient(
        45deg,
        #fff,
        #fff 10px,
        #000 10px,
        #000 20px
    );
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearStops}`} />
                <p className={styles.gradientLabel}>Custom Stops</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearHard}`} />
                <p className={styles.gradientLabel}>Hard Stops</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearRepeating}`} />
                <p className={styles.gradientLabel}>Repeating</p>
              </div>
            </div>
          </DemoCard>

          {/* Advanced Techniques */}
          <DemoCard
            title="Advanced Techniques"
            code={`/* Overlay gradient */
.overlay {
    background:
        linear-gradient(
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.3)
        ),
        url('image.jpg');
}

/* Animated gradient */
.animated {
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

/* Multiple gradients (mesh) */
.mesh {
    background:
        linear-gradient(45deg, #f06 30%, transparent 30%),
        linear-gradient(-45deg, #48f 60%, transparent 60%),
        linear-gradient(90deg, #fd0 20%, transparent 20%);
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearOverlay}`}>
                  TEXT
                </div>
                <p className={styles.gradientLabel}>Text Overlay</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearAnimated}`} />
                <p className={styles.gradientLabel}>Animated</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.linearMesh}`} />
                <p className={styles.gradientLabel}>Mesh Effect</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Radial Gradients ───── */}
      <Section
        title="Radial Gradients"
        intro="Create circular or elliptical gradients that radiate from a central point. Perfect for spotlights, bubbles, and organic shapes."
        id="radial"
      >
        <DemoGrid columns={3}>
          {/* Basic Radial Gradients */}
          <DemoCard
            title="Basic Radial Gradients"
            code={`/* Circle gradient */
.circle {
    background: radial-gradient(
        circle,
        #3b82f6,
        #1e40af
    );
}

/* Ellipse (default) */
.ellipse {
    background: radial-gradient(
        ellipse,
        #ec4899,
        #7c3aed
    );
}

/* Positioned gradient */
.spotlight {
    background: radial-gradient(
        circle at top right,
        #fbbf24,
        #92400e
    );
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialCircle}`} />
                <p className={styles.gradientLabel}>Circle</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialEllipse}`} />
                <p className={styles.gradientLabel}>Ellipse</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialPositioned}`} />
                <p className={styles.gradientLabel}>Positioned</p>
              </div>
            </div>
          </DemoCard>

          {/* Size & Shape Control */}
          <DemoCard
            title="Size & Shape Control"
            code={`/* Size keywords */
.closest {
    background: radial-gradient(
        circle closest-side,
        #10b981,
        #064e3b
    );
}

.farthest {
    background: radial-gradient(
        ellipse farthest-corner,
        #f59e0b,
        #7c2d12
    );
}

/* Fixed size */
.fixed {
    background: radial-gradient(
        100px 50px at center,
        #8b5cf6,
        #4c1d95
    );
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialClosest}`} />
                <p className={styles.gradientLabel}>Closest Side</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialFarthest}`} />
                <p className={styles.gradientLabel}>Farthest Corner</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialFixed}`} />
                <p className={styles.gradientLabel}>Fixed Size</p>
              </div>
            </div>
          </DemoCard>

          {/* Creative Effects */}
          <DemoCard
            title="Creative Effects"
            code={`/* Sunburst effect */
.sunburst {
    background: radial-gradient(
        circle,
        #fbbf24 0%,
        #f59e0b 25%,
        #d97706 50%,
        #92400e 75%,
        #451a03 100%
    );
}

/* Bubble effect */
.bubble {
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255,255,255,0.8),
        rgba(255,255,255,0.4) 30%,
        rgba(59,130,246,0.6)
    );
}

/* Repeating ripple */
.ripple {
    background: repeating-radial-gradient(
        circle,
        #3b82f6,
        #3b82f6 10px,
        #60a5fa 10px,
        #60a5fa 20px
    );
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialSunburst}`} />
                <p className={styles.gradientLabel}>Sunburst</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialBubble}`} />
                <p className={styles.gradientLabel}>Bubble</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.radialRepeating}`} />
                <p className={styles.gradientLabel}>Ripple</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Conic Gradients ───── */}
      <Section
        title="Conic Gradients"
        intro="Create gradients that rotate around a centre point. Perfect for pie charts, colour wheels, and unique visual effects."
        id="conic"
      >
        <DemoGrid columns={2}>
          {/* Basic Conic Gradients */}
          <DemoCard
            title="Basic Conic Gradients"
            code={`/* Colour wheel */
.wheel {
    background: conic-gradient(
        red,
        yellow,
        lime,
        aqua,
        blue,
        magenta,
        red
    );
    border-radius: 50%;
}

/* Pie chart */
.pie {
    background: conic-gradient(
        #3b82f6 0deg 90deg,
        #8b5cf6 90deg 180deg,
        #ec4899 180deg 270deg,
        #f59e0b 270deg
    );
    border-radius: 50%;
}

/* Positioned */
.offset {
    background: conic-gradient(
        from 45deg at 25% 25%,
        #f06,
        #48f,
        #f06
    );
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.conicWheel}`} />
                <p className={styles.gradientLabel}>Colour Wheel</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.conicPie}`} />
                <p className={styles.gradientLabel}>Pie Chart</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.conicPositioned}`} />
                <p className={styles.gradientLabel}>Off-centre</p>
              </div>
            </div>
          </DemoCard>

          {/* Advanced Conic Effects */}
          <DemoCard
            title="Advanced Conic Effects"
            code={`/* Checkerboard */
.checkerboard {
    background: conic-gradient(
        #000 0deg 90deg,
        #fff 90deg 180deg,
        #000 180deg 270deg,
        #fff 270deg
    );
    background-size: 50px 50px;
}

/* Starburst */
.starburst {
    background: repeating-conic-gradient(
        from 0deg,
        #3b82f6 0deg 10deg,
        #1e40af 10deg 20deg
    );
}

/* Spiral effect */
.spiral {
    background: conic-gradient(
        from 0deg at 50% 50%,
        hsl(0deg 100% 50%),
        hsl(180deg 100% 50%),
        hsl(360deg 100% 50%)
    );
    filter: blur(20px);
}`}
          >
            <div className={styles.gradientRow}>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.conicCheckerboard}`} />
                <p className={styles.gradientLabel}>Checkerboard</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.conicStarburst}`} />
                <p className={styles.gradientLabel}>Starburst</p>
              </div>
              <div className={styles.gradientShowcase}>
                <div className={`${styles.gradientBox} ${styles.conicSpiral}`} />
                <p className={styles.gradientLabel}>Spiral</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Gradient Patterns CTA ───── */}
      <Section title="Take It Further" id="patterns">
        <div className={styles.ctaBanner}>
          <h3>Want to Create Stunning Patterns?</h3>
          <p>
            Ready to take your gradients to the next level? Learn how to create
            complex patterns, realistic textures, and smooth animations.
          </p>
          <Link href="/gradient-patterns" className={styles.ctaLink}>
            Explore Advanced Gradient Patterns →
          </Link>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Gradients mastered! Explore filters for even more visual effects.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/filters" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>CSS Filters</h3>
              <p>Apply Instagram-like effects with CSS</p>
            </div>
          </Link>
          <Link href="/animations" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              *
            </span>
            <div>
              <h3>Animations</h3>
              <p>Combine gradients with motion</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
