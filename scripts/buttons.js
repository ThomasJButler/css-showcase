// Buttons Interactive JavaScript
// Author: Thomas Butler

document.addEventListener('DOMContentLoaded', function() {
    // Loading button demos
    const loadingButtons = document.querySelectorAll('.btn-loading-spinner, .btn-loading-dots, .btn-loading-progress');
    
    loadingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Don't trigger if already loading
            if (this.classList.contains('loading')) return;
            
            // Add loading class
            this.classList.add('loading');
            
            // Remove loading class after 2 seconds
            setTimeout(() => {
                this.classList.remove('loading');
            }, 2000);
        });
    });

    // Success check button
    const successButtons = document.querySelectorAll('.btn-success-check');
    
    successButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Don't trigger if already showing success
            if (this.classList.contains('success')) {
                this.classList.remove('success');
                return;
            }
            
            // Show success state
            this.classList.add('success');
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.classList.remove('success');
            }, 2000);
        });
    });

    // Ripple effect buttons
    const rippleButtons = document.querySelectorAll('.btn-ripple');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove any existing ripples
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            // Calculate position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Style the ripple
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Add ripple to button
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Copy button code functionality
    const buttonCards = document.querySelectorAll('.button-card');
    
    buttonCards.forEach(card => {
        const code = card.querySelector('code');
        if (code) {
            code.style.cursor = 'pointer';
            code.title = 'Click to copy class name';
            
            code.addEventListener('click', function() {
                const className = this.textContent;
                navigator.clipboard.writeText(className).then(() => {
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.style.background = 'var(--colour-success)';
                    this.style.color = 'white';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.background = '';
                        this.style.color = '';
                    }, 1000);
                });
            });
        }
    });

    // Add visual feedback for all buttons
    const allButtons = document.querySelectorAll('.btn');
    
    allButtons.forEach(button => {
        // Skip if it's already interactive
        if (button.classList.contains('btn-loading-spinner') || 
            button.classList.contains('btn-loading-dots') ||
            button.classList.contains('btn-loading-progress') ||
            button.classList.contains('btn-success-check')) {
            return;
        }
        
        // Add click feedback
        button.addEventListener('click', function(e) {
            // Prevent navigation for demo buttons
            if (this.tagName === 'BUTTON') {
                e.preventDefault();
            }
            
            // Quick scale effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // Special effect for confetti button
    const confettiButtons = document.querySelectorAll('.btn-confetti');
    
    confettiButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create multiple confetti particles
            for (let i = 0; i < 5; i++) {
                const particle = document.createElement('span');
                particle.className = 'confetti-particle';
                particle.textContent = ['🎉', '🎊', '✨', '🎈', '🎁'][i];
                particle.style.position = 'absolute';
                particle.style.left = '50%';
                particle.style.top = '50%';
                particle.style.transform = 'translate(-50%, -50%)';
                particle.style.pointerEvents = 'none';
                particle.style.fontSize = '1.5em';
                particle.style.zIndex = '1000';
                
                this.appendChild(particle);
                
                // Animate particle
                const angle = (i * 72) * Math.PI / 180;
                const distance = 100;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                particle.animate([
                    { 
                        transform: 'translate(-50%, -50%) scale(0)',
                        opacity: 1
                    },
                    { 
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1) rotate(${Math.random() * 360}deg)`,
                        opacity: 0
                    }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        });
    });

    // Sparkle effect
    const sparkleButtons = document.querySelectorAll('.btn-sparkle');
    
    sparkleButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const sparkle = document.createElement('span');
            sparkle.className = 'sparkle';
            sparkle.textContent = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkle-float 1s ease-out forwards';
            
            // Random position
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            
            this.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });
    });

    // Add sparkle animation to CSS dynamically
    if (!document.querySelector('#sparkle-styles')) {
        const style = document.createElement('style');
        style.id = 'sparkle-styles';
        style.textContent = `
            @keyframes sparkle-float {
                0% {
                    transform: translateY(0) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-50px) scale(1.5);
                    opacity: 0;
                }
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-effect 0.6s ease-out;
                pointer-events: none;
            }
            
            @keyframes ripple-effect {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});