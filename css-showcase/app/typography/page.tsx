import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Typography | CSS Showcase",
  description:
    "Master CSS Typography — fonts, text styling, and beautiful type design. From basics to advanced techniques.",
}

export default function TypographyPage() {
  return (
    <>
      <PageHero
        title="Typography"
        subtitle="The art and technique of arranging type to make written language beautiful and readable"
      />

      {/* ───── Font Families & Loading ───── */}
      <Section
        title="Font Families & Loading"
        intro="Choosing the right typeface sets the tone for your entire design. Learn how to load and use fonts effectively."
        id="font-families"
      >
        <DemoGrid columns={1}>
          {/* System Font Stacks */}
          <DemoCard
            title="System Font Stacks"
            code={`/* Modern system font stacks */
.system-sans {
    font-family: -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Helvetica, Arial,
        sans-serif;
}

.system-serif {
    font-family: Georgia, Cambria,
        "Times New Roman", Times, serif;
}

.system-mono {
    font-family: ui-monospace, SFMono-Regular,
        "SF Mono", Consolas, "Liberation Mono",
        Menlo, monospace;
}`}
          >
            <div className={styles.fontShowcase}>
              <p className={styles.systemSans}>System Sans-Serif</p>
              <p className={styles.systemSerif}>System Serif</p>
              <p className={styles.systemMono}>System Monospace</p>
            </div>
          </DemoCard>

          {/* Web Font Loading */}
          <DemoCard
            title="Web Font Loading"
            code={`/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?
    family=Inter:wght@400;500;600;700&display=swap');

/* Or use link in HTML (faster) */
<link href="..." rel="stylesheet">

/* Font-display for better UX */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2');
    font-display: swap; /* or fallback */
}`}
            language="css"
          >
            <div className={styles.fontLoading}>
              <p className={styles.googleFont}>Google Fonts: Inter</p>
              <p className={styles.variableFont}>Variable Font (Inter)</p>
              <p className={styles.fontDisplaySwap}>Font Display: Swap</p>
            </div>
          </DemoCard>

          {/* Font Pairing */}
          <DemoCard
            title="Font Pairing"
            code={`/* Complementary font pairing */
h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    letter-spacing: -0.02em;
}

body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.6;
}

/* Contrast in weight, not just family */
.display {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3rem;
    letter-spacing: 0.05em;
}`}
          >
            <div className={styles.fontPairs}>
              <div className={styles.pairExample}>
                <h4 className={styles.pairHeading}>Playfair + Inter</h4>
                <p className={styles.pairBody}>
                  Classic serif paired with modern sans-serif creates elegant
                  contrast.
                </p>
              </div>
              <div className={styles.pairExample}>
                <h4 className={styles.pairHeadingAlt}>Bebas Neue</h4>
                <p className={styles.pairBody}>
                  Bold display font with clean body text for impactful design.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Text Styling Properties ───── */}
      <Section
        title="Text Styling Properties"
        intro="Transform plain text into visually appealing content with these essential CSS properties."
        id="text-styling"
      >
        <DemoGrid columns={1}>
          {/* Font Weight & Style */}
          <DemoCard
            title="Font Weight & Style"
            code={`/* Font weights */
.thin { font-weight: 100; }
.light { font-weight: 300; }
.regular { font-weight: 400; } /* or normal */
.medium { font-weight: 500; }
.semibold { font-weight: 600; }
.bold { font-weight: 700; } /* or bold */

/* Font styles */
.italic { font-style: italic; }
.oblique { font-style: oblique 15deg; }`}
          >
            <div className={styles.weightShowcase}>
              <p className={styles.weight100}>Thin (100)</p>
              <p className={styles.weight300}>Light (300)</p>
              <p className={styles.weight400}>Regular (400)</p>
              <p className={styles.weight500}>Medium (500)</p>
              <p className={styles.weight600}>Semibold (600)</p>
              <p className={styles.weight700}>Bold (700)</p>
              <p className={styles.styleItalic}>Italic Style</p>
              <p className={styles.styleOblique}>Oblique 15deg</p>
            </div>
          </DemoCard>

          {/* Size & Line Height */}
          <DemoCard
            title="Size & Line Height"
            code={`/* Responsive font sizing */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.25rem; }
.text-xl { font-size: 1.5rem; }

/* Line height for readability */
body { line-height: 1.6; }
h1, h2, h3 { line-height: 1.2; }
.tight { line-height: 1.25; }
.loose { line-height: 2; }

/* Fluid typography */
h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
}`}
          >
            <div className={styles.sizeShowcase}>
              <p className={styles.sizeXs}>Extra Small (0.75rem)</p>
              <p className={styles.sizeSm}>Small (0.875rem)</p>
              <p className={styles.sizeBase}>Base (1rem)</p>
              <p className={styles.sizeLg}>Large (1.25rem)</p>
              <p className={styles.sizeXl}>Extra Large (1.5rem)</p>
              <p className={styles.lineHeightDemo}>
                This paragraph has optimised line height (1.6) for comfortable
                reading. Notice how the lines have breathing room between them,
                making the text easier to scan.
              </p>
            </div>
          </DemoCard>

          {/* Letter & Word Spacing */}
          <DemoCard
            title="Letter & Word Spacing"
            code={`/* Letter spacing (tracking) */
.tracking-tight { letter-spacing: -0.05em; }
.tracking-normal { letter-spacing: 0; }
.tracking-wide { letter-spacing: 0.1em; }

/* Word spacing */
.word-spacing { word-spacing: 0.5em; }

/* Common patterns */
.uppercase {
    text-transform: uppercase;
    letter-spacing: 0.1em; /* More readable */
}

.display-heading {
    font-size: 4rem;
    letter-spacing: -0.02em; /* Tighter */
}`}
          >
            <div className={styles.spacingShowcase}>
              <p className={styles.trackingTight}>
                Tight Letter Spacing (-0.05em)
              </p>
              <p className={styles.trackingNormal}>Normal Letter Spacing</p>
              <p className={styles.trackingWide}>
                Wide Letter Spacing (0.1em)
              </p>
              <p className={styles.wordSpacing}>
                Increased Word Spacing
              </p>
              <p className={styles.uppercaseSpaced}>
                UPPERCASE WITH SPACING
              </p>
            </div>
          </DemoCard>

          {/* Text Decoration & Transform */}
          <DemoCard
            title="Text Decoration & Transform"
            code={`/* Text decoration */
.underline-simple {
    text-decoration: underline;
}

.underline-custom {
    text-decoration: underline wavy #f06;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
}

.line-through {
    text-decoration: line-through;
}

/* Text transform */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

/* Small caps */
.small-caps {
    font-variant: small-caps;
}`}
          >
            <div className={styles.decorationShowcase}>
              <p className={styles.underlineSimple}>Simple Underline</p>
              <p className={styles.underlineCustom}>Custom Underline Style</p>
              <p className={styles.lineThrough}>Strikethrough Text</p>
              <p className={styles.overline}>Overline Decoration</p>
              <p className={styles.transformUpper}>lowercase to uppercase</p>
              <p className={styles.transformCap}>capitalize each word</p>
              <p className={styles.smallCaps}>Small Caps Variant</p>
            </div>
          </DemoCard>

          {/* Text Alignment & Indentation */}
          <DemoCard
            title="Text Alignment & Indentation"
            code={`/* Text alignment */
.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }
.align-justify {
    text-align: justify;
    hyphens: auto; /* Better justification */
}

/* Text indentation */
.text-indent {
    text-indent: 2rem;
}

/* First letter styling */
p:first-child::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
}`}
          >
            <div className={styles.alignmentShowcase}>
              <p className={styles.alignLeft}>Left aligned text (default)</p>
              <p className={styles.alignCenter}>Centre aligned text</p>
              <p className={styles.alignRight}>Right aligned text</p>
              <p className={styles.alignJustify}>
                Justified text creates even edges on both sides by adjusting
                word spacing. This can sometimes create rivers of white space.
              </p>
              <p className={styles.textIndent}>
                This paragraph has a text indent, common in traditional book
                typography for the first line of paragraphs.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Advanced Typography ───── */}
      <Section
        title="Advanced Typography"
        intro="Take your typography to the next level with these advanced CSS features and techniques."
        id="advanced"
      >
        <DemoGrid columns={1}>
          {/* Variable Fonts */}
          <DemoCard
            title="Variable Fonts"
            code={`/* Variable font usage */
@font-face {
    font-family: 'Inter var';
    src: url('Inter.var.woff2') format('woff2');
    font-weight: 100 900;
}

/* Fine control */
.custom-weight {
    font-variation-settings: 'wght' 650;
}

/* Animation */
@keyframes weight-dance {
    0% { font-variation-settings: 'wght' 300; }
    50% { font-variation-settings: 'wght' 700; }
    100% { font-variation-settings: 'wght' 300; }
}`}
          >
            <div className={styles.variableFontDemo}>
              <p style={{ fontVariationSettings: "'wght' 300" }}>
                Weight: 300
              </p>
              <p style={{ fontVariationSettings: "'wght' 500" }}>
                Weight: 500
              </p>
              <p style={{ fontVariationSettings: "'wght' 700" }}>
                Weight: 700
              </p>
              <p style={{ fontVariationSettings: "'wght' 900" }}>
                Weight: 900
              </p>
              <p className={styles.variableAnimated}>
                Animated Variable Font
              </p>
            </div>
          </DemoCard>

          {/* Text Shadow & Effects */}
          <DemoCard
            title="Text Shadow & Effects"
            code={`/* Text shadows */
.shadow-simple {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.shadow-neon {
    text-shadow:
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 30px #f06,
        0 0 40px #f06;
}

.shadow-3d {
    text-shadow:
        1px 1px 0 #ccc,
        2px 2px 0 #bbb,
        3px 3px 0 #aaa,
        4px 4px 6px rgba(0,0,0,0.3);
}

.shadow-outline {
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}`}
          >
            <div className={styles.shadowShowcase}>
              <p className={styles.shadowSimple}>Simple Shadow</p>
              <p className={styles.shadowLong}>Long Shadow Effect</p>
              <p className={styles.shadowNeon}>Neon Glow</p>
              <p className={styles.shadow3d}>3D Text Effect</p>
              <p className={styles.shadowOutline}>Outlined Text</p>
            </div>
          </DemoCard>

          {/* OpenType Features */}
          <DemoCard
            title="OpenType Features"
            code={`/* OpenType features */
.liga-on {
    font-feature-settings: "liga" 1;
}

.liga-off {
    font-feature-settings: "liga" 0;
}

.numbers-old {
    font-feature-settings: "onum" 1;
}

.numbers-tabular {
    font-feature-settings: "tnum" 1;
}

.fractions {
    font-feature-settings: "frac" 1;
}

/* Modern syntax */
.stylistic {
    font-variant-ligatures: common-ligatures;
    font-variant-numeric: oldstyle-nums;
}`}
          >
            <div className={styles.opentypeShowcase}>
              <p className={styles.ligaOn}>Ligatures: fi fl ff ffi ffl</p>
              <p className={styles.ligaOff}>No Ligatures: fi fl ff ffi ffl</p>
              <p className={styles.numbersOld}>Old Style: 1234567890</p>
              <p className={styles.numbersTabular}>Tabular: 1234567890</p>
              <p className={styles.fractions}>Fractions: 1/2 3/4 5/8</p>
            </div>
          </DemoCard>

          {/* Text Overflow & Wrapping */}
          <DemoCard
            title="Text Overflow & Wrapping"
            code={`/* Text overflow */
.overflow-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Word breaking */
.word-break {
    word-break: break-all;
}

.word-wrap {
    overflow-wrap: break-word;
}

/* Hyphenation */
.hyphens {
    hyphens: auto;
    -webkit-hyphens: auto;
}

/* Multi-line truncation */
.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}`}
          >
            <div className={styles.overflowShowcase}>
              <p className={styles.overflowEllipsis}>
                This text is too long and will be truncated with an ellipsis at
                the end...
              </p>
              <p className={styles.overflowClip}>
                This text is too long and will be clipped without any visual
                indicator...
              </p>
              <p className={styles.wordBreak}>
                Thisisaverylongwordthatwillbreakwhenitreachestheendofthecontainer
              </p>
              <p className={styles.hyphens}>
                This paragraph uses automatic hyphenation to break long words at
                appropriate syllable boundaries.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Type Specimens ───── */}
      <Section
        title="Type Specimens"
        intro="Complete typography systems showcasing hierarchy, rhythm, and cohesive design."
        id="specimens"
      >
        <div className={styles.specimenContainer}>
          <div className={styles.specimen}>
            <h1 className={styles.specimenH1}>The Quick Brown Fox</h1>
            <h2 className={styles.specimenH2}>Jumps Over the Lazy Dog</h2>
            <h3 className={styles.specimenH3}>A Typography Specimen</h3>
            <p className={styles.specimenLead}>
              This is a lead paragraph demonstrating larger, more impactful text
              that introduces the main content. It sets the tone and draws the
              reader in.
            </p>
            <p className={styles.specimenBody}>
              Regular body text maintains optimal readability with carefully
              chosen font size, line height, and measure. The typography system
              creates visual hierarchy through size, weight, and spacing rather
              than relying on colour alone.
            </p>
            <blockquote className={styles.specimenQuote}>
              &ldquo;Typography is the craft of endowing human language with a
              durable visual form.&rdquo;
              <cite>&mdash; Robert Bringhurst</cite>
            </blockquote>
            <div className={styles.specimenScale}>
              <h4>Type Scale</h4>
              <div className={styles.scaleItem}>
                <span className={styles.scaleSize}>48px</span>
                <span className={styles.scaleExample} style={{ fontSize: "3rem" }}>
                  Display
                </span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleSize}>32px</span>
                <span className={styles.scaleExample} style={{ fontSize: "2rem" }}>
                  Heading 1
                </span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleSize}>24px</span>
                <span className={styles.scaleExample} style={{ fontSize: "1.5rem" }}>
                  Heading 2
                </span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleSize}>20px</span>
                <span className={styles.scaleExample} style={{ fontSize: "1.25rem" }}>
                  Heading 3
                </span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleSize}>16px</span>
                <span className={styles.scaleExample} style={{ fontSize: "1rem" }}>
                  Body
                </span>
              </div>
              <div className={styles.scaleItem}>
                <span className={styles.scaleSize}>14px</span>
                <span className={styles.scaleExample} style={{ fontSize: "0.875rem" }}>
                  Small
                </span>
              </div>
            </div>
          </div>

          <div className={styles.characterSet}>
            <h3>Character Set</h3>
            <div className={styles.characters}>
              <div className={styles.charGroup}>
                <h4>Uppercase</h4>
                <p className={styles.charDisplay}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
              </div>
              <div className={styles.charGroup}>
                <h4>Lowercase</h4>
                <p className={styles.charDisplay}>
                  abcdefghijklmnopqrstuvwxyz
                </p>
              </div>
              <div className={styles.charGroup}>
                <h4>Numbers</h4>
                <p className={styles.charDisplay}>0123456789</p>
              </div>
              <div className={styles.charGroup}>
                <h4>Punctuation</h4>
                <p className={styles.charDisplay}>
                  {`.,;:!?'""-–—()[]{}/*@#£$%&`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section title="Typography Best Practices" id="best-practices">
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Optimal Line Length</h3>
            <p>
              Keep lines between 45–75 characters for comfortable reading. Use
              ch units or max-width.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Establish Hierarchy</h3>
            <p>
              Use size, weight, and spacing to create clear visual hierarchy, not
              just colour.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              {"{ }"}
            </span>
            <h3>Limit Font Families</h3>
            <p>
              Stick to 2–3 font families maximum. More creates visual chaos.
            </p>
          </div>
        </div>
      </Section>

      {/* ───── Next Steps ───── */}
      <Section title="Ready to Layout?" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Beautiful typography needs a solid foundation. Time to master modern
          layout techniques!
        </p>
        <div className={styles.nextGrid}>
          <Link href="/flexbox" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>Flexbox</h3>
              <p>Create flexible one-dimensional layouts</p>
            </div>
          </Link>
          <Link href="/grid" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              {"[ ]"}
            </span>
            <div>
              <h3>CSS Grid</h3>
              <p>Build complex two-dimensional layouts</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
