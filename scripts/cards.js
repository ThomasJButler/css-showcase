/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Interactive card demonstrations including expandable cards, click animations,
 *              and drag-to-scroll functionality for horizontal card containers
 */

/**
 * @constructs - Initialises card interactions
 */
document.addEventListener('DOMContentLoaded', function() {
    const expandCards = document.querySelectorAll('.card-expand');

    expandCards.forEach(card => {
        const toggle = card.querySelector('.expand-toggle');

        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                card.classList.toggle('expanded');

                if (card.classList.contains('expanded')) {
                    toggle.textContent = 'Show Less';
                } else {
                    toggle.textContent = 'Show More';
                }
            });
        }
    });

    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                return;
            }

            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
    });

    /**
     * Enables mouse drag-to-scroll for horizontal card containers
     */
    const scrollContainers = document.querySelectorAll('.cards-scroll');

    scrollContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });

        container.style.cursor = 'grab';
    });
});
