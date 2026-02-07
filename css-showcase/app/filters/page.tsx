import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { FilterPlayground } from "./filter-playground"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Filters | CSS Showcase",
  description:
    "Master CSS Filters — apply visual effects like blur, brightness, and more to create stunning designs.",
}

export default function FiltersPage() {
  return (
    <>
      <PageHero
        title="CSS Filters"
        subtitle="Transform images and elements with Instagram-like effects using pure CSS. Apply blur, brightness, contrast, and more for instant visual transformation."
      />

      {/* ───── Basic Filter Functions ───── */}
      <Section
        title="Basic Filter Functions"
        intro="CSS filters provide graphical effects like blur, colour shifting, and more. Apply them to any element for instant visual transformation."
        id="basic"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Blur & Brightness"
            code={`/* Blur effect */
.blur {
    filter: blur(5px);
}

/* Brightness adjustment */
.bright {
    filter: brightness(1.5); /* 150% */
}

.dark {
    filter: brightness(0.5); /* 50% */
}`}
          >
            <div className={styles.filterGrid}>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.original}`} />
                <p className={styles.filterLabel}>Original</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.blur}`} />
                <p className={styles.filterLabel}>blur(5px)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.brightness}`} />
                <p className={styles.filterLabel}>brightness(1.5)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.brightnessDark}`} />
                <p className={styles.filterLabel}>brightness(0.5)</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Contrast & Grayscale"
            code={`/* Contrast adjustment */
.high-contrast {
    filter: contrast(200%);
}

/* Grayscale conversion */
.grayscale {
    filter: grayscale(100%);
}

/* Partial grayscale */
.desaturated {
    filter: grayscale(50%);
}`}
          >
            <div className={styles.filterGrid}>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.contrastHigh}`} />
                <p className={styles.filterLabel}>contrast(2)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.contrastLow}`} />
                <p className={styles.filterLabel}>contrast(0.5)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.grayscale}`} />
                <p className={styles.filterLabel}>grayscale(1)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.grayscalePartial}`} />
                <p className={styles.filterLabel}>grayscale(0.5)</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Hue Rotate & Invert"
            code={`/* Hue rotation */
.hue-shift {
    filter: hue-rotate(90deg);
}

/* Colour inversion */
.invert {
    filter: invert(100%);
}

/* Partial inversion */
.semi-invert {
    filter: invert(50%);
}`}
          >
            <div className={styles.filterGrid}>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.hueRotate90}`} />
                <p className={styles.filterLabel}>hue-rotate(90deg)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.hueRotate180}`} />
                <p className={styles.filterLabel}>hue-rotate(180deg)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.invert}`} />
                <p className={styles.filterLabel}>invert(1)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.invertPartial}`} />
                <p className={styles.filterLabel}>invert(0.5)</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Saturate & Sepia"
            code={`/* Saturation control */
.vibrant {
    filter: saturate(200%);
}

.muted {
    filter: saturate(50%);
}

/* Sepia tone */
.vintage {
    filter: sepia(100%);
}`}
          >
            <div className={styles.filterGrid}>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.saturate}`} />
                <p className={styles.filterLabel}>saturate(2)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.desaturate}`} />
                <p className={styles.filterLabel}>saturate(0.5)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.sepia}`} />
                <p className={styles.filterLabel}>sepia(1)</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.sepiaPartial}`} />
                <p className={styles.filterLabel}>sepia(0.5)</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Advanced Filter Techniques ───── */}
      <Section
        title="Advanced Filter Techniques"
        intro="Combine multiple filters and use special effects to create unique visual styles."
        id="advanced"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Drop Shadow"
            code={`/* Drop shadow (follows alpha) */
.shadow {
    filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.3));
}

/* Coloured shadow */
.glow {
    filter: drop-shadow(0 0 20px #3b82f6);
}

/* Multiple shadows */
.multi {
    filter:
        drop-shadow(5px 5px 5px rgba(0,0,0,0.3))
        drop-shadow(-5px -5px 5px rgba(255,255,255,0.3));
}`}
          >
            <div className={styles.shadowGrid}>
              <div className={styles.shadowItem}>
                <div className={`${styles.shadowDemo} ${styles.basicShadow}`} />
                <p className={styles.filterLabel}>Basic Shadow</p>
              </div>
              <div className={styles.shadowItem}>
                <div className={`${styles.shadowDemo} ${styles.colourShadow}`} />
                <p className={styles.filterLabel}>Colour Shadow</p>
              </div>
              <div className={styles.shadowItem}>
                <div className={`${styles.shadowDemo} ${styles.multiShadow}`} />
                <p className={styles.filterLabel}>Multiple Shadows</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Combined Filters"
            code={`/* Instagram-like filters */
.vintage {
    filter:
        contrast(1.2)
        brightness(1.1)
        sepia(0.3)
        saturate(1.4);
}

.cool {
    filter:
        brightness(1.1)
        hue-rotate(180deg)
        saturate(0.7);
}

.dramatic {
    filter:
        contrast(1.5)
        brightness(0.9)
        grayscale(0.3);
}`}
          >
            <div className={styles.filterGrid}>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.instagram1}`} />
                <p className={styles.filterLabel}>Vintage</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.instagram2}`} />
                <p className={styles.filterLabel}>Cool Tone</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.instagram3}`} />
                <p className={styles.filterLabel}>Warm Tone</p>
              </div>
              <div className={styles.filterItem}>
                <div className={`${styles.filterImage} ${styles.instagram4}`} />
                <p className={styles.filterLabel}>Dramatic</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="SVG Filters"
            code={`/* Reference SVG filter */
