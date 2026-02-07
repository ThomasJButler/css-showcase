import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Basic CSS | CSS Showcase",
  description:
    "Master the fundamentals of CSS — selectors, properties, and the cascade. Interactive examples and clean code.",
}

export default function BasicCSSPage() {
  return (
    <>
      <PageHero
        title="Basic CSS"
        subtitle="The foundation of web styling — where every brilliant design begins"
      />

      {/* ───── Selectors Section ───── */}
      <Section
        title="CSS Selectors"
        intro="Selectors are the backbone of CSS — they let you target HTML elements with surgical precision. From simple element selectors to complex pseudo-selectors, mastering these is essential."
        id="selectors"
      >
        <DemoGrid columns={2}>
          {/* Element Selectors */}
          <DemoCard
            title="Element Selectors"
            code={`/* Target all paragraphs */
p {
    color: var(--colour-primary);
    font-weight: 500;
}

/* Target all spans */
span {
    color: var(--colour-accent);
    font-style: italic;
}`}
          >
            <p className={styles.elementDemo}>
              This paragraph is styled with an element selector
            </p>
            <span className={styles.spanDemo}>
              This span has different styling
            </span>
          </DemoCard>

          {/* Class Selectors */}
          <DemoCard
            title="Class Selectors"
            code={`/* Single class */
.highlight {
    background: var(--colour-warning-light);
    padding: 0.5rem;
    border-radius: 0.25rem;
}

/* Multiple classes */
.highlight.important {
    border-left: 4px solid var(--colour-error);
    font-weight: bold;
}

.subtle {
    opacity: 0.7;
    font-size: 0.875rem;
}`}
          >
            <p className={styles.highlight}>Classes add reusable styles</p>
            <p className={`${styles.highlight} ${styles.highlightImportant}`}>
              Multiple classes? No problem!
            </p>
            <p className={styles.subtle}>Different class, different style</p>
          </DemoCard>

          {/* ID Selectors */}
          <DemoCard
            title="ID Selectors"
            code={`/* ID selector — high specificity */
#unique-element {
    background: linear-gradient(
        45deg,
        var(--colour-primary),
        var(--colour-secondary)
    );
    color: white;
    padding: 1rem;
    text-align: center;
}`}
          >
            <p className={styles.uniqueElement}>
              IDs are unique — use sparingly!
            </p>
            <p className={styles.note}>Prefer classes for reusability</p>
          </DemoCard>

          {/* Attribute Selectors */}
          <DemoCard
            title="Attribute Selectors"
            code={`/* Target by attribute */
input[type="email"] {
    border-color: var(--colour-primary);
}

/* Target external links */
a[target="_blank"] {
    padding-right: 1.25rem;
    position: relative;
}

a[target="_blank"]::after {
    content: "↗";
    position: absolute;
    right: 0;
}`}
          >
            <div className={styles.attrInputs}>
              <input
                type="text"
                placeholder="Text input"
                className={styles.attrInput}
              />
              <input
                type="email"
                placeholder="Email input"
                className={`${styles.attrInput} ${styles.attrInputEmail}`}
              />
              <div>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.attrLink} ${styles.externalLink}`}
                >
                  External link
                </a>
                <a href="#selectors" className={styles.attrLink}>
                  Internal link
                </a>
              </div>
            </div>
          </DemoCard>

          {/* Pseudo-class Selectors */}
          <DemoCard
            title="Pseudo-class Selectors"
            code={`/* Interactive states */
button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Structural pseudo-classes */
li:first-child {
    color: var(--colour-primary);
    font-weight: bold;
}

li:last-child {
    color: var(--colour-secondary);
}`}
          >
            <div className={styles.interactiveList}>
              <button className={styles.pseudoBtn}>Hover over me!</button>
              <button className={styles.pseudoBtn} disabled>
                I&apos;m disabled
              </button>
              <ul className={styles.pseudoList}>
                <li>First item (special styling)</li>
                <li>Regular item</li>
                <li>Regular item</li>
                <li>Last item (special styling)</li>
              </ul>
            </div>
          </DemoCard>

          {/* Combinators */}
          <DemoCard
            title="Combinators"
            code={`/* Direct child */
.parent > p {
    border-left: 3px solid var(--colour-primary);
    padding-left: 1rem;
}

/* Descendant */
.parent p {
    margin: 0.5rem 0;
}

/* Adjacent sibling */
p + span {
    color: var(--colour-accent);
    font-weight: bold;
}`}
          >
            <div className={styles.parentDemo}>
              <p>Direct child paragraph</p>
              <div className={styles.parentDemoNested}>
                <p>Nested paragraph (descendant)</p>
              </div>
              <p>Another direct child</p>
              <span className={styles.adjacentSibling}>Adjacent sibling</span>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Properties Section ───── */}
      <Section
        title="Essential CSS Properties"
        intro="CSS properties are the tools that bring your designs to life. Here are the fundamental properties every developer should master."
        id="properties"
      >
        <DemoGrid columns={2}>
          {/* Colour Properties */}
          <DemoCard
            title="Colour Properties"
            code={`/* Different colour formats */
.element {
    /* Hexadecimal */
    color: #2563eb;

    /* RGB with alpha */
    background-color: rgba(37, 99, 235, 0.1);

    /* HSL — great for variations */
    border-color: hsl(217, 91%, 60%);

    /* CSS Variables */
    box-shadow: 0 4px 6px var(--colour-primary);
}`}
          >
            <div className={styles.colourShowcase}>
              <p style={{ color: "#2563eb" }}>Hex colour: #2563eb</p>
              <p style={{ color: "rgb(37, 99, 235)" }}>
                RGB: rgb(37, 99, 235)
              </p>
              <p style={{ color: "hsl(217, 91%, 60%)" }}>
                HSL: hsl(217, 91%, 60%)
              </p>
              <p
                style={{
                  background: "linear-gradient(45deg, #2563eb, #7c3aed)",
                  color: "white",
                  padding: "0.5rem",
                  borderRadius: "var(--radius)",
                }}
              >
                Gradient background
              </p>
            </div>
          </DemoCard>

          {/* Typography Properties */}
          <DemoCard
            title="Typography Properties"
            code={`/* Typography styling */
.heading {
    font-family: var(--font-sans);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.body-text {
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;
    text-indent: 2rem;
}

.accent-text {
    font-style: italic;
    text-transform: uppercase;
    text-decoration: underline;
}`}
          >
            <div className={styles.typographyShowcase}>
              <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Bold and Large
              </p>
              <p style={{ fontStyle: "italic", letterSpacing: "0.1em" }}>
                Italic with letter spacing
              </p>
              <p
                style={{ textTransform: "uppercase" as const, fontSize: "0.875rem" }}
              >
                Uppercase text
              </p>
              <p style={{ lineHeight: 1.8, textAlign: "justify" as const }}>
                This paragraph has increased line height for better readability.
                Notice how the text breathes with proper spacing.
              </p>
            </div>
          </DemoCard>

          {/* Display Properties */}
          <DemoCard
            title="Display Properties"
            className="lg:col-span-2"
            code={`/* Display values */
.display-block {
    display: block;
    background: var(--colour-surface);
    padding: 0.5rem;
    margin: 0.5rem 0;
}

.display-inline {
    display: inline;
    background: var(--colour-primary-light);
    padding: 0.25rem;
}

.display-inline-block {
    display: inline-block;
    background: var(--colour-secondary-light);
    padding: 0.5rem;
    margin: 0.5rem;
}

.display-none {
    display: none; /* Completely hidden */
}`}
          >
            <div className={styles.displayShowcase}>
              <span className={styles.displayBlock}>
                Block element (full width)
              </span>
              <span className={styles.displayInline}>Inline</span>{" "}
              <span className={styles.displayInline}>elements</span>{" "}
              <span className={styles.displayInline}>flow</span>
              <span className={styles.displayInlineBlock}>
                Inline-block combines both
              </span>
              <span className={styles.displayNone}>Hidden element</span>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Cascade & Specificity Section ───── */}
      <Section
        title="The Cascade & Specificity"
        intro="Understanding how CSS rules cascade and which styles take precedence is crucial for writing maintainable stylesheets. It's like a pecking order for your styles!"
        id="cascade"
      >
        <DemoGrid columns={1}>
          {/* Specificity Calculator — wide card */}
          <DemoCard
            title="Specificity Calculator"
            code={`/* Specificity: 0-0-1 (1 element) */
p { color: blue; }

/* Specificity: 0-1-0 (1 class) */
.text { color: red; }

/* Specificity: 1-0-0 (1 ID) */
#specific { color: purple; }

/* Specificity: 1-1-1 (1 ID + 1 class + 1 element) */
p#specific.text { color: orange; }

/* Inline styles: 1-0-0-0 (highest specificity) */
style="color: green;"

/* Calculation: ID=100, Class=10, Element=1 */`}
          >
            <div className={styles.specificityDemo}>
              <p style={{ color: "green" }}>
                Which colour wins? (Hint: it&apos;s green!)
              </p>
            </div>
          </DemoCard>
        </DemoGrid>

        <DemoGrid columns={2} className="mt-6">
          {/* Inheritance */}
          <DemoCard
            title="Inheritance"
            code={`/* Some properties inherit */
.parent {
    color: var(--colour-primary);
    font-size: 1.1rem;
    font-family: var(--font-sans);
}

/* Children automatically inherit */
.parent p {
    /* Inherits color and font */
}

/* Properties that DON'T inherit:
   - margin, padding
   - border
   - background
   - display
   - position */`}
          >
            <div
              className={styles.inheritanceDemo}
              style={{ color: "var(--primary)", fontSize: "1.1rem" }}
            >
              Parent element
              <p>Child inherits colour and font-size</p>
              <p style={{ color: "var(--secondary)" }}>
                But can override inherited styles
              </p>
            </div>
          </DemoCard>

          {/* !important */}
          <DemoCard
            title="!important (Use Sparingly!)"
            code={`/* Normal rule */
.important-demo {
    color: blue;
}

/* Higher specificity */
p.important-demo.override-attempt {
    color: green;
}

/* !important wins (but avoid this!) */
.important-demo {
    color: red !important;
}

/* Better approach: use specificity */
/* or restructure your CSS */`}
          >
            <p className={styles.importantDemo}>
              This text is red, despite other rules
            </p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Units Section ───── */}
      <Section
        title="CSS Units"
        intro="Choosing the right unit is like picking the right tool for the job. From pixels to percentages, each has its perfect use case."
        id="units"
      >
        <DemoGrid columns={3}>
          {/* Absolute Units */}
          <DemoCard
            title="Absolute Units"
            code={`/* Absolute units */
.pixel-box {
    width: 200px;  /* Fixed pixels */
    height: 100px;
}

.rem-box {
    width: 15rem;  /* Relative to root font-size */
    padding: 1rem;
}

/* Other absolute units:
   cm, mm, in, pt, pc
   (rarely used in web) */`}
          >
            <div className={styles.unitsColumn}>
              <div className={styles.unitBox} style={{ width: "200px" }}>
                200px wide
              </div>
              <div className={styles.unitBox} style={{ width: "15rem" }}>
                15rem wide
              </div>
              <div className={styles.unitBox} style={{ width: "100%" }}>
                100% wide
              </div>
            </div>
          </DemoCard>

          {/* Relative Units */}
          <DemoCard
            title="Relative Units"
            code={`/* Relative units */
.percentage {
    width: 100%;     /* Of parent */
    max-width: 1200px;
}

.em-sizing {
    font-size: 1.5em;  /* 1.5x parent font */
    padding: 1em;      /* Relative to element font */
}

.viewport-units {
    width: 80vw;   /* 80% viewport width */
    height: 50vh;  /* 50% viewport height */

    /* New viewport units */
    height: 100dvh; /* Dynamic viewport */
}`}
          >
            <div className={styles.unitsColumn} style={{ fontSize: "16px" }}>
              <div className={styles.unitBox} style={{ width: "100%" }}>
                100% of parent
              </div>
              <div className={styles.unitBox} style={{ width: "50%" }}>
                50% of parent
              </div>
              <div
                className={styles.unitBox}
                style={{ fontSize: "1.5em", padding: "1em" }}
              >
                1.5em font, 1em padding
              </div>
            </div>
          </DemoCard>

          {/* Modern Units */}
          <DemoCard
            title="Modern Units"
            code={`/* Modern CSS units & functions */
.responsive-box {
    /* Minimum of two values */
    width: min(100%, 600px);

    /* Maximum of two values */
    height: max(300px, 50vh);

    /* Clamp between min and max */
    font-size: clamp(1rem, 2vw, 1.5rem);
}

.text-measure {
    /* ch = width of '0' character */
    max-width: 65ch; /* Optimal reading */
}`}
          >
            <div className={styles.unitsColumn}>
              <div
                className={styles.unitBox}
                style={{ width: "min(100%, 400px)" }}
              >
                min(100%, 400px)
              </div>
              <div
                className={styles.unitBox}
                style={{ width: "clamp(120px, 50%, 400px)" }}
              >
                clamp(120px, 50%, 400px)
              </div>
              <div className={`${styles.unitBox} ${styles.chDemo}`}>
                20ch wide (character units)
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Pro Tips ───── */}
      <Section title="Pro Tips" id="tips">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              ?
            </span>
            <h3>Start with a Reset</h3>
            <p>
              Use a CSS reset or normalise stylesheet to ensure consistent
              styling across browsers.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Specificity Over !important</h3>
            <p>
              Instead of reaching for !important, understand and use specificity
              properly.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              rem
            </span>
            <h3>REM for Consistency</h3>
            <p>
              Use REM units for sizes to respect user&apos;s font preferences
              and ensure scalability.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Ready for More?" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          You&apos;ve mastered the basics! Time to explore how these
          fundamentals come together in more complex scenarios.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/box-model" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              [ ]
            </span>
            <div>
              <h3>Box Model</h3>
              <p>Understand spacing, borders, and element dimensions</p>
            </div>
          </Link>
          <Link href="/typography" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              {"{ }"}
            </span>
            <div>
              <h3>Typography</h3>
              <p>Create beautiful, readable text designs</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
