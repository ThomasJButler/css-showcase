"use client"

import Link from "next/link"
import { navigationSections } from "@/lib/navigation"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Marquee } from "@/components/ui/marquee"
import { Kbd } from "@/components/ui/kbd"
import {
  BookFlipPage,
  LayoutsArray,
  MagicWand,
  OrganizationFiles,
  ProgrammingCodeIdea,
  ProductLaunchLaptop,
  BookLibraryShelf,
} from "@/components/icons/streamline-icons"
import styles from "./page.module.css"

/* ─── Carousel card data ─── */

const featuredCards = [
  {
    category: "Layout",
    title: "CSS Grid & Flexbox",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    bgClass: styles.cardBg1,
    content: (
      <div className={styles.cardContent}>
        <h3>Master Modern Layout</h3>
        <p>
          CSS Grid and Flexbox have revolutionised how we build layouts. From
          simple centring to complex magazine-style compositions, these tools
          give you complete control over spatial arrangement.
        </p>
        <ul>
          <li>Grid template areas for named regions</li>
          <li>Flexbox alignment and distribution patterns</li>
          <li>Responsive layouts without media queries</li>
          <li>Subgrid for nested alignment</li>
        </ul>
        <Link href="/grid" className={styles.cardContentLink}>
          Explore Grid techniques →
        </Link>
      </div>
    ),
  },
  {
    category: "Visual Effects",
    title: "Gradients & Blending",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    bgClass: styles.cardBg2,
    content: (
      <div className={styles.cardContent}>
        <h3>Colour That Captivates</h3>
        <p>
          Go beyond flat colours with gradients, blend modes, and modern colour
          spaces. Create depth, atmosphere, and visual richness with pure CSS.
        </p>
        <ul>
          <li>Linear, radial, and conic gradients</li>
          <li>Repeating gradient patterns</li>
          <li>OKLCH and Display P3 colour spaces</li>
          <li>Mix-blend-mode compositing effects</li>
        </ul>
        <Link href="/gradients" className={styles.cardContentLink}>
          Explore Gradient techniques →
        </Link>
      </div>
    ),
  },
  {
    category: "Animation",
    title: "Transitions & Motion",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    bgClass: styles.cardBg3,
    content: (
      <div className={styles.cardContent}>
        <h3>Bring Interfaces to Life</h3>
        <p>
          Smooth transitions, keyframe animations, and scroll-driven effects
          create interfaces that feel alive and responsive to interaction.
        </p>
        <ul>
          <li>Transition timing functions and custom easing</li>
          <li>Keyframe animation choreography</li>
          <li>Scroll-driven animations (CSS only)</li>
          <li>View transitions for page navigation</li>
        </ul>
        <Link href="/animations" className={styles.cardContentLink}>
          Explore Animation techniques →
        </Link>
      </div>
    ),
  },
  {
    category: "Modern CSS",
    title: "Container Queries & :has()",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    bgClass: styles.cardBg4,
    content: (
      <div className={styles.cardContent}>
        <h3>The Future is Now</h3>
        <p>
          Modern CSS features like container queries, :has(), CSS nesting, and
          anchor positioning are changing how we think about styling.
        </p>
        <ul>
          <li>Container queries for component-level responsiveness</li>
          <li>The :has() parent selector</li>
          <li>Native CSS nesting syntax</li>
          <li>Anchor positioning for tooltips and popovers</li>
        </ul>
        <Link href="/container-queries" className={styles.cardContentLink}>
          Explore Modern CSS →
        </Link>
      </div>
    ),
  },
  {
    category: "Components",
    title: "Buttons, Forms & Cards",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    bgClass: styles.cardBg5,
    content: (
      <div className={styles.cardContent}>
        <h3>Production-Ready Patterns</h3>
        <p>
          Learn to build polished UI components with CSS. From accessible form
          controls to interactive card layouts, master the patterns that
          power real applications.
        </p>
        <ul>
          <li>Button variants with hover and focus states</li>
          <li>Form styling and custom inputs</li>
          <li>Card patterns with gradients and shadows</li>
          <li>Data table styling and responsive layouts</li>
        </ul>
        <Link href="/buttons" className={styles.cardContentLink}>
          Explore Component patterns →
        </Link>
      </div>
    ),
  },
  {
    category: "Advanced",
    title: "Custom Properties & Filters",
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    bgClass: styles.cardBg6,
    content: (
      <div className={styles.cardContent}>
        <h3>Power User Techniques</h3>
        <p>
          CSS custom properties enable dynamic theming, while filters and
          clip-paths open up creative possibilities that push the boundaries
          of what CSS can do.
        </p>
        <ul>
          <li>Custom properties for dynamic theming</li>
          <li>CSS filters for image and element effects</li>
          <li>Clip-path shapes and polygon masks</li>
          <li>Advanced selector strategies</li>
        </ul>
        <Link href="/custom-properties" className={styles.cardContentLink}>
          Explore Advanced techniques →
        </Link>
      </div>
    ),
  },
]

/* ─── Category metadata ─── */

