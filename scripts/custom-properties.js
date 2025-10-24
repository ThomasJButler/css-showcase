// scripts/custom-properties.js
// Handles interactive demos for the custom properties page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize color picker demo
    initColorPicker();
});

/**
 * Initialize the interactive color picker demo
 */
function initColorPicker() {
    const colorPreview = document.getElementById('colorPreview');
    const hueSlider = document.getElementById('hueSlider');
    const satSlider = document.getElementById('satSlider');
    const lightSlider = document.getElementById('lightSlider');
    const hueValue = document.getElementById('hueValue');
    const satValue = document.getElementById('satValue');
    const lightValue = document.getElementById('lightValue');

    if (!colorPreview || !hueSlider || !satSlider || !lightSlider) {
        return;
    }

    /**
     * Update the color preview based on slider values
     */
    function updateColor() {
        const hue = hueSlider.value;
        const sat = satSlider.value;
        const light = lightSlider.value;

        // Update CSS custom properties
        colorPreview.style.setProperty('--hue', hue);
        colorPreview.style.setProperty('--saturation', `${sat}%`);
        colorPreview.style.setProperty('--lightness', `${light}%`);

        // Update displayed values
        hueValue.textContent = hue;
        satValue.textContent = sat;
        lightValue.textContent = light;
    }

    // Add event listeners to all sliders
    hueSlider.addEventListener('input', updateColor);
    satSlider.addEventListener('input', updateColor);
    lightSlider.addEventListener('input', updateColor);

    // Initialize with current values
    updateColor();
}
