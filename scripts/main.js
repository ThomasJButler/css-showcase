// The Ultimate CSS Showcase - Main JavaScript
// Author: Thomas Butler

document.addEventListener('DOMContentLoaded', function() {
    // Theme Management
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or default to system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Theme toggle handler
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '🌞';
    }
    
    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.site-header');
    
    // Create backdrop for mobile menu
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
        
        // Animate hamburger menu
        navToggle.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') && 
            !navList.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('active')) {
            closeMobileMenu();
            navToggle.focus();
        }
    });
    
    // Close mobile menu on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && navList.classList.contains('active')) {
                closeMobileMenu();
            }
        }, 250);
    });
    
    function closeMobileMenu() {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
        backdrop.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Also handle backdrop clicks
    backdrop.addEventListener('click', closeMobileMenu);
    
    // Smooth Scrolling for anchor links
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
    
    // Active Section Detection
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
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));
                    // Add active class to current link
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
    
    // Add CSS for header states
    const headerStyles = document.createElement('style');
    headerStyles.textContent = `
        .site-header.scrolled {
            box-shadow: var(--shadow-md);
        }
        
        .site-header.header-hidden {
            transform: translateY(-100%);
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
    
    // Card Animation on Scroll
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
    
    // Prefers Reduced Motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });
    }
    
    // Easter Egg: Konami Code
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
    
    function activateEasterEgg() {
        document.body.style.animation = 'rainbow 3s ease-in-out';
        
        const message = document.createElement('div');
        message.textContent = '🎉 Brilliant! You found the secret! 🇬🇧';
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
    
    // Add Easter Egg animations
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

// Service Worker Registration (for offline support)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app will work online only
        });
    });
}