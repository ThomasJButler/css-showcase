/**
 * Responsive Design Page - Interactive Breakpoint Detector
 */

function initResponsivePage() {
    // Breakpoint detector
    function updateBreakpoint() {
        const width = window.innerWidth;
        const indicators = document.querySelectorAll('.bp-indicator');
        const currentBreakpoint = document.getElementById('currentBreakpoint');

        // Remove all active classes
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Determine and activate current breakpoint
        let breakpointName = '';
        if (width < 768) {
            breakpointName = '📱 Mobile';
            document.querySelector('.bp-mobile')?.classList.add('active');
        } else if (width >= 768 && width < 1024) {
            breakpointName = '📱 Tablet';
            document.querySelector('.bp-tablet')?.classList.add('active');
        } else if (width >= 1024 && width < 1280) {
            breakpointName = '💻 Desktop';
            document.querySelector('.bp-desktop')?.classList.add('active');
        } else if (width >= 1280 && width < 1536) {
            breakpointName = '🖥️ Large Desktop';
            document.querySelector('.bp-large')?.classList.add('active');
        } else {
            breakpointName = '🖥️ Extra Large';
            document.querySelector('.bp-xl')?.classList.add('active');
        }

        // Update current breakpoint display
        if (currentBreakpoint) {
            currentBreakpoint.textContent = `Current: ${breakpointName} (${width}px)`;
        }
    }

    // Update on load
    updateBreakpoint();

    // Update on resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateBreakpoint, 100);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResponsivePage);
} else {
    initResponsivePage();
}