const categoryMeta = [
  {
    icon: BookFlipPage,
    iconClass: styles.iconForest,
    emoji: "📖",
  },
  {
    icon: LayoutsArray,
    iconClass: styles.iconSky,
    emoji: "📐",
  },
  {
    icon: MagicWand,
    iconClass: styles.iconWarm,
    emoji: "✨",
  },
  {
    icon: OrganizationFiles,
    iconClass: styles.iconEarth,
    emoji: "🧩",
  },
  {
    icon: ProgrammingCodeIdea,
    iconClass: styles.iconRose,
    emoji: "🧪",
  },
  {
    icon: ProductLaunchLaptop,
    iconClass: styles.iconTeal,
    emoji: "🚀",
  },
  {
    icon: BookLibraryShelf,
    iconClass: styles.iconAmber,
    emoji: "📚",
  },
]

/* ─── Marquee features ─── */

const cssFeatures = [
  "CSS Grid",
  "Flexbox",
  "Custom Properties",
  "Container Queries",
  ":has() Selector",
  "CSS Nesting",
  "Scroll Animations",
  "OKLCH Colours",
  "Anchor Positioning",
  "View Transitions",
  "Gradients",
  "Blend Modes",
  "Clip-path",
  "Filters",
  "Keyframes",
  "Transitions",
  "Subgrid",
  "Logical Properties",
  "@layer",
  "Color-mix()",
]

/* ─── Carousel cards with gradient backgrounds ─── */

function CarouselCardWrapper({
  card,
  index,
}: {
  card: (typeof featuredCards)[number]
  index: number
}) {
  return (
    <div className="relative">
      <Card
        card={card}
        index={index}
        layout
      />
      {/* Gradient background overlay for the card thumbnail */}
      <div
        className={`${card.bgClass} pointer-events-none absolute inset-0 z-[5] rounded-3xl`}
      />
    </div>
  )
}

/* ─── Page Component ─── */

export default function Home() {
  const carouselItems = featuredCards.map((card, i) => (
    <CarouselCardWrapper key={card.title} card={card} index={i} />
  ))

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className="relative z-10">
          <h1 className={styles.heroTitle}>
            Learn{" "}
            <span className={styles.heroTitleAccent}>Modern CSS</span>
            <br />
            by Example
          </h1>
          <p className={styles.heroSubtitle}>
            A comprehensive guide to modern CSS techniques and patterns —
            from fundamentals to cutting-edge features, with live interactive
            demos and copyable code.
          </p>
          <div className={styles.heroCta}>
            <Link href="/basic" className={styles.btnPrimary}>
              Start Learning
            </Link>
            <Link href="/advanced" className={styles.btnSecondary}>
              Advanced Techniques
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>
            <NumberTicker value={30} delay={0.3} />
          </div>
          <div className={styles.statLabel}>Topics</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>
            <NumberTicker value={7} delay={0.5} />
          </div>
          <div className={styles.statLabel}>Categories</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>
            <NumberTicker value={450} delay={0.7} />
            <span className="text-[var(--primary)]">+</span>
          </div>
          <div className={styles.statLabel}>Demos</div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className={styles.carouselSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Featured</span>
          <h2 className={styles.sectionTitle}>Explore CSS Techniques</h2>
          <p className={styles.sectionSubtitle}>
            Click any card to dive deeper into each topic with live demos and
            code examples.
          </p>
        </div>
        <Carousel items={carouselItems} />
      </section>

      {/* Marquee */}
      <section className={styles.marqueeSection}>
        <Marquee pauseOnHover className="[--duration:60s]">
          {cssFeatures.map((feature) => (
            <span key={feature} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} />
              {feature}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Browse</span>
          <h2 className={styles.sectionTitle}>All Categories</h2>
          <p className={styles.sectionSubtitle}>
            Explore {navigationSections.length} categories covering every
            aspect of modern CSS development.
          </p>
        </div>
        <div className={styles.categoryGrid}>
          {navigationSections.map((section, i) => {
            const meta = categoryMeta[i]
            const firstHref = section.items[0]?.href ?? "/basic"
            return (
              <Link
                key={section.title}
                href={firstHref}
                className={styles.categoryCard}
              >
                <div className={`${styles.categoryIcon} ${meta.iconClass}`}>
                  {meta.emoji}
                </div>
                <div className={styles.categoryName}>{section.title}</div>
                <div className={styles.categoryCount}>
                  {section.items.length}{" "}
                  {section.items.length === 1 ? "topic" : "topics"}
                </div>
                <div className={styles.categoryLinks}>
                  {section.items.map((item) => (
                    <span key={item.href} className={styles.categoryLinkChip}>
                      {item.title}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <h2 className={styles.bottomCtaTitle}>Ready to dive in?</h2>
        <p className={styles.bottomCtaText}>
          Start with the basics or jump straight to modern features. Every
          technique includes live demos and copyable code.
        </p>
        <div className={styles.heroCta}>
          <Link href="/basic" className={styles.btnPrimary}>
            Start from the Beginning
          </Link>
          <Link href="/has-selector" className={styles.btnSecondary}>
            Try Modern CSS
          </Link>
        </div>
        <div className={styles.kbdHint}>
          Press{" "}
          <Kbd>
            <span>⌘</span>
          </Kbd>{" "}
          <Kbd>K</Kbd>{" "}
          to search any topic
        </div>
      </section>
    </>
  )
}
