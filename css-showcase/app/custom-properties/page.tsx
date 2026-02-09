import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { ColourPicker } from "./colour-picker"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Custom Properties | CSS Showcase",
  description:
    "Master CSS Custom Properties (CSS Variables) — dynamic theming, maintainable stylesheets, and powerful design systems with native CSS variables.",
}

export default function CustomPropertiesPage() {
  return (
    <>
      <PageHero
        title="CSS Custom Properties"
        subtitle="Dynamic variables that revolutionise how you write CSS. Create flexible design systems, seamless theming, and maintainable stylesheets with native CSS variables."
      />

      {/* ───── What Are Custom Properties? ───── */}
      <Section
        title="What Are Custom Properties?"
        intro="Custom properties (also called CSS variables) let you store values that you can reuse throughout your stylesheet. Unlike preprocessor variables (Sass, Less), these are native to CSS and live in the browser — which means you can change them dynamically with JavaScript!"
        id="basics"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Defining and Using Variables"
            description="Declare with -- prefix, retrieve with var(), and optionally provide fallback values."
            code={`/* Define custom properties */
:root {
    --primary-color: #2563eb;
    --spacing: 1rem;
    --border-radius: 12px;
}

/* Use them with var() function */
.box {
    background: var(--primary-color);
    padding: var(--spacing);
    border-radius: var(--border-radius);
}

/* Fallback values if property isn't defined */
.element {
    color: var(--text-color, #000000);
}`}
          >
            <div className={styles.basicDemo}>
              <div className={styles.demoBox}>Styled with CSS Variables</div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.syntaxBreakdown}>
          <h3>Syntax Breakdown</h3>
          <ul>
            <li>
              <strong>Defining:</strong>{" "}
              <code>--property-name: value;</code> — Custom properties always
              start with <code>--</code>
            </li>
            <li>
              <strong>Using:</strong>{" "}
              <code>var(--property-name)</code> — The <code>var()</code>{" "}
              function retrieves the value
            </li>
            <li>
              <strong>Fallback:</strong>{" "}
              <code>var(--property-name, fallback)</code> — Comma-separated
              fallback if the property isn&apos;t set
            </li>
          </ul>
        </div>
      </Section>

      {/* ───── Scope & Inheritance ───── */}
      <Section
        title="Scope &amp; Inheritance"
        intro="Custom properties follow CSS cascade rules. Define them globally on :root, or scope them to specific elements. Child elements inherit their parent's custom properties."
        id="scope"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Global vs Local Scope"
            description="Use :root for design system tokens, and local scope for component-specific values."
            code={`/* Global scope — available everywhere */
:root {
    --global-color: #2563eb;
}

/* Local scope — only for this element and children */
.card {
    --card-padding: 2rem;
    --card-bg: #f8fafc;

    padding: var(--card-padding);
    background: var(--card-bg);
}

/* Child inherits parent's custom properties */
.card .title {
    margin-bottom: calc(var(--card-padding) / 2);
}`}
          >
            <div className={styles.scopeDemo}>
              <div className={`${styles.scopeBox} ${styles.scopeGlobal}`}>
                Global Scope
              </div>
              <div className={`${styles.scopeBox} ${styles.scopeLocal}`}>
                Local Scope
                <div className={styles.scopeChild}>Inherits from parent</div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.tipBox}>
          <h4>Pro Tip</h4>
          <p>
            Use <code>:root</code> for design system tokens (colours, spacing,
            typography), and local scope for component-specific values. This
            creates a clear hierarchy and makes your CSS more maintainable.
          </p>
        </div>
      </Section>

      {/* ───── Theming Made Easy ───── */}
      <Section
        title="Theming Made Easy"
        intro="Custom properties are perfect for theming. Change a few variables and your entire design transforms. This is how this very website implements its dark/light theme!"
        id="theming"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Light &amp; Dark Theme"
            description="Override variable values for different themes — component styles stay exactly the same."
            code={`/* Light theme (default) */
:root {
    --bg-color: #ffffff;
    --text-color: #1e293b;
    --border-color: #e2e8f0;
}

/* Dark theme — just override the variables */
[data-theme="dark"] {
    --bg-color: #0f172a;
    --text-color: #f1f5f9;
    --border-color: #334155;
}

/* Components use the variables */
.card {
    background: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
}`}
          >
            <div className={styles.themeDemoContainer}>
              <div className={`${styles.themeDemo} ${styles.themeDemoLight}`}>
                <div className={styles.themeCard}>
                  <h3>Light Theme</h3>
                  <p>Clean and bright, perfect for daytime browsing.</p>
                  <button className={styles.themeButton}>Click me</button>
                </div>
              </div>
              <div className={`${styles.themeDemo} ${styles.themeDemodark}`}>
                <div className={styles.themeCard}>
                  <h3>Dark Theme</h3>
                  <p>Easy on the eyes, great for nighttime coding.</p>
                  <button
                    className={`${styles.themeButton} ${styles.themeButtonDark}`}
                  >
                    Click me
                  </button>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Dynamic Updates with JavaScript ───── */}
      <Section
        title="Dynamic Updates with JavaScript"
        intro="Unlike Sass variables that compile away, CSS custom properties exist at runtime. This means JavaScript can modify them on the fly, creating truly interactive experiences."
        id="dynamic"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Interactive Colour Picker"
            description="Drag the sliders to change CSS custom property values in real time."
            code={`// Set a custom property value
element.style.setProperty(
    '--dynamic-color',
    'hsl(220, 70%, 55%)'
);

// Read a custom property value
const color = getComputedStyle(element)
    .getPropertyValue('--dynamic-color');

// Update based on user input
hueSlider.addEventListener('input', (e) => {
    element.style.setProperty(
        '--hue', e.target.value
    );
});`}
            language="javascript"
          >
            <ColourPicker />
          </DemoCard>

          <DemoCard
            title="CSS for Dynamic Colour"
            description="The CSS uses custom properties as HSL components, so JavaScript only needs to update the values."
            code={`.color-preview {
    --hue: 220;
    --saturation: 70%;
    --lightness: 55%;

    background: hsl(
        var(--hue),
        var(--saturation),
        var(--lightness)
    );
    color: white;
}`}
          >
            <div className={styles.codeExplanation}>
              <p>
                The preview box uses <code>hsl()</code> with three custom
                properties. When JavaScript updates any of them, the background
                colour changes instantly — no class toggling required.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Advanced Patterns ───── */}
      <Section
        title="Advanced Patterns"
        intro="Custom properties unlock powerful techniques that were impossible before. Here are some advanced patterns that'll level up your CSS game."
        id="advanced"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Calculations with Custom Properties"
            description="Use calc() with custom properties to create dynamic spacing, sizing, and layout systems."
            code={`:root {
    --base-spacing: 0.5rem;
}

.spacing-item {
    --multiplier: 1;
    margin-bottom: calc(
        var(--base-spacing) * var(--multiplier)
    );
    padding: calc(
        var(--base-spacing) * var(--multiplier)
    );
}

/* Override multiplier inline */
<div style="--multiplier: 2">2x spacing</div>`}
          >
            <div className={styles.spacingDemo}>
              <div className={styles.spacingItem} style={{ "--multiplier": 1 } as React.CSSProperties}>
                1x spacing
              </div>
              <div className={styles.spacingItem} style={{ "--multiplier": 2 } as React.CSSProperties}>
                2x spacing
              </div>
              <div className={styles.spacingItem} style={{ "--multiplier": 3 } as React.CSSProperties}>
                3x spacing
              </div>
              <div className={styles.spacingItem} style={{ "--multiplier": 4 } as React.CSSProperties}>
                4x spacing
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Responsive Design with Custom Properties"
            description="Change variable values in media queries — components automatically adapt without rewriting any component CSS."
            code={`/* Responsive values change in media queries */
:root {
    --container-width: 100%;
    --font-size: 1rem;
    --grid-columns: 1;
}

@media (min-width: 768px) {
    :root {
        --container-width: 90%;
        --font-size: 1.125rem;
        --grid-columns: 2;
    }
}

@media (min-width: 1024px) {
    :root {
        --container-width: 1200px;
        --font-size: 1.25rem;
        --grid-columns: 3;
    }
}

/* Components automatically adapt */
.container {
    width: var(--container-width);
    font-size: var(--font-size);
}

.grid {
    display: grid;
    grid-template-columns:
        repeat(var(--grid-columns), 1fr);
}`}
          >
            <div className={styles.codeExplanation}>
              <p>
                Instead of rewriting component styles in each media query, you
                only update the variables. This keeps your responsive code DRY
                and maintainable — change one value, and everything that
                references it adapts automatically.
              </p>
            </div>
          </DemoCard>

          <DemoCard
            title="Component API Pattern"
            description="Expose custom properties as a component API. Instead of tons of modifier classes, users customise via inline styles."
            code={`/* Component with customisable API */
.api-button {
    --button-color: #2563eb;
    --button-size: 1;

    background: var(--button-color);
    padding: calc(0.75rem * var(--button-size))
             calc(1.5rem * var(--button-size));
    font-size: calc(1rem * var(--button-size));
    color: white;
    border: none;
    border-radius: 8px;
}

/* Customise via inline styles */
<button style="--button-color: #ef4444;
               --button-size: 1.2;">
    Large Danger Button
</button>`}
          >
            <div className={styles.componentApiDemo}>
              <button
                className={styles.apiButton}
                style={
                  { "--button-color": "#2563eb", "--button-size": 1 } as React.CSSProperties
                }
              >
                Primary
              </button>
              <button
                className={styles.apiButton}
                style={
                  {
                    "--button-color": "#10b981",
                    "--button-size": 1.2,
                  } as React.CSSProperties
                }
              >
                Success (Large)
              </button>
              <button
                className={styles.apiButton}
                style={
                  {
                    "--button-color": "#ef4444",
                    "--button-size": 0.875,
                  } as React.CSSProperties
                }
              >
                Danger (Small)
              </button>
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.tipBox}>
          <h4>Why Component APIs?</h4>
          <p>
            This pattern creates a clean API for your components. Instead of
            creating tons of modifier classes (<code>.button-large</code>,{" "}
            <code>.button-danger</code>), you expose custom properties that
            users can adjust. It&apos;s the same approach used by modern CSS
            frameworks.
          </p>
        </div>
      </Section>

      {/* ───── Real-World: Design System ───── */}
      <Section
        title="Real-World Example: Design System"
        intro="Let's build a complete mini design system using custom properties. This is how professional design systems (like Material Design or Chakra UI) are structured."
        id="design-system"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Design System Tokens"
            description="Define colour palette, spacing scale, typography, border radius, and shadows as custom properties."
            code={`:root {
    /* Colour Palette */
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-500: #3b82f6;
    --color-primary-900: #1e3a8a;

    /* Semantic Colours */
    --color-background: var(--color-primary-50);
    --color-text: var(--color-primary-900);
    --color-accent: var(--color-primary-500);

    /* Spacing Scale (8pt grid) */
    --space-1: 0.25rem;  /* 4px */
    --space-2: 0.5rem;   /* 8px */
    --space-4: 1rem;     /* 16px */
    --space-6: 1.5rem;   /* 24px */
    --space-8: 2rem;     /* 32px */

    /* Typography Scale */
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-2xl: 1.5rem;

    /* Border Radius & Shadows */
    --radius-md: 8px;
    --radius-lg: 12px;
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

/* Components reference the tokens */
.card {
    background: var(--color-background);
    color: var(--color-text);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}`}
          >
            <div className={styles.designSystemDemo}>
              <div className={styles.dsCard}>
                <h3>Design System Card</h3>
                <p>
                  This card uses tokens from our custom property design system.
                </p>
                <button className={styles.dsButton}>Take Action</button>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Browser Support ───── */}
      <Section
        title="Browser Support"
        intro="CSS custom properties have excellent browser support! They work in all modern browsers since 2016."
        id="browser-support"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Compatibility &amp; Fallbacks"
            description="Custom properties work everywhere that matters. For legacy browsers, provide a static fallback before the variable declaration."
            code={`.element {
    /* Fallback for browsers without
       custom property support */
    color: #2563eb;

    /* Custom property value (overrides
       fallback in modern browsers) */
    color: var(--primary-color);
}`}
          >
            <div className={styles.browserSupportDemo}>
              <div className={styles.browserGrid}>
                <div className={`${styles.browserItem} ${styles.browserSupported}`}>
                  <span className={styles.browserIcon}>C</span>
                  <span className={styles.browserName}>Chrome 49+</span>
                </div>
                <div className={`${styles.browserItem} ${styles.browserSupported}`}>
                  <span className={styles.browserIcon}>F</span>
                  <span className={styles.browserName}>Firefox 31+</span>
                </div>
                <div className={`${styles.browserItem} ${styles.browserSupported}`}>
                  <span className={styles.browserIcon}>S</span>
                  <span className={styles.browserName}>Safari 9.1+</span>
                </div>
                <div className={`${styles.browserItem} ${styles.browserSupported}`}>
                  <span className={styles.browserIcon}>E</span>
                  <span className={styles.browserName}>Edge 16+</span>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section
        title="Best Practices"
        intro="Key principles for getting the most out of CSS custom properties."
        id="best-practices"
      >
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              :
            </span>
            <h3>Use :root for Globals</h3>
            <p>
              Define design system tokens (colours, spacing, typography) on{" "}
              <code>:root</code> so they&apos;re available everywhere. Scope
              component-specific variables locally.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              --
            </span>
            <h3>Name Descriptively</h3>
            <p>
              Use semantic names like <code>--color-primary</code> and{" "}
              <code>--spacing-lg</code> rather than{" "}
              <code>--blue</code> or <code>--20px</code>. Descriptive names
              make themes and refactors painless.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              ()
            </span>
            <h3>Always Provide Fallbacks</h3>
            <p>
              Use <code>var(--prop, fallback)</code> for resilience. If a
              variable isn&apos;t defined in the current scope, the fallback
              ensures your layout never breaks.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
