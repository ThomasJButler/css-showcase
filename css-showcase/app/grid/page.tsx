import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { GridPlayground } from "./grid-playground"
import { FlexVsGrid } from "./flex-vs-grid"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Grid | CSS Showcase",
  description:
    "Master CSS Grid — the most powerful two-dimensional layout system. Create complex layouts with rows, columns, areas, and precise placement.",
}

export default function GridPage() {
  return (
    <>
      <PageHero
        title="CSS Grid"
        subtitle="The ultimate two-dimensional layout system — precise control meets flexibility"
      />

      {/* ───── Fundamentals Section ───── */}
      <Section
        title="Grid Fundamentals"
        intro="CSS Grid allows you to create complex layouts by defining rows and columns, then placing items exactly where you want them."
        id="basics"
      >
        <DemoGrid columns={2}>
          {/* Basic Grid */}
          <DemoCard
            title="Basic Grid"
            code={`/* Simple 3-column grid */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

/* Using repeat() */
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

/* Different gaps */
.grid {
    row-gap: 1rem;
    column-gap: 2rem;
    /* or shorthand: gap: 1rem 2rem; */
}`}
          >
            <div className={`${styles.gridDemo} ${styles.basicGrid}`}>
              <div className={styles.gridItem}>1</div>
              <div className={styles.gridItem}>2</div>
              <div className={styles.gridItem}>3</div>
              <div className={styles.gridItem}>4</div>
              <div className={styles.gridItem}>5</div>
              <div className={styles.gridItem}>6</div>
            </div>
            <p className={styles.demoLabel}>repeat(3, 1fr)</p>
          </DemoCard>

          {/* Auto-fit Responsive Grid */}
          <DemoCard
            title="Responsive Grid"
            code={`/* Auto-responsive grid */
.grid {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

/* auto-fill vs auto-fit */
/* auto-fill: keeps empty columns */
/* auto-fit: expands items to fill */`}
          >
            <div className={`${styles.gridDemo} ${styles.autoFitGrid}`}>
              <div className={styles.gridItem}>1</div>
              <div className={styles.gridItem}>2</div>
              <div className={styles.gridItem}>3</div>
              <div className={styles.gridItem}>4</div>
              <div className={styles.gridItem}>5</div>
            </div>
            <p className={styles.demoLabel}>
              auto-fit, minmax(120px, 1fr)
            </p>
          </DemoCard>

          {/* Mixed Column Widths */}
          <DemoCard
            title="Mixed Column Widths"
            code={`/* Fixed + flexible columns */
.grid {
    display: grid;
    grid-template-columns: 150px 1fr 100px;
    gap: 1rem;
}

/* The fr unit distributes
   remaining space after fixed
   tracks are sized */`}
          >
            <div className={`${styles.gridDemo} ${styles.mixedColumns}`}>
              <div className={`${styles.gridItem} ${styles.fixedItem}`}>
                150px
              </div>
              <div className={`${styles.gridItem} ${styles.flexibleItem}`}>
                1fr (flexible)
              </div>
              <div className={`${styles.gridItem} ${styles.fixedItem}`}>
                100px
              </div>
            </div>
            <p className={styles.demoLabel}>150px 1fr 100px</p>
          </DemoCard>

          {/* Gap Demo */}
          <DemoCard
            title="Gap Property"
            code={`/* Uniform gap */
.grid {
    display: grid;
    gap: 1rem;
}

/* Different row/column gaps */
.grid {
    row-gap: 1rem;
    column-gap: 2rem;
    /* or shorthand */
    gap: 1rem 2rem;
}`}
          >
            <div className={`${styles.gridDemo} ${styles.gapDemo}`}>
              <div className={styles.gridItem}>1</div>
              <div className={styles.gridItem}>2</div>
              <div className={styles.gridItem}>3</div>
              <div className={styles.gridItem}>4</div>
            </div>
            <p className={styles.demoLabel}>gap: 2rem</p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Placement Section ───── */}
      <Section
        title="Grid Placement"
        intro="Place items precisely using line numbers, spanning, and the grid-column/grid-row properties."
        id="placement"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Spanning Rows & Columns"
            code={`/* Span multiple columns */
.item { grid-column: span 2; }

/* Span multiple rows */
.item { grid-row: span 2; }

/* Full-width item */
.item { grid-column: 1 / -1; }

/* Explicit placement */
.item {
    grid-column: 2 / 4;
    grid-row: 1 / 3;
}`}
          >
            <div className={`${styles.gridDemo} ${styles.placementGrid}`}>
              <div className={`${styles.gridItem} ${styles.span2}`}>
                Span 2 cols
              </div>
              <div className={`${styles.gridItem} ${styles.tallSpan}`}>
                Span 2 rows
              </div>
              <div className={styles.gridItem}>Normal</div>
              <div className={styles.gridItem}>Normal</div>
              <div className={`${styles.gridItem} ${styles.fullWidth}`}>
                Full Width (1 / -1)
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Template Areas Section ───── */}
      <Section
        title="Grid Template Areas"
        intro="Define your layout visually using named grid areas — it's like ASCII art for layouts!"
        id="areas"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Named Grid Areas"
            code={`/* Define areas visually */
.grid {
    display: grid;
    grid-template-areas:
        "header header header"
        "nav    main   sidebar"
        "nav    main   sidebar"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto auto;
    gap: 1rem;
}

/* Assign items to areas */
.header  { grid-area: header; }
.nav     { grid-area: nav; }
.main    { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer  { grid-area: footer; }`}
          >
            <div className={`${styles.gridDemo} ${styles.areaGrid}`}>
              <div className={styles.areaHeader}>Header</div>
              <nav className={styles.areaNav}>Navigation</nav>
              <main className={styles.areaMain}>Main Content</main>
              <aside className={styles.areaSidebar}>Sidebar</aside>
              <div className={styles.areaFooter}>Footer</div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Real-World Layouts Section ───── */}
      <Section
        title="Real-World Grid Layouts"
        intro="Practical grid layouts you can use in your projects today."
        id="layouts"
      >
        <DemoGrid columns={1}>
          {/* Masonry Layout */}
          <DemoCard
            title="Masonry-like Layout"
            code={`/* Masonry-style grid */
.masonry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    grid-auto-flow: dense;
    gap: 1rem;
}

.tall { grid-row: span 2; }
.wide { grid-column: span 2; }
.big {
    grid-column: span 2;
    grid-row: span 2;
}`}
          >
            <div className={`${styles.gridDemo} ${styles.masonryGrid}`}>
              <div className={`${styles.masonryItem} ${styles.masonryTall}`}>
                Tall
              </div>
              <div className={styles.masonryItem}>Normal</div>
              <div className={`${styles.masonryItem} ${styles.masonryWide}`}>
                Wide
              </div>
              <div className={styles.masonryItem}>Normal</div>
              <div className={`${styles.masonryItem} ${styles.masonryTall}`}>
                Tall
              </div>
              <div className={styles.masonryItem}>Normal</div>
              <div className={`${styles.masonryItem} ${styles.masonryBig}`}>
                Big
              </div>
              <div className={styles.masonryItem}>Normal</div>
            </div>
          </DemoCard>

          {/* Dashboard Layout */}
          <DemoCard
            title="Dashboard Layout"
            code={`/* Dashboard grid */
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 1rem;
}

.stats    { grid-column: span 2; }
.chart    { grid-column: span 2;
             grid-row: span 2; }
.activity { grid-column: span 4; }`}
          >
            <div className={`${styles.gridDemo} ${styles.dashboardGrid}`}>
              <div className={`${styles.dashboardItem} ${styles.dashStats}`}>
                Stats Panel
              </div>
              <div className={`${styles.dashboardItem} ${styles.dashChart}`}>
                Chart Area
              </div>
              <div className={`${styles.dashboardItem} ${styles.dashUsers}`}>
                Users
              </div>
              <div
                className={`${styles.dashboardItem} ${styles.dashNotifications}`}
              >
                Alerts
              </div>
              <div className={styles.dashboardItem}>Revenue</div>
              <div
                className={`${styles.dashboardItem} ${styles.dashActivity}`}
              >
                Activity Feed
              </div>
            </div>
          </DemoCard>

          {/* Magazine Layout */}
          <DemoCard
            title="Magazine Layout"
            code={`/* Magazine-style grid */
.magazine {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 1rem;
}

.feature {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

.sidebar {
    grid-column: 4;
    grid-row: 1 / 4;
}`}
          >
            <div className={`${styles.gridDemo} ${styles.magazineGrid}`}>
              <div className={styles.magazineFeature}>Feature Article</div>
              <div className={styles.magazineSub}>Article 2</div>
              <div className={styles.magazineSub}>Article 3</div>
              <div className={styles.magazineSidebar}>Sidebar</div>
              <div className={styles.magazineBottom}>Related Stories</div>
              <div className={styles.magazineAd}>Ad Space</div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Interactive Playground Section ───── */}
      <Section
        title="Interactive Grid Playground"
        intro="Experiment with grid properties and see the results in real-time. Adjust columns, gaps, flow, and item spanning."
        id="playground"
      >
        <GridPlayground />
      </Section>

      {/* ───── Flex vs Grid Comparison ───── */}
      <Section
        title="Flexbox vs Grid"
        intro="Both are essential layout tools, but they excel in different scenarios. See the same content rendered by each system."
        id="flex-vs-grid"
      >
        <FlexVsGrid />
      </Section>

      {/* ───── Best Practices Section ───── */}
      <Section title="Grid Best Practices" id="tips">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Use FR Units</h3>
            <p>
              The fr unit creates flexible tracks that share available space
              proportionally. Prefer fr over percentages for fluid layouts.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              {"[ ]"}
            </span>
            <h3>Mobile-First Grid</h3>
            <p>
              Start with a single column on mobile, then add complexity for
              larger screens using media queries or auto-fit.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              {"<>"}
            </span>
            <h3>Combine with Flexbox</h3>
            <p>
              Use Grid for page-level layout, Flexbox for component alignment.
              They work brilliantly together!
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Explore More Layout Magic" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          You&apos;ve mastered Grid! Time to explore more layout techniques and
          visual effects.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/layout" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              #
            </span>
            <div>
              <h3>Layout Techniques</h3>
              <p>Combine Grid and Flexbox like a pro</p>
            </div>
          </Link>
          <Link href="/animations" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              *
            </span>
            <div>
              <h3>Animations</h3>
              <p>Bring your designs to life with keyframes</p>
            </div>
          </Link>
          <Link href="/transitions" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>Transitions</h3>
              <p>Smooth state changes and interactions</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
