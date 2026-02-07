import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { InteractiveIconsGrid } from "./interactive-icons"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Pure CSS Icons | CSS Showcase",
  description:
    "No icon fonts needed! Create beautiful, scalable icons using just CSS — from simple shapes to complex animations.",
}

function IconCard({
  children,
  name,
  className,
}: {
  children: React.ReactNode
  name: string
  className: string
}) {
  return (
    <div className={styles.iconCard}>
      <div className={styles.iconWrapper}>{children}</div>
      <h3>{name}</h3>
      <code>{className}</code>
    </div>
  )
}

export default function IconsPage() {
  return (
    <>
      <PageHero
        title="Pure CSS Icons"
        subtitle="No icon fonts needed! Create beautiful, scalable icons using just CSS. From simple shapes to complex animations — all without a single image file."
      />

      {/* ───── Basic Icons ───── */}
      <Section
        title="Basic Icons"
        intro="Essential icons crafted with CSS shapes and pseudo-elements."
        id="basic"
      >
        <div className={styles.iconsGrid}>
          <IconCard name="Menu" className=".hamburger-menu">
            <div className={styles.hamburgerMenu} />
          </IconCard>

          <IconCard name="Close" className=".close-icon">
            <div className={styles.closeIcon} />
          </IconCard>

          <IconCard name="Arrow" className=".arrow-right">
            <div className={styles.arrowRight} />
          </IconCard>

          <IconCard name="Heart" className=".heart-icon">
            <div className={styles.heartIcon} />
          </IconCard>

          <IconCard name="Star" className=".star-icon">
            <div className={styles.starIcon} />
          </IconCard>

          <IconCard name="Envelope" className=".envelope-icon">
            <div className={styles.envelopeIcon} />
          </IconCard>

          <IconCard name="Check" className=".check-icon">
            <div className={styles.checkIcon} />
          </IconCard>

          <IconCard name="Search" className=".search-icon">
            <div className={styles.searchIcon} />
          </IconCard>

          <IconCard name="Home" className=".home-icon">
            <div className={styles.homeIcon} />
          </IconCard>

          <IconCard name="User" className=".user-icon">
            <div className={styles.userIcon} />
          </IconCard>

          <IconCard name="Settings" className=".settings-icon">
            <div className={styles.settingsIcon}>
              <span className={styles.settingsGearExtra} />
            </div>
          </IconCard>

          <IconCard name="Download" className=".download-icon">
            <div className={styles.downloadIcon} />
          </IconCard>
        </div>
      </Section>

      {/* ───── Animated Icons ───── */}
      <Section
        title="Animated Icons"
        intro="Icons that come alive with CSS animations."
        id="animated"
      >
        <div className={styles.iconsGrid}>
          <IconCard name="Spinner" className=".spinner-icon">
            <div className={styles.spinnerIcon} />
          </IconCard>

          <IconCard name="Pulse Heart" className=".pulse-heart">
            <div className={styles.pulseHeart} />
          </IconCard>

          <IconCard name="Bell" className=".bell-icon">
            <div className={styles.bellIcon} />
          </IconCard>

          <IconCard name="Loading" className=".loading-dots">
            <div className={styles.loadingDots}>
              <span className={styles.loadingDotMiddle} />
            </div>
          </IconCard>

          <IconCard name="WiFi" className=".wifi-icon">
            <div className={styles.wifiIcon}>
              <span className={styles.wifiInner} />
            </div>
          </IconCard>

          <IconCard name="Battery" className=".battery-icon">
            <div className={styles.batteryIcon} />
          </IconCard>
        </div>
      </Section>

      {/* ───── Interactive Icons ───── */}
      <Section
        title="Interactive Icons"
        intro="Icons that respond to your actions — hover or click to see the magic!"
        id="interactive"
      >
        <InteractiveIconsGrid />
      </Section>

      {/* ───── Fun Icon Collection ───── */}
      <Section
        title="Fun Icon Collection"
        intro="More fun icon examples to explore!"
        id="fun"
      >
        <div className={styles.iconsGrid}>
          <IconCard name="Cuppa" className=".tea-cup">
            <div className={styles.teaCup}>
              <span className={styles.steamLines} />
            </div>
          </IconCard>

          <IconCard name="Brolly" className=".umbrella-icon">
            <div className={styles.umbrellaIcon} />
          </IconCard>

          <IconCard name="Crown" className=".crown-icon">
            <div className={styles.crownIcon}>
              <span className={styles.crownMiddle} />
            </div>
          </IconCard>
        </div>
      </Section>

      {/* ───── Icon Techniques ───── */}
      <Section
        title="Icon Techniques"
        intro="Learn how to create your own CSS icons."
        id="techniques"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Shapes"
            code={`/* Simple circle icon */
.circle-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--colour-primary);
}

/* Triangle using borders */
.triangle-icon {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 35px solid var(--colour-primary);
}`}
          >
            <div className="flex items-center gap-8">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--primary)",
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "20px solid transparent",
                  borderRight: "20px solid transparent",
                  borderBottom: "35px solid var(--primary)",
                }}
              />
            </div>
          </DemoCard>

          <DemoCard
            title="Pseudo Elements"
            code={`/* Plus icon using ::before and ::after */
.plus-icon {
    position: relative;
    width: 40px;
    height: 40px;
}

.plus-icon::before,
.plus-icon::after {
    content: '';
    position: absolute;
    background: var(--colour-primary);
}

.plus-icon::before {
    width: 100%;
    height: 4px;
    top: 50%;
    transform: translateY(-50%);
}

.plus-icon::after {
    width: 4px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
}`}
          >
            <div
              style={{
                position: "relative",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: 4,
                  background: "var(--primary)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 4,
                  height: "100%",
                  background: "var(--primary)",
                }}
              />
            </div>
          </DemoCard>

          <DemoCard
            title="Animations"
            code={`/* Rotating spinner */
@keyframes spin {
    to { transform: rotate(360deg); }
}

.spinner-icon {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0,0,0,0.1);
    border-top-color: var(--colour-primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`}
          >
            <div className={styles.spinnerIcon} />
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Icon Design Tips ───── */}
      <Section
        title="Icon Design Tips"
        intro="Best practices for creating effective CSS icons."
        id="tips"
      >
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Size Consistency</h3>
            <p>
              Keep icons within a consistent grid (24&times;24, 32&times;32) for
              visual harmony.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              ~
            </span>
            <h3>Use CSS Variables</h3>
            <p>
              Define colours as variables for easy theming and consistency.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              !
            </span>
            <h3>Performance</h3>
            <p>
              CSS icons load instantly — no HTTP requests needed!
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
