// Container Queries Demo JavaScript
// Author: Thomas Butler

document.addEventListener('DOMContentLoaded', function() {
    // Make the resizable container more user-friendly
    const resizableContainers = document.querySelectorAll('.resizable-container');
    
    resizableContainers.forEach(container => {
        // Update resize handle text based on container width
        const updateResizeHandle = () => {
            const handle = container.querySelector('.resize-handle');
            if (handle) {
                const width = container.offsetWidth;
                handle.textContent = `↔️ ${width}px - Drag to resize`;
            }
        };
        
        // Initial update
        updateResizeHandle();
        
        // Update on resize
        const resizeObserver = new ResizeObserver(updateResizeHandle);
        resizeObserver.observe(container);
    });
    
    // Demo for style queries (currently using data attributes as fallback)
    const themeContainers = document.querySelectorAll('.theme-container');
    
    themeContainers.forEach(container => {
        const theme = container.dataset.theme;
        container.style.setProperty('--theme', theme);
        
        // Add visual indicator
        const themeCard = container.querySelector('.theme-card');
        if (themeCard) {
            if (theme === 'dark') {
                themeCard.style.background = '#1a1a1a';
                themeCard.style.color = 'white';
                themeCard.style.borderColor = '#333';
            } else {
                themeCard.style.background = 'white';
                themeCard.style.color = '#333';
                themeCard.style.borderColor = '#e5e7eb';
            }
        }
    });
    
    // Add interactive width display
    const containerDemoGrid = document.querySelector('.container-demo-grid');
    if (containerDemoGrid) {
        const addWidthDisplay = (element) => {
            const display = document.createElement('div');
            display.className = 'width-display';
            display.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                background: var(--colour-primary);
                color: white;
                padding: 0.25rem 0.5rem;
                font-size: 0.75rem;
                font-weight: 600;
                border-radius: 0 0 0.5rem 0;
                z-index: 10;
            `;
            
            const updateWidth = () => {
                display.textContent = `${element.offsetWidth}px`;
            };
            
            updateWidth();
            element.style.position = 'relative';
            element.appendChild(display);
            
            const observer = new ResizeObserver(updateWidth);
            observer.observe(element);
        };
        
        // Add to specific containers
        const containers = containerDemoGrid.querySelectorAll('.product-card-container');
        containers.forEach(container => {
            if (container.parentElement.classList.contains('resizable-container') || 
                container.parentElement.classList.contains('fixed-container')) {
                addWidthDisplay(container);
            }
        });
    }
});