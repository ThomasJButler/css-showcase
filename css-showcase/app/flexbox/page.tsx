import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { FlexboxPlayground } from "./flexbox-playground"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Flexbox | CSS Showcase",
  description:
    "Master CSS Flexbox — flexible one-dimensional layouts. Interactive playground and comprehensive examples.",
}

export default function FlexboxPage() {
  return (
    <>
      <PageHero
        title="Flexbox"
        subtitle="The flexible box layout — your go-to tool for one-dimensional layouts"
      />

      {/* ───── Fundamentals Section ───── */}
      <Section
        title="Flexbox Fundamentals"
        intro="Flexbox makes it easy to align and distribute space among items in a container, even when their size is unknown or dynamic."
        id="basics"
      >
        <DemoGrid columns={2}>
          {/* Flex Direction */}
          <DemoCard
            title="Flex Direction"
            code={`/* Flex container */
.container {
    display: flex;
    flex-direction: row; /* default */
}

/* Other directions */
.column { flex-direction: column; }
.row-reverse { flex-direction: row-reverse; }
.column-reverse { flex-direction: column-reverse; }`}
          >
            <div className={`${styles.flexDemo} ${styles.directionRow}`}>
              <div className={styles.flexItem}>1</div>
              <div className={styles.flexItem}>2</div>
              <div className={styles.flexItem}>3</div>
            </div>
            <p className={styles.demoLabel}>Row (default)</p>

            <div className={`${styles.flexDemo} ${styles.directionColumn}`}>
              <div className={styles.flexItem}>1</div>
              <div className={styles.flexItem}>2</div>
              <div className={styles.flexItem}>3</div>
            </div>
            <p className={styles.demoLabel}>Column</p>
          </DemoCard>

          {/* Flex Wrap */}
          <DemoCard
            title="Flex Wrap"
            code={`/* Allow items to wrap */
.container {
    display: flex;
    flex-wrap: wrap;
}

/* Shorthand */
.container {
    display: flex;
    flex-flow: row wrap;
}`}
          >
            <div className={`${styles.flexDemo} ${styles.wrapDemo}`}>
              <div className={styles.flexItem}>Item 1</div>
              <div className={styles.flexItem}>Item 2</div>
              <div className={styles.flexItem}>Item 3</div>
              <div className={styles.flexItem}>Item 4</div>
              <div className={styles.flexItem}>Item 5</div>
            </div>
            <p className={styles.demoLabel}>flex-wrap: wrap</p>
          </DemoCard>

          {/* Flex Grow, Shrink & Basis */}
          <DemoCard
            title="Flex Grow, Shrink & Basis"
            code={`/* Flex item properties */
.item {
    flex-grow: 0;    /* Don't grow */
    flex-shrink: 1;  /* Can shrink */
    flex-basis: auto; /* Base size */
}

/* Shorthand */
.item {
    flex: 1; /* grow: 1, shrink: 1, basis: 0 */
}

/* Common patterns */
.item { flex: 1 1 auto; } /* Flexible */
.item { flex: 0 0 200px; } /* Fixed width */`}
          >
            <div className={`${styles.flexDemo} ${styles.growDemo}`}>
              <div className={`${styles.flexItem} ${styles.growNone}`}>
                No grow
              </div>
              <div className={`${styles.flexItem} ${styles.growOne}`}>
                Grow: 1
              </div>
              <div className={`${styles.flexItem} ${styles.growTwo}`}>
                Grow: 2
              </div>
            </div>
          </DemoCard>

          {/* Gap Property */}
          <DemoCard
            title="Gap Property"
            code={`/* Modern gap property */
.container {
    display: flex;
    gap: 1rem; /* All directions */
}

/* Separate row and column gaps */
.container {
    row-gap: 1rem;
    column-gap: 2rem;
    /* or */
    gap: 1rem 2rem;
}`}
          >
            <div className={`${styles.flexDemo} ${styles.gapDemo}`}>
              <div className={styles.flexItem}>1</div>
              <div className={styles.flexItem}>2</div>
              <div className={styles.flexItem}>3</div>
              <div className={styles.flexItem}>4</div>
            </div>
            <p className={styles.demoLabel}>gap: 1rem</p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Alignment Section ───── */}
      <Section
        title="Alignment & Justification"
        intro="Flexbox shines when it comes to alignment. Control both main axis and cross axis alignment with ease."
        id="alignment"
      >
        <DemoGrid columns={1}>
          {/* Justify Content */}
          <DemoCard
            title="Justify Content (Main Axis)"
            code={`/* Main axis alignment */
.container {
    display: flex;
    justify-content: flex-start; /* default */
    justify-content: center;
    justify-content: flex-end;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
}`}
          >
            <div className={styles.alignmentDemos}>
              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.justifyStart}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>flex-start</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.justifyCenter}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>center</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.justifyEnd}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>flex-end</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.justifyBetween}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>space-between</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.justifyAround}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>space-around</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.justifyEvenly}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>space-evenly</p>
              </div>
            </div>
          </DemoCard>

          {/* Align Items */}
          <DemoCard
            title="Align Items (Cross Axis)"
            code={`/* Cross axis alignment */
.container {
    display: flex;
    align-items: stretch; /* default */
    align-items: flex-start;
    align-items: center;
    align-items: flex-end;
    align-items: baseline;
}

/* Individual item alignment */
.item {
    align-self: auto; /* default */
    align-self: center;
}`}
          >
            <div className={styles.alignmentDemos}>
              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.alignStart} ${styles.tall}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={`${styles.flexItem} ${styles.tallItem}`}>
                    2
                  </div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>flex-start</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.alignCenter} ${styles.tall}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={`${styles.flexItem} ${styles.tallItem}`}>
                    2
                  </div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>center</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.alignEnd} ${styles.tall}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={`${styles.flexItem} ${styles.tallItem}`}>
                    2
                  </div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>flex-end</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.alignStretch} ${styles.tall}`}
                >
                  <div className={styles.flexItem}>1</div>
                  <div className={styles.flexItem}>2</div>
                  <div className={styles.flexItem}>3</div>
                </div>
                <p className={styles.demoLabel}>stretch</p>
              </div>

              <div className={styles.alignContainer}>
                <div
                  className={`${styles.flexDemo} ${styles.alignBaseline} ${styles.tall}`}
                >
                  <div
                    className={styles.flexItem}
                    style={{ fontSize: "1.5rem" }}
                  >
                    1
                  </div>
                  <div className={styles.flexItem}>2</div>
                  <div
                    className={styles.flexItem}
                    style={{ fontSize: "0.75rem" }}
                  >
                    3
                  </div>
                </div>
                <p className={styles.demoLabel}>baseline</p>
              </div>
            </div>
          </DemoCard>

          {/* Perfect Centering */}
          <DemoCard
            title="Perfect Centering"
            code={`/* The holy grail of centering */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
}

/* Even simpler with place-content */
.container {
    display: flex;
    place-content: center;
}`}
          >
            <div className={`${styles.flexDemo} ${styles.centerDemo}`}>
              <div className={styles.flexItem}>Perfectly Centred!</div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Playground Section ───── */}
      <Section
        title="Interactive Flexbox Playground"
        intro="Experiment with different flexbox properties and see the results in real-time!"
        id="playground"
      >
        <FlexboxPlayground />
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Ready for Real-World Patterns?" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Now that you&apos;ve mastered the fundamentals, explore common
          patterns and pro tips.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/flexbox-patterns" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>Flexbox Patterns</h3>
              <p>Navigation bars, card layouts, media objects, and pro tips</p>
            </div>
          </Link>
          <Link href="/grid" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              {"[ ]"}
            </span>
            <div>
              <h3>CSS Grid</h3>
              <p>The ultimate layout system for complex designs</p>
            </div>
          </Link>
          <Link href="/layout" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              #
            </span>
            <div>
              <h3>Layout Techniques</h3>
              <p>Combine Grid and Flexbox like a pro</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
