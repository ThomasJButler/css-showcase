// scripts/transitions.js
// Handles interactive demos for the transitions page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize timing function demo
    initTimingDemo();
});

/**
 * Initialize the timing function comparison demo
 */
function initTimingDemo() {
    const runButton = document.getElementById('run-timing-demo');
    const timingBoxes = document.querySelectorAll('.timing-box');

    if (!runButton || timingBoxes.length === 0) {
        return;
    }

    runButton.addEventListener('click', function() {
        // Reset all boxes first
        timingBoxes.forEach(box => {
            box.classList.remove('running');
        });

        // Force a reflow to restart the animation
        void document.body.offsetHeight;

        // Add running class to trigger transitions
        setTimeout(() => {
            timingBoxes.forEach(box => {
                box.classList.add('running');
            });
        }, 10);

        // Remove running class after animation completes
        setTimeout(() => {
            timingBoxes.forEach(box => {
                box.classList.remove('running');
            });
        }, 2100); // 2s animation + 100ms buffer
    });
}
