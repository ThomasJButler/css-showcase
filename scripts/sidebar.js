/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Sidebar navigation functionality including mobile toggle, section collapsing,
 *              auto-hide on scroll, and active page highlighting with localStorage persistence
 */

(function() {
    'use strict';

    let sidebarInitialised = false;

    // Wait for components to be loaded (header + sidebar are loaded dynamically)
    // The component-loader.js dispatches 'components-loaded' when ready
    document.addEventListener('components-loaded', initSidebar);

    // Fallback: If components are already loaded or not using component loader
    if (document.readyState !== 'loading') {
        // Check if sidebar already exists (components already loaded)
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        if (sidebar && sidebarToggle) {
            initSidebar();
        }
    }

    function initSidebar() {
        // Prevent double initialisation
        if (sidebarInitialised) return;
        sidebarInitialised = true;
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebarBackdrop = document.querySelector('.sidebar-backdrop');
        const sectionTitles = document.querySelectorAll('.sidebar-section-title');
        const backToTop = document.querySelector('.back-to-top');

        if (!sidebar) return;

        // Mobile sidebar toggle
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', toggleSidebar);
        }

        if (sidebarBackdrop) {
            sidebarBackdrop.addEventListener('click', closeSidebar);
        }

        // Section collapsing
        sectionTitles.forEach(title => {
            title.addEventListener('click', toggleSection);
            title.addEventListener('keydown', handleSectionKeydown);
        });

        // Close sidebar when clicking a link (mobile only)
        const sidebarLinks = sidebar.querySelectorAll('.sidebar-nav-link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    closeSidebar();
                }
            });
        });

        // Back to top button
        if (backToTop) {
            backToTop.addEventListener('click', scrollToTop);
        }

        // Highlight current page
        highlightCurrentPage();

        // Handle escape key to close sidebar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('open')) {
                closeSidebar();
            }
        });

        // Restore collapsed sections from localStorage
        restoreCollapsedSections();

        // Note: Scroll-based auto-hide and floating back-to-top are now managed by scroll-manager.js
    }

    /**
     * Focus trap helper - keeps focus within sidebar when open on mobile
     * @param {KeyboardEvent} e - Keyboard event
     */
    function trapSidebarFocus(e) {
        if (e.key !== 'Tab') return;

        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        if (!sidebar || !sidebar.classList.contains('open')) return;

        const focusableElements = sidebar.querySelectorAll(
            'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
            el => el.offsetParent !== null // Only visible elements
        );

        // Include the toggle button as the last focusable element
        if (sidebarToggle) {
            focusable.push(sidebarToggle);
        }

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }

    /**
     * Toggles sidebar open/closed state for mobile view
     * Manages backdrop visibility and prevents body scroll when open
     */
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

        if (!sidebar) return;

        const isOpen = sidebar.classList.toggle('open');

        if (sidebarToggle) {
            sidebarToggle.classList.toggle('active', isOpen);
            sidebarToggle.setAttribute('aria-expanded', isOpen);
        }

        if (sidebarBackdrop) {
            sidebarBackdrop.classList.toggle('active', isOpen);
        }

        // Manage focus trap for accessibility
        if (isOpen) {
            sidebar.setAttribute('data-focus-trap', 'active');
            document.addEventListener('keydown', trapSidebarFocus);
            // Focus first link in sidebar for screen reader users
            const firstLink = sidebar.querySelector('a[href], button');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 100);
            }
        } else {
            sidebar.removeAttribute('data-focus-trap');
            document.removeEventListener('keydown', trapSidebarFocus);
        }

        // Prevent body scroll when sidebar is open on mobile
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    /**
     * Closes sidebar and resets all related states
     */
    function closeSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebarBackdrop = document.querySelector('.sidebar-backdrop');

        if (!sidebar) return;

        sidebar.classList.remove('open');
        sidebar.removeAttribute('data-focus-trap');
        document.removeEventListener('keydown', trapSidebarFocus);

        if (sidebarToggle) {
            sidebarToggle.classList.remove('active');
            sidebarToggle.setAttribute('aria-expanded', 'false');
        }

        if (sidebarBackdrop) {
            sidebarBackdrop.classList.remove('active');
        }

        document.body.style.overflow = '';
    }

    /**
     * Toggles section collapsed state and persists to localStorage
     * @param {Event} e - Click event from section title
     */
    function toggleSection(e) {
        const section = e.currentTarget.closest('.sidebar-section');
        if (!section) return;

        const isCollapsed = section.classList.toggle('collapsed');
        e.currentTarget.setAttribute('aria-expanded', !isCollapsed);

        const sectionId = section.dataset.section;
        if (sectionId) {
            saveCollapsedState(sectionId, isCollapsed);
        }
    }

    /**
     * Handle keyboard navigation for section titles
     */
    function handleSectionKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSection(e);
        }
    }

    /**
     * Scroll to top of page
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    /**
     * Highlights current page in sidebar navigation and ensures its section is expanded
     * Scrolls active link into view if it's outside the visible sidebar area
     */
    function highlightCurrentPage() {
        const currentPage = getCurrentPage();
        if (!currentPage) return;

        const links = document.querySelectorAll('.sidebar-nav-link');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || href === `./${currentPage}`) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');

                const section = link.closest('.sidebar-section');
                if (section) {
                    section.classList.remove('collapsed');
                    const sectionTitle = section.querySelector('.sidebar-section-title');
                    if (sectionTitle) {
                        sectionTitle.setAttribute('aria-expanded', 'true');
                    }
                }

                // Brief delay allows sidebar to render before scrolling
                setTimeout(() => {
                    const sidebar = document.querySelector('.sidebar');
                    const linkRect = link.getBoundingClientRect();
                    const sidebarRect = sidebar.getBoundingClientRect();

                    if (linkRect.bottom > sidebarRect.bottom || linkRect.top < sidebarRect.top) {
                        link.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            }
        });
    }

    /**
     * Extracts current page filename from URL
     * @return {string} Page filename (e.g., 'flexbox.html')
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop();
        return page || 'index.html';
    }

    /**
     * Persists collapsed section state to localStorage
     * @param {string} sectionId - Section identifier
     * @param {boolean} isCollapsed - Whether section is collapsed
     */
    function saveCollapsedState(sectionId, isCollapsed) {
        const collapsedSections = getCollapsedSections();

        if (isCollapsed) {
            collapsedSections.add(sectionId);
        } else {
            collapsedSections.delete(sectionId);
        }

        localStorage.setItem('sidebarCollapsed', JSON.stringify([...collapsedSections]));
    }

    /**
     * Retrieves collapsed sections from localStorage
     * @return {Set<string>} Set of collapsed section IDs
     */
    function getCollapsedSections() {
        try {
            const stored = localStorage.getItem('sidebarCollapsed');
            return new Set(stored ? JSON.parse(stored) : []);
        } catch (e) {
            return new Set();
        }
    }

    /**
     * Restores collapsed section states from localStorage on page load
     */
    function restoreCollapsedSections() {
        const collapsedSections = getCollapsedSections();

        collapsedSections.forEach(sectionId => {
            const section = document.querySelector(`.sidebar-section[data-section="${sectionId}"]`);
            if (section) {
                section.classList.add('collapsed');
                const sectionTitle = section.querySelector('.sidebar-section-title');
                if (sectionTitle) {
                    sectionTitle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Close sidebar when resizing to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeSidebar();
        }
    });

})();
