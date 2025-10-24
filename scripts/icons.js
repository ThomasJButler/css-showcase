/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Interactive CSS icon demonstrations including toggle states, animations,
 *              and copy-to-clipboard functionality for icon class names
 */

/**
 * @constructs - Initialises icon interactions and structural elements
 */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggles = document.querySelectorAll('.menu-to-close');
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        const span = document.createElement('span');
        toggle.appendChild(span);
    });

    const playPauseButtons = document.querySelectorAll('.play-pause');
    playPauseButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('playing');
        });
    });

    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        const span = document.createElement('span');
        button.appendChild(span);

        button.addEventListener('click', function() {
            this.classList.toggle('liked');
        });
    });

    const shareIcons = document.querySelectorAll('.share-icon');
    shareIcons.forEach(icon => {
        const span = document.createElement('span');
        const i = document.createElement('i');
        icon.appendChild(span);
        icon.appendChild(i);

        icon.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Add structural elements for multi-part CSS icons
    const teaCups = document.querySelectorAll('.tea-cup');
    teaCups.forEach(cup => {
        const steam = document.createElement('span');
        cup.appendChild(steam);
    });

    const crowns = document.querySelectorAll('.crown-icon');
    crowns.forEach(crown => {
        const span = document.createElement('span');
        crown.appendChild(span);
    });

    const loadingDots = document.querySelectorAll('.loading-dots');
    loadingDots.forEach(dots => {
        const span = document.createElement('span');
        dots.appendChild(span);
    });

    const wifiIcons = document.querySelectorAll('.wifi-icon');
    wifiIcons.forEach(wifi => {
        const span = document.createElement('span');
        wifi.appendChild(span);
    });

    const settingsIcons = document.querySelectorAll('.settings-icon');
    settingsIcons.forEach(settings => {
        const span = document.createElement('span');
        settings.appendChild(span);
    });

    /**
     * Enables copy-to-clipboard for icon class names in demo cards
     */
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
