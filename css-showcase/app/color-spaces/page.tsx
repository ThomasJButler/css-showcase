import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Modern CSS Colour Spaces | CSS Showcase",
  description:
    "Explore modern CSS colour spaces including oklch, lab, lch, display-p3, and color-mix functions for vibrant, perceptually uniform colours.",
}

export default function ColorSpacesPage() {
  return (
    <>
      <PageHero
        title="Modern CSS Colour Spaces"
        subtitle="Step into the future of colour with perceptually uniform colour spaces like oklch, display-p3 wide gamut, and powerful colour manipulation functions."
      />

      {/* ───── What Are Modern Colour Spaces? ───── */}
      <Section
        title="What Are Modern Colour Spaces?"
        intro="Traditional CSS colours (hex, rgb, hsl) are limited to the sRGB colour space, which represents only about 35% of colours the human eye can see. Modern CSS introduces new colour spaces that unlock a wider range of more vibrant colours and provide perceptually uniform colour manipulation."
        id="intro"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="sRGB vs Wide Gamut"
            description="Compare traditional sRGB colours with their Display P3 wide gamut counterparts. On a capable display, the P3 version is noticeably more vivid."
            code={`/* Traditional sRGB colours */
.old-way {
    background: rgb(255, 0, 128);
    color: hsl(220, 70%, 50%);
}

/* Modern colour spaces */
.new-way {
    background: oklch(0.7 0.3 330); /* Perceptually uniform */
    color: color(display-p3 0 0.5 1); /* Wide gamut */
}`}
          >
            <div className={styles.gamutComparison}>
              <div className={styles.gamutBox}>
                <div className={styles.gamutTitle}>sRGB</div>
                <div
                  className={styles.colorSample}
                  style={{ background: "rgb(255, 0, 128)" }}
                />
                <p className={styles.gamutLabel}>Limited gamut</p>
                <code className={styles.gamutCode}>rgb(255, 0, 128)</code>
              </div>
              <div className={styles.gamutBox}>
                <div className={styles.gamutTitle}>Display P3</div>
                <div
                  className={styles.colorSample}
                  style={{ background: "color(display-p3 1 0 0.5)" }}
                />
                <p className={styles.gamutLabel}>
                  Wide gamut &mdash; more vibrant!
                </p>
                <code className={styles.gamutCode}>
                  color(display-p3 1 0 0.5)
                </code>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="The Game-Changers"
            description="Four key features that transform how we work with colour in CSS."
            code=""
          >
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureArrow}>&rarr;</span>
                <span>
                  <code>oklch()</code> &mdash; Perceptually uniform,
                  human-friendly colour space
                </span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureArrow}>&rarr;</span>
                <span>
                  <code>display-p3</code> &mdash; Wide gamut colour space (50%
                  more colours than sRGB)
                </span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureArrow}>&rarr;</span>
                <span>
                  <code>color-mix()</code> &mdash; Mix any two colours in any
                  colour space
                </span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureArrow}>&rarr;</span>
                <span>
                  <code>Relative colours</code> &mdash; Modify existing colours
                  dynamically
                </span>
              </li>
            </ul>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── OKLCH ───── */}
      <Section
        title="OKLCH: Perceptually Uniform Colours"
        intro="OKLCH (Oklab Lightness Chroma Hue) is a perceptually uniform colour space. The same numeric change in colour values produces the same perceived change in colour by humans, regardless of where you are in the colour space."
        id="oklch"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="OKLCH Colour Palette"
            description="Six hues at the same lightness and chroma. Notice how they all appear equally bright &mdash; that's perceptual uniformity in action."
            code={`/* Creating a colour palette with consistent lightness */
.palette {
    --color-1: oklch(0.6 0.25 0);
    --color-2: oklch(0.6 0.25 120);
    --color-3: oklch(0.6 0.25 240);
}

/* All three colours have the SAME perceived brightness */
/* Try doing that with HSL! */`}
          >
            <div className={styles.oklchGrid}>
              <div
                className={styles.oklchSwatch}
                style={{ background: "oklch(0.5 0.2 0)" }}
              >
                <code className={styles.oklchCode}>oklch(0.5 0.2 0)</code>
                <span className={styles.oklchLabel}>Pink</span>
              </div>
              <div
                className={styles.oklchSwatch}
                style={{ background: "oklch(0.5 0.2 60)" }}
              >
                <code className={styles.oklchCode}>oklch(0.5 0.2 60)</code>
                <span className={styles.oklchLabel}>Orange</span>
              </div>
              <div
                className={styles.oklchSwatch}
                style={{ background: "oklch(0.5 0.2 120)" }}
              >
                <code className={styles.oklchCode}>oklch(0.5 0.2 120)</code>
                <span className={styles.oklchLabel}>Yellow</span>
              </div>
              <div
                className={styles.oklchSwatch}
                style={{ background: "oklch(0.5 0.2 180)" }}
              >
                <code className={styles.oklchCode}>oklch(0.5 0.2 180)</code>
                <span className={styles.oklchLabel}>Green</span>
              </div>
              <div
                className={styles.oklchSwatch}
                style={{ background: "oklch(0.5 0.2 240)" }}
              >
                <code className={styles.oklchCode}>oklch(0.5 0.2 240)</code>
                <span className={styles.oklchLabel}>Cyan</span>
              </div>
              <div
                className={styles.oklchSwatch}
                style={{ background: "oklch(0.5 0.2 300)" }}
              >
                <code className={styles.oklchCode}>oklch(0.5 0.2 300)</code>
                <span className={styles.oklchLabel}>Blue</span>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="OKLCH Parameters"
            description="The three channels that define an OKLCH colour."
            code={`/* Syntax: oklch(lightness chroma hue) */
.example {
    /* L: 0-1 | C: 0-0.4 | H: 0-360 */
    color: oklch(0.7 0.15 250);

    /* With alpha */
    color: oklch(0.7 0.15 250 / 0.5);
}`}
          >
            <div className={styles.paramGrid}>
              <div className={styles.paramCard}>
                <code className={styles.paramName}>Lightness</code>
                <span className={styles.paramRange}>0 &ndash; 1</span>
                <p className={styles.paramDesc}>
                  0 = black, 1 = white. Controls perceived brightness
                  independently from hue.
                </p>
              </div>
              <div className={styles.paramCard}>
                <code className={styles.paramName}>Chroma</code>
                <span className={styles.paramRange}>0 &ndash; 0.4</span>
                <p className={styles.paramDesc}>
                  0 = grey, 0.4 = maximum vibrancy. Controls colour saturation.
                </p>
              </div>
              <div className={styles.paramCard}>
                <code className={styles.paramName}>Hue</code>
                <span className={styles.paramRange}>0 &ndash; 360&deg;</span>
                <p className={styles.paramDesc}>
                  0 = pink, 120 = green, 240 = blue. Rotates around the colour
                  wheel.
                </p>
              </div>
            </div>
          </DemoCard>

          <DemoCard title="Accessibility Advantage" code="">
            <div className={styles.proTip}>
              <strong>Pro Tip:</strong> OKLCH is perfect for creating accessible
              colour palettes. By keeping lightness consistent, you ensure
              consistent contrast ratios across all your colours &mdash; something
              that&apos;s nearly impossible with HSL.
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Display P3 ───── */}
      <Section
        title="Display P3: Wide Gamut Colours"
        intro="Display P3 is a wide gamut colour space that can represent 50% more colours than sRGB. It's supported on modern displays (iPhones since 2017, MacBooks since 2016, many modern monitors). These colours are noticeably more vibrant and saturated."
        id="display-p3"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="sRGB vs Display P3"
            description="Compare the same primary colours in sRGB and Display P3. On a wide gamut display, the P3 versions appear significantly more vivid."
            code={`/* Using display-p3 with fallback */
.vibrant-button {
    background: rgb(255, 0, 100); /* Fallback */
    background: color(display-p3 1 0 0.4); /* Wide gamut */
}

/* Feature detection */
@supports (color: color(display-p3 1 1 1)) {
    .hero {
        background: color(display-p3 0 0.8 1);
    }
}`}
          >
            <div className={styles.p3Comparison}>
              <div className={styles.p3Example}>
                <div
                  className={styles.p3Box}
                  style={{ background: "rgb(255, 0, 0)" }}
                >
                  <span className={styles.p3BoxLabel}>sRGB Red</span>
                  <code className={styles.p3BoxCode}>rgb(255, 0, 0)</code>
                </div>
                <div
                  className={styles.p3Box}
                  style={{ background: "color(display-p3 1 0 0)" }}
                >
                  <span className={styles.p3BoxLabel}>P3 Red</span>
                  <code className={styles.p3BoxCode}>
                    color(display-p3 1 0 0)
                  </code>
                </div>
              </div>

              <div className={styles.p3Example}>
                <div
                  className={styles.p3Box}
                  style={{ background: "rgb(0, 255, 0)" }}
                >
                  <span className={styles.p3BoxLabel}>sRGB Green</span>
                  <code className={styles.p3BoxCode}>rgb(0, 255, 0)</code>
                </div>
                <div
                  className={styles.p3Box}
                  style={{ background: "color(display-p3 0 1 0)" }}
                >
                  <span className={styles.p3BoxLabel}>P3 Green</span>
                  <code className={styles.p3BoxCode}>
                    color(display-p3 0 1 0)
                  </code>
                </div>
              </div>

              <div className={styles.p3Example}>
                <div
                  className={styles.p3Box}
                  style={{ background: "rgb(0, 0, 255)" }}
                >
                  <span className={styles.p3BoxLabel}>sRGB Blue</span>
                  <code className={styles.p3BoxCode}>rgb(0, 0, 255)</code>
                </div>
                <div
                  className={styles.p3Box}
                  style={{ background: "color(display-p3 0 0 1)" }}
                >
                  <span className={styles.p3BoxLabel}>P3 Blue</span>
                  <code className={styles.p3BoxCode}>
                    color(display-p3 0 0 1)
                  </code>
                </div>
              </div>
            </div>

            <p className={styles.p3Note}>
              Note: You&apos;ll only see the difference on a wide gamut display
              (modern phones, tablets, and monitors).
            </p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── color-mix() ───── */}
      <Section
        title="color-mix(): Blend Any Two Colours"
        intro="The color-mix() function lets you blend any two colours in any colour space. This is incredibly powerful for creating tints, shades, and variations of colours without complex calculations."
        id="color-mix"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Mixing Colours"
            description="Combine colours with precise control over the mix ratio. Using oklch as the interpolation space ensures perceptually smooth results."
            code={`/* Creating a colour scale with color-mix */
:root {
    --primary: #2563eb;

    /* Lighter variations */
    --primary-light: color-mix(in oklch, var(--primary) 70%, white);
    --primary-lighter: color-mix(in oklch, var(--primary) 40%, white);

    /* Darker variations */
    --primary-dark: color-mix(in oklch, var(--primary) 70%, black);
    --primary-darker: color-mix(in oklch, var(--primary) 40%, black);
}

/* Hover state with automatic darkening */
.button { background: var(--primary); }
.button:hover {
    background: color-mix(in oklch, var(--primary) 85%, black);
}`}
          >
            <div className={styles.mixExamples}>
              <div className={styles.mixRow}>
                <div className={styles.mixBox} style={{ background: "#2563eb" }}>
                  <span className={styles.mixBoxLabel}>Base Blue</span>
                  <code className={styles.mixBoxCode}>#2563eb</code>
                </div>
                <span className={styles.mixSymbol}>+</span>
                <div className={styles.mixBox} style={{ background: "white" }}>
                  <span className={styles.mixBoxLabelDark}>White</span>
                  <code className={styles.mixBoxCodeDark}>#ffffff</code>
                </div>
                <span className={styles.mixSymbol}>=</span>
                <div
                  className={styles.mixBox}
                  style={{
                    background:
                      "color-mix(in oklch, #2563eb 70%, white)",
                  }}
                >
                  <span className={styles.mixBoxLabel}>Lighter Blue</span>
                  <code className={styles.mixBoxCode}>
                    color-mix(in oklch, #2563eb 70%, white)
                  </code>
                </div>
              </div>

              <div className={styles.mixRow}>
                <div className={styles.mixBox} style={{ background: "#ef4444" }}>
                  <span className={styles.mixBoxLabel}>Red</span>
                  <code className={styles.mixBoxCode}>#ef4444</code>
                </div>
                <span className={styles.mixSymbol}>+</span>
                <div className={styles.mixBox} style={{ background: "#3b82f6" }}>
                  <span className={styles.mixBoxLabel}>Blue</span>
                  <code className={styles.mixBoxCode}>#3b82f6</code>
                </div>
                <span className={styles.mixSymbol}>=</span>
                <div
                  className={styles.mixBox}
                  style={{
                    background:
                      "color-mix(in oklch, #ef4444, #3b82f6)",
                  }}
                >
                  <span className={styles.mixBoxLabel}>Purple</span>
                  <code className={styles.mixBoxCode}>
                    color-mix(in oklch, #ef4444, #3b82f6)
                  </code>
                </div>
              </div>

              <div className={styles.mixRow}>
                <div className={styles.mixBox} style={{ background: "#10b981" }}>
                  <span className={styles.mixBoxLabel}>Green</span>
                  <code className={styles.mixBoxCode}>#10b981</code>
                </div>
                <span className={styles.mixSymbol}>+</span>
                <div className={styles.mixBox} style={{ background: "black" }}>
                  <span className={styles.mixBoxLabel}>Black</span>
                  <code className={styles.mixBoxCode}>#000000</code>
                </div>
                <span className={styles.mixSymbol}>=</span>
                <div
                  className={styles.mixBox}
                  style={{
                    background:
                      "color-mix(in oklch, #10b981 60%, black)",
                  }}
                >
                  <span className={styles.mixBoxLabel}>Dark Green</span>
                  <code className={styles.mixBoxCode}>
                    color-mix(in oklch, #10b981 60%, black)
                  </code>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Relative Colours ───── */}
      <Section
        title="Relative Colours: Dynamic Colour Manipulation"
        intro="Relative colour syntax lets you create new colours based on existing ones by modifying specific channels. This is perfect for creating hover states, active states, and colour variations dynamically."
        id="relative-colours"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Relative Colour Examples"
            description="Modify lightness, chroma, and hue channels independently to derive new colours from a base value."
            code={`/* Dynamic hover state */
.card {
    --card-color: #3b82f6;
    background: var(--card-color);
}

.card:hover {
    /* Automatically darken by reducing lightness */
    background: oklch(from var(--card-color) calc(l - 0.1) c h);
}

/* Semi-transparent version of any colour */
.overlay {
    background: oklch(from var(--card-color) l c h / 0.5);
}

/* Rotate hue for complementary colour */
.accent {
    color: oklch(from var(--card-color) l c calc(h + 180));
}`}
          >
            <div className={styles.relativeGrid}>
              <div className={styles.relativeExample}>
                <div
                  className={styles.relativeBox}
                  style={{ background: "#2563eb" }}
                >
                  <span className={styles.relativeBoxLabel}>Base Colour</span>
                  <code className={styles.relativeBoxCode}>#2563eb</code>
                </div>
                <div
                  className={styles.relativeBox}
                  style={{
                    background: "oklch(from #2563eb calc(l + 0.2) c h)",
                  }}
                >
                  <span className={styles.relativeBoxLabel}>
                    Lighter (L +20%)
                  </span>
                  <code className={styles.relativeBoxCode}>
                    oklch(from #2563eb calc(l + 0.2) c h)
                  </code>
                </div>
              </div>

              <div className={styles.relativeExample}>
                <div
                  className={styles.relativeBox}
                  style={{ background: "#10b981" }}
                >
                  <span className={styles.relativeBoxLabel}>Base Colour</span>
                  <code className={styles.relativeBoxCode}>#10b981</code>
                </div>
                <div
                  className={styles.relativeBox}
                  style={{
                    background: "oklch(from #10b981 0.4 c h)",
                  }}
                >
                  <span className={styles.relativeBoxLabel}>
                    Darkened (L = 40%)
                  </span>
                  <code className={styles.relativeBoxCode}>
                    oklch(from #10b981 0.4 c h)
                  </code>
                </div>
              </div>

              <div className={styles.relativeExample}>
                <div
                  className={styles.relativeBox}
                  style={{ background: "#ef4444" }}
                >
                  <span className={styles.relativeBoxLabel}>Base Colour</span>
                  <code className={styles.relativeBoxCode}>#ef4444</code>
                </div>
                <div
                  className={styles.relativeBox}
                  style={{
                    background: "oklch(from #ef4444 l calc(c * 1.5) h)",
                  }}
                >
                  <span className={styles.relativeBoxLabel}>
                    More Vibrant (C &times;1.5)
                  </span>
                  <code className={styles.relativeBoxCode}>
                    oklch(from #ef4444 l calc(c * 1.5) h)
                  </code>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Practical Examples ───── */}
      <Section
        title="Real-World Applications"
        intro="Let's see how these modern colour spaces solve real design problems. A single base colour can generate an entire theme using relative colours and color-mix()."
        id="practical"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Dynamic Theme System"
            description="Three themes generated from a single base colour each. All button, alert, and secondary styles are derived automatically using relative colour syntax."
            code={`/* Single base colour generates entire theme */
.theme-card {
    --theme-base: #2563eb;

    /* Automatically generate variations */
    --theme-light: oklch(from var(--theme-base) 0.95 calc(c * 0.2) h);
    --theme-dark: oklch(from var(--theme-base) 0.3 c h);
    --theme-muted: oklch(from var(--theme-base) calc(l + 0.3) calc(c * 0.3) h);
}

.theme-button { background: var(--theme-base); }
.theme-button:hover { background: var(--theme-dark); }

.theme-alert {
    background: var(--theme-light);
    color: var(--theme-base);
    border-color: var(--theme-base);
}`}
          >
            <div className={styles.themeSystem}>
              <div className={styles.themeCard} style={{ ["--theme-base" as string]: "#2563eb" }}>
                <div
                  className={styles.themeHeader}
                  style={{ background: "var(--theme-base)" }}
                >
                  <h4 className={styles.themeHeaderTitle}>Blue Theme</h4>
                </div>
                <div className={styles.themeContent}>
                  <button
                    className={styles.themeButton}
                    style={{
                      background: "var(--theme-base)",
                      borderColor: "var(--theme-base)",
                    }}
                  >
                    Primary Button
                  </button>
                  <button
                    className={styles.themeButtonSecondary}
                    style={{
                      background:
                        "oklch(from var(--theme-base) calc(l + 0.3) calc(c * 0.3) h)",
                      color: "var(--theme-base)",
                      borderColor: "var(--theme-base)",
                    }}
                  >
                    Secondary
                  </button>
                  <div
                    className={styles.themeAlert}
                    style={{
                      background:
                        "oklch(from var(--theme-base) 0.95 calc(c * 0.2) h)",
                      borderColor: "var(--theme-base)",
                      color: "var(--theme-base)",
                    }}
                  >
                    <strong>Info:</strong> This is an alert styled with the theme
                    colour
                  </div>
                </div>
              </div>

              <div className={styles.themeCard} style={{ ["--theme-base" as string]: "#10b981" }}>
                <div
                  className={styles.themeHeader}
                  style={{ background: "var(--theme-base)" }}
                >
                  <h4 className={styles.themeHeaderTitle}>Green Theme</h4>
                </div>
                <div className={styles.themeContent}>
                  <button
                    className={styles.themeButton}
                    style={{
                      background: "var(--theme-base)",
                      borderColor: "var(--theme-base)",
                    }}
                  >
                    Primary Button
                  </button>
                  <button
                    className={styles.themeButtonSecondary}
                    style={{
                      background:
                        "oklch(from var(--theme-base) calc(l + 0.3) calc(c * 0.3) h)",
                      color: "var(--theme-base)",
                      borderColor: "var(--theme-base)",
                    }}
                  >
                    Secondary
                  </button>
                  <div
                    className={styles.themeAlert}
                    style={{
                      background:
                        "oklch(from var(--theme-base) 0.95 calc(c * 0.2) h)",
                      borderColor: "var(--theme-base)",
                      color: "var(--theme-base)",
                    }}
                  >
                    <strong>Success:</strong> This is an alert styled with the
                    theme colour
                  </div>
                </div>
              </div>

              <div className={styles.themeCard} style={{ ["--theme-base" as string]: "#f59e0b" }}>
                <div
                  className={styles.themeHeader}
                  style={{ background: "var(--theme-base)" }}
                >
                  <h4 className={styles.themeHeaderTitle}>Amber Theme</h4>
                </div>
                <div className={styles.themeContent}>
                  <button
                    className={styles.themeButton}
                    style={{
                      background: "var(--theme-base)",
                      borderColor: "var(--theme-base)",
                    }}
                  >
                    Primary Button
                  </button>
                  <button
                    className={styles.themeButtonSecondary}
                    style={{
                      background:
                        "oklch(from var(--theme-base) calc(l + 0.3) calc(c * 0.3) h)",
                      color: "var(--theme-base)",
                      borderColor: "var(--theme-base)",
                    }}
                  >
                    Secondary
                  </button>
                  <div
                    className={styles.themeAlert}
                    style={{
                      background:
                        "oklch(from var(--theme-base) 0.95 calc(c * 0.2) h)",
                      borderColor: "var(--theme-base)",
                      color: "var(--theme-base)",
                    }}
                  >
                    <strong>Warning:</strong> This is an alert styled with the
                    theme colour
                  </div>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Browser Support ───── */}
      <Section
        title="Browser Support"
        intro="Modern colour spaces have excellent browser support, with all major browsers supporting oklch, color-mix(), and display-p3 since 2023."
        id="browser-support"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Wide Support (2023+)"
            description="Use progressive enhancement with fallbacks for the rare older browser."
            code={`/* Always provide fallbacks */
.button {
    background: #2563eb; /* Fallback */
    background: oklch(0.55 0.25 250); /* Modern browsers */
}

/* Feature detection */
@supports (background: oklch(0 0 0)) {
    .enhanced {
        /* Use modern colour spaces */
    }
}`}
          >
            <div className={styles.supportInfo}>
              <div className={styles.supportBox}>
                <h3 className={styles.supportTitle}>Widely Supported</h3>
                <ul className={styles.supportList}>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">
                      &#x2713;
                    </span>
                    <span>
                      <strong>OKLCH:</strong> Chrome 111+, Safari 15.4+, Firefox
                      113+
                    </span>
                  </li>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">
                      &#x2713;
                    </span>
                    <span>
                      <strong>color-mix():</strong> Chrome 111+, Safari 16.2+,
                      Firefox 113+
                    </span>
                  </li>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">
                      &#x2713;
                    </span>
                    <span>
                      <strong>Relative colours:</strong> Chrome 119+, Safari
                      16.4+, Firefox 120+
                    </span>
                  </li>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">
                      &#x2713;
                    </span>
                    <span>
                      <strong>Display P3:</strong> Chrome 111+, Safari 10+,
                      Firefox 113+
                    </span>
                  </li>
                </ul>
                <p className={styles.supportNote}>
                  <strong>Best practice:</strong> Always provide an sRGB fallback
                  before your modern colour value. Browsers that don&apos;t
                  understand the new syntax will simply ignore it and use the
                  fallback.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Related Topics ───── */}
      <Section
        title="Keep Learning"
        intro="Explore related features that pair brilliantly with modern colour spaces."
        id="keep-learning"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Related Features" code="">
            <div className={styles.relatedLinksGrid}>
              <a href="/custom-properties" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>CSS Custom Properties</h3>
                <p className={styles.relatedDesc}>
                  Use CSS variables with modern colour spaces for dynamic theming.
                </p>
              </a>
              <a href="/blend-modes" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Blend Modes</h3>
                <p className={styles.relatedDesc}>
                  Combine colours using blend modes for creative visual effects.
                </p>
              </a>
              <a href="/gradients" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>Gradients</h3>
                <p className={styles.relatedDesc}>
                  Create stunning gradients with oklch for smooth colour
                  transitions.
                </p>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
