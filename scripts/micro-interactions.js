/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Micro-interactions including ripple effects, parallax mouse tracking,
 *              and scroll-triggered reveal animations for enhanced user experience
 */

/**
 * @constructs - Initialises micro-interactions and visual enhancements
 */
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, button:not(.nav-toggle)');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Parallax effect for hero sections
    const heroElements = document.querySelectorAll('.floating-element');
    
    if (heroElements.length > 0) {
        window.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            heroElements.forEach((element, index) => {
                const speed = (index + 1) * 20;
                const xPos = (x - 0.5) * speed;
                const yPos = (y - 0.5) * speed;
                
                element.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });
    }
    
    // Smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for reveal animation
    const revealElements = document.querySelectorAll('.showcase-card, .demo-card, .tip-card');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
    
    // Counter animation for stats
    const animateValue = (element, start, end, duration) => {
        const startTimestamp = Date.now();
        const step = () => {
            const timestamp = Date.now();
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };
    
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                animateValue(target, 0, count, 2000);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('.card-icon, .tip-icon, .next-icon');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
    
    // Add hover sound effect (optional - requires user interaction first)
    let audioContext;
    const initAudio = () => {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    };
    
    document.addEventListener('click', initAudio, { once: true });
    
    const playHoverSound = () => {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    };
    
    // Add subtle hover sounds to buttons (disabled by default)
    // Uncomment to enable
    // document.querySelectorAll('.btn').forEach(btn => {
    //     btn.addEventListener('mouseenter', playHoverSound);
    // });
});