// Icons Interactive JavaScript
// Author: Thomas Butler

document.addEventListener('DOMContentLoaded', function() {
    // Menu to Close toggle
    const menuToggles = document.querySelectorAll('.menu-to-close');
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
        
        // Add span element for middle line
        const span = document.createElement('span');
        toggle.appendChild(span);
    });

    // Play/Pause toggle
    const playPauseButtons = document.querySelectorAll('.play-pause');
    playPauseButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('playing');
        });
    });

    // Like button
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        // Add span for third heart piece
        const span = document.createElement('span');
        button.appendChild(span);
        
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
        });
    });

    // Share icon
    const shareIcons = document.querySelectorAll('.share-icon');
    shareIcons.forEach(icon => {
        // Add elements for share lines
        const span = document.createElement('span');
        const i = document.createElement('i');
        icon.appendChild(span);
        icon.appendChild(i);
        
        icon.addEventListener('click', function() {
            // Simple animation on click
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
            
            // In a real app, this would open a share dialog
            console.log('Share clicked!');
        });
    });

    // Add steam to tea cups
    const teaCups = document.querySelectorAll('.tea-cup');
    teaCups.forEach(cup => {
        const steam = document.createElement('span');
        cup.appendChild(steam);
    });

    // Add middle spike to crown
    const crowns = document.querySelectorAll('.crown-icon');
    crowns.forEach(crown => {
        const span = document.createElement('span');
        crown.appendChild(span);
    });

    // Loading dots middle dot
    const loadingDots = document.querySelectorAll('.loading-dots');
    loadingDots.forEach(dots => {
        const span = document.createElement('span');
        dots.appendChild(span);
    });

    // WiFi icon middle wave
    const wifiIcons = document.querySelectorAll('.wifi-icon');
    wifiIcons.forEach(wifi => {
        const span = document.createElement('span');
        wifi.appendChild(span);
    });

    // Settings icon extra spokes
    const settingsIcons = document.querySelectorAll('.settings-icon');
    settingsIcons.forEach(settings => {
        const span = document.createElement('span');
        settings.appendChild(span);
    });

    // Copy code functionality for icon classes
    const iconCards = document.querySelectorAll('.icon-card');
    iconCards.forEach(card => {
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

    // Add hover effect to static icons
    const staticIcons = document.querySelectorAll('.css-icon:not(button)');
    staticIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});