.goo-effect {
    filter: url(#goo);
}

/* SVG filter definition */
<filter id="goo">
    <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="10" />
    <feColorMatrix
        mode="matrix"
        values="..." />
</filter>`}
          >
            <div className={styles.svgFilterDemo}>
              <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="goo"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
              <div className={styles.gooEffect}>
                <div className={styles.gooBall} />
                <div className={styles.gooBall} />
                <div className={styles.gooBall} />
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Interactive Filter Playground ───── */}
      <Section
        title="Interactive Filter Playground"
        intro="Experiment with different filter combinations in real-time!"
        id="playground"
      >
        <FilterPlayground />
      </Section>

      {/* ───── Creative Filter Effects ───── */}
      <Section
        title="Creative Filter Effects"
        intro="Push the boundaries with creative filter applications and animations."
        id="creative"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Hover Effects"
            code={`/* Hover transitions */
.card {
    transition: filter 0.3s ease;
}

.card:hover {
    filter: brightness(1.1) saturate(1.2);
}

/* Focus effect */
.gallery img {
    filter: grayscale(1) brightness(0.7);
    transition: filter 0.3s;
}

.gallery img:hover {
    filter: grayscale(0) brightness(1);
}`}
          >
            <div className={styles.hoverGrid}>
              <div className={`${styles.hoverItem} ${styles.hoverBlur}`}>
                Blur on Hover
              </div>
              <div className={`${styles.hoverItem} ${styles.hoverBright}`}>
                Brighten
              </div>
              <div className={`${styles.hoverItem} ${styles.hoverRotate}`}>
                Hue Shift
              </div>
              <div className={`${styles.hoverItem} ${styles.hoverGray}`}>
                Grayscale
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Animated Filters"
            code={`/* Animated filters */
@keyframes pulse-brightness {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
}

@keyframes hue-cycle {
    to { filter: hue-rotate(360deg); }
}

.animated {
    animation: hue-cycle 5s linear infinite;
}`}
          >
            <div className={styles.animatedFilters}>
              <div className={`${styles.animatedFilter} ${styles.pulseFilter}`}>
                Pulsing
              </div>
              <div className={`${styles.animatedFilter} ${styles.rotateFilter}`}>
                Rotating Hue
              </div>
              <div className={`${styles.animatedFilter} ${styles.glitchFilter}`}>
                Glitch
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Text Effects"
            code={`/* Text with filters */
.shadow-text {
    filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.5));
}

.glow-text {
    filter:
        drop-shadow(0 0 10px #3b82f6)
        drop-shadow(0 0 20px #3b82f6);
}

.blur-text {
    filter: blur(2px);
    transition: filter 0.3s;
}

.blur-text:hover {
    filter: blur(0);
}`}
          >
            <div className={styles.textEffects}>
              <h3 className={styles.textShadowFilter}>Shadow Text</h3>
              <h3 className={styles.textGlowFilter}>Glowing Text</h3>
              <h3 className={styles.textBlurFilter}>Blurred Text</h3>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section
        title="Filter Best Practices"
        id="best-practices"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Performance & Accessibility Tips"
            code={`/* GPU-accelerated filter usage */
.element {
    filter: blur(5px);
    will-change: filter; /* hint to browser */
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
    .animated {
        animation: none;
    }
}`}
          >
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">!</span>
                <h4>Performance</h4>
                <p>
                  Filters can be GPU-intensive. Test performance, especially on
                  mobile devices. Use <code>will-change: filter</code> sparingly
                  to hint browser optimisation.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">~</span>
                <h4>Subtlety is Key</h4>
                <p>
                  Often, subtle filter effects work better than dramatic ones
                  for professional designs. Small adjustments can make a big
                  difference.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">*</span>
                <h4>Accessibility</h4>
                <p>
                  Ensure filtered content remains readable and doesn&apos;t rely
                  solely on colour. Always provide sufficient contrast ratios.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Continue Your Journey ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Filters mastered! Apply your skills to real-world components, or explore
          blend modes for even more visual effects.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/buttons" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              #
            </span>
            <div>
              <h3>Buttons</h3>
              <p>Craft beautiful, interactive button components</p>
            </div>
          </Link>
          <Link href="/blend-modes" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              &amp;
            </span>
            <div>
              <h3>Blend Modes</h3>
              <p>Layer and blend elements for creative effects</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
