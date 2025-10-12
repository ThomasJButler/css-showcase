/**
 * Sidebar Navigation
 * Handles mobile toggle, section collapsing, and active page highlighting
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }

    function initSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggle = document.querySelector('.sidebar-toggle');
        const sidebarBackdrop = document.querySelector('.sidebar-backdrop');
        const sidebarCollapseBtn = document.querySelector('.sidebar-collapse-btn');
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

        // Desktop sidebar collapse
        if (sidebarCollapseBtn) {
            sidebarCollapseBtn.addEventListener('click', toggleSidebarCollapse);
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
     * Toggle sidebar open/closed (mobile)
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
     * Close sidebar
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
     * Toggle section collapsed state
     */
    function toggleSection(e) {
        const section = e.currentTarget.closest('.sidebar-section');
        if (!section) return;

        const isCollapsed = section.classList.toggle('collapsed');
        e.currentTarget.setAttribute('aria-expanded', !isCollapsed);

        // Save state to localStorage
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
     * Highlight the current page in the sidebar
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

                // Expand the parent section
                const section = link.closest('.sidebar-section');
                if (section) {
                    section.classList.remove('collapsed');
                    const sectionTitle = section.querySelector('.sidebar-section-title');
                    if (sectionTitle) {
                        sectionTitle.setAttribute('aria-expanded', 'true');
                    }
                }

                // Scroll link into view if not visible
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
     * Get current page filename
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop();
        return page || 'index.html';
    }

    /**
     * Save collapsed section state to localStorage
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
     * Get collapsed sections from localStorage
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
     * Restore collapsed sections from localStorage
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
     * Toggle sidebar collapsed state (desktop only)
     */
    function toggleSidebarCollapse() {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        const isCollapsed = sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed', isCollapsed);

        // Save state to localStorage
        try {
            localStorage.setItem('sidebarCollapsed', isCollapsed ? 'true' : 'false');
        } catch (e) {
            console.warn('Could not save sidebar state:', e);
        }
    }

    /**
     * Restore sidebar collapsed state from localStorage (desktop only)
     */
    function restoreSidebarCollapsedState() {
        if (window.innerWidth < 1024) return;

        try {
            const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
            if (isCollapsed) {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) {
                    sidebar.classList.add('collapsed');
                    document.body.classList.add('sidebar-collapsed');
                }
            }
        } catch (e) {
            console.warn('Could not restore sidebar state:', e);
        }
    }

    // Restore collapsed state on page load
    restoreSidebarCollapsedState();

    /**
     * Setup auto-hide sidebar on scroll
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

                    // Only auto-hide on desktop and if sidebar is not manually toggled
                    if (window.innerWidth >= 1024 && !sidebar.classList.contains('active')) {
                        if (scrollTop > lastScrollTop && scrollTop > 200) {
                            // Scrolling down & past threshold
                            sidebar.classList.add('sidebar-hidden');
                        } else if (scrollTop < lastScrollTop) {
                            // Scrolling up
                            sidebar.classList.remove('sidebar-hidden');
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
     * Setup floating back-to-top button
     */
    function setupFloatingBackToTop() {
        // Create button if it doesn't exist
        let floatingBtn = document.querySelector('.floating-back-to-top');

        if (!floatingBtn) {
            floatingBtn = document.createElement('button');
            floatingBtn.className = 'floating-back-to-top';
            floatingBtn.setAttribute('aria-label', 'Back to top');
            floatingBtn.innerHTML = '↑';
            document.body.appendChild(floatingBtn);
        }

        // Show/hide based on scroll position
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrollProgress = scrollTop / docHeight;

                    // Show button after scrolling down 400px
                    if (scrollTop > 400) {
                        floatingBtn.classList.add('visible');
                    } else {
                        floatingBtn.classList.remove('visible');
                    }

                    // Update progress ring
                    floatingBtn.style.setProperty('--scroll-progress', scrollProgress);

                    ticking = false;
                });

                ticking = true;
            }
        }, { passive: true });

        // Scroll to top on click
        floatingBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Handle window resize - close sidebar on mobile if open
     */
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeSidebar();
        }
    });

})();
