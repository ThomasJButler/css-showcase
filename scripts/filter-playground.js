// Filter Playground Interactive Controls
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const target = document.getElementById('playground-target');
    const cssDisplay = document.getElementById('filter-css');
    
    // Get all controls
    const controls = {
        blur: document.getElementById('blur-control'),
        brightness: document.getElementById('brightness-control'),
        contrast: document.getElementById('contrast-control'),
        grayscale: document.getElementById('grayscale-control'),
        hueRotate: document.getElementById('hue-rotate-control'),
        saturate: document.getElementById('saturate-control'),
        sepia: document.getElementById('sepia-control')
    };
    
    const resetButton = document.getElementById('reset-filters');
    
    // Default values
    const defaultValues = {
        blur: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        hueRotate: 0,
        saturate: 100,
        sepia: 0
    };
    
    // Update filter and display
    function updateFilter() {
        const filters = [];
        const cssFilters = [];
        
        // Blur
        const blurValue = controls.blur.value;
        if (blurValue > 0) {
            filters.push(`blur(${blurValue}px)`);
            cssFilters.push(`blur(${blurValue}px)`);
        }
        
        // Brightness
        const brightnessValue = controls.brightness.value;
        if (brightnessValue != 100) {
            filters.push(`brightness(${brightnessValue / 100})`);
            cssFilters.push(`brightness(${brightnessValue}%)`);
        }
        
        // Contrast
        const contrastValue = controls.contrast.value;
        if (contrastValue != 100) {
            filters.push(`contrast(${contrastValue / 100})`);
            cssFilters.push(`contrast(${contrastValue}%)`);
        }
        
        // Grayscale
        const grayscaleValue = controls.grayscale.value;
        if (grayscaleValue > 0) {
            filters.push(`grayscale(${grayscaleValue / 100})`);
            cssFilters.push(`grayscale(${grayscaleValue}%)`);
        }
        
        // Hue Rotate
        const hueRotateValue = controls.hueRotate.value;
        if (hueRotateValue > 0) {
            filters.push(`hue-rotate(${hueRotateValue}deg)`);
            cssFilters.push(`hue-rotate(${hueRotateValue}deg)`);
        }
        
        // Saturate
        const saturateValue = controls.saturate.value;
        if (saturateValue != 100) {
            filters.push(`saturate(${saturateValue / 100})`);
            cssFilters.push(`saturate(${saturateValue}%)`);
        }
        
        // Sepia
        const sepiaValue = controls.sepia.value;
        if (sepiaValue > 0) {
            filters.push(`sepia(${sepiaValue / 100})`);
            cssFilters.push(`sepia(${sepiaValue}%)`);
        }
        
        // Apply filter
        const filterString = filters.length > 0 ? filters.join(' ') : 'none';
        target.style.filter = filterString;
        
        // Update CSS display
        const cssString = cssFilters.length > 0 
            ? `.element {\n    filter: ${cssFilters.join('\n        ')};\n}`
            : '.element {\n    filter: none;\n}';
        cssDisplay.textContent = cssString;
    }
    
    // Update value displays
    function updateValueDisplay(control, suffix) {
        const valueDisplay = control.nextElementSibling;
        if (valueDisplay && valueDisplay.classList.contains('value-display')) {
            valueDisplay.textContent = control.value + suffix;
        }
    }
    
    // Add event listeners
    controls.blur.addEventListener('input', function() {
        updateValueDisplay(this, 'px');
        updateFilter();
    });
    
    controls.brightness.addEventListener('input', function() {
        updateValueDisplay(this, '%');
        updateFilter();
    });
    
    controls.contrast.addEventListener('input', function() {
        updateValueDisplay(this, '%');
        updateFilter();
    });
    
    controls.grayscale.addEventListener('input', function() {
        updateValueDisplay(this, '%');
        updateFilter();
    });
    
    controls.hueRotate.addEventListener('input', function() {
        updateValueDisplay(this, 'deg');
        updateFilter();
    });
    
    controls.saturate.addEventListener('input', function() {
        updateValueDisplay(this, '%');
        updateFilter();
    });
    
    controls.sepia.addEventListener('input', function() {
        updateValueDisplay(this, '%');
        updateFilter();
    });
    
    // Reset button
    resetButton.addEventListener('click', function() {
        // Reset all controls
        controls.blur.value = defaultValues.blur;
        controls.brightness.value = defaultValues.brightness;
        controls.contrast.value = defaultValues.contrast;
        controls.grayscale.value = defaultValues.grayscale;
        controls.hueRotate.value = defaultValues.hueRotate;
        controls.saturate.value = defaultValues.saturate;
        controls.sepia.value = defaultValues.sepia;
        
        // Update displays
        updateValueDisplay(controls.blur, 'px');
        updateValueDisplay(controls.brightness, '%');
        updateValueDisplay(controls.contrast, '%');
        updateValueDisplay(controls.grayscale, '%');
        updateValueDisplay(controls.hueRotate, 'deg');
        updateValueDisplay(controls.saturate, '%');
        updateValueDisplay(controls.sepia, '%');
        
        // Update filter
        updateFilter();
    });
    
    // Initialize
    updateFilter();
});