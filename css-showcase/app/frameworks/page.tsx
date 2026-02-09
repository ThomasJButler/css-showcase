import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Frameworks | CSS Showcase",
  description:
    "Compare popular CSS frameworks and methodologies — Tailwind CSS, Bootstrap, utility-first approaches, CSS-in-JS, and when to use them versus vanilla CSS.",
}

export default function FrameworksPage() {
  return (
    <>
      <PageHero
        title="CSS Frameworks"
        subtitle="Compare popular frameworks and decide when to use them versus vanilla CSS. From utility-first to component libraries, CSS-in-JS to naming methodologies."
      />

      {/* ───── Utility-First Frameworks ───── */}
      <Section
        title="Utility-First Frameworks"
        intro="Build designs directly in your HTML using pre-defined utility classes."
        id="utility-first"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Atomic CSS" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Tailwind CSS</h3>
                  <p className={styles.toolDesc}>
                    A utility-first CSS framework packed with classes like flex, pt-4,
                    and text-center that can be composed to build any design.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Highly customisable design tokens</li>
                    <li>JIT compiler for tiny bundles</li>
                    <li>Built-in dark mode support</li>
                    <li>Extensive plugin ecosystem</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Tailwind docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://unocss.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>
                  <span aria-hidden="true">!</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>UnoCSS</h3>
                  <p className={styles.toolDesc}>
                    The instant atomic CSS engine. Highly customisable and
                    compatible with Tailwind, Windi, and Tachyons presets.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Instant on-demand generation</li>
                    <li>Pure CSS icons</li>
                    <li>Variant groups</li>
                    <li>Attributify mode</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore UnoCSS
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://open-props.style/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Open Props</h3>
                  <p className={styles.toolDesc}>
                    Supercharged CSS variables for design systems. Not a framework
                    but a collection of design tokens as CSS custom properties.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Just CSS custom properties</li>
                    <li>Framework agnostic</li>
                    <li>Adaptive colour schemes</li>
                    <li>No build step required</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Open Props
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Component Frameworks ───── */}
      <Section
        title="Component Frameworks"
        intro="Pre-built components and design systems for rapid prototyping and production."
        id="component-frameworks"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Ready-Made Components" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://getbootstrap.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconComponent}`}>
                  <span aria-hidden="true">[ ]</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Bootstrap</h3>
                  <p className={styles.toolDesc}>
                    The most popular HTML, CSS, and JS framework in the world.
                    Comprehensive component library with extensive documentation.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Responsive grid system</li>
                    <li>Pre-built components</li>
                    <li>JavaScript plugins</li>
                    <li>Sass customisation</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Bootstrap docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://bulma.io/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconComponent}`}>
                  <span aria-hidden="true">#</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Bulma</h3>
                  <p className={styles.toolDesc}>
                    A free, open source CSS framework based on Flexbox.
                    No JavaScript, just pure CSS with modular Sass files.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>100% CSS, no JS</li>
                    <li>Flexbox-based grid</li>
                    <li>Modular architecture</li>
                    <li>Easy to customise</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Bulma docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://daisyui.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconComponent}`}>
                  <span aria-hidden="true">*</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>daisyUI</h3>
                  <p className={styles.toolDesc}>
                    The most popular component library for Tailwind CSS. Adds
                    semantic class names for common UI components.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Tailwind CSS plugin</li>
                    <li>Semantic class names</li>
                    <li>29 built-in themes</li>
                    <li>Fully customisable</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore daisyUI docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── CSS Methodologies ───── */}
      <Section
        title="CSS Methodologies"
        intro="Approaches and conventions for writing maintainable, scalable CSS."
        id="methodologies"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Naming & Structure" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://getbem.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconMethodology}`}>
                  <span aria-hidden="true">[ ]</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>BEM</h3>
                  <p className={styles.toolDesc}>
                    Block Element Modifier is a naming convention that makes CSS
                    easier to read, understand, and scale in large projects.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Clear naming convention</li>
                    <li>Avoids specificity wars</li>
                    <li>Self-documenting classes</li>
                    <li>Works with any framework</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Learn BEM methodology
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/css-modules/css-modules"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconMethodology}`}>
                  <span aria-hidden="true">[ ]</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>CSS Modules</h3>
                  <p className={styles.toolDesc}>
                    Locally scoped CSS by default. Class names are unique, so you
                    never have to worry about naming collisions.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Automatic scoping</li>
                    <li>Composition of styles</li>
                    <li>Works with React, Vue, etc.</li>
                    <li>Explicit dependencies</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Learn CSS Modules
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://cube.fyi/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconMethodology}`}>
                  <span aria-hidden="true">[ ]</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>CUBE CSS</h3>
                  <p className={styles.toolDesc}>
                    Composition Utility Block Exception. A CSS methodology that
                    embraces the cascade and encourages pragmatic CSS.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Embraces the cascade</li>
                    <li>Focuses on composition</li>
                    <li>Progressive enhancement</li>
                    <li>Framework agnostic</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Learn CUBE CSS
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── CSS-in-JS ───── */}
      <Section
        title="CSS-in-JS"
        intro="Write CSS directly in JavaScript for component-based architectures."
        id="css-in-js"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Styled Components" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://styled-components.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconCssInJs}`}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>styled-components</h3>
                  <p className={styles.toolDesc}>
                    Visual primitives for the component age. Use the best bits of
                    ES6 and CSS to style your apps without stress.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Automatic critical CSS</li>
                    <li>No class name bugs</li>
                    <li>Dynamic styling</li>
                    <li>Server-side rendering</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore styled-components
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://emotion.sh/docs/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconCssInJs}`}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Emotion</h3>
                  <p className={styles.toolDesc}>
                    A performant and flexible CSS-in-JS library. Supports both
                    string and object styles with a powerful composition model.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Source maps support</li>
                    <li>Framework agnostic core</li>
                    <li>Powerful composition</li>
                    <li>Excellent performance</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Emotion docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://vanilla-extract.style/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconCssInJs}`}>
                  <span aria-hidden="true">*</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Vanilla Extract</h3>
                  <p className={styles.toolDesc}>
                    Zero-runtime CSS-in-TypeScript. Write type-safe styles in
                    TypeScript that compile to static CSS at build time.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Zero runtime overhead</li>
                    <li>Type-safe styles</li>
                    <li>Static CSS extraction</li>
                    <li>Theming support</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Vanilla Extract
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Framework vs Vanilla CSS ───── */}
      <Section
        title="Framework vs Vanilla CSS"
        intro="Understanding when to use a framework versus writing custom CSS."
        id="comparison"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Decision Guide" code="">
            <div className={styles.toolGrid}>
              <div className={styles.comparisonCard}>
                <div className={`${styles.toolIcon} ${styles.iconUseFramework}`}>
                  <span aria-hidden="true">*</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Use Frameworks When</h3>
                  <p className={styles.toolDesc}>
                    Frameworks excel in certain scenarios and can significantly
                    speed up development while maintaining consistency.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Rapid prototyping needed</li>
                    <li>Large team, needs consistency</li>
                    <li>Tight deadlines</li>
                    <li>Standard UI patterns used</li>
                  </ul>
                </div>
              </div>

              <div className={styles.comparisonCard}>
                <div className={`${styles.toolIcon} ${styles.iconUseVanilla}`}>
                  <span aria-hidden="true">#</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Use Vanilla CSS When</h3>
                  <p className={styles.toolDesc}>
                    Custom CSS shines when you need full control, unique designs,
                    or want to keep your bundle size minimal.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Unique, custom designs</li>
                    <li>Performance is critical</li>
                    <li>Learning CSS deeply</li>
                    <li>Small projects or sites</li>
                  </ul>
                </div>
              </div>

              <div className={styles.comparisonCard}>
                <div className={`${styles.toolIcon} ${styles.iconHybrid}`}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Hybrid Approach</h3>
                  <p className={styles.toolDesc}>
                    Many teams combine frameworks with custom CSS, using the
                    best of both worlds for optimal results.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Framework for utilities</li>
                    <li>Custom CSS for unique parts</li>
                    <li>Design tokens shared</li>
                    <li>Gradual adoption possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Related Topics ───── */}
      <Section
        title="Continue Exploring"
        intro="Discover more CSS resources and tools for your projects."
        id="keep-exploring"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Related" code="">
            <div className={styles.relatedLinksGrid}>
              <a href="/tools" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>CSS Tools</h3>
                <p className={styles.relatedDesc}>
                  Essential tools for modern CSS development.
                </p>
              </a>
              <a href="/custom-properties" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Custom Properties</h3>
                <p className={styles.relatedDesc}>
                  Master CSS variables for dynamic, maintainable stylesheets.
                </p>
              </a>
              <a href="/advanced" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Advanced Techniques</h3>
                <p className={styles.relatedDesc}>
                  Push your CSS skills further with advanced layout and styling.
                </p>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
