import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import { ExpandingCardDemo } from "./expanding-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Card Components | CSS Showcase",
  description:
    "Master CSS Cards — create versatile, responsive card components with hover effects, flip animations, and modern layouts.",
}

export default function CardsPage() {
  return (
    <>
      <PageHero
        title="Card Components"
        subtitle="The building blocks of modern UI — versatile, reusable, and beautiful. From simple content containers to interactive flip cards and hover reveals."
      />

      {/* ───── Basic Card Patterns ───── */}
      <Section
        title="Basic Card Patterns"
        intro="Essential card designs that form the foundation of any modern interface."
        id="basic"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Simple Card"
            code={`/* Basic card */
.card {
    background: var(--colour-surface);
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
}

.card-text {
    color: var(--colour-text-secondary);
    line-height: 1.6;
}`}
          >
            <div className={styles.cardSimple}>
              <h4 className={styles.cardTitle}>Card Title</h4>
              <p className={styles.cardText}>
                This is a simple card with basic styling. Perfect for displaying
                content in a clean, organised way.
              </p>
              <span className={styles.cardLink}>Learn more &rarr;</span>
            </div>
          </DemoCard>

          <DemoCard
            title="Image Card"
            code={`/* Image card */
.card-image {
    overflow: hidden;
}

.card-image-top {
    height: 200px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    margin: -1.5rem -1.5rem 1.5rem;
}

.card-body {
    padding: 0 1.5rem 1.5rem;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: var(--colour-text-secondary);
}`}
          >
            <div className={styles.cardImage}>
              <div className={styles.cardImageTop} />
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>Beautiful Landscape</h4>
                <p className={styles.cardText}>
                  Cards with images draw attention and provide visual context for
                  your content.
                </p>
                <div className={styles.cardMeta}>
                  <span>Jan 15, 2024</span>
                  <span className={styles.cardTag}>Nature</span>
                </div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Profile Card"
            code={`/* Profile card */
.card-profile {
    text-align: center;
}

.profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    margin: 0 auto 1rem;
}

.profile-stats {
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--colour-border);
}

.stat-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--colour-primary);
}`}
          >
            <div className={styles.cardProfile}>
              <div className={styles.profileAvatar} />
              <h4 className={styles.profileName}>Jane Smith</h4>
              <p className={styles.profileRole}>Senior Designer</p>
              <p className={styles.profileBio}>
                Passionate about creating beautiful, user-friendly interfaces
                that delight users.
              </p>
              <div className={styles.profileStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>127</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>4.9</span>
                  <span className={styles.statLabel}>Rating</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>52</span>
                  <span className={styles.statLabel}>Awards</span>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Advanced Card Designs ───── */}
      <Section
        title="Advanced Card Designs"
        intro="More complex card patterns with rich interactions and visual effects."
        id="advanced"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Product Card"
            code={`/* Product card */
.card-product {
    position: relative;
    transition: transform 0.3s ease;
}

.card-product:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.product-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--colour-error);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
}

.product-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
}

.stars {
    color: #f59e0b;
}`}
          >
            <div className={styles.cardProduct}>
              <div className={styles.productBadge}>Sale</div>
              <div className={styles.productImage} />
              <div className={styles.productDetails}>
                <h4 className={styles.productTitle}>Premium Headphones</h4>
                <p className={styles.productDescription}>
                  Wireless noise-cancelling headphones with premium sound quality.
                </p>
                <div className={styles.productRating}>
                  <span className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span className={styles.ratingCount}>(128 reviews)</span>
                </div>
                <div className={styles.productPrice}>
                  <span className={styles.priceCurrent}>&pound;249</span>
                  <span className={styles.priceOriginal}>&pound;299</span>
                </div>
                <button className={styles.btnAddCart}>Add to Cart</button>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Feature Card"
            code={`/* Feature card */
.card-feature {
    border: 2px solid transparent;
    background:
        linear-gradient(var(--colour-surface), var(--colour-surface)) padding-box,
        linear-gradient(135deg, #667eea, #764ba2) border-box;
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.feature-list li::before {
    content: "✓";
    color: var(--colour-success);
    font-weight: bold;
    margin-right: 0.5rem;
}`}
          >
            <div className={styles.cardFeature}>
              <div className={styles.featureIcon} aria-hidden="true">
                &#9889;
              </div>
              <h4 className={styles.featureTitle}>Lightning Fast</h4>
              <p className={styles.featureText}>
                Optimised for speed with lazy loading and efficient caching
                strategies.
              </p>
              <ul className={styles.featureList}>
                <li>Sub-second load times</li>
                <li>CDN integration</li>
                <li>Smart caching</li>
              </ul>
              <span className={styles.featureLink}>
                Learn about performance
                <svg
                  className={styles.linkArrow}
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </DemoCard>

          <DemoCard
            title="Testimonial Card"
            code={`/* Testimonial card */
.card-testimonial {
    position: relative;
    background: var(--colour-surface-variant);
}

.quote-icon {
    font-size: 4rem;
    line-height: 1;
    color: var(--colour-primary);
    opacity: 0.2;
}

.testimonial-text {
    font-style: italic;
    line-height: 1.8;
    margin: 1rem 0 1.5rem;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f06, #48f);
}`}
          >
            <div className={styles.cardTestimonial}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.testimonialText}>
                This CSS showcase has been an invaluable resource for our team.
                The examples are practical and the code is clean and
                well-documented.
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar} />
                <div>
                  <h5 className={styles.authorName}>Alex Johnson</h5>
                  <p className={styles.authorRole}>
                    Lead Developer, TechCorp
                  </p>
                </div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Card Layouts ───── */}
      <Section
        title="Card Layouts"
        intro="Different ways to arrange and display cards for various use cases."
        id="layouts"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Grid Layout"
            code={`/* Responsive grid */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
}`}
          >
            <div className={styles.layoutDemo}>
              <h3 className={styles.layoutDemoTitle}>Grid Layout</h3>
              <div className={styles.cardsGrid}>
                <div className={styles.cardSmall}>Card 1</div>
                <div className={styles.cardSmall}>Card 2</div>
                <div className={styles.cardSmall}>Card 3</div>
                <div className={styles.cardSmall}>Card 4</div>
                <div className={styles.cardSmall}>Card 5</div>
                <div className={styles.cardSmall}>Card 6</div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Masonry Layout"
            code={`/* Masonry with columns */
.cards-masonry {
    columns: 3;
    column-gap: 1.5rem;
}

.card-masonry {
    break-inside: avoid;
    margin-bottom: 1.5rem;
}`}
          >
            <div className={styles.layoutDemo}>
              <h3 className={styles.layoutDemoTitle}>Masonry Layout</h3>
              <div className={styles.cardsMasonry}>
                <div className={styles.cardMasonryTall}>Tall Card</div>
                <div className={styles.cardMasonryRegular}>Regular</div>
                <div className={styles.cardMasonryShort}>Short</div>
                <div className={styles.cardMasonryRegular}>Regular</div>
                <div className={styles.cardMasonryTall}>Tall Card</div>
                <div className={styles.cardMasonryShort}>Short</div>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Horizontal Scroll"
            code={`/* Horizontal scroll */
.cards-scroll {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.card-scroll {
    flex: 0 0 300px;
    scroll-snap-align: start;
}`}
          >
            <div className={styles.layoutDemo}>
              <h3 className={styles.layoutDemoTitle}>Horizontal Scroll</h3>
              <div className={styles.cardsScroll}>
                <div className={styles.cardScroll}>Card 1</div>
                <div className={styles.cardScroll}>Card 2</div>
                <div className={styles.cardScroll}>Card 3</div>
                <div className={styles.cardScroll}>Card 4</div>
                <div className={styles.cardScroll}>Card 5</div>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Interactive Cards ───── */}
      <Section
        title="Interactive Cards"
        intro="Cards with engaging hover effects, animations, and interactive elements."
        id="interactive"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Flip Card"
            code={`/* 3D flip card */
.card-flip-container {
    perspective: 1000px;
}

.card-flip {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card-flip-container:hover .card-flip {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}`}
          >
            <div className={styles.cardFlipContainer}>
              <div className={styles.cardFlip}>
                <div className={styles.cardFront}>
                  <h4>Front Side</h4>
                  <p>Hover to see the back</p>
                </div>
                <div className={styles.cardBack}>
                  <h4>Back Side</h4>
                  <p>Hidden information revealed!</p>
                </div>
              </div>
            </div>
          </DemoCard>

          <ExpandingCardDemo />

          <DemoCard
            title="Hover Reveal"
            code={`/* Hover reveal overlay */
.card-hover-reveal {
    position: relative;
    overflow: hidden;
}

.reveal-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card-hover-reveal:hover .reveal-overlay {
    opacity: 1;
}`}
          >
            <div className={styles.cardHoverReveal}>
              <div className={styles.revealImage} />
              <div className={styles.revealOverlay}>
                <h4>Hidden Details</h4>
                <p>
                  This overlay appears on hover with additional information and
                  actions.
                </p>
                <button className={styles.revealButton}>View More</button>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Best Practices ───── */}
      <Section
        title="Card Design Best Practices"
        intro="Key principles for building effective card-based interfaces."
        id="best-practices"
      >
        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              #
            </span>
            <h3>Consistent Spacing</h3>
            <p>
              Use a spacing system to maintain consistent padding and margins
              across all cards.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              &#9881;
            </span>
            <h3>Accessible Actions</h3>
            <p>
              Ensure interactive elements have proper focus states and are
              keyboard navigable.
            </p>
          </div>
          <div className={styles.tipCard}>
            <span className={styles.tipIcon} aria-hidden="true">
              &#9633;
            </span>
            <h3>Responsive Design</h3>
            <p>
              Cards should stack vertically on mobile and adapt to different
              screen sizes.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
