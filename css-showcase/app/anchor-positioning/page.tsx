import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Anchor Positioning | CSS Showcase",
  description:
    "Master CSS Anchor Positioning — position elements relative to other elements without JavaScript. Create tooltips, popovers, and dynamic layouts with the new Anchor Positioning API.",
}

export default function AnchorPositioningPage() {
  return (
    <>
      <PageHero
        title="CSS Anchor Positioning"
        subtitle="Position elements relative to other elements without JavaScript. The Anchor Positioning API brings tooltips, popovers, and dropdown menus into pure CSS."
      >
        <div className={styles.supportBadges}>
          <span className={`${styles.supportBadge} ${styles.chrome}`}>Chrome 125+</span>
          <span className={`${styles.supportBadge} ${styles.firefoxDev}`}>Firefox — In Development</span>
          <span className={`${styles.supportBadge} ${styles.safariDev}`}>Safari — In Development</span>
        </div>
      </PageHero>

      {/* ───── The Problem Anchor Positioning Solves ───── */}
      <Section
        title="The Problem Anchor Positioning Solves"
        intro="For years, positioning a tooltip next to a button or a dropdown below an input required JavaScript. You&rsquo;d calculate positions, handle scrolling, deal with viewport edges — it was a nightmare. Anchor Positioning changes everything."
        id="problem"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Hover Tooltip"
            description="Hover the button to see a tooltip positioned with pure CSS — no JavaScript involved."
            code={`/* Define an anchor */
.button {
    anchor-name: --my-button;
}

/* Position relative to the anchor */
.tooltip {
    position: absolute;
    position-anchor: --my-button;
    bottom: anchor(top);
    left: anchor(center);
    translate: -50% -8px; /* Centre and add gap */
}`}
          >
            <div className={styles.introDemo}>
              <div className={styles.introAnchorWrap}>
                <button className={styles.anchorButton} type="button">Hover for Tooltip</button>
                <div className={styles.simpleTooltip}>I&apos;m positioned with CSS!</div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Key Concepts"
            description="The three building blocks of anchor positioning."
            code=""
          >
            <div className={styles.conceptsGrid}>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>anchor-name</code>
                <p className={styles.conceptDesc}>Defines an element as an anchor point that other elements can reference.</p>
              </div>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>position-anchor</code>
                <p className={styles.conceptDesc}>Links a positioned element to a named anchor, creating the relationship.</p>
              </div>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>anchor()</code>
                <p className={styles.conceptDesc}>Function that references anchor edges — top, bottom, left, right, or centre.</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Basic Positioning ───── */}
      <Section
        title="Basic Positioning"
        intro="Position tooltips, badges, and notifications relative to any element. Hover each button to see a tooltip appear in a different direction."
        id="basic-positioning"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Directional Tooltips"
            description="Tooltips can be placed on any side of the anchor element. Hover each button to see the tooltip."
            code={`.button { anchor-name: --my-anchor; }

/* Tooltip above button */
.tooltip-top {
    position: absolute;
    position-anchor: --my-anchor;
    bottom: anchor(top);
    left: anchor(center);
    translate: -50% -8px;
}

/* Tooltip below button */
.tooltip-bottom {
    position: absolute;
    position-anchor: --my-anchor;
    top: anchor(bottom);
    left: anchor(center);
    translate: -50% 8px;
}

/* Tooltip to the right */
.tooltip-right {
    position: absolute;
    position-anchor: --my-anchor;
    left: anchor(right);
    top: anchor(center);
    translate: 8px -50%;
}

/* Tooltip to the left */
.tooltip-left {
    position: absolute;
    position-anchor: --my-anchor;
    right: anchor(left);
    top: anchor(center);
    translate: -8px -50%;
}`}
          >
            <div className={styles.positioningDemo}>
              <div className={styles.anchorContainer}>
                <button className={styles.posButton} type="button">Button</button>
                <div className={`${styles.posTooltip} ${styles.posTop}`}>Top</div>
              </div>
              <div className={styles.anchorContainer}>
                <button className={styles.posButton} type="button">Button</button>
                <div className={`${styles.posTooltip} ${styles.posRight}`}>Right</div>
              </div>
              <div className={styles.anchorContainer}>
                <button className={styles.posButton} type="button">Button</button>
                <div className={`${styles.posTooltip} ${styles.posBottom}`}>Bottom</div>
              </div>
              <div className={styles.anchorContainer}>
                <button className={styles.posButton} type="button">Button</button>
                <div className={`${styles.posTooltip} ${styles.posLeft}`}>Left</div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Real-World Examples ───── */}
      <Section
        title="Real-World Examples"
        intro="Anchor positioning shines in common UI patterns. Here are two practical examples you can build with CSS alone."
        id="real-world"
      >
        <DemoGrid columns={1}>
          {/* Dropdown Menu */}
          <DemoCard
            title="Dropdown Menu"
            description="A menu anchored below its trigger button — no JavaScript positioning logic required."
            code={`.trigger {
    anchor-name: --dropdown-anchor;
}

.menu {
    position: absolute;
    position-anchor: --dropdown-anchor;
    top: anchor(bottom);
    left: anchor(left);
    margin-top: 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
}

.trigger:hover + .menu,
.menu:hover {
    opacity: 1;
    pointer-events: auto;
}`}
          >
            <div className={styles.dropdownDemo}>
              <div className={styles.dropdownWrap}>
                <button className={styles.dropdownTrigger} type="button">
                  Open Menu
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div className={styles.dropdownMenu}>
                  <span className={styles.dropdownItem}>Profile</span>
                  <span className={styles.dropdownItem}>Settings</span>
                  <span className={styles.dropdownItem}>Logout</span>
                </div>
              </div>
            </div>
          </DemoCard>

          {/* Notification Badge */}
          <DemoCard
            title="Notification Badge"
            description="A badge anchored to the top-right corner of an icon button — always visible, no manual calculation."
            code={`.icon-button {
    anchor-name: --icon-anchor;
}

.badge {
    position: absolute;
    position-anchor: --icon-anchor;
    top: anchor(top);
    left: anchor(right);
    translate: -30% -30%; /* Overlap corner */
}`}
          >
            <div className={styles.badgeDemo}>
              <div className={styles.badgeWrap}>
                <button className={styles.iconButton} type="button" aria-label="Notifications">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                  </svg>
                </button>
                <span className={styles.notificationBadge}>3</span>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Browser Support ───── */}
      <Section
        title="Browser Support"
        intro="CSS Anchor Positioning is a cutting-edge feature. Use feature detection to provide fallbacks for browsers that don&rsquo;t support it yet."
        id="browser-support"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Compatibility &amp; Feature Detection"
            description="Use @supports to progressively enhance with anchor positioning."
            code={`/* Feature detection */
@supports (anchor-name: --test) {
    /* Use anchor positioning */
    .tooltip {
        position-anchor: --my-anchor;
        bottom: anchor(top);
    }
}

/* Fallback for unsupported browsers */
@supports not (anchor-name: --test) {
    .tooltip {
        position: absolute;
        top: -40px; /* Manual positioning */
    }
}`}
          >
            <div className={styles.supportInfo}>
              <div className={styles.warningBox}>
                <h3 className={styles.warningTitle}>Cutting-Edge Feature</h3>
                <p className={styles.warningIntro}><strong>CSS Anchor Positioning is brand new!</strong></p>
                <ul className={styles.supportList}>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">&#x2713;</span>
                    <strong>Chrome 125+:</strong> Supported
                  </li>
                  <li>
                    <span className={styles.statusIconWip} aria-hidden="true">&#x25CB;</span>
                    <strong>Firefox:</strong> In development
                  </li>
                  <li>
                    <span className={styles.statusIconWip} aria-hidden="true">&#x25CB;</span>
                    <strong>Safari:</strong> In development
                  </li>
                </ul>
                <p className={styles.warningNote}>
                  <strong>For production:</strong> Use JavaScript fallbacks or wait for broader support. Consider using a polyfill or CSS feature detection with <code>@supports</code>.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Why This Matters ───── */}
      <Section
        title="Why This Matters"
        intro="Anchor Positioning removes the need for thousands of lines of JavaScript positioning logic. It&rsquo;s all declarative CSS now."
        id="why-it-matters"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="What You No Longer Need"
            description="Define relationships between elements and let the browser handle the rest."
            code=""
          >
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCross} aria-hidden="true">&#x2717;</span>
                <p className={styles.benefitText}>Calculating element positions with <code>getBoundingClientRect()</code></p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCross} aria-hidden="true">&#x2717;</span>
                <p className={styles.benefitText}>Handling scroll events to reposition tooltips</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCross} aria-hidden="true">&#x2717;</span>
                <p className={styles.benefitText}>Detecting viewport edges and flipping positions</p>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCross} aria-hidden="true">&#x2717;</span>
                <p className={styles.benefitText}>Heavy libraries like Popper.js for simple tooltips</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Keep Learning ───── */}
      <Section
        title="Keep Learning"
        intro="Explore other modern CSS features that pair brilliantly with anchor positioning."
        id="keep-learning"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Related Features" code="">
            <div className={styles.relatedGrid}>
              <a href="/has-selector" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>:has() Selector</h3>
                <p className={styles.relatedDesc}>Another game-changing modern CSS feature that changes how we write selectors.</p>
              </a>
              <a href="/container-queries" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Container Queries</h3>
                <p className={styles.relatedDesc}>Responsive design based on container size, not viewport size.</p>
              </a>
              <a href="/custom-properties" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Custom Properties</h3>
                <p className={styles.relatedDesc}>Use CSS variables to create dynamic, reusable anchor names.</p>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
