import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { CodeBlock } from "@/components/code-block"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Responsive Design | CSS Showcase",
  description:
    "Master responsive design — build websites that look amazing on every device with media queries, fluid typography, responsive images, and mobile-first techniques.",
}

export default function ResponsiveDesignPage() {
  return (
    <>
      <PageHero
        title="Responsive Design"
        subtitle="Build websites that look amazing on every device. Master media queries, fluid layouts, responsive images, and mobile-first development strategies."
      />

      {/* ───── Fundamentals Section ───── */}
      <Section
        title="Responsive Design Fundamentals"
        intro="Responsive design ensures your website adapts seamlessly to any screen size — from phones to tablets to desktops. It's not just about making things smaller; it's about creating optimal experiences for each device."
        id="fundamentals"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="The Viewport Meta Tag"
            description="This small tag is essential for responsive design. Without it, mobile browsers render your site at desktop width and scale it down, breaking your responsive styles."
            code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            language="html"
          >
            <div className="text-sm text-[var(--text-secondary)]">
              <p>
                Every responsive website needs this tag in the{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
                  &lt;head&gt;
                </code>
                . It tells mobile browsers to use the device&apos;s actual width
                instead of a virtual desktop viewport.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className="mt-6">
          <DemoGrid columns={1}>
            <DemoCard
              title="Relative Units"
              code={`/* Fixed units — don't scale */
.fixed { width: 300px; }

/* Relative to parent */
.relative { width: 50%; }

/* Relative to root font-size (usually 16px) */
.rem { font-size: 1.5rem; /* 24px */ }

/* Relative to viewport width */
.viewport { width: 50vw; /* 50% of viewport width */ }

/* Relative to current font-size */
.em { padding: 2em; /* 2× current font size */ }`}
            >
              <div className={styles.unitsComparison}>
                <div className={`${styles.unitBox} ${styles.unitPx}`}>100px</div>
                <div className={`${styles.unitBox} ${styles.unitPercent}`}>50%</div>
                <div className={`${styles.unitBox} ${styles.unitRem}`}>5rem</div>
                <div className={`${styles.unitBox} ${styles.unitVw}`}>25vw</div>
              </div>
            </DemoCard>
          </DemoGrid>
        </div>

        <div className="mt-4 space-y-1 text-sm text-[var(--text-secondary)]">
          <p>
            <strong className="text-foreground">%:</strong> Relative to parent
            element — great for fluid layouts
          </p>
          <p>
            <strong className="text-foreground">rem:</strong> Relative to root
            font-size — consistent scaling across components
          </p>
          <p>
            <strong className="text-foreground">em:</strong> Relative to current
            font-size — component-level scaling
          </p>
          <p>
            <strong className="text-foreground">vw/vh:</strong> Viewport-relative
            — full-width/height sections
          </p>
          <p>
            <strong className="text-foreground">vmin/vmax:</strong> Smaller/larger
            viewport dimension
          </p>
        </div>
      </Section>

      {/* ───── Media Queries Section ───── */}
      <Section
        title="Media Queries"
        intro="Media queries let you apply different styles based on device characteristics like screen width, height, orientation, or resolution. They're the foundation of responsive design."
        id="media-queries"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Syntax"
            code={`/* Mobile-first approach (recommended) */
.container {
    padding: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 32px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        padding: 48px;
    }
}`}
          >
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Start with mobile styles as the default, then layer on
                complexity for larger screens using{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
                  min-width
                </code>
                . This keeps mobile CSS lean and fast.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className="mt-6">
          <DemoGrid columns={1}>
            <DemoCard
              title="Common Breakpoints"
              code={`/* Mobile: 0–767px (default, no media query needed) */

/* Tablet: 768px and up */
@media (min-width: 768px) { }

/* Desktop: 1024px and up */
@media (min-width: 1024px) { }

/* Large Desktop: 1440px and up */
@media (min-width: 1440px) { }

/* Between specific widths */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Portrait/Landscape orientation */
@media (orientation: portrait) { }
@media (orientation: landscape) { }`}
            >
              <div className={styles.breakpointVisualiser}>
                <div className={styles.bpIndicator}>
                  <div className="flex items-center">
                    <span className={styles.bpIcon}>SM</span>
                    <span className={styles.bpLabel}>Mobile</span>
                  </div>
                  <span className={styles.bpRange}>&lt; 768px</span>
                </div>
                <div className={styles.bpIndicator}>
                  <div className="flex items-center">
                    <span className={styles.bpIcon}>MD</span>
                    <span className={styles.bpLabel}>Tablet</span>
                  </div>
                  <span className={styles.bpRange}>768px – 1023px</span>
                </div>
                <div className={`${styles.bpIndicator} ${styles.bpActive}`}>
                  <div className="flex items-center">
                    <span className={styles.bpIcon}>LG</span>
                    <span className={styles.bpLabel}>Desktop</span>
                  </div>
                  <span className={styles.bpRange}>1024px – 1439px</span>
                </div>
                <div className={styles.bpIndicator}>
                  <div className="flex items-center">
                    <span className={styles.bpIcon}>XL</span>
                    <span className={styles.bpLabel}>Large</span>
                  </div>
                  <span className={styles.bpRange}>&gt; 1440px</span>
                </div>
              </div>
            </DemoCard>
          </DemoGrid>
        </div>

        <div className={styles.tipBox}>
          <h4>Mobile-First vs Desktop-First</h4>
          <p>
            <strong>Mobile-first (recommended):</strong> Start with mobile
            styles, then add complexity for larger screens using{" "}
            <code>min-width</code>. Easier to maintain and better performance on
            mobile devices.
          </p>
          <p>
            <strong>Desktop-first:</strong> Start with desktop styles, then
            override for smaller screens using <code>max-width</code>. Can lead
            to bloated mobile CSS as you&apos;re removing desktop complexity.
          </p>
        </div>
      </Section>

      {/* ───── Fluid Typography Section ───── */}
      <Section
        title="Fluid Typography"
        intro="Fluid typography scales smoothly between minimum and maximum sizes based on viewport width. No more jarring jumps between breakpoints!"
        id="fluid-typography"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="The clamp() Function"
            code={`/* clamp(minimum, preferred, maximum) */
h1 {
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    /* Minimum 2rem (32px), scales with viewport, max 4rem (64px) */
}

h2 {
    font-size: clamp(1.5rem, 3vw + 1rem, 3rem);
}

p {
    font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
}

/* Line height scales too */
.text {
    line-height: clamp(1.5, 1vw + 1.2, 1.8);
}`}
          >
            <h2 className={styles.fluidHeading}>
              Resize your browser to see me scale smoothly!
            </h2>
          </DemoCard>
        </DemoGrid>

        <div className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
          <p>
            <strong className="text-foreground">How it works:</strong>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
              clamp()
            </code>{" "}
            accepts three values — minimum, preferred (typically viewport-based),
            and maximum. The browser calculates the preferred value, but
            constrains it between min and max.
          </p>
          <p>
            This creates smooth scaling across all viewport sizes without media
            queries!
          </p>
        </div>
      </Section>

      {/* ───── Responsive Images Section ───── */}
      <Section
        title="Responsive Images"
        intro="Images need special attention in responsive design. Serve appropriately sized images to save bandwidth and improve performance."
        id="responsive-images"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Responsive Images"
            code={`/* Make images fluid by default */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Maintain aspect ratio while filling container */
.image-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* or contain, fill, scale-down */
    object-position: centre;
}`}
          >
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Setting{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
                  max-width: 100%
                </code>{" "}
                and{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
                  height: auto
                </code>{" "}
                on images ensures they never overflow their container while
                maintaining their aspect ratio.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className="mt-6">
          <DemoGrid columns={1}>
            <DemoCard
              title="Object-Fit Examples"
              code={`/* cover: fills entire container, may crop */
.cover { object-fit: cover; }

/* contain: fits inside container, may have gaps */
.contain { object-fit: contain; }

/* fill: stretches to fill (may distort) */
.fill { object-fit: fill; }`}
            >
              <div className={styles.objectFitDemo}>
                <div className={styles.fitBox}>
                  <div className={styles.fitItem}>
                    <div className={styles.fitCover}>cover</div>
                  </div>
                  <span>cover</span>
                </div>
                <div className={styles.fitBox}>
                  <div className={styles.fitItem}>
                    <div className={styles.fitContain}>contain</div>
                  </div>
                  <span>contain</span>
                </div>
                <div className={styles.fitBox}>
                  <div className={styles.fitItem}>
                    <div className={styles.fitFill}>fill</div>
                  </div>
                  <span>fill</span>
                </div>
              </div>
            </DemoCard>
          </DemoGrid>
        </div>

        <div className="mt-6">
          <CodeBlock
            code={`<!-- srcset: serve different images for different screen sizes -->
<img
    src="image-800w.jpg"
    srcset="image-400w.jpg 400w,
            image-800w.jpg 800w,
            image-1200w.jpg 1200w"
    sizes="(max-width: 600px) 400px,
           (max-width: 1000px) 800px,
           1200px"
    alt="Responsive image"
>

<!-- picture element: art direction (different crops for different sizes) -->
<picture>
    <source media="(min-width: 1024px)" srcset="wide-image.jpg">
    <source media="(min-width: 768px)" srcset="medium-image.jpg">
    <img src="mobile-image.jpg" alt="Adaptive image">
</picture>`}
            language="html"
            title="HTML srcset & picture element"
          />
        </div>
      </Section>

      {/* ───── Responsive Layout Patterns Section ───── */}
      <Section
        title="Responsive Layout Patterns"
        intro="Common patterns for adapting layouts across screen sizes."
        id="layout-patterns"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Responsive Grid"
            code={`/* Auto-responsive grid — no media queries! */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
}

/* Or with media queries for more control */
.grid {
    display: grid;
    grid-template-columns: 1fr; /* Mobile: 1 column */
    gap: 16px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
        gap: 24px;
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
        gap: 32px;
    }
}`}
          >
            <div className={styles.responsiveGrid}>
              <div className={styles.gridCard}>1</div>
              <div className={styles.gridCard}>2</div>
              <div className={styles.gridCard}>3</div>
              <div className={styles.gridCard}>4</div>
              <div className={styles.gridCard}>5</div>
              <div className={styles.gridCard}>6</div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className="mt-6">
          <DemoGrid columns={1}>
            <DemoCard
              title="Responsive Navigation"
              code={`/* Mobile: Hidden navigation, show hamburger */
.nav-links {
    display: none;
}

.hamburger {
    display: block;
}

/* Desktop: Show navigation, hide hamburger */
@media (min-width: 768px) {
    .nav-links {
        display: flex;
        gap: 24px;
    }

    .hamburger {
        display: none;
    }
}`}
            >
              <div className={styles.responsiveNavDemo}>
                <div className={styles.demoNavMobile}>
                  <span>Mobile: Hamburger Menu</span>
                  <button className={styles.demoHamburger} aria-label="Example hamburger menu button">
                    ☰
                  </button>
                </div>
                <div className={styles.demoNavDesktop}>
                  <span>Desktop: Horizontal Nav</span>
                  <nav className={styles.demoNavLinks}>
                    <a href="#layout-patterns" aria-label="Home navigation demo link">
                      Home
                    </a>
                    <a href="#layout-patterns" aria-label="About navigation demo link">
                      About
                    </a>
                    <a href="#layout-patterns" aria-label="Services navigation demo link">
                      Services
                    </a>
                    <a href="#layout-patterns" aria-label="Contact navigation demo link">
                      Contact
                    </a>
                  </nav>
                </div>
              </div>
            </DemoCard>
          </DemoGrid>
        </div>
      </Section>

      {/* ───── Container Queries Section ───── */}
      <Section
        title="Container Queries (Modern)"
        intro="Container queries let components respond to their container's size instead of the viewport. This enables truly reusable, context-aware components."
        id="container-queries"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Container Query Syntax"
            code={`/* Define a container */
.sidebar {
    container-type: inline-size;
    container-name: sidebar;
}

/* Query the container, not the viewport */
@container sidebar (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
}`}
          >
            <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Container queries move responsive logic from the viewport to the
                component level. A card can adapt based on its actual available
                space, not the browser window.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>

        <p className="mt-4 text-sm text-[var(--text-secondary)]">
          For a deep dive into container queries, check out the dedicated{" "}
          <Link
            href="/container-queries"
            className="font-medium text-[var(--primary)] underline underline-offset-4"
          >
            Container Queries page
          </Link>
          .
        </p>
      </Section>

      {/* ───── Best Practices Section ───── */}
      <Section
        title="Best Practices"
        intro="Essential guidelines for building responsive websites that are fast, accessible, and delightful to use."
        id="best-practices"
      >
        <DemoGrid columns={2}>
          <DemoCard
            title="Touch Targets"
            description="Minimum 44×44px — the WCAG guideline for touch targets. Smaller targets are hard to tap accurately, especially for users with motor impairments."
            code={`/* Ensure buttons and links are tappable */
button, a {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
}

/* Or use padding to reach the minimum */
.link {
    padding: 12px 16px;
}`}
          >
            <div className="flex gap-4 items-end">
              <button
                className="flex items-center justify-center rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                style={{ minWidth: 44, minHeight: 44, padding: "12px 24px" }}
                aria-label="44px touch target demo"
              >
                44×44px
              </button>
              <button
                className="flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted-foreground)] text-xs"
                style={{ width: 24, height: 24 }}
                aria-label="24px touch target demo (too small)"
              >
                24
              </button>
              <span className="text-xs text-[var(--muted-foreground)]">← Too small!</span>
            </div>
          </DemoCard>

          <DemoCard title="Performance on Mobile">
            <ul className={styles.practicesList}>
              <li>
                <span className={styles.practiceIcon} aria-hidden="true">
                  ◆
                </span>
                <span>
                  <strong>Optimise images:</strong> Use modern formats (WebP,
                  AVIF) and appropriate sizes
                </span>
              </li>
              <li>
                <span className={styles.practiceIcon} aria-hidden="true">
                  ◆
                </span>
                <span>
                  <strong>Minimise JavaScript:</strong> Mobile CPUs are slower —
                  keep JS lightweight
                </span>
              </li>
              <li>
                <span className={styles.practiceIcon} aria-hidden="true">
                  ◆
                </span>
                <span>
                  <strong>Use system fonts:</strong> Save bandwidth by using
                  fonts already on the device
                </span>
              </li>
              <li>
                <span className={styles.practiceIcon} aria-hidden="true">
                  ◆
                </span>
                <span>
                  <strong>Lazy load:</strong> Load images and content as users
                  scroll to them
                </span>
              </li>
              <li>
                <span className={styles.practiceIcon} aria-hidden="true">
                  ◆
                </span>
                <span>
                  <strong>Test on real devices:</strong> Simulators don&apos;t
                  capture real-world performance
                </span>
              </li>
            </ul>
          </DemoCard>
        </DemoGrid>

        <div className="mt-6">
          <DemoGrid columns={1}>
            <DemoCard title="Testing Checklist">
              <ul className={styles.practicesList}>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Test on actual mobile devices (iOS and Android)
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Verify touch targets are large enough (44×44px minimum)
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>Check text readability without zooming</span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>Test forms on mobile keyboards</span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>Verify images load quickly on 3G</span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Check horizontal scrolling (should be none!)
                  </span>
                </li>
                <li>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Test both portrait and landscape orientations
                  </span>
                </li>
              </ul>
            </DemoCard>
          </DemoGrid>
        </div>
      </Section>

      {/* ───── Pro Tips Section ───── */}
      <Section title="Responsive Design Tips" id="tips">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipCardIcon} aria-hidden="true">
              ↕
            </span>
            <h3>Mobile-First Always</h3>
            <p>
              Start with the smallest screen and progressively enhance. This
              keeps mobile CSS lean and prevents you from fighting desktop
              overrides.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipCardIcon} aria-hidden="true">
              ƒ
            </span>
            <h3>Use clamp() for Fluid Sizing</h3>
            <p>
              Replace fixed font sizes and spacing with{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
                clamp()
              </code>
              . Fewer breakpoints, smoother scaling, better UX.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipCardIcon} aria-hidden="true">
              #
            </span>
            <h3>auto-fit + minmax()</h3>
            <p>
              Let CSS Grid handle responsiveness automatically with{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
                repeat(auto-fit, minmax(250px, 1fr))
              </code>
              . Zero media queries needed.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Keep Learning Section ───── */}
      <Section title="Keep Learning" id="keep-learning">
        <p className="mb-6 text-[var(--text-secondary)]">
          Ready to dive deeper into layout techniques that complement responsive
          design?
        </p>
        <div className={styles.relatedGrid}>
          <Link href="/layout" className={styles.relatedCard}>
            <span className={styles.relatedIcon} aria-hidden="true">
              #
            </span>
            <div>
              <h3>Layout Techniques</h3>
              <p>
                Master fundamental layout concepts that work hand-in-hand with
                responsive design
              </p>
            </div>
          </Link>
          <Link href="/flexbox" className={styles.relatedCard}>
            <span className={styles.relatedIcon} aria-hidden="true">
              {"|"}
            </span>
            <div>
              <h3>Flexbox</h3>
              <p>
                One-dimensional layouts that adapt beautifully to different
                screen sizes
              </p>
            </div>
          </Link>
          <Link href="/grid" className={styles.relatedCard}>
            <span className={styles.relatedIcon} aria-hidden="true">
              {"="}
            </span>
            <div>
              <h3>CSS Grid</h3>
              <p>
                The most powerful two-dimensional layout system with built-in
                responsive capabilities
              </p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
