/**
 * Scroll Manager
 * ==============
 * Simple scroll listener for back-to-top button only.
 * Uses requestAnimationFrame for optimal performance.
 */

class ScrollManager {
    constructor() {
        this.ticking = false;
        this.floatingBtn = null;
        this.BACK_TO_TOP_THRESHOLD = 400;
    }

    /**
     * Initialise scroll manager
     */
    init() {
        this.createFloatingBackToTop();
        this.bindEvents();
    }

    /**
     * Create floating back-to-top button if it doesn't exist
     */
    createFloatingBackToTop() {
        this.floatingBtn = document.querySelector('.floating-back-to-top');

        if (!this.floatingBtn) {
            this.floatingBtn = document.createElement('button');
            this.floatingBtn.className = 'floating-back-to-top';
            this.floatingBtn.setAttribute('aria-label', 'Back to top');
            this.floatingBtn.innerHTML = '<span aria-hidden="true">↑</span>';
            document.body.appendChild(this.floatingBtn);
        }

        this.floatingBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Bind scroll event with RAF throttling
     */
    bindEvents() {
        window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    }

    /**
     * Handle scroll event with requestAnimationFrame throttling
     */
    onScroll() {
        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.pageYOffset || document.documentElement.scrollTop;
                this.updateBackToTop(scrollY);
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    /**
     * Update floating back-to-top button visibility and progress
     */
    updateBackToTop(scrollY) {
        if (!this.floatingBtn) return;

        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;

        if (scrollY > this.BACK_TO_TOP_THRESHOLD) {
            this.floatingBtn.classList.add('visible');
        } else {
            this.floatingBtn.classList.remove('visible');
        }

        this.floatingBtn.style.setProperty('--scroll-progress', scrollProgress);
    }
}

// Initialise when components are loaded
document.addEventListener('components-loaded', () => {
    const scrollManager = new ScrollManager();
    scrollManager.init();
});

// Fallback initialisation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!document.querySelector('.floating-back-to-top')) {
            const scrollManager = new ScrollManager();
            scrollManager.init();
        }
    }, 100);
});
