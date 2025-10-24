/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Interactive box model playground demonstrating width, height, padding,
 *              border, margin, and box-sizing property effects on total element dimensions
 */

/**
 * @constructs - Initialises box model playground with dimension controls
 */
document.addEventListener('DOMContentLoaded', function() {
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

    /**
     * Applies box model properties and calculates total dimensions
     * Calculation differs based on box-sizing value (content-box vs border-box)
     */
    function updateBox() {
        const width = contentWidth.value;
        const height = contentHeight.value;
        const padding = paddingValue.value;
        const border = borderWidth.value;
        const margin = marginValue.value;
        const boxSizing = boxSizingToggle.checked ? 'border-box' : 'content-box';

        playgroundBox.style.width = width + 'px';
        playgroundBox.style.height = height + 'px';
        playgroundBox.style.padding = padding + 'px';
        playgroundBox.style.borderWidth = border + 'px';
        playgroundBox.style.margin = margin + 'px';
        playgroundBox.style.boxSizing = boxSizing;

        // border-box includes padding and border in specified width/height
        // content-box adds padding and border to specified width/height
        let totalWidth, totalHeight;
        if (boxSizing === 'border-box') {
            totalWidth = parseInt(width);
            totalHeight = parseInt(height);
        } else {
            totalWidth = parseInt(width) + (parseInt(padding) * 2) + (parseInt(border) * 2);
            totalHeight = parseInt(height) + (parseInt(padding) * 2) + (parseInt(border) * 2);
        }

        totalWidthDisplay.textContent = totalWidth + 'px';
        totalHeightDisplay.textContent = totalHeight + 'px';

        playgroundCSS.textContent = `.box {
    width: ${width}px;
    height: ${height}px;
    padding: ${padding}px;
    border: ${border}px solid;
    margin: ${margin}px;
    box-sizing: ${boxSizing};
}`;
    }

    /**
     * Updates numeric display next to range input
     * @param {HTMLInputElement} input - Range input element
     */
    function updateValueDisplay(input) {
        const valueDisplay = input.nextElementSibling;
        if (valueDisplay && valueDisplay.classList.contains('value-display')) {
            valueDisplay.textContent = input.value + 'px';
        }
    }

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

    updateBox();
});
