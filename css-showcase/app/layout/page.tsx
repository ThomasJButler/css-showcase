import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Layout Techniques | CSS Showcase",
  description:
    "Master CSS layout techniques — from display and position properties to multi-column, floats, and essential layout patterns like the Holy Grail.",
}

export default function LayoutTechniquesPage() {
  return (
    <>
      <PageHero
        title="CSS Layout Techniques"
        subtitle="From floats to modern layouts — master display properties, positioning schemes, and essential layout patterns"
      />

      {/* ───── Display Property Section ───── */}
      <Section
        title="The Display Property"
        intro="The display property is fundamental to CSS layout. It determines how an element behaves in the document flow and how its children are laid out."
        id="display"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Block vs Inline vs Inline-Block"
            code={`/* Block elements take full width */
.block {
    display: block;
    /* Takes up entire row, stacks vertically */
}

/* Inline elements flow with text */
.inline {
    display: inline;
    /* Width/height ignored, no line breaks */
}

/* Inline-block: best of both worlds */
.inline-block {
    display: inline-block;
    /* Can set width/height, flows horizontally */
}`}
          >
            <div className={styles.displayDemo}>
              <span className={styles.displayLabel}>display: block</span>
              <div
                className={`${styles.displayItem} ${styles.displayBlock}`}
              >
                Block Element (full width)
              </div>

              <span className={styles.displayLabel}>display: inline</span>
              <span
                className={`${styles.displayItem} ${styles.displayInline}`}
              >
                Inline
              </span>
              <span
                className={`${styles.displayItem} ${styles.displayInline}`}
              >
                Another Inline
              </span>

              <div style={{ marginTop: "0.75rem" }}>
                <span className={styles.displayLabel}>
                  display: inline-block
                </span>
                <div
                  className={`${styles.displayItem} ${styles.displayInlineBlock}`}
                >
                  Inline-Block
                </div>
                <div
                  className={`${styles.displayItem} ${styles.displayInlineBlock}`}
                >
                  Another Inline-Block
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className="mt-4 space-y-1 text-sm text-[var(--text-secondary)]">
          <p>
            <strong className="text-foreground">block:</strong> Takes full
            width, starts on new line (divs, headings, paragraphs)
          </p>
          <p>
            <strong className="text-foreground">inline:</strong> Only takes
            needed width, flows with text (spans, links, emphasis)
          </p>
          <p>
            <strong className="text-foreground">inline-block:</strong> Flows
            inline but accepts width/height (great for layouts)
          </p>
        </div>
      </Section>

      {/* ───── Position Property Section ───── */}
      <Section
        title="CSS Positioning"
        intro="The position property controls how elements are placed in the document. Each value completely changes how the element behaves and interacts with others."
        id="positioning"
      >
        <DemoGrid columns={2}>
          <DemoCard
            title="Position Values"
            code={`/* Static: default, follows document flow */
.static {
    position: static;
    /* top, right, bottom, left have no effect */
}

/* Relative: offset from normal position */
.relative {
    position: relative;
    top: 20px;
    left: 20px;
    /* Original space is preserved */
}

/* Absolute: relative to positioned ancestor */
.absolute {
    position: absolute;
    top: 0;
    right: 0;
    /* Removed from document flow */
}

/* Fixed: relative to viewport */
.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
    /* Stays in place when scrolling */
}

/* Sticky: hybrid of relative and fixed */
.sticky {
    position: sticky;
    top: 0;
    /* Acts relative until threshold, then fixed */
}`}
          >
            <div className={styles.positionContainer}>
              <div className={`${styles.positionBox} ${styles.posStatic}`}>
                Static (default)
              </div>
              <div className={`${styles.positionBox} ${styles.posRelative}`}>
                Relative (offset)
              </div>
              <div className={`${styles.positionBox} ${styles.posAbsolute}`}>
                Absolute (removed from flow)
              </div>
              <div className={`${styles.positionBox} ${styles.posFixed}`}>
                Fixed (viewport-relative)
              </div>
              <div className={`${styles.positionBox} ${styles.posSticky}`}>
                Sticky (hybrid)
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Z-Index & Stacking Context"
            code={`.element {
    position: relative;
    z-index: 10; /* Higher values appear on top */
}

/* z-index only works on positioned elements */
.not-positioned {
    z-index: 999; /* No effect without position */
}`}
          >
            <div className={styles.zIndexDemo}>
              <div className={`${styles.zBox} ${styles.zBox1}`}>
                z-index: 1
              </div>
              <div className={`${styles.zBox} ${styles.zBox2}`}>
                z-index: 2
              </div>
              <div className={`${styles.zBox} ${styles.zBox3}`}>
                z-index: 3
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className="mt-4 space-y-1 text-sm text-[var(--text-secondary)]">
          <p>
            <strong className="text-foreground">static:</strong> The default
            — use for normal document flow
          </p>
          <p>
            <strong className="text-foreground">relative:</strong> Small
            adjustments, containing block for absolute children
          </p>
          <p>
            <strong className="text-foreground">absolute:</strong> Tooltips,
            dropdowns, overlays, custom positioning
          </p>
          <p>
            <strong className="text-foreground">fixed:</strong> Sticky
            headers, floating buttons, modals
          </p>
          <p>
            <strong className="text-foreground">sticky:</strong> Section
            headers that stick on scroll, table headers
          </p>
          <p className="mt-3">
            <strong className="text-foreground">Pro tip:</strong> z-index only
            works on positioned elements (not static). Create a new stacking
            context to isolate z-index layers using{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
              position
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
              opacity
            </code>
            , or{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
              transform
            </code>
            .
          </p>
        </div>
      </Section>

      {/* ───── Multi-Column Layout Section ───── */}
      <Section
        title="Multi-Column Layout"
        intro="CSS multi-column creates magazine-style text layouts automatically. Perfect for long-form content where you want to break text into columns without manual wrapping."
        id="multi-column"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Newspaper-Style Columns"
            code={`.multi-column {
    column-count: 3;
    column-gap: 32px;
    column-rule: 1px solid #e2e8f0;
}

/* Prevent elements from breaking across columns */
.multi-column h2,
.multi-column img {
    break-inside: avoid;
}

/* Span an element across all columns */
.multi-column h1 {
    column-span: all;
}`}
          >
            <div className={styles.multiColumnDemo}>
              <p>
                CSS multi-column layout is a module of CSS that adds support
                for multi-column layouts. Support is included for establishing
                the number of columns in a layout, as well as how content
                should flow from column to column, gap sizes between columns,
                and column dividing lines (known as column rules) along with
                their appearance.
              </p>
              <p>
                The multi-column layout specification provides a way to define
                how content flows through multiple columns. This makes it
                easier to read long blocks of text if lines aren&apos;t
                excessively long. Additionally, if a newspaper-style display
                is desired, the multi-column properties can be used.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Common Layout Patterns Section ───── */}
      <Section
        title="Common Layout Patterns"
        intro="Essential layout patterns you'll use constantly. These demonstrate how different positioning and display properties work together to create real-world layouts."
        id="patterns"
      >
        <DemoGrid columns={2}>
          {/* Centred Content */}
          <DemoCard
            title="Centred Content"
            code={`/* Method 1: Absolute + Transform */
.centred {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Method 2: Flexbox (modern, preferred) */
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
}

/* Method 3: Grid (also great) */
.container {
    display: grid;
    place-items: center;
    min-height: 300px;
}`}
          >
            <div className={styles.centredDemo}>
              <div className={styles.centredBox}>Perfectly Centred</div>
            </div>
          </DemoCard>

          {/* Holy Grail */}
          <DemoCard
            title="Holy Grail Layout"
            description="The classic three-column layout with header and footer spanning full width."
            code={`.holy-grail {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 200px 1fr 200px;
    min-height: 100vh;
}

.header {
    grid-column: 1 / -1;
}

.footer {
    grid-column: 1 / -1;
}`}
          >
            <div className={styles.holyGrailDemo}>
              <div className={styles.hgHeader}>Header</div>
              <div className={styles.hgContent}>
                <div className={styles.hgSidebar}>Left</div>
                <div className={styles.hgMain}>Main Content</div>
                <div className={styles.hgSidebar}>Right</div>
              </div>
              <div className={styles.hgFooter}>Footer</div>
            </div>
          </DemoCard>

          {/* Sticky Sidebar */}
          <DemoCard
            title="Sticky Sidebar Layout"
            code={`.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 32px;
}

.sidebar {
    position: sticky;
    top: 20px;
    align-self: start;
    height: fit-content;
}`}
          >
            <div className={styles.stickyLayoutDemo}>
              <div className={styles.stickySidebar}>
                <p>
                  <strong>Sidebar</strong>
                </p>
                <p>I stick to the top when you scroll!</p>
              </div>
              <div className={styles.stickyContent}>
                <p>
                  Main content area with lots of text. This demonstrates how a
                  sticky sidebar stays in view as you scroll through long
                  content. Perfect for navigation menus, table of contents, or
                  supplementary information.
                </p>
                <p>
                  Scroll down to see the sidebar stick to the viewport...
                </p>
              </div>
            </div>
          </DemoCard>

          {/* Card Grid */}
          <DemoCard
            title="Auto-Responsive Card Grid"
            code={`/* Auto-responsive card grid */
.card-grid {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
}

/* Cards automatically wrap to new rows */
/* No media queries needed! */`}
          >
            <div className={styles.cardGridDemo}>
              <div className={styles.cardGridItem}>1</div>
              <div className={styles.cardGridItem}>2</div>
              <div className={styles.cardGridItem}>3</div>
              <div className={styles.cardGridItem}>4</div>
              <div className={styles.cardGridItem}>5</div>
              <div className={styles.cardGridItem}>6</div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Floats (Legacy) Section ───── */}
      <Section
        title="Floats (Legacy)"
        intro="Floats were once the primary way to create layouts, but they've mostly been replaced by Flexbox and Grid. However, they're still useful for wrapping text around images."
        id="floats"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Text Wrapping with Float"
            code={`/* Float an image within text */
img {
    float: left;
    margin: 0 20px 20px 0;
}

/* Clear floats to prevent layout issues */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Modern alternative: use Flexbox/Grid instead */`}
          >
            <div className={styles.floatDemo}>
              <div className={styles.floatBox}>Floated</div>
              <p>
                This text wraps around the floated element. Floats remove an
                element from normal document flow but still affect surrounding
                content. They&apos;re perfect for magazine-style text
                wrapping.
              </p>
              <p>
                Before Flexbox and Grid existed, floats were used to create
                entire page layouts. Those days are gone, but floats still
                have their place.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>

        <p className="mt-4 text-sm text-[var(--text-secondary)]">
          <strong className="text-foreground">Modern alternatives:</strong>{" "}
          Use Flexbox or Grid for layouts. Only use floats when you
          specifically need text wrapping behaviour.
        </p>
      </Section>

      {/* ───── Pro Tips Section ───── */}
      <Section title="Layout Best Practices" id="tips">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Use Grid for Page Layout</h3>
            <p>
              CSS Grid is ideal for two-dimensional page layouts. Define rows
              and columns, then place items exactly where you need them.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              {"="}
            </span>
            <h3>Flexbox for Components</h3>
            <p>
              Flexbox excels at one-dimensional alignment within components —
              navigation bars, card rows, and flexible content distribution.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              {"!"}
            </span>
            <h3>Avoid Fixed When Possible</h3>
            <p>
              Fixed positioning removes elements from the flow and can cause
              accessibility issues. Prefer sticky for scroll-aware placement.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Dive Deeper Section ───── */}
      <Section title="Dive Deeper" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Ready to explore the full power of modern CSS layout? These topics
          build on the foundations covered here.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/flexbox" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              {"|"}
            </span>
            <div>
              <h3>Flexbox</h3>
              <p>Master one-dimensional layouts for navigation and components</p>
            </div>
          </Link>
          <Link href="/grid" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              #
            </span>
            <div>
              <h3>CSS Grid</h3>
              <p>
                The most powerful two-dimensional layout system in CSS
              </p>
            </div>
          </Link>
          <Link href="/responsive" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              {"~"}
            </span>
            <div>
              <h3>Responsive Design</h3>
              <p>Make your layouts adapt to any screen size</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
