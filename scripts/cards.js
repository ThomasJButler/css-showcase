// Cards Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Expanding Cards
    const expandCards = document.querySelectorAll('.card-expand');
    
    expandCards.forEach(card => {
        const toggle = card.querySelector('.expand-toggle');
        
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                card.classList.toggle('expanded');
                
                // Update button text
                if (card.classList.contains('expanded')) {
                    toggle.textContent = 'Show Less';
                } else {
                    toggle.textContent = 'Show More';
                }
            });
        }
    });
    
    // Card Click Animation
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't animate if clicking on interactive elements
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                return;
            }
            
            // Add a subtle animation
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
    });
    
    // Smooth scroll for horizontal scroll containers
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
        
        // Set initial cursor
        container.style.cursor = 'grab';
    });
});