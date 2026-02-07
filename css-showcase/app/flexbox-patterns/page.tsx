import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Flexbox Patterns | CSS Showcase",
  description:
    "Master common Flexbox patterns — navigation bars, card layouts, media objects, and real-world layout solutions.",
}

export default function FlexboxPatternsPage() {
  return (
    <>
      <PageHero
        title="Flexbox Patterns"
        subtitle="Real-world flexbox patterns you'll use again and again — navigation bars, card layouts, media objects, and more"
      />

      {/* ───── Common Patterns Section ───── */}
      <Section
        title="Common Flexbox Patterns"
        intro="Real-world flexbox patterns you'll use again and again in your projects."
        id="patterns"
      >
        <DemoGrid columns={2}>
          {/* Navigation Bar */}
          <DemoCard
            title="Navigation Bar"
            code={`/* Responsive navigation */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
}

/* Push items apart */
.nav-brand { margin-right: auto; }`}
          >
            <nav className={styles.patternNav}>
              <div className={styles.navBrand}>Logo</div>
              <ul className={styles.navMenu}>
                <li>
                  <a href="#patterns" aria-label="Home navigation link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#patterns" aria-label="About navigation link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#patterns" aria-label="Services navigation link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#patterns" aria-label="Contact navigation link">
                    Contact
                  </a>
                </li>
              </ul>
              <button className={styles.navCta}>Sign Up</button>
            </nav>
          </DemoCard>

          {/* Card Layout */}
          <DemoCard
            title="Card Layout"
            code={`/* Equal height cards */
.cards {
    display: flex;
    gap: 1rem;
}

.card {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.card p {
    flex: 1; /* Push button to bottom */
}`}
          >
            <div className={styles.patternCards}>
              <div className={styles.patternCard}>
                <h4>Card 1</h4>
                <p>Flexible card that grows to fill space.</p>
                <button>Action</button>
              </div>
              <div className={styles.patternCard}>
                <h4>Card 2</h4>
                <p>All cards maintain equal height.</p>
                <button>Action</button>
              </div>
              <div className={styles.patternCard}>
                <h4>Card 3</h4>
                <p>Button always at the bottom.</p>
                <button>Action</button>
              </div>
            </div>
          </DemoCard>

          {/* Media Object */}
          <DemoCard
            title="Media Object"
            code={`/* Media object pattern */
.media {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.media-image {
    flex: 0 0 100px; /* Fixed width */
}

.media-content {
    flex: 1; /* Take remaining space */
}`}
          >
            <div className={styles.patternMedia}>
              <div className={styles.mediaImage} />
              <div className={styles.mediaContent}>
                <h4>Media Object Pattern</h4>
                <p>
                  Image on the left, content on the right. A classic pattern
                  made simple with flexbox.
                </p>
              </div>
            </div>
          </DemoCard>

          {/* Sticky Footer */}
          <DemoCard
            title="Sticky Footer"
            code={`/* Sticky footer pattern */
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header, .footer {
    flex: 0 0 auto;
}

.main {
    flex: 1 0 auto;
}`}
          >
            <div className={styles.patternSticky}>
              <header className={styles.stickyHeader}>Header</header>
              <main className={styles.stickyContent}>
                Main content area that expands
              </main>
              <footer className={styles.stickyFooter}>
                Footer sticks to bottom
              </footer>
            </div>
          </DemoCard>

          {/* Input Groups */}
          <DemoCard
            title="Input Groups"
            code={`/* Input group pattern */
.input-group {
    display: flex;
}

.input-group input {
    flex: 1;
    border-radius: 0;
}

.input-addon {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background: var(--colour-surface);
}`}
          >
            <div className={styles.inputGroups}>
              <div className={styles.patternInputGroup}>
                <span className={styles.inputAddon}>@</span>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.patternInputGroup}>
                <input type="text" placeholder="Search..." />
                <button className={styles.inputButton}>Go</button>
              </div>
            </div>
          </DemoCard>

          {/* Holy Grail Layout */}
          <DemoCard
            title="Holy Grail Layout"
            code={`/* Holy grail layout */
.layout {
    display: flex;
    gap: 1rem;
}

.sidebar-left,
.sidebar-right {
    flex: 0 0 200px; /* Fixed width */
}

.main-content {
    flex: 1; /* Flexible centre */
}

/* Responsive */
@media (max-width: 768px) {
    .layout { flex-direction: column; }
}`}
          >
            <div className={styles.patternHolyGrail}>
              <aside className={styles.sidebarLeft}>Left</aside>
              <main className={styles.mainContent}>Main Content</main>
              <aside className={styles.sidebarRight}>Right</aside>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Pro Tips Section ───── */}
      <Section
        title="Flexbox Pro Tips"
        intro="Battle-tested advice to level up your flexbox game."
        id="tips"
      >
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Use Gap Instead of Margins</h3>
            <p>
              The gap property is cleaner and doesn&apos;t require nth-child
              selectors to remove edge margins.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              0
            </span>
            <h3>Min-Width: 0 for Truncation</h3>
            <p>
              Flex items have min-width: auto by default. Set to 0 to allow text
              truncation with overflow: hidden.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              ~
            </span>
            <h3>Flex: 1 1 0 vs Flex: 1</h3>
            <p>
              Flex: 1 is shorthand for flex: 1 1 0, which makes items grow
              equally from a zero basis.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Master Two Dimensions" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Flexbox is perfect for one dimension. Ready for the full power of
          two-dimensional layouts?
        </p>
        <div className={styles.nextGrid}>
          <Link href="/flexbox" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              &lt;
            </span>
            <div>
              <h3>Back to Flexbox Basics</h3>
              <p>Review fundamentals and the interactive playground</p>
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
