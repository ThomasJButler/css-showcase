import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: ":has() Selector | CSS Showcase",
  description:
    "Master the CSS :has() selector — the parent selector we've all been waiting for. Interactive demos and real-world examples.",
}

export default function HasSelectorPage() {
  return (
    <>
      <PageHero
        title="The :has() Selector"
        subtitle="Finally, a parent selector in CSS! Style elements based on what they contain. It's like magic, but better — it's native CSS."
      >
        <div className={styles.supportBadges}>
          <span className={`${styles.supportBadge} ${styles.chrome}`}>Chrome 105+</span>
          <span className={`${styles.supportBadge} ${styles.firefox}`}>Firefox 121+</span>
          <span className={`${styles.supportBadge} ${styles.safari}`}>Safari 15.4+</span>
          <span className={`${styles.supportBadge} ${styles.edge}`}>Edge 105+</span>
        </div>
      </PageHero>

      {/* ───── What is :has()? ───── */}
      <Section
        title="What is :has()?"
        intro="The :has() pseudo-class lets you select an element if it contains another element that matches a selector. Think of it as &ldquo;select a parent that has a specific child&rdquo; — something we've been dreaming about for years!"
        id="what-is-has"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Old Way vs New Way"
            description="No more JavaScript hacks — :has() replaces class-toggling patterns with pure CSS."
            code={`/* Pure CSS — no JS required! */
.card:has(.badge) {
    border: 2px solid gold;
    background: linear-gradient(
        to right,
        rgba(255, 215, 0, 0.1),
        transparent
    );
}`}
          >
            <div className={styles.comparison}>
              <div className={`${styles.comparisonCard} ${styles.oldWay}`}>
                <h3 className={styles.comparisonTitle}>
                  <span className={styles.iconCross} aria-hidden="true">✕</span> The Old Way
                </h3>
                <pre className={styles.comparisonCode}><code>{`// JavaScript required!
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    if (card.querySelector('.badge')) {
        card.classList.add('has-badge');
    }
});`}</code></pre>
              </div>
              <div className={`${styles.comparisonCard} ${styles.newWay}`}>
                <h3 className={styles.comparisonTitle}>
                  <span className={styles.iconCheck} aria-hidden="true">✓</span> The New Way
                </h3>
                <pre className={styles.comparisonCode}><code>{`/* Pure CSS! */
.card:has(.badge) {
    border: 2px solid gold;
    background: linear-gradient(
        to right,
        rgba(255, 215, 0, 0.1),
        transparent
    );
}`}</code></pre>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Interactive Examples ───── */}
      <Section
        title="Interactive Examples"
        intro="These demos use real :has() selectors in CSS — no JavaScript involved. Interact with the elements to see the selectors in action."
        id="examples"
      >
        <DemoGrid columns={1}>
          {/* Form Validation */}
          <DemoCard
            title="Form Validation Styling"
            description="The :has() selector detects input validity states and styles the parent field accordingly."
            code={`/* Show error only when input is invalid */
.form-field:has(input:invalid:not(:placeholder-shown)) {
    .error-message {
        display: block;
        color: #ef4444;
    }

    input {
        border-color: #ef4444;
    }
}

/* Green tick for valid inputs */
.form-field:has(input:valid:not(:placeholder-shown))::after {
    content: '✓';
    color: #10b981;
    position: absolute;
    right: 1rem;
    top: 2.5rem;
}`}
          >
            <form className={styles.demoForm} action="javascript:void(0)">
              <div className={styles.formField}>
                <label htmlFor="demo-email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="demo-email"
                  placeholder="your@email.com"
                  required
                  className={styles.formInput}
                  autoComplete="off"
                />
                <span className={styles.errorMessage}>Please enter a valid email</span>
              </div>
              <div className={styles.formField}>
                <label htmlFor="demo-password" className={styles.formLabel}>Password</label>
                <input
                  type="password"
                  id="demo-password"
                  placeholder="••••••••"
                  required
                  className={styles.formInput}
                  autoComplete="off"
                />
                <span className={styles.errorMessage}>Password is required</span>
              </div>
              <p className={styles.formHint}>Try typing to see validation in action!</p>
            </form>
          </DemoCard>

          {/* Card with Badge */}
          <DemoCard
            title="Card with Badge"
            description="Cards automatically gain special styling when they contain a badge element — no extra classes needed."
            code={`/* Style cards that contain badges */
.product-card:has(.badge) {
    border: 2px solid var(--badge-colour);
    position: relative;
    overflow: visible;
}

/* Different styles for different badges */
.product-card:has(.badge.new) {
    --badge-colour: #10b981;
    background: linear-gradient(135deg,
        rgba(16, 185, 129, 0.1) 0%,
        transparent 50%);
}

.product-card:has(.badge.sale) {
    --badge-colour: #ef4444;
    animation: pulse 2s infinite;
}`}
          >
            <div className={styles.cardsGrid}>
              <div className={styles.productCard}>
                <span className={`${styles.badge} ${styles.badgeNew}`}>NEW</span>
                <h4 className={styles.productTitle}>Premium CSS Course</h4>
                <p className={styles.productDesc}>Master modern CSS with this brilliant course</p>
              </div>
              <div className={styles.productCard}>
                <h4 className={styles.productTitle}>CSS Basics</h4>
                <p className={styles.productDesc}>Start your journey with the fundamentals</p>
              </div>
              <div className={styles.productCard}>
                <span className={`${styles.badge} ${styles.badgeSale}`}>SALE</span>
                <h4 className={styles.productTitle}>Advanced Techniques</h4>
                <p className={styles.productDesc}>Take your skills to the next level</p>
              </div>
            </div>
          </DemoCard>

          {/* Navigation with Dropdown */}
          <DemoCard
            title="Navigation with Dropdown"
            description="Items with dropdown submenus automatically get a dropdown arrow indicator and hover behaviour."
            code={`/* Style nav items that have dropdowns */
nav li:has(.dropdown) {
    position: relative;
}

/* Add dropdown arrow to items with submenus */
nav li:has(.dropdown) > a::after {
    content: ' ▾';
    font-size: 0.8em;
}

/* Show dropdown on hover */
nav li:has(.dropdown):hover .dropdown {
    display: block;
    animation: slideDown 0.3s ease-out;
}`}
          >
            <nav className={styles.demoNav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>Home</span>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>Products</span>
                  <ul className={styles.dropdown}>
                    <li><span className={styles.dropdownLink}>CSS Course</span></li>
                    <li><span className={styles.dropdownLink}>JavaScript Guide</span></li>
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>About</span>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.navLink}>Resources</span>
                  <ul className={styles.dropdown}>
                    <li><span className={styles.dropdownLink}>Blog</span></li>
                    <li><span className={styles.dropdownLink}>Tutorials</span></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </DemoCard>

          {/* Image Gallery with Captions */}
          <DemoCard
            title="Image Gallery with Captions"
            description="Figures with captions get enhanced styling, while those without fade on hover — all through :has()."
            code={`/* Style figures that have captions differently */
.gallery-item:has(figcaption) {
    background: var(--colour-surface);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
}

.gallery-item:not(:has(figcaption)) {
    border-radius: var(--radius-md);
    opacity: 0.9;
}

/* Blur images without captions on hover */
.gallery-grid:hover .gallery-item:not(:has(figcaption)) {
    filter: blur(2px);
    opacity: 0.7;
}`}
          >
            <div className={styles.galleryGrid}>
              <figure className={styles.galleryItem}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderIcon} aria-hidden="true">🌅</span>
                </div>
                <figcaption className={styles.galleryCaption}>Sunrise over London</figcaption>
              </figure>
              <figure className={styles.galleryItem}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderIcon} aria-hidden="true">🏔️</span>
                </div>
              </figure>
              <figure className={styles.galleryItem}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.placeholderIcon} aria-hidden="true">☕</span>
                </div>
                <figcaption className={styles.galleryCaption}>Perfect cup of tea</figcaption>
              </figure>
            </div>
          </DemoCard>

          {/* Article with Media */}
          <DemoCard
            title="Article with Media"
            description="Articles automatically switch to a grid layout when they contain images or video — and get colour-coded borders."
            code={`/* Different layouts for articles with media */
.blog-article:has(img, video) {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 1.5rem;
    align-items: start;
}

.blog-article:has(video) {
    background: linear-gradient(
        135deg,
        rgba(147, 51, 234, 0.1) 0%,
        transparent 50%
    );
    border-left: 4px solid #9333ea;
}

/* Articles without media stay simple */
.blog-article:not(:has(img, video)) {
    padding: 1.5rem;
    background: var(--colour-surface);
}`}
          >
            <div className={styles.articlesList}>
              <article className={styles.blogArticle}>
                <h4 className={styles.articleTitle}>CSS Grid: The Complete Guide</h4>
                <p className={styles.articleText}>Everything you need to know about CSS Grid in one comprehensive guide.</p>
              </article>
              <article className={styles.blogArticle}>
                <div className={styles.articleMedia}>
                  <div className={styles.videoPlaceholder}>
                    <span aria-hidden="true">▶</span>
                  </div>
                  {/* Hidden video element to trigger :has(video) */}
                  <video className={styles.hiddenTrigger} aria-hidden="true"><source src="" type="video/mp4" /></video>
                </div>
                <div>
                  <h4 className={styles.articleTitle}>Flexbox in 5 Minutes</h4>
                  <p className={styles.articleText}>Quick video tutorial on mastering Flexbox layouts.</p>
                </div>
              </article>
              <article className={styles.blogArticle}>
                <div className={styles.articleMedia}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.articleImage}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%2393c5fd'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20'%3ECSS Art%3C/text%3E%3C/svg%3E"
                    alt="CSS Art"
                  />
                </div>
                <div>
                  <h4 className={styles.articleTitle}>Creating Art with Pure CSS</h4>
                  <p className={styles.articleText}>Discover how to create stunning visuals using only CSS.</p>
                </div>
              </article>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Advanced Patterns ───── */}
      <Section
        title="Advanced Patterns"
        intro="Combine :has() with other selectors for powerful patterns that would have required JavaScript before."
        id="advanced-patterns"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Sibling Combinations"
            description="Use :has() with adjacent and general sibling combinators for context-aware styling."
            code={`/* Style when followed by specific element */
h2:has(+ p) {
    margin-bottom: 0.5rem;
}

/* Grid when contains both images and text */
.container:has(img):has(p) {
    display: grid;
    grid-template-columns: 1fr 1fr;
}`}
          >
            <div className={styles.patternDemo}>
              <div className={styles.patternLabel}>Sibling-aware selectors reduce layout hacks</div>
            </div>
          </DemoCard>

          <DemoCard
            title="Quantity Queries"
            description="Change layouts based on how many children an element has — responsive to content, not viewport."
            code={`/* Different layout based on child count */
.gallery:has(> :nth-child(5)) {
    grid-template-columns: repeat(3, 1fr);
}

/* Single column if only one child */
.list:has(> :only-child) {
    max-width: 600px;
    margin: 0 auto;
}`}
          >
            <div className={styles.patternDemo}>
              <div className={styles.patternLabel}>Content-driven responsive design</div>
            </div>
          </DemoCard>

          <DemoCard
            title="State-based Styling"
            description="Style ancestors based on the state of deeply nested interactive elements."
            code={`/* Highlight row with checked checkbox */
tr:has(input:checked) {
    background: rgba(16, 185, 129, 0.1);
}

/* Disable form if any field is invalid */
form:has(input:invalid) button[type="submit"] {
    opacity: 0.5;
    cursor: not-allowed;
}`}
          >
            <div className={styles.patternDemo}>
              <div className={styles.patternLabel}>Ancestor styling from descendant state</div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Browser Support & Fallbacks ───── */}
      <Section
        title="Browser Support &amp; Fallbacks"
        intro="The :has() selector enjoys broad support across modern browsers. Always provide base styles for graceful degradation."
        id="browser-support"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Compatibility Table"
            description="Current browser support for the :has() pseudo-class."
            code={`/* Progressive Enhancement */

/* Base styles for all browsers */
.card {
    border: 1px solid #e5e7eb;
}

/* Enhancement for browsers with :has() support */
@supports selector(:has(*)) {
    .card:has(.premium-badge) {
        border-color: gold;
        background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.1) 0%,
            transparent 50%
        );
    }
}`}
          >
            <div className={styles.supportTable}>
              <div className={`${styles.supportRow} ${styles.supportHeader}`}>
                <span>Browser</span>
                <span>Version</span>
                <span>Status</span>
              </div>
              <div className={styles.supportRow}>
                <span>Chrome / Edge</span>
                <span>105+</span>
                <span className={styles.statusSupported}>✓ Fully Supported</span>
              </div>
              <div className={styles.supportRow}>
                <span>Firefox</span>
                <span>121+</span>
                <span className={styles.statusSupported}>✓ Fully Supported</span>
              </div>
              <div className={styles.supportRow}>
                <span>Safari</span>
                <span>15.4+</span>
                <span className={styles.statusSupported}>✓ Fully Supported</span>
              </div>
              <div className={styles.supportRow}>
                <span>Mobile Browsers</span>
                <span>Latest</span>
                <span className={styles.statusSupported}>✓ Widely Supported</span>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Pro Tips ───── */}
      <Section
        title="Pro Tips"
        intro="Keep these guidelines in mind when using :has() in production."
        id="pro-tips"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Best Practices" code="">
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">⚡</span>
                <h3 className={styles.tipTitle}>Performance</h3>
                <p className={styles.tipText}>
                  Keep :has() selectors simple. Complex selectors can impact performance, especially with many elements.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">#</span>
                <h3 className={styles.tipTitle}>Specificity</h3>
                <p className={styles.tipText}>
                  :has() doesn&apos;t increase specificity by itself — it&apos;s the selectors inside that count.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">🧪</span>
                <h3 className={styles.tipTitle}>Testing</h3>
                <p className={styles.tipText}>
                  Always test in browsers that don&apos;t support :has() to ensure graceful degradation.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
