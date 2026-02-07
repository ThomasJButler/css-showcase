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
    // Apply theme early (before components load) to prevent flash
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme') ||
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Note: Theme toggle functionality is handled by component-loader.js
    // after the header component is loaded

    // Note: Navigation is handled by sidebar.js after components are loaded
    // The sidebar toggle in the header controls the mobile sidebar navigation

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
    const navLinks = document.querySelectorAll('.nav-link');
    const observerOptions = {
        rootMargin: '-25% 0px -70% 0px'
    };

    if (navLinks.length > 0) {
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
    }

    // Nav toggle active state styles are defined in main.css

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
