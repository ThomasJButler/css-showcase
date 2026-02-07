import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Advanced CSS Techniques | CSS Showcase",
  description:
    "Master advanced CSS techniques including complex selectors, pseudo-elements, CSS counters, attribute selectors, and specificity management.",
}

export default function AdvancedPage() {
  return (
    <>
      <PageHero
        title="Advanced CSS Techniques"
        subtitle="Master powerful selectors, pseudo-elements, CSS counters, and specificity management to write sophisticated, maintainable stylesheets."
      />

      {/* ───── Modern Complex Selectors ───── */}
      <Section
        title="Modern Complex Selectors"
        intro="CSS has evolved with powerful new selectors that make targeting elements easier and more maintainable. Explore :is(), :where(), and :not()."
        id="selectors"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="The :is() Selector"
            description="Simplifies complex selector lists by grouping them together — a huge time-saver."
            code={`/* Without :is() — repetitive */
section h4,
article h4,
aside h4 {
    color: #2563eb;
    font-weight: 700;
}

/* With :is() — clean and maintainable */
:is(section, article, aside) h4 {
    color: #2563eb;
    font-weight: 700;
}`}
          >
            <div className={styles.isDemo}>
              <h4>Heading in Section</h4>
              <div className={styles.isDemoArticle}>
                <h4>Heading in Article</h4>
              </div>
              <div className={styles.isDemoAside}>
                <h4>Heading in Aside</h4>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="The :where() Selector"
            description="Works like :is() but with zero specificity — perfect for base styles you want to easily override."
            code={`:where(a) {
    color: #64748b;
    text-decoration: none;
}

/* Simple class selector wins
   because :where() has zero specificity */
.link-special {
    color: #7c3aed;
    font-weight: 600;
}`}
          >
            <div className={styles.whereDemo}>
              <span className={styles.whereLink}>Default Link</span>
              <span className={styles.whereLinkSpecial}>
                Special Link (Overridden)
              </span>
            </div>
          </DemoCard>

          <DemoCard
            title="The :not() Selector"
            description="Your exclusion tool — style everything except certain elements."
            code={`/* Style all buttons except .primary */
button:not(.primary) {
    background: #f1f5f9;
    color: #334155;
    border: 1px solid #cbd5e1;
}

button.primary {
    background: #2563eb;
    color: white;
    border: none;
}`}
          >
            <div className={styles.notDemo}>
              <button className={styles.notBtn}>Regular Button</button>
              <button className={styles.notBtn}>Regular Button</button>
              <button className={styles.notBtnPrimary}>
                Primary Button (Excluded)
              </button>
              <button className={styles.notBtn}>Regular Button</button>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.tipBox}>
          <h4>Specificity Tip</h4>
          <p>
            <strong>:is()</strong> takes the specificity of its most specific
            argument, while <strong>:where()</strong> always has zero
            specificity. Use <code>:where()</code> for reusable base styles and{" "}
            <code>:is()</code> when you need more control.
          </p>
        </div>
      </Section>

      {/* ───── Pseudo-elements Deep Dive ───── */}
      <Section
        title="Pseudo-elements Deep Dive"
        intro="Pseudo-elements let you style specific parts of an element or add decorative content without extra HTML. They're your secret weapon for clean, semantic markup."
        id="pseudo-elements"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="::before and ::after"
            description="The workhorses of pseudo-elements — create decorative elements, badges, and tooltips with CSS alone."
            code={`.badge::before {
    content: '\\2605\\00a0';
    opacity: 0.7;
}

.badge::after {
    content: '\\00a0\\2605';
    opacity: 0.7;
}

/* Badges with icons — no extra HTML! */`}
          >
            <div className={styles.badgeDemo}>
              <span className={styles.badge}>New</span>
              <span className={styles.badgeSuccess}>Pro</span>
              <span className={styles.badgeWarning}>Beta</span>
            </div>
          </DemoCard>

          <DemoCard
            title="::first-letter and ::first-line"
            description="Style the first letter or line of text differently — perfect for drop caps and magazine-style layouts."
            code={`.dropcap-text::first-letter {
    font-size: 3.5em;
    font-weight: 700;
    float: left;
    line-height: 0.9;
    margin: 0.1em 0.15em 0 0;
    color: #2563eb;
}

.dropcap-text::first-line {
    font-variant: small-caps;
    font-weight: 600;
    color: #475569;
}`}
          >
            <div className={styles.dropcapDemo}>
              <p className={styles.dropcapText}>
                Once upon a time, in a web far, far away, there lived a
                developer who discovered the magic of CSS pseudo-elements. With
                just a few lines of code, entire design systems came to life,
                creating beautiful typography without touching a single line of
                HTML.
              </p>
            </div>
          </DemoCard>

          <DemoCard
            title="::selection"
            description="Style the appearance of selected text — a small touch that gives your site personality."
            code={`::selection {
    background: #2563eb;
    color: white;
}

/* Firefox */
::-moz-selection {
    background: #2563eb;
    color: white;
}`}
          >
            <div className={styles.selectionDemo}>
              <p>
                Try selecting this text — notice the custom selection colour!
                This works on any text element and can match your brand colours.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── CSS Counters ───── */}
      <Section
        title="CSS Counters"
        intro="CSS counters let you create automatic numbering without JavaScript. Perfect for step-by-step guides, nested lists, and numbered sections."
        id="counters"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Counter"
            description="Create numbered items that update automatically when you add or remove elements. No manual renumbering required!"
            code={`.counter-demo {
    counter-reset: step;
}

.step-item::before {
    counter-increment: step;
    content: 'Step ' counter(step) ': ';
    font-weight: 700;
    color: #2563eb;
}`}
          >
            <div className={styles.counterDemo}>
              <div className={styles.stepItem}>
                Set up your project structure
              </div>
              <div className={styles.stepItem}>Install dependencies</div>
              <div className={styles.stepItem}>
                Configure your build tools
              </div>
              <div className={styles.stepItem}>
                Write your first component
              </div>
              <div className={styles.stepItem}>Test and deploy</div>
            </div>
          </DemoCard>

          <DemoCard
            title="Nested Counters"
            description="Counters can be nested to create hierarchical numbering like 1.1, 1.2, 2.1. Great for documentation and specifications."
            code={`.nested-counter-demo {
    counter-reset: section;
}

.section-item {
    counter-reset: subsection;
    counter-increment: section;
}

.section-item::before {
    content: counter(section) '. ';
    font-weight: 700;
}

.subsection-item::before {
    counter-increment: subsection;
    content: counter(section) '.'
        counter(subsection) ' ';
    font-weight: 600;
    color: #7c3aed;
}`}
          >
            <div className={styles.nestedCounterDemo}>
              <div className={styles.sectionItem}>
                Introduction
                <div className={styles.subsectionItem}>Overview</div>
                <div className={styles.subsectionItem}>Prerequisites</div>
              </div>
              <div className={styles.sectionItem}>
                Setup
                <div className={styles.subsectionItem}>Installation</div>
                <div className={styles.subsectionItem}>Configuration</div>
              </div>
              <div className={styles.sectionItem}>
                Advanced Topics
                <div className={styles.subsectionItem}>Optimisation</div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Attribute Selectors ───── */}
      <Section
        title="Attribute Selectors"
        intro="Target elements based on their attributes and attribute values. Incredibly powerful for styling forms, links, and dynamic content."
        id="attribute-selectors"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Attribute Selectors"
            description="Match elements that have specific attributes, or attributes with specific values."
            code={`/* Style all inputs with type attribute */
input[type] {
    padding: 8px 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
}

/* Specific type values */
input[type="email"] {
    border-color: #2563eb;
}

input[type="password"] {
    border-color: #7c3aed;
}

/* Elements with disabled attribute */
button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}`}
          >
            <div className={styles.attributeDemo}>
              <input
                className={styles.attrInput}
                type="text"
                placeholder="Text input"
              />
              <input
                className={styles.attrInputEmail}
                type="email"
                placeholder="Email input"
              />
              <input
                className={styles.attrInputPassword}
                type="password"
                placeholder="Password input"
              />
              <button className={styles.attrDisabledBtn} disabled>
                Disabled Button
              </button>
            </div>
          </DemoCard>

          <DemoCard
            title="Advanced Attribute Matching"
            description="Use powerful operators to match attribute values partially — perfect for styling external links, file types, or data attributes."
            code={`/* Starts with https:// */
a[href^="https://"]::after {
    content: ' \\2197';
    font-size: 0.85em;
}

/* Ends with .pdf */
a[href$=".pdf"]::before {
    content: '\\1F4C4 ';
}

/* Contains 'image' */
a[href*="image"]::before {
    content: '\\1F5BC\\FE0F ';
}`}
          >
            <div className={styles.advancedAttributeDemo}>
              <span className={`${styles.attrLink} ${styles.attrLinkExternal}`}>
                External Link
              </span>
              <span className={styles.attrLink}>Internal Link</span>
              <span className={`${styles.attrLink} ${styles.attrLinkPdf}`}>
                PDF Document
              </span>
              <span className={`${styles.attrLink} ${styles.attrLinkImage}`}>
                Image File
              </span>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.tipBox}>
          <h4>Attribute Selector Operators</h4>
          <p>
            <code>^=</code> starts with, <code>$=</code> ends with,{" "}
            <code>*=</code> contains, <code>~=</code> word match,{" "}
            <code>|=</code> starts with (dash-separated). These operators make
            attribute selectors incredibly flexible!
          </p>
        </div>
      </Section>

      {/* ───── Combinators ───── */}
      <Section
        title="Combinators &amp; Relationship Selectors"
        intro="Combinators let you select elements based on their relationship to other elements. Master these and you'll write cleaner, more maintainable CSS."
        id="combinators"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Descendant Combinator (space)"
            description="Selects all descendants, no matter how deeply nested. The most common combinator."
            code={`/* Space = descendant combinator */
.descendant-demo p {
    color: #2563eb;
    font-weight: 600;
}

/* Matches ALL paragraphs inside,
   no matter how nested */`}
          >
            <div className={styles.combinatorDemo}>
              <div>
                <p className={styles.descendantP}>Styled paragraph</p>
                <div>
                  <p className={styles.descendantP}>Nested styled paragraph</p>
                </div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Child Combinator (>)"
            description="Selects only direct children, not deeper descendants. Great for precise targeting."
            code={`/* > = child combinator */
.child-demo > p {
    color: #7c3aed;
    font-weight: 600;
}

/* Only matches DIRECT children,
   not grandchildren */`}
          >
            <div className={styles.combinatorDemo}>
              <p className={styles.childDirect}>Direct child (styled)</p>
              <div>
                <p className={styles.childNested}>Grandchild (not styled)</p>
              </div>
              <p className={styles.childDirect}>Direct child (styled)</p>
            </div>
          </DemoCard>

          <DemoCard
            title="Adjacent (+) and General (~) Siblings"
            description="Select elements based on their sibling relationships. Perfect for spacing, alternating styles, and contextual design."
            code={`/* + = adjacent sibling (immediately follows) */
h4 + p {
    font-weight: 700;
    color: #2563eb;
}

/* ~ = general sibling (any following sibling) */
h4 ~ p {
    margin-left: 16px;
    border-left: 3px solid #cbd5e1;
    padding-left: 16px;
}`}
          >
            <div className={styles.combinatorDemo}>
              <h4 className={styles.siblingHeading}>Heading</h4>
              <p className={styles.siblingAdjacent}>
                First paragraph (adjacent to h4)
              </p>
              <p className={styles.siblingGeneral}>
                Second paragraph (general sibling)
              </p>
              <p className={styles.siblingGeneral}>
                Third paragraph (general sibling)
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Specificity Management ───── */}
      <Section
        title="Understanding &amp; Managing Specificity"
        intro="Specificity determines which CSS rules win when multiple rules target the same element. Master it to avoid !important hell."
        id="specificity"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Specificity Hierarchy"
            description="CSS specificity is calculated based on four categories. Understanding this hierarchy is crucial."
            code={`/* Specificity: 1 (one element) */
p { color: gray; }

/* Specificity: 10 (one class) */
.text { color: blue; }

/* Specificity: 100 (one ID) */
#special { color: red; }

/* Specificity: 11 (one class + one element) */
div.text { color: green; }

/* Specificity: 111 (ID + class + element) */
div#special.text { color: purple; }`}
          >
            <div className={styles.specificityDemo}>
              <div className={styles.specificityVisual}>
                <div className={`${styles.specLevel} ${styles.specInline}`}>
                  <span className={styles.specNumber}>1000</span>
                  <span className={styles.specLabel}>Inline Styles</span>
                </div>
                <div className={`${styles.specLevel} ${styles.specId}`}>
                  <span className={styles.specNumber}>100</span>
                  <span className={styles.specLabel}>IDs</span>
                </div>
                <div className={`${styles.specLevel} ${styles.specClass}`}>
                  <span className={styles.specNumber}>10</span>
                  <span className={styles.specLabel}>
                    Classes, Attributes, Pseudo-classes
                  </span>
                </div>
                <div className={`${styles.specLevel} ${styles.specElement}`}>
                  <span className={styles.specNumber}>1</span>
                  <span className={styles.specLabel}>
                    Elements, Pseudo-elements
                  </span>
                </div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Good vs Bad Specificity"
            description="Keep specificity low and consistent. Use classes over IDs, avoid nesting too deeply, and reserve !important for truly exceptional cases."
            code={`/* Good — flat, predictable specificity */
.button { }
.button-primary { }
.button-large { }

/* Avoid — high specificity, hard to override */
#header div.nav ul li a.button { }
.button { color: blue !important; }`}
          >
            <div className={styles.specificityExamples}>
              <div className={styles.goodExample}>
                <h4 className={styles.exampleHeading}>Good</h4>
                <pre className={styles.exampleCode}>{`.button { }
.button-primary { }
.button-large { }`}</pre>
              </div>
              <div className={styles.badExample}>
                <h4 className={styles.exampleHeading}>Avoid</h4>
                <pre
                  className={styles.exampleCode}
                >{`#header div.nav ul li a.button { }
.button { color: blue !important; }`}</pre>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.tipBox}>
          <h4>Specificity Tips</h4>
          <p>
            <strong>1.</strong> Prefer classes over IDs for styling
            <br />
            <strong>2.</strong> Keep selector chains short (2–3 levels max)
            <br />
            <strong>3.</strong> Use <code>:where()</code> for zero-specificity
            base styles
            <br />
            <strong>4.</strong> Avoid <code>!important</code> unless absolutely
            necessary
            <br />
            <strong>5.</strong> Organise CSS from low to high specificity
          </p>
        </div>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section
        title="Best Practices"
        intro="Key principles for writing advanced, maintainable CSS."
        id="best-practices"
      >
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              *
            </span>
            <h3>Keep Specificity Low</h3>
            <p>
              Use classes for styling, reserve IDs for JavaScript hooks. Flat
              selectors are easier to maintain and override.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Use Modern Selectors</h3>
            <p>
              Embrace <code>:is()</code>, <code>:where()</code>, and{" "}
              <code>:has()</code> to write cleaner, more maintainable selectors.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              ::
            </span>
            <h3>Leverage Pseudo-elements</h3>
            <p>
              Use <code>::before</code> and <code>::after</code> for decorative
              content instead of adding extra HTML elements.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
