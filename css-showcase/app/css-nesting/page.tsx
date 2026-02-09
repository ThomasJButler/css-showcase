import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Nesting | CSS Showcase",
  description:
    "Native CSS Nesting — write cleaner, more maintainable CSS without preprocessors. Say goodbye to SASS!",
}

export default function CSSNestingPage() {
  return (
    <>
      <PageHero
        title="Native CSS Nesting"
        subtitle="No more preprocessors needed! CSS now supports nesting natively. Write cleaner, more organised stylesheets with less repetition."
      >
        <div className={styles.supportBadges}>
          <span className={`${styles.supportBadge} ${styles.chrome}`}>Chrome 112+</span>
          <span className={`${styles.supportBadge} ${styles.firefox}`}>Firefox 117+</span>
          <span className={`${styles.supportBadge} ${styles.safari}`}>Safari 16.5+</span>
          <span className={`${styles.supportBadge} ${styles.edge}`}>Edge 112+</span>
        </div>
      </PageHero>

      {/* ───── Goodbye SASS, Hello Native Nesting! ───── */}
      <Section
        title="Goodbye SASS, Hello Native Nesting!"
        intro="For years, we've relied on preprocessors like SASS and LESS for nesting. Now CSS has caught up! Native nesting means faster builds, simpler tooling, and one less dependency in your project."
        id="comparison"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Old Way vs New Way"
            description="Native nesting eliminates selector repetition — your styles stay grouped, readable, and easy to maintain."
            code=""
          >
            <div className={styles.comparison}>
              <div className={`${styles.comparisonCard} ${styles.oldWay}`}>
                <h3 className={styles.comparisonTitle}>
                  <span className={styles.iconCross} aria-hidden="true">✕</span> The Old Way (Repetitive)
                </h3>
                <pre className={styles.comparisonCode}><code>{`/* So much repetition! */
.card {
    background: white;
    padding: 2rem;
}

.card h2 {
    margin-bottom: 1rem;
}

.card p {
    line-height: 1.6;
}

.card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card:hover h2 {
    color: #2563eb;
}`}</code></pre>
              </div>
              <div className={`${styles.comparisonCard} ${styles.newWay}`}>
                <h3 className={styles.comparisonTitle}>
                  <span className={styles.iconCheck} aria-hidden="true">✓</span> The New Way (Native Nesting)
                </h3>
                <pre className={styles.comparisonCode}><code>{`/* Clean and organised! */
.card {
    background: white;
    padding: 2rem;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.6;
    }

    &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);

        h2 {
            color: #2563eb;
        }
    }
}`}</code></pre>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Nesting in Action ───── */}
      <Section
        title="Nesting in Action"
        intro="See how native CSS nesting simplifies real-world component styles — from navigation bars to complex blog cards."
        id="examples"
      >
        <DemoGrid columns={1}>
          {/* Basic Nesting */}
          <DemoCard
            title="Basic Nesting"
            description="Nest child selectors directly inside their parent — the browser resolves them just like descendant selectors."
            code={`/* Nested navigation styles */
.demo-nav {
    background: #f3f4f6;
    padding: 1rem;
    border-radius: 0.5rem;

    ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        position: relative;

        &.active {
            font-weight: 600;

            a {
                color: #2563eb;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: -0.5rem;
                left: 0;
                right: 0;
                height: 2px;
                background: #2563eb;
            }
        }
    }

    a {
        color: #6b7280;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: #111827;
        }
    }
}`}
          >
            <nav className={styles.demoNav}>
              <ul>
                <li><a href="#examples" aria-label="Navigate to Home">Home</a></li>
                <li className={styles.active}><a href="#examples" aria-label="Navigate to About">About</a></li>
                <li><a href="#examples" aria-label="Navigate to Services">Services</a></li>
                <li><a href="#examples" aria-label="Navigate to Contact">Contact</a></li>
              </ul>
            </nav>
          </DemoCard>

          {/* The & Selector */}
          <DemoCard
            title="The & Selector"
            description="Use & to reference the parent selector — perfect for modifier classes, pseudo-classes, and state variations."
            code={`/* Using & for parent reference */
.btn-nested {
    padding: 0.75rem 1.5rem;
    border: 2px solid #e5e7eb;
    background: white;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    /* Modifier classes */
    &.primary {
        background: #2563eb;
        border-color: #2563eb;
        color: white;

        &:hover {
            background: #1d4ed8;
        }
    }

    &.secondary {
        background: #7c3aed;
        border-color: #7c3aed;
        color: white;

        &:hover {
            background: #6d28d9;
        }
    }

    /* States */
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    }
}`}
          >
            <div className={styles.buttonGroup}>
              <button className={styles.btnNested} type="button">Default</button>
              <button className={`${styles.btnNested} ${styles.primary}`} type="button">Primary</button>
              <button className={`${styles.btnNested} ${styles.secondary}`} type="button">Secondary</button>
              <button className={styles.btnNested} type="button" disabled>Disabled</button>
            </div>
          </DemoCard>

          {/* Media Queries & Nesting */}
          <DemoCard
            title="Media Queries &amp; Nesting"
            description="Nest @media rules inside selectors for a mobile-first approach — no more jumping between blocks."
            code={`/* Nested media queries */
.responsive-card {
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);

    h4 {
        margin-bottom: 1rem;
        color: #1f2937;
    }

    .card-grid {
        display: grid;
        gap: 1rem;

        /* Mobile first approach */
        grid-template-columns: 1fr;

        @media (min-width: 640px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .card-item {
        padding: 1rem;
        background: #f3f4f6;
        border-radius: 0.5rem;
        text-align: center;

        @media (min-width: 640px) {
            padding: 1.5rem;
        }
    }
}`}
          >
            <div className={styles.responsiveCard}>
              <h4>Responsive Card</h4>
              <p className={styles.responsiveCardText}>Resize your browser to see me change!</p>
              <div className={styles.cardGrid}>
                <div className={styles.cardItem}>One</div>
                <div className={styles.cardItem}>Two</div>
                <div className={styles.cardItem}>Three</div>
              </div>
            </div>
          </DemoCard>

          {/* Complex Component */}
          <DemoCard
            title="Complex Component"
            description="A full blog card styled entirely with native nesting — hover effects, pseudo-elements, and BEM-style modifiers all in one block."
            code={`/* Complex nested component */
.blog-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-4px);

        .blog-card__image {
            transform: scale(1.05);
        }
    }

    &__image {
        height: 200px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        position: relative;
        transition: transform 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
    }

    &__category {
        position: absolute;
        top: 1rem;
        left: 1rem;
        padding: 0.25rem 0.75rem;
        background: rgba(255,255,255,0.9);
        color: #764ba2;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    &__content {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    &__title {
        margin: 0 0 0.5rem;
        color: #1f2937;
        font-size: 1.25rem;
    }

    &__excerpt {
        color: #6b7280;
        line-height: 1.6;
        flex: 1;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e5e7eb;
        font-size: 0.875rem;
        color: #9ca3af;
    }
}`}
          >
            <article className={styles.blogCard}>
              <div className={styles.blogCardImage}>
                <span className={styles.blogCardCategory}>CSS Tips</span>
                <span className={styles.blogCardEmoji}>&#x1F4DD;</span>
              </div>
              <div className={styles.blogCardContent}>
                <h3 className={styles.blogCardTitle}>Native CSS Nesting is Here!</h3>
                <p className={styles.blogCardExcerpt}>
                  Learn how to use CSS nesting to write cleaner, more maintainable stylesheets.
                </p>
                <div className={styles.blogCardFooter}>
                  <span>Thomas Butler</span>
                  <span>Today</span>
                </div>
              </div>
            </article>
          </DemoCard>

          {/* Nested Animations */}
          <DemoCard
            title="Nested Animations"
            description="Even animations can live inside nested blocks — keyframes still go at the top level, but everything else nests beautifully."
            code={`/* Nested animations and keyframes */
.animation-demo {
    text-align: center;
    padding: 3rem;

    .loader {
        display: inline-flex;
        gap: 0.5rem;
        margin-bottom: 2rem;

        &__dot {
            width: 12px;
            height: 12px;
            background: #2563eb;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;

            &:nth-child(1) {
                animation-delay: -0.32s;
            }

            &:nth-child(2) {
                animation-delay: -0.16s;
            }
        }
    }

    .animation-text {
        font-size: 1.25rem;
        color: #6b7280;
        transition: all 0.3s;
        display: inline-block;

        &:hover {
            color: #2563eb;
            transform: scale(1.1) rotate(2deg);
            animation: wiggle 0.5s ease-in-out;
        }
    }
}

/* Keyframes still go outside */
@keyframes bounce {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}

@keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
}`}
          >
            <div className={styles.animationDemo}>
              <div className={styles.loader}>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
                <div className={styles.loaderDot}></div>
              </div>
              <p className={styles.animationText}>Hover over me for a surprise!</p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Migrating from SASS ───── */}
      <Section
        title="Migrating from SASS"
        intro="Moving from SASS to native CSS nesting is straightforward, but there are a few key differences to keep in mind."
        id="migration"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="What Changes and What Stays"
            code=""
          >
            <div className={styles.migrationGrid}>
              <div className={`${styles.migrationCard} ${styles.migrationSame}`}>
                <h3 className={styles.migrationCardTitle}>
                  <span className={styles.iconCheck} aria-hidden="true">✓</span> What Works the Same
                </h3>
                <ul className={styles.migrationList}>
                  <li>Basic nesting of selectors</li>
                  <li>The &amp; parent selector</li>
                  <li>Nesting media queries</li>
                  <li>Nesting pseudo-classes and pseudo-elements</li>
                </ul>
              </div>
              <div className={`${styles.migrationCard} ${styles.migrationDifferent}`}>
                <h3 className={styles.migrationCardTitle}>
                  <span className={styles.iconWarning} aria-hidden="true">&#x26A0;</span> What&apos;s Different
                </h3>
                <ul className={styles.migrationList}>
                  <li>No variables (use CSS custom properties)</li>
                  <li>No mixins (CSS @mixin is a separate specification)</li>
                  <li>No extends (use CSS classes)</li>
                  <li>No math operations (use calc())</li>
                </ul>
              </div>
              <div className={`${styles.migrationCard} ${styles.migrationBest}`}>
                <h3 className={styles.migrationCardTitle}>
                  <span className={styles.iconStar} aria-hidden="true">&#x2605;</span> Best Practices
                </h3>
                <ul className={styles.migrationList}>
                  <li>Don&apos;t nest too deeply (3 levels max)</li>
                  <li>Use BEM naming for clarity</li>
                  <li>Keep specificity in check</li>
                  <li>Test in all target browsers</li>
                </ul>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="SASS to CSS Migration Example"
            description="Side-by-side comparison showing how SASS features translate to native CSS."
            code=""
          >
            <div className={styles.codeComparison}>
              <div className={styles.codeBlock}>
                <h4 className={styles.codeBlockTitle}>SASS (Before)</h4>
                <pre className={styles.comparisonCode}><code>{`// SASS with variables and mixins
$primary: #2563eb;
$radius: 0.5rem;

@mixin button-style {
    padding: 0.75rem 1.5rem;
    border-radius: $radius;
    transition: all 0.2s;
}

.form {
    padding: 2rem;

    &__group {
        margin-bottom: 1.5rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
            color: darken($primary, 20%);
        }

        input {
            @include button-style;
            border: 2px solid $primary;

            &:focus {
                outline: none;
                border-color: lighten($primary, 10%);
            }
        }
    }
}`}</code></pre>
              </div>
              <div className={styles.codeBlock}>
                <h4 className={styles.codeBlockTitle}>Native CSS (After)</h4>
                <pre className={styles.comparisonCode}><code>{`/* CSS with custom properties */
:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-light: #60a5fa;
    --radius: 0.5rem;
}

.form {
    padding: 2rem;

    &__group {
        margin-bottom: 1.5rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--primary-dark);
        }

        input {
            /* Direct styles instead of mixin */
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius);
            transition: all 0.2s;
            border: 2px solid var(--primary);

            &:focus {
                outline: none;
                border-color: var(--primary-light);
            }
        }
    }
}`}</code></pre>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Nesting Rules & Gotchas ───── */}
      <Section
        title="Nesting Rules &amp; Gotchas"
        intro="Understanding these three core rules will help you avoid common pitfalls when working with native CSS nesting."
        id="rules"
      >
        <DemoGrid columns={1}>
          <DemoCard title="The Three Rules" code="">
            <div className={styles.rulesGrid}>
              <div className={styles.ruleCard}>
                <h3 className={styles.ruleTitle}>Rule 1: Implicit &amp;</h3>
                <pre className={styles.ruleCode}><code>{`/* CSS automatically adds & */
.parent {
    .child { }     /* = .parent .child */
    & .child { }   /* = .parent .child */

    div { }        /* = .parent div */
    & div { }      /* = .parent div */
}`}</code></pre>
              </div>
              <div className={styles.ruleCard}>
                <h3 className={styles.ruleTitle}>Rule 2: Combining Selectors</h3>
                <pre className={styles.ruleCode}><code>{`/* Be careful with specificity */
.card {
    /* This becomes .card.active */
    &.active { }

    /* This becomes .card .active */
    .active { }

    /* Multiple selectors */
    h2, h3 {
        margin: 0;
    }
}`}</code></pre>
              </div>
              <div className={styles.ruleCard}>
                <h3 className={styles.ruleTitle}>Rule 3: At-Rules</h3>
                <pre className={styles.ruleCode}><code>{`/* Media queries and supports */
.element {
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }

    @supports (display: grid) {
        display: grid;
    }
}`}</code></pre>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Pro Tips ───── */}
      <Section
        title="Pro Tips"
        intro="Keep these guidelines in mind when using native CSS nesting in production."
        id="pro-tips"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Best Practices" code="">
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">#</span>
                <h3 className={styles.tipTitle}>Keep It Shallow</h3>
                <p className={styles.tipText}>
                  Avoid nesting more than 3 levels deep. It makes CSS harder to read and increases specificity.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">&amp;</span>
                <h3 className={styles.tipTitle}>BEM + Nesting</h3>
                <p className={styles.tipText}>
                  Combine BEM naming with nesting for the best of both worlds — clarity and convenience.
                </p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">?</span>
                <h3 className={styles.tipTitle}>DevTools Support</h3>
                <p className={styles.tipText}>
                  Modern DevTools show nested CSS properly, making debugging much easier than before.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
