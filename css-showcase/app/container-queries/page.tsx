import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Container Queries | CSS Showcase",
  description:
    "Master CSS Container Queries — responsive components based on container size, not viewport. The future of component-based design.",
}

export default function ContainerQueriesPage() {
  return (
    <>
      <PageHero
        title="Container Queries"
        subtitle="Finally! Components that respond to their container's size, not the viewport. Build truly reusable components that work anywhere."
      >
        <div className={styles.supportBadges}>
          <span className={`${styles.supportBadge} ${styles.chrome}`}>Chrome 106+</span>
          <span className={`${styles.supportBadge} ${styles.firefox}`}>Firefox 110+</span>
          <span className={`${styles.supportBadge} ${styles.safari}`}>Safari 16+</span>
          <span className={`${styles.supportBadge} ${styles.edge}`}>Edge 106+</span>
        </div>
      </PageHero>

      {/* ───── What are Container Queries? ───── */}
      <Section
        title="What are Container Queries?"
        intro="Container queries allow you to apply styles based on the size of a containing element rather than the viewport. This means your components can adapt to any layout context — sidebar, main content, or anywhere else!"
        id="what-are-container-queries"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Old Way vs New Way"
            description="Media queries respond to the viewport — container queries respond to the parent. A fundamental shift in responsive design."
            code={`/* Media Queries — responds to viewport only */
@media (min-width: 768px) {
    .card {
        display: grid;
        grid-template-columns: 200px 1fr;
    }
}
/* Problem: Card looks wrong in a sidebar! */

/* Container Queries — responds to container */
.card-container {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 200px 1fr;
    }
}`}
          >
            <div className={styles.comparison}>
              <div className={`${styles.comparisonCard} ${styles.oldWay}`}>
                <h3 className={styles.comparisonTitle}>
                  <span className={styles.iconCross} aria-hidden="true">✕</span> Media Queries (Old Way)
                </h3>
                <pre className={styles.comparisonCode}><code>{`/* Responds to viewport only */
@media (min-width: 768px) {
    .card {
        display: grid;
        grid-template-columns: 200px 1fr;
    }
}

/* Problem: Card looks wrong in sidebar! */`}</code></pre>
              </div>
              <div className={`${styles.comparisonCard} ${styles.newWay}`}>
                <h3 className={styles.comparisonTitle}>
                  <span className={styles.iconCheck} aria-hidden="true">✓</span> Container Queries (New Way)
                </h3>
                <pre className={styles.comparisonCode}><code>{`/* Responds to container size */
.card-container {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 200px 1fr;
    }
}`}</code></pre>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Interactive Examples ───── */}
      <Section
        title="Interactive Examples"
        intro="These demos use real CSS container queries. Resize the containers to see how the same component adapts to different sizes."
        id="examples"
      >
        <DemoGrid columns={1}>
          {/* Responsive Card Component */}
          <DemoCard
            title="Responsive Card Component"
            description="Resize the containers below to see how the same product card adapts to different sizes — from compact to full-width."
            code={`/* Define container */
.product-card-container {
    container-type: inline-size;
    container-name: card;
}

/* Default mobile-first styles */
.product-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Compact layout for small containers */
@container card (max-width: 399px) {
    .product-image {
        height: 120px;
    }

    .product-description {
        display: none;
    }

    .product-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
}

/* Horizontal layout for medium containers */
@container card (min-width: 400px) {
    .product-card {
        flex-direction: row;
    }

    .product-image {
        width: 200px;
        height: 150px;
    }

    .product-button {
        padding: 0.75rem 1.5rem;
    }
}

/* Enhanced layout for large containers */
@container card (min-width: 600px) {
    .product-content {
        padding: 2rem;
    }

    .product-title {
        font-size: 1.5rem;
    }

    .product-meta {
        justify-content: space-between;
    }
}`}
          >
            <div className={styles.containerDemoGrid}>
              {/* Resizable container */}
              <div className={styles.resizableContainer}>
                <div className={styles.resizeHandle}>↔ Drag to resize</div>
                <div className={styles.productCardContainer}>
                  <article className={styles.productCardCq}>
                    <div className={styles.productImage}>
                      <span className={styles.productImageText}>CSS Course</span>
                    </div>
                    <div className={styles.productContent}>
                      <span className={styles.productCategory}>Web Development</span>
                      <h3 className={styles.productTitle}>Master Modern CSS</h3>
                      <p className={styles.productDescription}>
                        Learn everything from basics to advanced techniques including
                        Container Queries, :has(), and more!
                      </p>
                      <div className={styles.productMeta}>
                        <span className={styles.productPrice}>£49.99</span>
                        <button className={styles.productButton} type="button">Enrol Now</button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              {/* Fixed sidebar container */}
              <div className={styles.fixedContainer}>
                <div className={styles.containerLabel}>Sidebar (300px)</div>
                <div className={styles.productCardContainer}>
                  <article className={styles.productCardCq}>
                    <div className={styles.productImage}>
                      <span className={styles.productImageText}>CSS Course</span>
                    </div>
                    <div className={styles.productContent}>
                      <span className={styles.productCategory}>Web Development</span>
                      <h3 className={styles.productTitle}>Master Modern CSS</h3>
                      <p className={styles.productDescription}>
                        Learn everything from basics to advanced techniques including
                        Container Queries, :has(), and more!
                      </p>
                      <div className={styles.productMeta}>
                        <span className={styles.productPrice}>£49.99</span>
                        <button className={styles.productButton} type="button">Enrol Now</button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </DemoCard>

          {/* Container Size Units */}
          <DemoCard
            title="Container Size Units"
            description="Container query units let you size elements relative to their container, not the viewport."
            code={`/* Container query units */
.units-container {
    container-type: size;
}

.cqw-text {
    /* 5% of container width */
    font-size: clamp(1rem, 5cqw, 2rem);
}

.cqh-box {
    /* 30% of container height */
    height: 30cqh;
    display: grid;
    place-items: center;
    background: var(--gradient-primary);
    colour: white;
    border-radius: 0.5rem;
}

/* Other units:
   cqi - inline size
   cqb - block size
   cqmin - smaller of cqi/cqb
   cqmax - larger of cqi/cqb */`}
          >
            <div className={styles.unitsContainer}>
              <div className={styles.unitDemo}>
                <h4 className={styles.unitDemoTitle}>Using cqw (container query width)</h4>
                <p className={styles.cqwText}>This text scales with container width!</p>
              </div>
              <div className={styles.unitDemo}>
                <h4 className={styles.unitDemoTitle}>Using cqh (container query height)</h4>
                <div className={styles.cqhBox}>Height-based sizing</div>
              </div>
            </div>
          </DemoCard>

          {/* Named Containers */}
          <DemoCard
            title="Named Containers"
            description="Give containers names to target specific ancestors when you have nested containment contexts."
            code={`/* Named containers for specificity */
.outer-container {
    container-type: inline-size;
    container-name: outer;
    padding: 2rem;
    background: #f3f4f6;
}

.inner-container {
    container-type: inline-size;
    container-name: inner;
    padding: 1rem;
    background: white;
}

/* Target specific container */
@container inner (min-width: 300px) {
    .responsive-box {
        background: var(--colour-primary);
        colour: white;
        padding: 1rem;
    }
}`}
          >
            <div className={styles.namedDemo}>
              <div className={styles.outerContainer}>
                <h4 className={styles.containerTitle}>Outer Container</h4>
                <div className={styles.innerContainer}>
                  <h4 className={styles.containerTitle}>Inner Container</h4>
                  <div className={styles.responsiveBox}>
                    I respond to the inner container!
                  </div>
                </div>
              </div>
            </div>
          </DemoCard>

          {/* Style Queries */}
          <DemoCard
            title="Style Queries"
            description="Query custom properties on containers — components can adapt to theme context without extra classes."
            code={`/* Style queries (experimental) */
.theme-container {
    container-type: inline-size;
}

/* Query custom properties */
@container style(--theme: dark) {
    .theme-card {
        background: #1a1a1a;
        colour: white;
        border-colour: #333;
    }
}

@container style(--theme: light) {
    .theme-card {
        background: white;
        colour: #333;
        border-colour: #e5e7eb;
    }
}

/* Combine size and style queries */
@container (min-width: 400px) and
           style(--theme: dark) {
    .theme-card {
        padding: 2rem;
        border-width: 2px;
    }
}`}
          >
            <div className={styles.styleQueryDemo}>
              <div className={`${styles.themeContainer} ${styles.themeDark}`}>
                <div className={styles.themeCard}>
                  <h4 className={styles.themeCardTitle}>Dark Theme Container</h4>
                  <p className={styles.themeCardText}>Components adapt to container styles!</p>
                </div>
              </div>
              <div className={`${styles.themeContainer} ${styles.themeLight}`}>
                <div className={styles.themeCard}>
                  <h4 className={styles.themeCardTitle}>Light Theme Container</h4>
                  <p className={styles.themeCardText}>Same component, different container style</p>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Container Queries vs Media Queries ───── */}
      <Section
        title="Container Queries vs Media Queries"
        intro="Understanding when to use each approach is key to building robust responsive systems."
        id="comparison"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Feature Comparison"
            code=""
          >
            <div className={styles.comparisonTable}>
              <div className={`${styles.comparisonRow} ${styles.comparisonHeader}`}>
                <span>Feature</span>
                <span>Media Queries</span>
                <span>Container Queries</span>
              </div>
              <div className={styles.comparisonRow}>
                <span className={styles.featureLabel}>Responds to</span>
                <span>Viewport size</span>
                <span className={styles.highlight}>Container size</span>
              </div>
              <div className={styles.comparisonRow}>
                <span className={styles.featureLabel}>Use case</span>
                <span>Page-level layouts</span>
                <span className={styles.highlight}>Component-level layouts</span>
              </div>
              <div className={styles.comparisonRow}>
                <span className={styles.featureLabel}>Reusability</span>
                <span>Limited (viewport-dependent)</span>
                <span className={styles.highlight}>High (context-independent)</span>
              </div>
              <div className={styles.comparisonRow}>
                <span className={styles.featureLabel}>Browser support</span>
                <span>Universal</span>
                <span>Modern browsers (87%+)</span>
              </div>
              <div className={styles.comparisonRow}>
                <span className={styles.featureLabel}>Performance</span>
                <span>Excellent</span>
                <span>Good (slight overhead)</span>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="When to Use Each"
            code=""
          >
            <div className={styles.practiceGrid}>
              <div className={`${styles.practiceCard} ${styles.mediaCard}`}>
                <h4 className={styles.practiceTitle}>Use Media Queries for:</h4>
                <ul className={styles.practiceList}>
                  <li>Overall page layout</li>
                  <li>Navigation changes</li>
                  <li>Major breakpoints</li>
                  <li>Print styles</li>
                </ul>
              </div>
              <div className={`${styles.practiceCard} ${styles.containerCard}`}>
                <h4 className={styles.practiceTitle}>Use Container Queries for:</h4>
                <ul className={styles.practiceList}>
                  <li>Reusable components</li>
                  <li>Card layouts</li>
                  <li>Sidebar widgets</li>
                  <li>Dynamic grid items</li>
                </ul>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Real-World Examples ───── */}
      <Section
        title="Real-World Examples"
        intro="See how container queries transform real interface patterns. The same article component adapts seamlessly between main content and sidebar contexts."
        id="real-world"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Article Layout System"
            description="The same article component renders differently in main content vs sidebar — all via container queries, no prop changes."
            code={`/* Article container setup */
.article-container {
    container-type: inline-size;
    container-name: article;
}

/* Base styles */
.article {
    background: var(--colour-background);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
}

/* Narrow containers (sidebar) */
@container article (max-width: 400px) {
    .article-header {
        text-align: centre;
    }

    .article-title {
        font-size: 1.25rem;
    }

    .article-meta {
        display: none;
    }

    blockquote {
        margin: 1rem 0;
        padding-left: 1rem;
        font-size: 0.9rem;
    }
}

/* Wide containers (main content) */
@container article (min-width: 600px) {
    .article {
        padding: 3rem;
    }

    .article-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .article-content {
        font-size: 1.125rem;
        line-height: 1.7;
    }

    blockquote {
        margin: 2rem -1rem;
        padding: 1.5rem 2rem;
        background: var(--colour-surface);
        border-left: 4px solid var(--colour-primary);
        font-size: 1.25rem;
    }
}`}
          >
            <div className={styles.articleLayoutDemo}>
              <main className={styles.articleMain}>
                <div className={styles.articleContainer}>
                  <article className={styles.articleCq}>
                    <header className={styles.articleHeader}>
                      <span className={styles.articleCategory}>CSS Tutorials</span>
                      <h2 className={styles.articleTitle}>Mastering Container Queries</h2>
                      <div className={styles.articleMeta}>
                        <span>By Thomas Butler</span>
                        <span>5 min read</span>
                      </div>
                    </header>
                    <div className={styles.articleContent}>
                      <p>Container queries revolutionise how we build responsive components...</p>
                      <blockquote className={styles.articleBlockquote}>
                        &ldquo;Container queries are the most requested CSS feature for over a decade!&rdquo;
                      </blockquote>
                      <p>They finally allow us to create truly reusable components.</p>
                    </div>
                  </article>
                </div>
              </main>
              <aside className={styles.articleSidebar}>
                <div className={styles.articleContainer}>
                  <article className={styles.articleCq}>
                    <header className={styles.articleHeader}>
                      <span className={styles.articleCategory}>Quick Tip</span>
                      <h2 className={styles.articleTitle}>Browser Support</h2>
                    </header>
                    <div className={styles.articleContent}>
                      <p>Container queries are supported in all modern browsers!</p>
                    </div>
                  </article>
                </div>
              </aside>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Pro Tips ───── */}
      <Section
        title="Pro Tips"
        intro="Keep these guidelines in mind when using container queries in production."
        id="pro-tips"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Best Practices" code="">
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">#</span>
                <h3 className={styles.tipTitle}>Container Types</h3>
                <p className={styles.tipText}>
                  Use <code>inline-size</code> for horizontal queries, <code>size</code> for both dimensions. Most components only need <code>inline-size</code>.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">!</span>
                <h3 className={styles.tipTitle}>Performance</h3>
                <p className={styles.tipText}>
                  Container queries have minimal performance impact. The browser optimises them efficiently — no need to worry about overhead.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">↑</span>
                <h3 className={styles.tipTitle}>Progressive Enhancement</h3>
                <p className={styles.tipText}>
                  Always provide sensible defaults. Container queries should enhance, not break, your layout. Use <code>@supports</code> where needed.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
