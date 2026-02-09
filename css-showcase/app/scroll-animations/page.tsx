import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Scroll Animations | CSS Showcase",
  description:
    "Master CSS Scroll-Driven Animations — create scroll-triggered effects without JavaScript using animation-timeline and view() timelines.",
}

export default function ScrollAnimationsPage() {
  return (
    <>
      <PageHero
        title="CSS Scroll-Driven Animations"
        subtitle="Animations that respond to scroll position — all in pure CSS. Create parallax effects, reveal animations, and scroll progress indicators without a single line of JavaScript."
      >
        <div className={styles.supportBadges}>
          <span className={`${styles.supportBadge} ${styles.chrome}`}>Chrome 115+</span>
          <span className={`${styles.supportBadge} ${styles.edge}`}>Edge 115+</span>
          <span className={`${styles.supportBadge} ${styles.firefoxFlag}`}>Firefox — Behind Flag</span>
          <span className={`${styles.supportBadge} ${styles.safariDev}`}>Safari — In Development</span>
        </div>
      </PageHero>

      {/* ───── The Future of Scroll Effects ───── */}
      <Section
        title="The Future of Scroll Effects"
        intro="For years, scroll-triggered animations required JavaScript libraries, scroll listeners, and performance concerns. CSS Scroll-Driven Animations changes the game &mdash; animations driven by scroll position, completely declarative."
        id="future"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Fade In on Scroll"
            description="This element uses animation-timeline: view() to fade in as it enters the viewport. In unsupported browsers it falls back to being fully visible."
            code={`@keyframes fade-in {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

.element {
    animation: fade-in linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
}

/* Fallback for unsupported browsers */
@supports not (animation-timeline: view()) {
    .element {
        opacity: 1;
        transform: translateY(0);
    }
}`}
          >
            <div className={styles.fadeDemo}>
              <div className={styles.fadeDemoBox}>
                <h3 className={styles.fadeDemoTitle}>Scroll Down</h3>
                <p className={styles.fadeDemoText}>This element fades in as you scroll</p>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Key Concepts"
            description="The four building blocks of scroll-driven animations."
            code=""
          >
            <div className={styles.conceptsGrid}>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>animation-timeline</code>
                <p className={styles.conceptDesc}>Links an animation to scroll position instead of elapsed time.</p>
              </div>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>scroll()</code>
                <p className={styles.conceptDesc}>Creates a timeline based on a scroll container&apos;s scroll position.</p>
              </div>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>view()</code>
                <p className={styles.conceptDesc}>Creates a timeline based on an element&apos;s visibility in the viewport.</p>
              </div>
              <div className={styles.conceptCard}>
                <code className={styles.conceptProp}>animation-range</code>
                <p className={styles.conceptDesc}>Controls precisely when the animation starts and ends during the scroll.</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Scroll Progress Indicator ───── */}
      <Section
        title="Scroll Progress Indicator"
        intro="Create reading progress bars that fill as you scroll &mdash; perfect for blog posts and articles. The bar below tracks scroll position within its container."
        id="progress"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Progress Bar"
            description="A progress bar driven by scroll position. Scroll the container below to see it fill."
            code={`@keyframes grow-progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
}

.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(to right, #2563eb, #7c3aed);
    transform-origin: 0 50%;
    animation: grow-progress linear;
    animation-timeline: scroll(root);
}`}
          >
            <div className={styles.progressDemo}>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} />
              </div>
              <div className={styles.progressScroller}>
                <div className={styles.progressContent}>
                  <p className={styles.progressHint}>Scroll this container to see the progress bar fill &darr;</p>
                  <div className={styles.progressBlock}>
                    <h4>Section 1: Introduction</h4>
                    <p>Scroll-driven animations replace heavy JavaScript scroll listeners with a declarative, browser-optimised approach.</p>
                  </div>
                  <div className={styles.progressBlock}>
                    <h4>Section 2: The API</h4>
                    <p>The <code>animation-timeline</code> property accepts <code>scroll()</code> or <code>view()</code> as values to bind animations to scroll position.</p>
                  </div>
                  <div className={styles.progressBlock}>
                    <h4>Section 3: Practical Uses</h4>
                    <p>From reading progress indicators to parallax backgrounds, scroll-driven animations cover a wide range of use cases.</p>
                  </div>
                  <div className={styles.progressBlock}>
                    <h4>Section 4: Performance</h4>
                    <p>Because the browser owns the animation, it can run it on the compositor thread &mdash; no jank, no layout thrashing.</p>
                  </div>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Reveal on Scroll ───── */}
      <Section
        title="Reveal on Scroll"
        intro="Elements animate into view as they enter the viewport &mdash; the classic 'scroll reveal' effect, now in pure CSS."
        id="reveal"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Reveal Cards"
            description="Cards that animate in with staggered delays using view() timeline. In supported browsers, scroll within the container to see them appear."
            code={`@keyframes reveal {
    from {
        opacity: 0;
        transform: translateY(100px) scale(0.8);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.card {
    animation: reveal linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
}

/* Stagger multiple cards */
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }`}
          >
            <div className={styles.revealDemo}>
              <div className={styles.revealCard}>
                <div className={styles.revealIcon}>&#x2728;</div>
                <h4 className={styles.revealTitle}>Fade &amp; Scale</h4>
                <p className={styles.revealDesc}>Elements smoothly scale up from 80% while fading in from zero opacity.</p>
              </div>
              <div className={styles.revealCard}>
                <div className={styles.revealIcon}>&#x1F4A8;</div>
                <h4 className={styles.revealTitle}>Slide Up</h4>
                <p className={styles.revealDesc}>A translateY of 100px creates a natural upward slide-in motion.</p>
              </div>
              <div className={styles.revealCard}>
                <div className={styles.revealIcon}>&#x23F1;&#xFE0F;</div>
                <h4 className={styles.revealTitle}>Staggered Timing</h4>
                <p className={styles.revealDesc}>Use animation-delay to stagger cards for a cascading entrance effect.</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Animation Range Reference ───── */}
      <Section
        title="Animation Range"
        intro="The animation-range property controls precisely when an animation begins and ends relative to the scroll. Here are the key range values."
        id="range"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Range Values"
            description="Each range keyword defines a different relationship between element position and animation progress."
            code={`/* Range examples */
.element {
    animation-timeline: view();

    /* Animate during entry only */
    animation-range: entry 0% entry 100%;

    /* Animate during exit only */
    animation-range: exit 0% exit 100%;

    /* Animate while element covers viewport */
    animation-range: cover 0% cover 100%;

    /* Animate while element is fully contained */
    animation-range: contain 0% contain 100%;
}`}
          >
            <div className={styles.rangeGrid}>
              <div className={styles.rangeCard}>
                <code className={styles.rangeKeyword}>entry</code>
                <div className={styles.rangeDiagram}>
                  <div className={styles.rangeViewport}>
                    <div className={`${styles.rangeElement} ${styles.rangeEntry}`} />
                  </div>
                </div>
                <p className={styles.rangeDesc}>Element is entering the viewport from below. 0% = just touching, 100% = fully inside.</p>
              </div>
              <div className={styles.rangeCard}>
                <code className={styles.rangeKeyword}>exit</code>
                <div className={styles.rangeDiagram}>
                  <div className={styles.rangeViewport}>
                    <div className={`${styles.rangeElement} ${styles.rangeExit}`} />
                  </div>
                </div>
                <p className={styles.rangeDesc}>Element is leaving the viewport at the top. 0% = fully inside, 100% = just left.</p>
              </div>
              <div className={styles.rangeCard}>
                <code className={styles.rangeKeyword}>cover</code>
                <div className={styles.rangeDiagram}>
                  <div className={styles.rangeViewport}>
                    <div className={`${styles.rangeElement} ${styles.rangeCover}`} />
                  </div>
                </div>
                <p className={styles.rangeDesc}>Entire journey from first pixel visible to last pixel gone. Combines entry and exit.</p>
              </div>
              <div className={styles.rangeCard}>
                <code className={styles.rangeKeyword}>contain</code>
                <div className={styles.rangeDiagram}>
                  <div className={styles.rangeViewport}>
                    <div className={`${styles.rangeElement} ${styles.rangeContain}`} />
                  </div>
                </div>
                <p className={styles.rangeDesc}>Only while the element is fully contained within the viewport. Excludes partial visibility.</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Browser Support ───── */}
      <Section
        title="Browser Support"
        intro="Scroll-Driven Animations are cutting-edge. Use feature detection to provide graceful fallbacks for browsers that don&rsquo;t support them yet."
        id="browser-support"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Progressive Enhancement"
            description="Use @supports to apply scroll-driven animations only in supported browsers."
            code={`/* Progressive enhancement */
.element {
    opacity: 1; /* Default for unsupported browsers */
}

@supports (animation-timeline: view()) {
    .element {
        opacity: 0; /* Start hidden only if supported */
        animation: fade-in linear;
        animation-timeline: view();
        animation-range: entry 0% cover 30%;
    }
}`}
          >
            <div className={styles.supportInfo}>
              <div className={styles.warningBox}>
                <h3 className={styles.warningTitle}>Cutting-Edge Feature</h3>
                <p className={styles.warningIntro}><strong>Scroll-Driven Animations are very new!</strong></p>
                <ul className={styles.supportList}>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">&#x2713;</span>
                    <strong>Chrome 115+:</strong> Fully supported
                  </li>
                  <li>
                    <span className={styles.statusIcon} aria-hidden="true">&#x2713;</span>
                    <strong>Edge 115+:</strong> Fully supported
                  </li>
                  <li>
                    <span className={styles.statusIconWip} aria-hidden="true">&#x25CB;</span>
                    <strong>Firefox:</strong> Behind flag
                  </li>
                  <li>
                    <span className={styles.statusIconWip} aria-hidden="true">&#x25CB;</span>
                    <strong>Safari:</strong> In development
                  </li>
                </ul>
                <p className={styles.warningNote}>
                  <strong>For production:</strong> Use progressive enhancement. The animations won&apos;t run in unsupported browsers, but your content will still be fully visible and usable.
                </p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Why This Matters ───── */}
      <Section
        title="Why This Matters"
        intro="Scroll-Driven Animations eliminate common problems with JavaScript-based scroll effects."
        id="why-it-matters"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="The Advantages"
            description="Define what you want and let the browser handle the rest."
            code=""
          >
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCheck} aria-hidden="true">&#x2713;</span>
                <div>
                  <strong className={styles.benefitLabel}>Performance</strong>
                  <p className={styles.benefitText}>Browser-optimised, runs on the compositor thread &mdash; no jank.</p>
                </div>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCheck} aria-hidden="true">&#x2713;</span>
                <div>
                  <strong className={styles.benefitLabel}>No JavaScript</strong>
                  <p className={styles.benefitText}>Pure CSS means no scroll listeners, no IntersectionObserver, no libraries.</p>
                </div>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCheck} aria-hidden="true">&#x2713;</span>
                <div>
                  <strong className={styles.benefitLabel}>Declarative</strong>
                  <p className={styles.benefitText}>Define the animation and its trigger &mdash; the browser handles scheduling.</p>
                </div>
              </div>
              <div className={styles.benefitCard}>
                <span className={styles.benefitCheck} aria-hidden="true">&#x2713;</span>
                <div>
                  <strong className={styles.benefitLabel}>Accessibility</strong>
                  <p className={styles.benefitText}>Automatically respects <code>prefers-reduced-motion</code> when combined with media queries.</p>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Keep Learning ───── */}
      <Section
        title="Keep Learning"
        intro="Explore related animation and modern CSS features."
        id="keep-learning"
      >
        <DemoGrid columns={1}>
          <DemoCard title="Related Features" code="">
            <div className={styles.relatedGrid}>
              <a href="/animations" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>CSS Animations</h3>
                <p className={styles.relatedDesc}>Master keyframe animations before diving into scroll-driven effects.</p>
              </a>
              <a href="/transitions" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>CSS Transitions</h3>
                <p className={styles.relatedDesc}>Learn the foundations of CSS animation timing and easing functions.</p>
              </a>
              <a href="/has-selector" className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>:has() Selector</h3>
                <p className={styles.relatedDesc}>Another game-changing modern CSS feature for powerful selectors.</p>
              </a>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>
    </>
  )
}
