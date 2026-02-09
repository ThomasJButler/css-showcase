import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Shapes & Clipping | CSS Showcase",
  description:
    "Master CSS Shapes and Clipping — create polygons, circles, and custom shapes with clip-path and shape-outside for unique, non-rectangular designs.",
}

const POLYGONS = [
  { name: "Triangle", className: styles.polyTriangle },
  { name: "Diamond", className: styles.polyDiamond },
  { name: "Hexagon", className: styles.polyHexagon },
  { name: "Octagon", className: styles.polyOctagon },
  { name: "Star", className: styles.polyStar },
  { name: "Arrow", className: styles.polyArrow },
] as const

export default function ShapesClipsPage() {
  return (
    <>
      <PageHero
        title="CSS Shapes & Clipping"
        subtitle="Break free from the rectangle. Create polygons, circles, and custom shapes with clip-path. Make text flow around curves with shape-outside. Design like never before."
      />

      {/* ───── Beyond the Box ───── */}
      <Section
        title="Beyond the Box"
        intro="By default, everything in CSS is a rectangle. But with clip-path and shape-outside, you can create circular buttons, diagonal sections, polygon cards, and text that wraps around custom shapes. Let's escape the box!"
        id="intro"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Four Fundamental Shapes"
            description="clip-path clips an element to a specific shape. shape-outside makes text flow around a shape. Together, they unlock non-rectangular design."
            code={`/* clip-path clips (cuts) an element to a shape */
.circle { clip-path: circle(50%); }
.triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
.hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%,
           75% 100%, 25% 100%, 0% 50%); }

/* shape-outside makes text flow around a shape */
.float { shape-outside: circle(50%); }`}
          >
            <div className={styles.introGrid}>
              <div className={`${styles.introShape} ${styles.introCircle}`}>
                Circle
              </div>
              <div className={`${styles.introShape} ${styles.introTriangle}`}>
                Triangle
              </div>
              <div className={`${styles.introShape} ${styles.introHexagon}`}>
                Hexagon
              </div>
              <div className={`${styles.introShape} ${styles.introStar}`}>
                Star
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.propertyList}>
          <div className={styles.propertyItem}>
            <strong>clip-path:</strong> Clips (cuts) an element to a specific
            shape — anything outside the region is hidden
          </div>
          <div className={styles.propertyItem}>
            <strong>shape-outside:</strong> Makes text flow around a shape on
            floated elements — magazine-style wrapping
          </div>
        </div>
      </Section>

      {/* ───── clip-path Basics ───── */}
      <Section
        title="clip-path Basics"
        intro="The clip-path property lets you define a clipping region for an element. Anything outside the region is hidden."
        id="clip-path-basics"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Shape Functions"
            description="CSS provides three built-in shape functions: circle(), ellipse(), and inset(). Each takes different parameters to define the clipping region."
            code={`/* Circle — radius at centre */
.circle {
    clip-path: circle(50%);
}

/* Ellipse — horizontal and vertical radius */
.ellipse {
    clip-path: ellipse(50% 30% at 50% 50%);
}

/* Inset — rectangle with optional rounded corners */
.inset {
    clip-path: inset(20px 20px 20px 20px round 20px);
}`}
          >
            <div className={styles.basicShapesGrid}>
              <div className={styles.basicShape}>
                <div className={`${styles.shapeBox} ${styles.clipCircle}`} />
                <span className={styles.shapeLabel}>circle()</span>
              </div>
              <div className={styles.basicShape}>
                <div className={`${styles.shapeBox} ${styles.clipEllipse}`} />
                <span className={styles.shapeLabel}>ellipse()</span>
              </div>
              <div className={styles.basicShape}>
                <div className={`${styles.shapeBox} ${styles.clipInset}`} />
                <span className={styles.shapeLabel}>inset()</span>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Polygon Shapes ───── */}
      <Section
        title="Polygon Shapes"
        intro="The polygon() function is where things get really creative. Define any shape using x,y coordinate pairs."
        id="polygon-shapes"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Polygon Gallery"
            description="Each polygon is defined by a series of x,y points. Hover to enlarge. Use tools like Clippy to visually create clip-path coordinates."
            code={`/* Triangle pointing up */
.triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Diamond shape */
.diamond {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

/* Hexagon */
.hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%,
                        75% 100%, 25% 100%, 0% 50%);
}

/* Star (5-pointed) */
.star {
    clip-path: polygon(
        50% 0%, 61% 35%, 98% 35%, 68% 57%,
        79% 91%, 50% 70%, 21% 91%, 32% 57%,
        2% 35%, 39% 35%
    );
}`}
          >
            <div className={styles.polygonGallery}>
              {POLYGONS.map((poly) => (
                <div key={poly.name} className={styles.polygonCard}>
                  <div className={`${styles.polyShape} ${poly.className}`} />
                  <span className={styles.polyName}>{poly.name}</span>
                </div>
              ))}
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Real-World Examples ───── */}
      <Section
        title="Real-World Examples"
        intro="clip-path shines in production — diagonal hero sections, shaped profile images, and interactive hover reveals."
        id="real-world"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Hero Section with Diagonal Edge"
            description="A diagonal clip-path at the bottom creates a modern, dynamic hero section that breaks the grid."
            code={`.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 5rem 2rem 8rem;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    /* Diagonal bottom edge */
}`}
          >
            <div className={styles.diagonalHero}>
              <h3>Welcome to Our Site</h3>
              <p>Creating dynamic, modern layouts with CSS shapes</p>
            </div>
          </DemoCard>

          <DemoCard
            title="Shaped Profile Images"
            description="Clip-path creates distinctive profile image shapes — circles, hexagons, and iOS-style squircles."
            code={`.profile-circle {
    clip-path: circle(50%);
}

.profile-hexagon {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%,
                        75% 100%, 25% 100%, 0% 50%);
}

/* Squircle (rounded square) — iOS-style */
.profile-squircle {
    clip-path: inset(0 0 0 0 round 30%);
}`}
          >
            <div className={styles.profileDemo}>
              <div>
                <div
                  className={`${styles.profileShape} ${styles.profileCircle}`}
                >
                  AB
                </div>
                <p className={styles.profileLabel}>circle()</p>
              </div>
              <div>
                <div
                  className={`${styles.profileShape} ${styles.profileHexagon}`}
                >
                  CD
                </div>
                <p className={styles.profileLabel}>polygon()</p>
              </div>
              <div>
                <div
                  className={`${styles.profileShape} ${styles.profileSquircle}`}
                >
                  EF
                </div>
                <p className={styles.profileLabel}>inset()</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Image Reveal on Hover"
            description="Transition clip-path to create an expanding circle reveal. Hover over the shape to see it grow."
            code={`.image {
    clip-path: circle(20% at 50% 50%);
    transition: clip-path 0.5s ease;
}

.image:hover {
    clip-path: circle(70% at 50% 50%);
    /* Expands on hover */
}`}
          >
            <div className={styles.revealDemo}>
              <div className={styles.revealImage}>
                <span>Hover Me</span>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── shape-outside: Text Flow ───── */}
      <Section
        title="shape-outside: Text Flow"
        intro="The shape-outside property controls how text wraps around floated elements. Create magazine-style layouts with text flowing around circles, polygons, or images."
        id="shape-outside"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Text Around Circle"
            description="Float an element with shape-outside: circle() to make text wrap naturally around the curved edge."
            code={`.float-circle {
    width: 200px;
    height: 200px;
    float: left;
    margin-right: 2rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    shape-outside: circle(50%);
    /* Text flows around the circle */
}`}
          >
            <div className={styles.textWrapDemo}>
              <div className={styles.floatCircle} />
              <p className={styles.wrapText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </DemoCard>

          <DemoCard
            title="Text Around Polygon"
            description="Combine clip-path and shape-outside with the same polygon coordinates for perfect visual and text wrapping."
            code={`.float-diamond {
    width: 200px;
    height: 200px;
    float: left;
    margin-right: 2rem;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    shape-outside: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    /* Both clip-path and shape-outside for perfect wrapping */
}`}
          >
            <div className={styles.textWrapDemo}>
              <div className={styles.floatDiamond} />
              <p className={styles.wrapText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Animated Shapes ───── */}
      <Section
        title="Animated Shapes"
        intro="Combine clip-path with transitions and animations for eye-catching effects. clip-path is animatable when both states have the same number of points."
        id="animated-shapes"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Shape Morphing, Pulsing & Spinning"
            description="Hover the first shape to morph it. The second pulses with a keyframe animation. The third spins using transform."
            code={`/* Shape morphing on hover */
.morph {
    clip-path: circle(50%);
    transition: clip-path 0.5s ease;
}

.morph:hover {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%,
                        75% 100%, 25% 100%, 0% 50%);
}

/* Pulsing animation */
@keyframes pulse {
    0%, 100% { clip-path: circle(40%); }
    50% { clip-path: circle(50%); }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}`}
          >
            <div className={styles.animatedGrid}>
              <div className={`${styles.animatedShape} ${styles.morphShape}`}>
                Hover
              </div>
              <div className={`${styles.animatedShape} ${styles.pulseShape}`}>
                Pulse
              </div>
              <div className={`${styles.animatedShape} ${styles.rotateShape}`}>
                Spin
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Browser Support & Best Practices ───── */}
      <Section
        title="Browser Support & Best Practices"
        intro="clip-path and shape-outside enjoy excellent modern browser support. Follow these best practices for production use."
        id="best-practices"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Feature Detection with @supports"
            description="Always design with clip-path as an enhancement — elements display as rectangles in unsupported browsers."
            code={`/* Feature detection */
@supports (clip-path: circle(50%)) {
    .fancy-shape {
        clip-path: polygon(50% 0%, 100% 50%,
                           50% 100%, 0% 50%);
    }
}

/* Fallback for unsupported browsers */
.fancy-shape {
    border-radius: 50%; /* Simple circle fallback */
}`}
          >
            <ul className={styles.supportList}>
              <li>
                <strong>clip-path:</strong> Chrome 55+, Firefox 54+, Safari 9.1+
              </li>
              <li>
                <strong>shape-outside:</strong> Chrome 37+, Safari 10.1+,
                Firefox 62+
              </li>
              <li>
                <strong>Fallback:</strong> Elements without clip-path support
                display as rectangles — ensure your design still works!
              </li>
            </ul>
          </DemoCard>

          <DemoCard
            title="Performance & Accessibility Tips"
            description="clip-path is GPU-accelerated, but complex polygons with hundreds of points can slow rendering."
            code={`/* GPU acceleration — clip-path performs well */
.shape {
    clip-path: circle(50%);
    will-change: clip-path; /* Hint for animations */
}

/* Combine with transform for smooth animations */
.animated-shape {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: clip-path 0.4s ease, transform 0.4s ease;
}`}
          >
            <ul className={styles.tipsList}>
              <li>
                <strong>GPU acceleration:</strong> clip-path is GPU-accelerated
                and performs well
              </li>
              <li>
                <strong>Avoid complex polygons:</strong> Hundreds of points can
                slow down rendering
              </li>
              <li>
                <strong>Ensure readability:</strong> Don&apos;t clip text content
                — it might be hard to read
              </li>
              <li>
                <strong>Touch targets:</strong> Make sure clipped buttons/links
                are still easy to tap
              </li>
              <li>
                <strong>Screen readers:</strong> Clipped content is still read by
                assistive tech
              </li>
              <li>
                <strong>Start simple:</strong> Begin with basic shapes before
                complex polygons
              </li>
            </ul>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
