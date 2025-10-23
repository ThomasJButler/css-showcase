/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Core functionality for the CSS showcase including theme management,
 *              mobile navigation, scroll effects, and accessibility features
 */

/**
 * @constructs - Initialises theme, navigation, scroll observers, and interactive features
 */
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme') ||
                        (prefersDarkScheme.matches ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });

    /**
     * Toggles between light and dark theme
     * Persists preference to localStorage for consistency across pages
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    /**
     * Updates theme toggle icon based on current theme
     * @param {string} theme - Current theme ('dark' or 'light')
     */
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '🌞';
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    if (navToggle && navList) {
        navToggle.parentElement.appendChild(backdrop);
    }

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navList.classList.contains('active');
        navList.classList.toggle('active');
        backdrop.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', !isOpen);
        navToggle.classList.toggle('active');

        // Prevent background scrolling when mobile menu is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') &&
            !navList.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('active')) {
            closeMobileMenu();
            navToggle.focus();
        }
    });

    // Debounced resize handler to close mobile menu on desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && navList.classList.contains('active')) {
                closeMobileMenu();
            }
        }, 250);
    });

    /**
     * Closes mobile navigation menu and resets all related states
     */
    function closeMobileMenu() {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
        backdrop.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    backdrop.addEventListener('click', closeMobileMenu);

    // Smooth scrolling with header offset calculation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlights active navigation link based on visible section
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        rootMargin: '-25% 0px -70% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (navLink) {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Auto-hide header on scroll down, reveal on scroll up
    const header = document.querySelector('.site-header');
    const themeToggleEl = document.querySelector('.theme-toggle');
    let lastScroll = 0;
    let scrollTimer = null;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const isMobile = window.innerWidth <= 768;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Only hide header when mobile menu is closed
        if (!navList.classList.contains('active')) {
            if (currentScroll > lastScroll && currentScroll > 200) {
                header.classList.add('header-hidden');
                if (isMobile && themeToggleEl) {
                    themeToggleEl.classList.add('header-hidden');
                }
            } else {
                header.classList.remove('header-hidden');
                if (isMobile && themeToggleEl) {
                    themeToggleEl.classList.remove('header-hidden');
                }
            }
        }

        clearTimeout(scrollTimer);

        // Reveal header after scroll stops for better UX
        scrollTimer = setTimeout(() => {
            header.classList.remove('header-hidden');
            if (isMobile && themeToggleEl) {
                themeToggleEl.classList.remove('header-hidden');
            }
        }, 500);

        lastScroll = currentScroll;
    }, { passive: true });

    const headerStyles = document.createElement('style');
    headerStyles.textContent = `
        .site-header.scrolled {
            box-shadow: var(--shadow-md);
        }

        .site-header.header-hidden {
            transform: translateY(-100%);
        }

        .theme-toggle.header-hidden {
            transform: translateY(-100px);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(headerStyles);

    // Staggered fade-in animation for showcase cards
    const cards = document.querySelectorAll('.showcase-card');
    const cardObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';

                    requestAnimationFrame(() => {
                        entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    });
                }, index * 50);

                cardObserver.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        cardObserver.observe(card);
    });

    // Respect user's motion preferences for accessibility
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
    }

    // Konami code easter egg (↑↑↓↓←→←→BA)
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                       'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
                       'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;

            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    /**
     * Activates rainbow easter egg animation with temporary message
     */
    function activateEasterEgg() {
        document.body.style.animation = 'rainbow 3s ease-in-out';

        const message = document.createElement('div');
        message.textContent = 'Brilliant! You found the secret!';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--gradient-primary);
            color: white;
            padding: 2rem 3rem;
            border-radius: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
            box-shadow: var(--shadow-2xl);
            z-index: 9999;
            animation: bounceIn 0.5s ease-out;
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
            document.body.style.animation = '';
        }, 3000);
    }

    const easterEggStyles = document.createElement('style');
    easterEggStyles.textContent = `
        @keyframes rainbow {
            0%, 100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(180deg); }
        }

        @keyframes bounceIn {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(easterEggStyles);
});

// Service worker registration for offline support (HTTPS only)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Silently fail - app works fine online without service worker
        });
    });
}
