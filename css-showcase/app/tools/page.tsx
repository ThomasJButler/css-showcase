import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Tools | CSS Showcase",
  description:
    "Essential CSS tools and resources for modern web development — browser DevTools, preprocessors, linters, learning platforms, and generators.",
}

export default function ToolsPage() {
  return (
    <>
      <PageHero
        title="CSS Tools"
        subtitle="Essential tools and resources for modern CSS development. From browser DevTools to preprocessors, linters, learning platforms, and visual generators."
      />

      {/* ───── Browser Developer Tools ───── */}
      <Section
        title="Browser Developer Tools"
        intro="Built-in tools for inspecting, debugging, and profiling CSS in your browser."
        id="browser-tools"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Inspect & Debug" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://developer.chrome.com/docs/devtools/css"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>
                  <span aria-hidden="true">&lt;&gt;</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Chrome DevTools</h3>
                  <p className={styles.toolDesc}>
                    Industry-leading developer tools with CSS Grid/Flexbox inspectors,
                    computed styles panel, and the CSS overview feature.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>CSS Grid and Flexbox overlays</li>
                    <li>Computed styles breakdown</li>
                    <li>Animations panel</li>
                    <li>CSS coverage analysis</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Open Chrome DevTools docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://firefox-source-docs.mozilla.org/devtools-user/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>
                  <span aria-hidden="true">&lt;&gt;</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Firefox DevTools</h3>
                  <p className={styles.toolDesc}>
                    Pioneering CSS debugging tools including the original Flexbox and Grid
                    inspectors that influenced all other browsers.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Shape path editor</li>
                    <li>Font panel with variable fonts</li>
                    <li>Inactive CSS indicators</li>
                    <li>Accessibility inspector</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Open Firefox DevTools docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://developer.apple.com/safari/tools/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>
                  <span aria-hidden="true">&lt;&gt;</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Safari Web Inspector</h3>
                  <p className={styles.toolDesc}>
                    Apple&rsquo;s developer tools optimised for debugging on macOS and iOS,
                    with unique features for testing Safari-specific CSS.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Responsive design mode</li>
                    <li>Timeline for paint profiling</li>
                    <li>iOS remote debugging</li>
                    <li>Container query support</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Open Safari tools docs
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

      {/* ───── CSS Preprocessors ───── */}
      <Section
        title="CSS Preprocessors"
        intro="Extend CSS with variables, nesting, mixins, and more powerful features."
        id="preprocessors"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Transform & Extend" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://sass-lang.com/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconPreprocessor}`}>
                  <span aria-hidden="true">*</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Sass</h3>
                  <p className={styles.toolDesc}>
                    The most mature and widely-used CSS preprocessor with powerful
                    features like mixins, functions, and module system.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Variables and nesting</li>
                    <li>Mixins and functions</li>
                    <li>@use and @forward modules</li>
                    <li>Built-in colour functions</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Sass documentation
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://postcss.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconPreprocessor}`}>
                  <span aria-hidden="true">&lt;&gt;</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>PostCSS</h3>
                  <p className={styles.toolDesc}>
                    A tool for transforming CSS with JavaScript plugins. Powers
                    autoprefixer, CSS Modules, and many modern build tools.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Autoprefixer for vendor prefixes</li>
                    <li>CSS Modules for scoping</li>
                    <li>Future CSS syntax today</li>
                    <li>Highly extensible plugin system</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore PostCSS
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://lightningcss.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconPreprocessor}`}>
                  <span aria-hidden="true">!</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Lightning CSS</h3>
                  <p className={styles.toolDesc}>
                    An extremely fast CSS parser, transformer, and minifier written in
                    Rust. The next generation of CSS tooling.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>100x faster than alternatives</li>
                    <li>Built-in vendor prefixing</li>
                    <li>CSS nesting transpilation</li>
                    <li>Minification and bundling</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore Lightning CSS
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

      {/* ───── Linters & Formatters ───── */}
      <Section
        title="Linters & Formatters"
        intro="Keep your CSS consistent, catch errors early, and enforce best practices."
        id="linters"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Lint & Format" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://stylelint.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconLinter}`}>
                  <span aria-hidden="true">?</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Stylelint</h3>
                  <p className={styles.toolDesc}>
                    A mighty CSS linter that helps you avoid errors and enforce
                    conventions. Supports CSS, SCSS, Sass, Less, and CSS-in-JS.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>170+ built-in rules</li>
                    <li>Custom rule plugins</li>
                    <li>Auto-fix support</li>
                    <li>Editor integrations</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Configure Stylelint
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://prettier.io/docs/en/options.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconLinter}`}>
                  <span aria-hidden="true">*</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Prettier</h3>
                  <p className={styles.toolDesc}>
                    An opinionated code formatter that supports CSS, SCSS, and Less.
                    Formats your code automatically for consistent style.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Zero configuration needed</li>
                    <li>Consistent code formatting</li>
                    <li>Editor integration</li>
                    <li>Works with Stylelint</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Configure Prettier
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://jigsaw.w3.org/css-validator/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconLinter}`}>
                  <span aria-hidden="true">*</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>W3C CSS Validator</h3>
                  <p className={styles.toolDesc}>
                    The official W3C tool to validate your CSS against standards.
                    Essential for ensuring cross-browser compatibility.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Official W3C validation</li>
                    <li>CSS Level 3 support</li>
                    <li>Detailed error messages</li>
                    <li>URL or direct input</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Validate your CSS
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

      {/* ───── Learning Resources ───── */}
      <Section
        title="Learning Resources"
        intro="Top-quality resources for learning modern CSS techniques and best practices."
        id="learning"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Learn & Reference" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://css-tricks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconLearning}`}>
                  <span aria-hidden="true">{"{ }"}</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>CSS-Tricks</h3>
                  <p className={styles.toolDesc}>
                    The go-to resource for CSS tips, tricks, and techniques.
                    Comprehensive guides on every CSS topic imaginable.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Complete CSS guides</li>
                    <li>Flexbox and Grid tutorials</li>
                    <li>Almanac reference</li>
                    <li>Daily updates</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Browse CSS-Tricks
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconLearning}`}>
                  <span aria-hidden="true">{"{ }"}</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>MDN Web Docs</h3>
                  <p className={styles.toolDesc}>
                    Mozilla&rsquo;s comprehensive documentation for web technologies.
                    The authoritative reference for CSS properties and values.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Complete CSS reference</li>
                    <li>Browser compatibility data</li>
                    <li>Interactive examples</li>
                    <li>Beginner tutorials</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Explore MDN CSS docs
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://web.dev/learn/css"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconLearning}`}>
                  <span aria-hidden="true">@</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>web.dev</h3>
                  <p className={styles.toolDesc}>
                    Google&rsquo;s resource for modern web development. Features in-depth
                    courses on CSS, performance, and responsive design.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Learn CSS course</li>
                    <li>Performance guides</li>
                    <li>Responsive design patterns</li>
                    <li>Core Web Vitals</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Start learning
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

      {/* ───── CSS Generators ───── */}
      <Section
        title="CSS Generators"
        intro="Visual tools to generate complex CSS code for gradients, shadows, animations, and more."
        id="generators"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Generate & Visualise" code="">
            <div className={styles.toolGrid}>
              <a
                href="https://cssgradient.io/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconGenerator}`}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>CSS Gradient</h3>
                  <p className={styles.toolDesc}>
                    Create beautiful CSS gradients with a visual editor. Supports
                    linear, radial, and conic gradients with multiple colour stops.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Visual gradient builder</li>
                    <li>Multiple gradient types</li>
                    <li>Copy-paste code output</li>
                    <li>Gallery of presets</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Create gradients
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://cubic-bezier.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconGenerator}`}>
                  <span aria-hidden="true">#</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>cubic-bezier.com</h3>
                  <p className={styles.toolDesc}>
                    Create custom easing functions for CSS animations and transitions.
                    Preview timing functions in real-time.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Interactive bezier editor</li>
                    <li>Animation preview</li>
                    <li>Common presets</li>
                    <li>Compare easings</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Create easing curves
                    <svg className={styles.linkArrow} viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                href="https://shadows.brumm.af/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={`${styles.toolIcon} ${styles.iconGenerator}`}>
                  <span aria-hidden="true">~</span>
                </div>
                <div className={styles.toolBody}>
                  <h3 className={styles.toolTitle}>Smooth Shadows</h3>
                  <p className={styles.toolDesc}>
                    Generate beautiful, layered box-shadows that look more natural
                    than typical single-layer shadows.
                  </p>
                  <ul className={styles.toolFeatures}>
                    <li>Multi-layer shadow generator</li>
                    <li>Customisable layers</li>
                    <li>Real-time preview</li>
                    <li>Light and dark themes</li>
                  </ul>
                  <span className={styles.toolLink}>
                    Generate shadows
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

      {/* ───── Related Topics ───── */}
      <Section
        title="Explore More Resources"
        intro="Continue your CSS journey with frameworks and more learning materials."
        id="keep-learning"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Related" code="">
            <div className={styles.relatedLinksGrid}>
              <a href="/frameworks" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>CSS Frameworks</h3>
                <p className={styles.relatedDesc}>
                  Compare popular frameworks and when to use them.
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
                  Push your CSS skills further with advanced layout and styling techniques.
                </p>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
