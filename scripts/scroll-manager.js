/**
 * Unified Scroll Manager
 * ======================
 * Single scroll listener that handles all scroll-related behaviours:
 * - Header auto-hide on scroll down, reveal on scroll up
 * - Sidebar auto-hide on desktop
 * - Floating back-to-top button with progress indicator
 *
 * Uses requestAnimationFrame for optimal performance.
 * Replaces separate scroll handlers in main.js and sidebar.js.
 */

class ScrollManager {
    constructor() {
        this.lastScrollY = 0;
        this.ticking = false;
        this.scrollTimer = null;
        this.floatingBtn = null;

        // Thresholds
        this.HEADER_THRESHOLD = 200;
        this.BACK_TO_TOP_THRESHOLD = 400;
        this.SCROLLED_CLASS_THRESHOLD = 50;

        // Timeout for revealing header after scroll stops
        this.SCROLL_STOP_DELAY = 500;
    }

    /**
     * Initialise scroll manager
     * Call after DOM is ready and components are loaded
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
                const scrollDirection = scrollY > this.lastScrollY ? 'down' : 'up';

                this.updateHeader(scrollY, scrollDirection);
                this.updateSidebar(scrollY, scrollDirection);
                this.updateBackToTop(scrollY);

                this.lastScrollY = scrollY <= 0 ? 0 : scrollY;
                this.ticking = false;
            });

            this.ticking = true;
        }

        // Clear and reset timer for scroll-stop detection
        clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(() => this.onScrollStop(), this.SCROLL_STOP_DELAY);
    }

    /**
     * Update header visibility based on scroll
     * @param {number} scrollY - Current scroll position
     * @param {string} direction - Scroll direction ('up' or 'down')
     */
    updateHeader(scrollY, direction) {
        const header = document.querySelector('.site-header');
        const themeToggle = document.querySelector('.theme-toggle');
        const navList = document.querySelector('.nav-list');

        if (!header) return;

        // Add/remove scrolled class for shadow effect
        if (scrollY > this.SCROLLED_CLASS_THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Don't hide header if mobile menu is open
        if (navList && navList.classList.contains('active')) return;

        const isMobile = window.innerWidth <= 768;

        // Hide header when scrolling down past threshold
        if (direction === 'down' && scrollY > this.HEADER_THRESHOLD) {
            header.classList.add('header-hidden');
            if (isMobile && themeToggle) {
                themeToggle.classList.add('header-hidden');
            }
        } else if (direction === 'up') {
            header.classList.remove('header-hidden');
            if (isMobile && themeToggle) {
                themeToggle.classList.remove('header-hidden');
            }
        }
    }

    /**
     * Update sidebar visibility based on scroll (desktop only)
     * @param {number} scrollY - Current scroll position
     * @param {string} direction - Scroll direction ('up' or 'down')
     */
    updateSidebar(scrollY, direction) {
        const sidebar = document.querySelector('.sidebar');

        if (!sidebar) return;

        // Only auto-hide on desktop when sidebar is not manually toggled open
        if (window.innerWidth >= 1024 && !sidebar.classList.contains('active')) {
            if (direction === 'down' && scrollY > this.HEADER_THRESHOLD) {
                sidebar.classList.add('sidebar-hidden');
                document.body.classList.add('sidebar-hidden');
            } else if (direction === 'up') {
                sidebar.classList.remove('sidebar-hidden');
                document.body.classList.remove('sidebar-hidden');
            }
        }
    }

    /**
     * Update floating back-to-top button visibility and progress
     * @param {number} scrollY - Current scroll position
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

    /**
     * Reveal header when scrolling stops (better UX)
     */
    onScrollStop() {
        const header = document.querySelector('.site-header');
        const themeToggle = document.querySelector('.theme-toggle');
        const isMobile = window.innerWidth <= 768;

        if (header) {
            header.classList.remove('header-hidden');
        }

        if (isMobile && themeToggle) {
            themeToggle.classList.remove('header-hidden');
        }
    }
}

// Initialise when components are loaded (dispatched by component-loader.js)
document.addEventListener('components-loaded', () => {
    const scrollManager = new ScrollManager();
    scrollManager.init();
});

// Fallback initialisation for pages that may not use component loader
document.addEventListener('DOMContentLoaded', () => {
    // Wait a tick to allow components-loaded event to fire first
    setTimeout(() => {
        if (!document.querySelector('.floating-back-to-top')) {
            const scrollManager = new ScrollManager();
            scrollManager.init();
        }
    }, 100);
});
