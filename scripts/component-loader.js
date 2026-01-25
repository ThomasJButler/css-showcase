/**
 * Component Loader
 * =================
 * Dynamically loads shared HTML components (header, sidebar) to eliminate
 * code duplication across ~30 HTML pages.
 *
 * Usage: Include this script in any page that uses shared components.
 * Components are loaded from /components/ directory.
 */

class ComponentLoader {
    constructor() {
        this.componentsLoaded = {
            header: false,
            sidebar: false
        };
    }

    /**
     * Initialise component loading
     * Loads header and sidebar in parallel for fastest render
     */
    async init() {
        try {
            await Promise.all([
                this.loadComponent('header'),
                this.loadComponent('sidebar')
            ]);

            // Post-load setup
            this.highlightCurrentPage();
            this.initSidebarSections();
            this.setupThemeToggle();

            // Dispatch event for other scripts to know components are ready
            document.dispatchEvent(new CustomEvent('components-loaded'));
        } catch (error) {
            console.error('Component loading failed:', error);
        }
    }

    /**
     * Load a single component into its placeholder element
     * @param {string} name - Component name (matches filename without .html)
     */
    async loadComponent(name) {
        const placeholder = document.getElementById(name);
        if (!placeholder) {
            console.warn(`No placeholder found for component: ${name}`);
            return;
        }

        try {
            const response = await fetch(`/components/${name}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${name}: ${response.status}`);
            }

            const html = await response.text();
            placeholder.innerHTML = html;
            this.componentsLoaded[name] = true;

            // Remove skeleton if present
            const skeleton = document.querySelector(`.${name}-skeleton`);
            if (skeleton) {
                skeleton.remove();
            }
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            // Keep skeleton visible as fallback indication
        }
    }

    /**
     * Highlight the current page link in the sidebar navigation
     */
    highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';

        // Find and mark the active link
        const links = document.querySelectorAll('.sidebar-nav-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');

                // Ensure parent section is expanded
                const section = link.closest('.sidebar-section');
                if (section) {
                    const title = section.querySelector('.sidebar-section-title');
                    if (title) {
                        title.setAttribute('aria-expanded', 'true');
                    }
                    const nav = section.querySelector('.sidebar-nav');
                    if (nav) {
                        nav.style.display = 'block';
                    }
                }
            }
        });

        // Also check home link
        if (currentPage === 'index.html' || currentPage === '') {
            const homeLink = document.querySelector('.sidebar-home-link');
            if (homeLink) {
                homeLink.classList.add('active');
                homeLink.setAttribute('aria-current', 'page');
            }
        }
    }

    /**
     * Initialise sidebar section expand/collapse functionality
     */
    initSidebarSections() {
        const sectionTitles = document.querySelectorAll('.sidebar-section-title');

        sectionTitles.forEach(title => {
            title.addEventListener('click', () => this.toggleSection(title));
            title.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleSection(title);
                }
            });
        });
    }

    /**
     * Toggle a sidebar section's expanded state
     * @param {HTMLElement} title - The section title element
     */
    toggleSection(title) {
        const section = title.closest('.sidebar-section');
        const nav = section.querySelector('.sidebar-nav');
        const isExpanded = title.getAttribute('aria-expanded') === 'true';

        title.setAttribute('aria-expanded', !isExpanded);

        if (nav) {
            if (isExpanded) {
                nav.style.maxHeight = '0';
                nav.style.opacity = '0';
                nav.style.overflow = 'hidden';
            } else {
                nav.style.maxHeight = nav.scrollHeight + 'px';
                nav.style.opacity = '1';
                nav.style.overflow = 'visible';
            }
        }

        // Update toggle icon
        const toggle = title.querySelector('.sidebar-section-toggle');
        if (toggle) {
            toggle.textContent = isExpanded ? '▶' : '▼';
        }
    }

    /**
     * Setup theme toggle button in header
     */
    setupThemeToggle() {
        const themeBtn = document.querySelector('.theme-toggle-btn');
        if (!themeBtn) return;

        // Check for existing theme preference
        const savedTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);

        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(newTheme);
        });
    }

    /**
     * Update theme toggle icon visibility
     * @param {string} theme - Current theme ('light' or 'dark')
     */
    updateThemeIcon(theme) {
        const lightIcon = document.querySelector('.theme-icon-light');
        const darkIcon = document.querySelector('.theme-icon-dark');

        if (lightIcon && darkIcon) {
            if (theme === 'dark') {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'inline';
            } else {
                lightIcon.style.display = 'inline';
                darkIcon.style.display = 'none';
            }
        }
    }
}

// Initialise when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.init();
});
