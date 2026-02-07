import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Blend Modes | CSS Showcase",
  description:
    "Master CSS Blend Modes — create stunning visual effects by blending colours and images with mix-blend-mode and background-blend-mode properties.",
}

const BLEND_MODES = [
  { name: "normal", className: styles.modeNormal },
  { name: "multiply", className: styles.modeMultiply },
  { name: "screen", className: styles.modeScreen },
  { name: "overlay", className: styles.modeOverlay },
  { name: "darken", className: styles.modeDarken },
  { name: "lighten", className: styles.modeLighten },
  { name: "color-dodge", className: styles.modeColorDodge },
  { name: "color-burn", className: styles.modeColorBurn },
  { name: "hard-light", className: styles.modeHardLight },
  { name: "soft-light", className: styles.modeSoftLight },
  { name: "difference", className: styles.modeDifference },
  { name: "exclusion", className: styles.modeExclusion },
  { name: "hue", className: styles.modeHue },
  { name: "saturation", className: styles.modeSaturation },
  { name: "color", className: styles.modeColor },
  { name: "luminosity", className: styles.modeLuminosity },
] as const

export default function BlendModesPage() {
  return (
    <>
      <PageHero
        title="CSS Blend Modes"
        subtitle="Create stunning visual effects by blending colours and images together. Master Photoshop-style blending right in your CSS with mix-blend-mode and background-blend-mode."
      />

      {/* ───── What Are Blend Modes? ───── */}
      <Section
        title="What Are Blend Modes?"
        intro="Blend modes determine how an element's colours mix with the colours behind it. If you've used Photoshop or other design tools, you're already familiar with blend modes like multiply, screen, and overlay. CSS brings these same effects to the web!"
        id="intro"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Two Types of Blending"
            description="mix-blend-mode blends an element with its backdrop, while background-blend-mode blends multiple background layers together."
            code={`.overlay {
    mix-blend-mode: multiply;
    /* Element blends with everything behind it */
}

.background {
    background-blend-mode: overlay;
    /* Multiple backgrounds blend with each other */
}`}
          >
            <div className={styles.introDemo}>
              <div className={styles.introBase}>
                <div className={styles.introOverlay}>mix-blend-mode</div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── All Blend Modes Gallery ───── */}
      <Section
        title="All Blend Modes"
        intro="CSS supports 16 blend modes. Each creates a unique effect — experiment to find the perfect look for your design. The purple/blue base gradient blends with a pink/coral overlay gradient."
        id="gallery"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="16 Blend Mode Gallery"
            description="Hover over each card to see the mode name. The base layer is a purple gradient, the overlay is a pink gradient."
            code={`.blend-preview {
    background: linear-gradient(135deg, #667eea, #764ba2);
    position: relative;
    overflow: hidden;
}

.blend-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #f093fb, #f5576c);
    mix-blend-mode: multiply; /* Change this value */
}`}
          >
            <div className={styles.gallery}>
              {BLEND_MODES.map((mode) => (
                <div key={mode.name} className={styles.galleryCard}>
                  <div className={styles.galleryPreview}>
                    <div className={`${styles.galleryLayer} ${mode.className}`} />
                  </div>
                  <span className={styles.galleryName}>{mode.name}</span>
                </div>
              ))}
            </div>
          </DemoCard>
        </DemoGrid>

        <div className={styles.referenceList}>
          <div className={styles.referenceItem}>
            <strong>multiply:</strong> Darkens — perfect for shadows and overlays
          </div>
          <div className={styles.referenceItem}>
            <strong>screen:</strong> Lightens — great for glows and highlights
          </div>
          <div className={styles.referenceItem}>
            <strong>overlay:</strong> Contrast boost — combines multiply and screen
          </div>
          <div className={styles.referenceItem}>
            <strong>soft-light:</strong> Subtle lighting — like a soft spotlight
          </div>
          <div className={styles.referenceItem}>
            <strong>difference:</strong> Inverted colours — striking effects
          </div>
          <div className={styles.referenceItem}>
            <strong>color:</strong> Applies hue and saturation — great for colorising
          </div>
        </div>
      </Section>

      {/* ───── mix-blend-mode ───── */}
      <Section
        title="mix-blend-mode"
        intro="The mix-blend-mode property blends an element with everything behind it — backgrounds, images, text, the whole backdrop."
        id="mix-blend-mode"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Text Overlay Effect"
            description="Large text using difference blend mode creates an inverted-colour effect against a gradient background."
            code={`.background {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.text {
    font-size: 5rem;
    font-weight: 900;
    color: white;
    mix-blend-mode: difference;
    /* Text inverts the background colours */
}`}
          >
            <div className={styles.textBlendDemo}>
              <div className={styles.textBlendBg}>
                <h2 className={styles.blendText}>BLEND</h2>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Image Duotone Effect"
            description="Overlay a coloured gradient with multiply blend mode to create a duotone effect on images or patterns."
            code={`.image {
    background: url('image.jpg');
    position: relative;
}

.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
    mix-blend-mode: multiply;
    /* Creates duotone effect */
}`}
          >
            <div className={styles.duotoneDemo}>
              <div className={styles.duotoneImage}>
                <div className={styles.duotoneOverlay} />
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Logo Adaptation"
            description="Using difference blend mode, a logo automatically contrasts with any background — light or dark."
            code={`.logo {
    color: #888;
    mix-blend-mode: difference;
    /* Logo automatically contrasts with background */
}

/* Works on any background colour! */
.light { background: white; }
.dark { background: black; }`}
          >
            <div className={styles.logoAdaptDemo}>
              <div className={`${styles.logoSection} ${styles.logoLight}`}>
                <div className={styles.logoAdapt}>LOGO</div>
                <p className={`${styles.logoLabel} ${styles.logoLightLabel}`}>
                  Light Background
                </p>
              </div>
              <div className={`${styles.logoSection} ${styles.logoDark}`}>
                <div className={styles.logoAdapt}>LOGO</div>
                <p className={`${styles.logoLabel} ${styles.logoDarkLabel}`}>
                  Dark Background
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── background-blend-mode ───── */}
      <Section
        title="background-blend-mode"
        intro="Use background-blend-mode to blend multiple background layers together. This creates rich, complex effects without extra elements."
        id="background-blend-mode"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Gradient + Pattern Blend"
            description="A colour gradient blended with a repeating pattern using overlay mode."
            code={`.element {
    background:
        linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)),
        repeating-linear-gradient(45deg, transparent, transparent 10px,
            rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px);
    background-blend-mode: overlay;
    /* Gradient blends with pattern */
}`}
          >
            <div className={styles.bgBlendDemo}>
              <div className={styles.gradientImageBlend}>
                <h3>Beautiful Blending</h3>
                <p>Gradient overlaid on pattern</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Multiple Gradient Blend"
            description="Three gradient layers blended with screen mode create vibrant, overlapping colour fields."
            code={`.element {
    background:
        radial-gradient(circle at 20% 50%,
            rgba(255, 0, 150, 0.5), transparent),
        radial-gradient(circle at 80% 50%,
            rgba(0, 200, 255, 0.5), transparent),
        linear-gradient(45deg, #667eea, #764ba2);
    background-blend-mode: screen;
    /* Creates vibrant, overlapping colours */
}`}
          >
            <div className={styles.multiGradientDemo} />
          </DemoCard>

          <DemoCard
            title="Texture Overlay"
            description="A subtle diagonal line texture blended over a gradient using multiply mode adds depth and dimension."
            code={`.card {
    background:
        repeating-linear-gradient(45deg,
            transparent, transparent 2px,
            rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px),
        linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-blend-mode: multiply;
    /* Subtle texture over gradient */
}`}
          >
            <div className={styles.textureDemo}>
              <div className={styles.texturedCard}>
                <h3>Textured Effect</h3>
                <p>Adding depth with blend modes</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Real-World Examples ───── */}
      <Section
        title="Real-World Examples"
        intro="Here's how blend modes solve real design problems — from adaptive text to colourful shadows."
        id="real-world"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Adaptive Dark Mode Text"
            description="Text with mix-blend-mode: difference automatically contrasts against any background — no theme-specific styles needed."
            code={`.adaptive-text {
    color: #888;
    mix-blend-mode: difference;
    /* Always contrasts with background */
}

/* No theme-specific styles needed! */`}
          >
            <div className={styles.adaptiveTextDemo}>
              <div className={`${styles.themeBox} ${styles.themeLightBox}`}>
                <h4 className={styles.adaptiveText}>Adaptive Text</h4>
                <p className={`${styles.themeLabel} ${styles.themeLightLabel}`}>
                  Light theme
                </p>
              </div>
              <div className={`${styles.themeBox} ${styles.themeDarkBox}`}>
                <h4 className={styles.adaptiveText}>Adaptive Text</h4>
                <p className={`${styles.themeLabel} ${styles.themeDarkLabel}`}>
                  Dark theme
                </p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Colourful Shadows"
            description="A blurred pseudo-element with mix-blend-mode creates a vivid, colourful shadow effect behind a card."
            code={`.card {
    background: white;
    position: relative;
}

.card::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: inherit;
    filter: blur(30px);
    opacity: 0.5;
    z-index: -1;
    mix-blend-mode: multiply;
    /* Colourful shadow that blends */
}`}
          >
            <div className={styles.colourfulShadowDemo}>
              <div className={styles.shadowCard}>
                <h4>Vibrant Card</h4>
                <p>With blended shadows</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Performance Tips ───── */}
      <Section
        title="Performance Tips"
        intro="Blend modes can be GPU-intensive. Follow these best practices to keep things smooth."
        id="performance"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Isolate Blending with isolation: isolate"
            description="Create a new stacking context to prevent blend modes from affecting elements outside the container."
            code={`/* Isolate blend mode effects */
.blend-container {
    isolation: isolate;
    /* Creates a new stacking context */
}

.blend-element {
    mix-blend-mode: multiply;
    /* Only blends within .blend-container */
}`}
          >
            <ul className={styles.tipsList}>
              <li>
                <strong>Use sparingly:</strong> Blend modes can be GPU-intensive
                on complex layouts
              </li>
              <li>
                <strong>Isolate blending:</strong> Create a new stacking context
                with <code>isolation: isolate</code>
              </li>
              <li>
                <strong>Test on mobile:</strong> Performance varies across
                devices
              </li>
              <li>
                <strong>Avoid over-nesting:</strong> Multiple blend modes
                stacked on top of each other can be slow
              </li>
              <li>
                <strong>Feature detection:</strong> Use{" "}
                <code>@supports (mix-blend-mode: multiply)</code> for
                progressive enhancement
              </li>
            </ul>
          </DemoCard>

          <DemoCard
            title="Feature Detection with @supports"
            description="Always design with blend modes as an enhancement — your design should still work when blend modes aren't supported."
            code={`/* Feature detection with @supports */
@supports (mix-blend-mode: multiply) {
    .fancy-text {
        mix-blend-mode: difference;
    }
}

/* Fallback for unsupported browsers */
.fancy-text {
    /* Basic styling here */
}`}
          >
            <ul className={styles.tipsList}>
              <li>
                <strong>Chrome/Edge:</strong> 35+ — fully supported
              </li>
              <li>
                <strong>Firefox:</strong> 32+ — fully supported
              </li>
              <li>
                <strong>Safari:</strong> 8+ — fully supported
              </li>
              <li>
                <strong>Internet Explorer:</strong> Not supported — use
                @supports for graceful degradation
              </li>
            </ul>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
