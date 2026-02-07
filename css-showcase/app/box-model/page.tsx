import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { BoxModelPlayground } from "./box-model-playground"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Box Model | CSS Showcase",
  description:
    "Master the CSS Box Model — padding, margin, borders, and box-sizing. Interactive examples and visual demonstrations.",
}

export default function BoxModelPage() {
  return (
    <>
      <PageHero
        title="The Box Model"
        subtitle="Everything in CSS is a box — master how they work and you'll master layouts"
      />

      {/* ───── Fundamentals Section ───── */}
      <Section
        title="Box Model Fundamentals"
        intro="The CSS box model describes how every element is rendered as a rectangular box, consisting of content, padding, border, and margin layers."
        id="fundamentals"
      >
        <DemoGrid columns={1}>
          {/* Box Anatomy — wide card */}
          <DemoCard
            title="The Anatomy of a Box"
            code={`/* The box model layers */
.element {
    /* Content dimensions */
    width: 300px;
    height: 150px;

    /* Padding: space inside the border */
    padding: 20px;

    /* Border: the element's frame */
    border: 5px solid var(--colour-primary);

    /* Margin: space outside the border */
    margin: 30px;

    /* Background affects content + padding */
    background: var(--colour-surface);
}`}
          >
            <div className={styles.boxModelVisual}>
              <div className={styles.marginLayer}>
                <span className={styles.layerLabel}>Margin</span>
                <div className={styles.borderLayer}>
                  <span className={styles.layerLabel}>Border</span>
                  <div className={styles.paddingLayer}>
                    <span className={styles.layerLabel}>Padding</span>
                    <div className={styles.contentLayer}>
                      <span className={styles.layerLabel}>Content</span>
                      <p>The actual content of your element lives here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <DemoGrid columns={2} className="mt-6">
          {/* Padding */}
          <DemoCard
            title="Padding"
            code={`/* Padding variations */
.uniform {
    padding: 20px;
}

.directional {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}

.shorthand {
    /* top right bottom left */
    padding: 10px 20px 30px 40px;

    /* vertical horizontal */
    padding: 20px 40px;
}`}
          >
            <div className={styles.paddingExamples}>
              <div className={`${styles.paddingDemo} ${styles.uniform}`}>
                Uniform padding: 20px
              </div>
              <div className={`${styles.paddingDemo} ${styles.directional}`}>
                Different padding per side
              </div>
              <div className={`${styles.paddingDemo} ${styles.shorthand}`}>
                Shorthand: top/bottom left/right
              </div>
            </div>
          </DemoCard>

          {/* Margin */}
          <DemoCard
            title="Margin"
            code={`/* Margin techniques */
.basic {
    margin: 20px;
}

.auto {
    width: 200px;
    margin: 0 auto; /* Horizontal centering */
}

.negative {
    margin-top: -10px; /* Pulls element up */
    margin-left: -20px; /* Overlaps left */
}

/* Margin collapse */
.paragraph {
    margin-bottom: 20px;
}
.next-paragraph {
    margin-top: 30px;
    /* Total space: 30px (not 50px) */
}`}
          >
            <div className={styles.marginExamples}>
              <div className={`${styles.marginDemo} ${styles.basic}`}>
                Basic margin
              </div>
              <div className={`${styles.marginDemo} ${styles.auto}`}>
                Auto margin for centering
              </div>
              <div className={`${styles.marginDemo} ${styles.negative}`}>
                Negative margin overlap
              </div>
            </div>
          </DemoCard>

          {/* Borders */}
          <DemoCard
            title="Borders"
            className="lg:col-span-2"
            code={`/* Border styles */
.solid {
    border: 3px solid var(--colour-primary);
}

.dashed {
    border: 2px dashed var(--colour-secondary);
}

.gradient {
    border: 4px solid transparent;
    background:
        linear-gradient(white, white) padding-box,
        linear-gradient(45deg, #f06, #48f) border-box;
}

.rounded {
    border: 2px solid var(--colour-border);
    border-radius: 12px;
    /* Individual corners */
    border-top-left-radius: 20px;
}`}
          >
            <div className={styles.borderExamples}>
              <div className={`${styles.borderDemo} ${styles.solid}`}>
                Solid border
              </div>
              <div className={`${styles.borderDemo} ${styles.dashed}`}>
                Dashed border
              </div>
              <div className={`${styles.borderDemo} ${styles.gradient}`}>
                Gradient border trick
              </div>
              <div className={`${styles.borderDemo} ${styles.rounded}`}>
                Rounded corners
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Box Sizing Section ───── */}
      <Section
        title="Box Sizing Models"
        intro="The box-sizing property changes how the total width and height of elements are calculated. This can make layouts much more predictable!"
        id="box-sizing"
      >
        <DemoGrid columns={1}>
          {/* Content Box vs Border Box — wide card */}
          <DemoCard
            title="Content Box vs Border Box"
            code={`/* Default behaviour */
.content-box {
    box-sizing: content-box;
    width: 300px;
    padding: 20px;
    border: 5px solid;
    /* Total width: 300 + 40 + 10 = 350px */
}

/* Modern approach */
.border-box {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid;
    /* Total width: 300px (includes padding/border) */
}

/* Best practice: apply globally */
*, *::before, *::after {
    box-sizing: border-box;
}`}
          >
            <div className={styles.boxSizingComparison}>
              <div className={`${styles.sizingDemo} ${styles.contentBox}`}>
                <h4>content-box (default)</h4>
                <p>Width: 300px + padding + border</p>
                <div className={styles.sizeIndicator}>Total: 350px</div>
              </div>
              <div className={`${styles.sizingDemo} ${styles.borderBox}`}>
                <h4>border-box</h4>
                <p>Width: 300px total</p>
                <div className={styles.sizeIndicator}>Total: 300px</div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <DemoGrid columns={2} className="mt-6">
          {/* Practical Example */}
          <DemoCard
            title="Practical Example"
            className="lg:col-span-2"
            code={`/* With border-box, maths is easy! */
.layout-grid {
    display: flex;
    gap: 20px;
}

.grid-item {
    box-sizing: border-box;
    width: 33.333%;
    padding: 20px;
    border: 2px solid;
    /* No need to calculate! */
}`}
          >
            <div className={styles.layoutGrid}>
              <div className={styles.gridItem}>1/3</div>
              <div className={styles.gridItem}>1/3</div>
              <div className={styles.gridItem}>1/3</div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Interactive Playground ───── */}
      <Section
        title="Interactive Box Model Playground"
        intro="Experiment with different values to see how they affect the box model in real-time."
        id="playground"
      >
        <BoxModelPlayground />
      </Section>

      {/* ───── Advanced Techniques Section ───── */}
      <Section
        title="Advanced Box Model Techniques"
        intro="Take your box model skills to the next level with these advanced techniques and edge cases."
        id="advanced"
      >
        <DemoGrid columns={2}>
          {/* Margin Collapse */}
          <DemoCard
            title="Margin Collapse"
            code={`/* Margins collapse vertically */
.first {
    margin-bottom: 30px;
}
.second {
    margin-top: 20px;
}
/* Result: 30px gap (larger wins) */

/* Prevent collapse */
.parent {
    /* Any of these work: */
    overflow: hidden;
    padding: 1px;
    border: 1px solid transparent;
}`}
          >
            <div className={styles.collapseDemo}>
              <div className={`${styles.collapseBox} ${styles.first}`}>
                30px bottom margin
              </div>
              <div className={`${styles.collapseBox} ${styles.second}`}>
                20px top margin
              </div>
              <p className={styles.collapseNote}>Gap = 30px (not 50px)</p>
            </div>
          </DemoCard>

          {/* Outline vs Border */}
          <DemoCard
            title="Outline vs Border"
            code={`/* Border affects box size */
.border-style {
    border: 3px solid var(--colour-primary);
}

/* Outline doesn't affect layout */
.outline-style {
    outline: 3px solid var(--colour-secondary);
    outline-offset: 2px;
}

/* Perfect for focus states */
.focus-style:focus {
    outline: 2px dashed currentColor;
    outline-offset: 4px;
}`}
          >
            <div className={styles.outlineExamples}>
              <button className={`${styles.outlineDemo} ${styles.borderStyle}`}>
                Border (affects layout)
              </button>
              <button
                className={`${styles.outlineDemo} ${styles.outlineStyle}`}
              >
                Outline (no layout impact)
              </button>
              <button className={`${styles.outlineDemo} ${styles.focusStyle}`}>
                Focus state outline (click me)
              </button>
            </div>
          </DemoCard>

          {/* Percentage Calculations */}
          <DemoCard
            title="Percentage Calculations"
            code={`/* Percentages reference parent */
.parent {
    width: 400px;
    height: 200px;
}

.child {
    /* Width: 50% of parent width */
    width: 50%; /* = 200px */

    /* Padding: % of parent WIDTH */
    padding: 10%; /* = 40px all sides */

    /* Margin: % of parent WIDTH */
    margin: 25%; /* = 100px */

    /* Height % needs parent height */
    height: 50%; /* = 100px */
}`}
          >
            <div className={styles.percentageParent}>
              <div
                className={`${styles.percentageChild} ${styles.widthDemo}`}
              >
                50% width
              </div>
              <div
                className={`${styles.percentageChild} ${styles.paddingPercentDemo}`}
              >
                10% padding
              </div>
              <div
                className={`${styles.percentageChild} ${styles.marginPercentDemo}`}
              >
                25% margin
              </div>
            </div>
          </DemoCard>

          {/* Box Shadow Layers */}
          <DemoCard
            title="Box Shadow Layers"
            code={`/* Box shadows don't affect layout */
.basic-shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.inset-shadow {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.multiple-shadows {
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.1),
        0 8px 16px rgba(0, 0, 0, 0.1);
}

.glow-effect {
    box-shadow:
        0 0 20px rgba(59, 130, 246, 0.5),
        0 0 40px rgba(59, 130, 246, 0.3);
}`}
          >
            <div className={styles.shadowExamples}>
              <div className={`${styles.shadowDemo} ${styles.basicShadow}`}>
                Basic shadow
              </div>
              <div className={`${styles.shadowDemo} ${styles.insetShadow}`}>
                Inset shadow
              </div>
              <div
                className={`${styles.shadowDemo} ${styles.multipleShadows}`}
              >
                Multiple shadows
              </div>
              <div className={`${styles.shadowDemo} ${styles.glowEffect}`}>
                Glow effect
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section title="Box Model Best Practices" id="best-practices">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              *
            </span>
            <h3>Always Use Border-Box</h3>
            <p>
              Set box-sizing: border-box globally to make width calculations
              predictable and intuitive.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              ↔
            </span>
            <h3>Margin for Spacing Between</h3>
            <p>
              Use margin for space between elements, padding for space inside
              elements.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Consistent Spacing Scale</h3>
            <p>
              Define spacing variables (8px, 16px, 24px…) for consistent rhythm
              throughout your design.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Now that you understand how boxes work, explore how to arrange them!
        </p>
        <div className={styles.nextGrid}>
          <Link href="/flexbox" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>Flexbox</h3>
              <p>Master flexible one-dimensional layouts</p>
            </div>
          </Link>
          <Link href="/grid" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              {"[ ]"}
            </span>
            <div>
              <h3>CSS Grid</h3>
              <p>Create powerful two-dimensional layouts</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
