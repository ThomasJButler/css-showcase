import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { TimingDemo } from "./timing-demo"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Transitions | CSS Showcase",
  description:
    "Master CSS Transitions — smooth state changes that make your UI feel alive with timing functions, multiple properties, and performance tips.",
}

export default function TransitionsPage() {
  return (
    <>
      <PageHero
        title="CSS Transitions"
        subtitle="Smooth state changes that make your UI feel alive. Master the art of animating between CSS property values with timing, easing, and performance in mind."
      />

      {/* ───── Transition Basics ───── */}
      <Section
        title="Transition Basics"
        intro="Transitions let you smoothly animate changes between CSS property values. Instead of an instant jump from one state to another, transitions create a smooth visual flow that feels natural and polished."
        id="basics"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Basic Transition"
            code={`.box {
    background-color: #2563eb;
    transform: scale(1);
    /* property | duration | timing-function | delay */
    transition: all 0.3s ease 0s;
}

.box:hover {
    background-color: #7c3aed;
    transform: scale(1.1);
}`}
          >
            <div className={styles.basicDemo}>
              <div className={styles.basicBox}>Hover me!</div>
            </div>
            <div className={styles.propertyList}>
              <p>
                The <code>transition</code> property is shorthand for four
                individual properties:
              </p>
              <ul>
                <li>
                  <strong>transition-property:</strong> Which CSS properties to
                  animate (or <code>all</code>)
                </li>
                <li>
                  <strong>transition-duration:</strong> How long the transition
                  takes (e.g., 0.3s)
                </li>
                <li>
                  <strong>transition-timing-function:</strong> The easing curve
                  (e.g., ease, linear)
                </li>
                <li>
                  <strong>transition-delay:</strong> Wait time before starting
                  (default: 0s)
                </li>
              </ul>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Timing Functions ───── */}
      <Section
        title="Timing Functions"
        intro="Timing functions control the acceleration curve of your transition. They determine whether the animation starts slow and speeds up, or starts fast and slows down."
        id="timing"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Timing Function Comparison"
            code={`/* Built-in timing functions */
.linear      { transition-timing-function: linear; }
.ease        { transition-timing-function: ease; }      /* default */
.ease-in     { transition-timing-function: ease-in; }   /* slow start */
.ease-out    { transition-timing-function: ease-out; }  /* slow end */
.ease-in-out { transition-timing-function: ease-in-out; }

/* Custom cubic-bezier curves */
.custom {
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    /* bounce effect */
}`}
          >
            <TimingDemo />
            <div className={styles.propertyList}>
              <h4>Choosing the Right Timing Function</h4>
              <ul>
                <li>
                  <strong>linear:</strong> Constant speed — good for continuous
                  motion like loading spinners
                </li>
                <li>
                  <strong>ease:</strong> Starts fast, ends slow — the default,
                  works for most cases
                </li>
                <li>
                  <strong>ease-in:</strong> Starts slow, accelerates — good for
                  objects exiting the screen
                </li>
                <li>
                  <strong>ease-out:</strong> Starts fast, decelerates — good for
                  objects entering the screen
                </li>
                <li>
                  <strong>ease-in-out:</strong> Slow start and end — good for
                  attention-grabbing effects
                </li>
              </ul>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Multiple Properties ───── */}
      <Section
        title="Transitioning Multiple Properties"
        intro="You can transition multiple properties at once, each with its own duration and timing. This creates rich, layered effects that feel premium and well-crafted."
        id="multiple"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Multi-Property Transition"
            code={`.card {
    background: white;
    transform: translateY(0) scale(1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    /* Different durations for each property */
    transition:
        transform 0.3s ease-out,
        box-shadow 0.3s ease-out,
        background 0.5s ease,
        opacity 0.2s ease;
}

.card:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    opacity: 1;
}`}
          >
            <div className={styles.multiDemo}>
              <div className={styles.multiCard}>
                <div className={styles.multiCardIcon} aria-hidden="true">
                  ~
                </div>
                <h3>Hover Me</h3>
                <p>Multiple properties transition together</p>
              </div>
            </div>
            <p className={styles.proTip}>
              <strong>Pro tip:</strong> While <code>transition: all</code> is
              convenient during prototyping, it&apos;s better to specify
              individual properties in production. This gives you fine control
              over timing and avoids unintended transitions on properties you
              didn&apos;t mean to animate.
            </p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Real-World Examples ───── */}
      <Section
        title="Real-World Examples"
        intro="Transitions shine in everyday UI patterns. Here are some practical applications you'll use constantly."
        id="examples"
      >
        <DemoGrid columns={1}>
          {/* Button Hover States */}
          <DemoCard
            title="Button Hover States"
            code={`.button {
    padding: 12px 24px;
    border: 2px solid #2563eb;
    background: #2563eb;
    color: white;
    transition: all 0.2s ease;
}

.button:hover {
    background: #1d4ed8;
    border-color: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.button:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
}`}
          >
            <div className={styles.buttonExamples}>
              <button className={`${styles.btnTransition} ${styles.btnPrimary}`}>
                Primary Button
              </button>
              <button className={`${styles.btnTransition} ${styles.btnGhost}`}>
                Ghost Button
              </button>
              <button className={`${styles.btnTransition} ${styles.btnGradient}`}>
                <span>Gradient Button</span>
              </button>
            </div>
          </DemoCard>

          {/* Navigation Menus */}
          <DemoCard
            title="Navigation Menus"
            code={`.nav-link {
    position: relative;
    color: #64748b;
    transition: color 0.2s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: #2563eb;
}

.nav-link:hover::after {
    width: 100%;
}`}
          >
            <nav className={styles.demoNav} aria-label="Navigation demo">
              <span className={styles.navLinkDemo}>Home</span>
              <span className={styles.navLinkDemo}>About</span>
              <span className={styles.navLinkDemo}>Services</span>
              <span className={styles.navLinkDemo}>Contact</span>
            </nav>
          </DemoCard>

          {/* Image Hover Effect */}
          <DemoCard
            title="Image Hover Effect"
            code={`.image-card {
    position: relative;
    overflow: hidden;
}

.image-card img {
    transition: transform 0.4s ease;
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-card:hover img {
    transform: scale(1.1);
}

.image-card:hover .image-overlay {
    opacity: 1;
}`}
          >
            <div className={styles.imageHoverDemo}>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <span aria-hidden="true">&#x1F5BC;</span>
                </div>
                <div className={styles.imageOverlay}>
                  <p>View Details</p>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Transition Delays & Staggering ───── */}
      <Section
        title="Transition Delays & Staggering"
        intro="The transition-delay property lets you wait before starting a transition. This is perfect for creating staggered animations where elements appear one after another."
        id="staggering"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Staggered Transitions"
            code={`.stagger-box {
    opacity: 0.3;
    transform: translateY(20px);
    transition: all 0.4s ease;
}

/* Stagger delays for each box */
.stagger-box:nth-child(1) { transition-delay: 0s; }
.stagger-box:nth-child(2) { transition-delay: 0.1s; }
.stagger-box:nth-child(3) { transition-delay: 0.2s; }
.stagger-box:nth-child(4) { transition-delay: 0.3s; }
.stagger-box:nth-child(5) { transition-delay: 0.4s; }

.stagger-container:hover .stagger-box {
    opacity: 1;
    transform: translateY(0);
}`}
          >
            <div className={styles.staggerContainer}>
              <div className={styles.staggerBox} style={{ transitionDelay: "0s" }}>
                1
              </div>
              <div className={styles.staggerBox} style={{ transitionDelay: "0.1s" }}>
                2
              </div>
              <div className={styles.staggerBox} style={{ transitionDelay: "0.2s" }}>
                3
              </div>
              <div className={styles.staggerBox} style={{ transitionDelay: "0.3s" }}>
                4
              </div>
              <div className={styles.staggerBox} style={{ transitionDelay: "0.4s" }}>
                5
              </div>
            </div>
            <p className={styles.demoHint}>
              Hover over the container to see staggered transitions
            </p>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Performance & Best Practices ───── */}
      <Section
        title="Performance & Best Practices"
        intro="Not all CSS properties are created equal when it comes to animation performance. Some trigger expensive layout recalculations, while others can be GPU-accelerated for buttery smooth transitions."
        id="performance"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Reduced Motion & Performance"
            code={`/* Default transitions */
.element {
    transition: transform 0.3s ease;
}

/* Disable for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
    .element {
        transition: none;
    }
}`}
          >
            <div className={styles.perfGrid}>
              <div className={styles.perfCard}>
                <h4 className={styles.perfCardTitle}>
                  <span className={styles.perfIconGood} aria-hidden="true">
                    &#x2713;
                  </span>
                  Prefer (GPU-accelerated)
                </h4>
                <ul className={styles.perfList}>
                  <li>
                    <code>transform</code> — translate, scale, rotate, skew
                  </li>
                  <li>
                    <code>opacity</code> — fade in/out effects
                  </li>
                </ul>
              </div>
              <div className={styles.perfCard}>
                <h4 className={styles.perfCardTitle}>
                  <span className={styles.perfIconBad} aria-hidden="true">
                    &#x2717;
                  </span>
                  Avoid Animating (Expensive)
                </h4>
                <ul className={styles.perfList}>
                  <li>
                    <code>width</code> / <code>height</code> — triggers layout
                    recalculation
                  </li>
                  <li>
                    <code>top</code> / <code>left</code> — use{" "}
                    <code>transform: translate()</code> instead
                  </li>
                  <li>
                    <code>margin</code> / <code>padding</code> — affects layout
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.tipBox}>
              <h4>When to Use Transitions vs Animations</h4>
              <p>
                <strong>Use Transitions when:</strong> You&apos;re animating
                between two states (like hover effects, toggles, or UI feedback).
              </p>
              <p>
                <strong>Use Animations when:</strong> You need complex, multi-step
                sequences, looping effects, or animations that start
                automatically. Check out the{" "}
                <Link href="/animations" className={styles.inlineLink}>
                  Animations page
                </Link>{" "}
                for more on keyframe animations.
              </p>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Continue Your Journey ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Transitions mastered! Explore animations for multi-step motion
          sequences.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/animations" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              *
            </span>
            <div>
              <h3>CSS Animations</h3>
              <p>Multi-step keyframe sequences and looping effects</p>
            </div>
          </Link>
          <Link href="/filters" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              ~
            </span>
            <div>
              <h3>Filters & Effects</h3>
              <p>Transition filter effects for creative hover states</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
