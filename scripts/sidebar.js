/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Sidebar navigation functionality including mobile toggle, section collapsing,
 *              auto-hide on scroll, and active page highlighting with localStorage persistence
 */

(function() {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }

    function initSidebar() {
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
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeSidebar();
            }
        });

        // Restore collapsed sections from localStorage
        restoreCollapsedSections();

        // Setup auto-hide on scroll
        setupAutoHide();

        // Setup floating back-to-top button
        setupFloatingBackToTop();
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

        const isActive = sidebar.classList.toggle('active');

        if (sidebarToggle) {
            sidebarToggle.classList.toggle('active', isActive);
            sidebarToggle.setAttribute('aria-expanded', isActive);
        }

        if (sidebarBackdrop) {
            sidebarBackdrop.classList.toggle('active', isActive);
        }

        // Prevent body scroll when sidebar is open on mobile
        if (isActive) {
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

        sidebar.classList.remove('active');

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

    /**
     * Auto-hides sidebar when scrolling down, reveals when scrolling up
     * Uses requestAnimationFrame for performance optimisation on desktop only
     */
    function setupAutoHide() {
        let lastScrollTop = 0;
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const sidebar = document.querySelector('.sidebar');

                    if (!sidebar) return;

                    // Only auto-hide on desktop and when sidebar is not manually toggled
                    if (window.innerWidth >= 1024 && !sidebar.classList.contains('active')) {
                        if (scrollTop > lastScrollTop && scrollTop > 200) {
                            sidebar.classList.add('sidebar-hidden');
                            document.body.classList.add('sidebar-hidden');
                        } else if (scrollTop < lastScrollTop) {
                            sidebar.classList.remove('sidebar-hidden');
                            document.body.classList.remove('sidebar-hidden');
                        }
                    }

                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                    ticking = false;
                });

                ticking = true;
            }
        }, { passive: true });
    }

    /**
     * Creates and manages floating back-to-top button with scroll progress indicator
     * Button appears after scrolling 400px down the page
     */
    function setupFloatingBackToTop() {
        let floatingBtn = document.querySelector('.floating-back-to-top');

        if (!floatingBtn) {
            floatingBtn = document.createElement('button');
            floatingBtn.className = 'floating-back-to-top';
            floatingBtn.setAttribute('aria-label', 'Back to top');
            floatingBtn.innerHTML = '↑';
            document.body.appendChild(floatingBtn);
        }

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrollProgress = scrollTop / docHeight;

                    if (scrollTop > 400) {
                        floatingBtn.classList.add('visible');
                    } else {
                        floatingBtn.classList.remove('visible');
                    }

                    floatingBtn.style.setProperty('--scroll-progress', scrollProgress);

                    ticking = false;
                });

                ticking = true;
            }
        }, { passive: true });

        floatingBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Close sidebar when resizing to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeSidebar();
        }
    });

})();
