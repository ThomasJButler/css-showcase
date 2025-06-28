// Box Model Interactive Playground
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const contentWidth = document.getElementById('content-width');
    const contentHeight = document.getElementById('content-height');
    const paddingValue = document.getElementById('padding-value');
    const borderWidth = document.getElementById('border-width');
    const marginValue = document.getElementById('margin-value');
    const boxSizingToggle = document.getElementById('box-sizing-toggle');
    
    const playgroundBox = document.getElementById('playground-box');
    const totalWidthDisplay = document.getElementById('total-width');
    const totalHeightDisplay = document.getElementById('total-height');
    const playgroundCSS = document.getElementById('playground-css');
    
    // Update functions
    function updateBox() {
        const width = contentWidth.value;
        const height = contentHeight.value;
        const padding = paddingValue.value;
        const border = borderWidth.value;
        const margin = marginValue.value;
        const boxSizing = boxSizingToggle.checked ? 'border-box' : 'content-box';
        
        // Apply styles
        playgroundBox.style.width = width + 'px';
        playgroundBox.style.height = height + 'px';
        playgroundBox.style.padding = padding + 'px';
        playgroundBox.style.borderWidth = border + 'px';
        playgroundBox.style.margin = margin + 'px';
        playgroundBox.style.boxSizing = boxSizing;
        
        // Calculate total dimensions
        let totalWidth, totalHeight;
        if (boxSizing === 'border-box') {
            totalWidth = parseInt(width);
            totalHeight = parseInt(height);
        } else {
            totalWidth = parseInt(width) + (parseInt(padding) * 2) + (parseInt(border) * 2);
            totalHeight = parseInt(height) + (parseInt(padding) * 2) + (parseInt(border) * 2);
        }
        
        // Update displays
        totalWidthDisplay.textContent = totalWidth + 'px';
        totalHeightDisplay.textContent = totalHeight + 'px';
        
        // Update code display
        playgroundCSS.textContent = `.box {
    width: ${width}px;
    height: ${height}px;
    padding: ${padding}px;
    border: ${border}px solid;
    margin: ${margin}px;
    box-sizing: ${boxSizing};
}`;
    }
    
    function updateValueDisplay(input) {
        const valueDisplay = input.nextElementSibling;
        if (valueDisplay && valueDisplay.classList.contains('value-display')) {
            valueDisplay.textContent = input.value + 'px';
        }
    }
    
    // Event listeners
    contentWidth.addEventListener('input', function() {
        updateValueDisplay(this);
        updateBox();
    });
    
    contentHeight.addEventListener('input', function() {
        updateValueDisplay(this);
        updateBox();
    });
    
    paddingValue.addEventListener('input', function() {
        updateValueDisplay(this);
        updateBox();
    });
    
    borderWidth.addEventListener('input', function() {
        updateValueDisplay(this);
        updateBox();
    });
    
    marginValue.addEventListener('input', function() {
        updateValueDisplay(this);
        updateBox();
    });
    
    boxSizingToggle.addEventListener('change', updateBox);
    
    // Initialize
    updateBox();
});