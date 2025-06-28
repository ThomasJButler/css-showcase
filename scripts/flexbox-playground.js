// Flexbox Interactive Playground
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const container = document.getElementById('playground-container');
    const cssDisplay = document.getElementById('playground-css');
    
    // Container controls
    const flexDirection = document.getElementById('flex-direction');
    const flexWrap = document.getElementById('flex-wrap');
    const justifyContent = document.getElementById('justify-content');
    const alignItems = document.getElementById('align-items');
    const gapValue = document.getElementById('gap-value');
    
    // Item controls
    const itemCount = document.getElementById('item-count');
    const selectedItem = document.getElementById('selected-item');
    const flexGrow = document.getElementById('flex-grow');
    const flexShrink = document.getElementById('flex-shrink');
    const alignSelf = document.getElementById('align-self');
    
    let selectedIndex = 0;
    let itemStyles = {};
    
    // Initialize item styles
    function initializeItemStyles() {
        itemStyles = {};
        for (let i = 0; i < 10; i++) {
            itemStyles[i] = {
                flexGrow: 0,
                flexShrink: 1,
                alignSelf: 'auto'
            };
        }
    }
    
    // Update container styles
    function updateContainer() {
        container.style.flexDirection = flexDirection.value;
        container.style.flexWrap = flexWrap.value;
        container.style.justifyContent = justifyContent.value;
        container.style.alignItems = alignItems.value;
        container.style.gap = gapValue.value + 'px';
        
        updateCodeDisplay();
    }
    
    // Update item count
    function updateItemCount() {
        const count = parseInt(itemCount.value);
        const currentCount = container.children.length;
        
        // Update item count display
        itemCount.nextElementSibling.textContent = count;
        
        // Add or remove items
        if (count > currentCount) {
            for (let i = currentCount; i < count; i++) {
                const item = document.createElement('div');
                item.className = 'playground-item';
                item.dataset.index = i;
                item.textContent = i + 1;
                item.addEventListener('click', selectItem);
                container.appendChild(item);
            }
        } else if (count < currentCount) {
            while (container.children.length > count) {
                container.removeChild(container.lastChild);
            }
        }
        
        // Update selected item dropdown
        updateSelectedItemDropdown();
        
        // Ensure selected index is valid
        if (selectedIndex >= count) {
            selectedIndex = Math.max(0, count - 1);
            selectedItem.value = selectedIndex;
            updateSelectedItem();
        }
    }
    
    // Update selected item dropdown
    function updateSelectedItemDropdown() {
        const count = parseInt(itemCount.value);
        selectedItem.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Item ${i + 1}`;
            selectedItem.appendChild(option);
        }
        
        selectedItem.value = selectedIndex;
    }
    
    // Select item
    function selectItem(e) {
        selectedIndex = parseInt(e.target.dataset.index);
        selectedItem.value = selectedIndex;
        updateSelectedItem();
    }
    
    // Update selected item
    function updateSelectedItem() {
        // Remove selected class from all items
        container.querySelectorAll('.playground-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Add selected class to current item
        const selected = container.children[selectedIndex];
        if (selected) {
            selected.classList.add('selected');
            
            // Update controls to match selected item
            const styles = itemStyles[selectedIndex];
            flexGrow.value = styles.flexGrow;
            flexShrink.value = styles.flexShrink;
            alignSelf.value = styles.alignSelf;
            
            // Update displays
            flexGrow.nextElementSibling.textContent = styles.flexGrow;
            flexShrink.nextElementSibling.textContent = styles.flexShrink;
        }
    }
    
    // Update item styles
    function updateItemStyles() {
        const styles = itemStyles[selectedIndex];
        styles.flexGrow = parseInt(flexGrow.value);
        styles.flexShrink = parseInt(flexShrink.value);
        styles.alignSelf = alignSelf.value;
        
        const item = container.children[selectedIndex];
        if (item) {
            item.style.flexGrow = styles.flexGrow;
            item.style.flexShrink = styles.flexShrink;
            item.style.alignSelf = styles.alignSelf;
        }
        
        updateCodeDisplay();
    }
    
    // Update code display
    function updateCodeDisplay() {
        let css = `.container {
    display: flex;
    flex-direction: ${flexDirection.value};
    flex-wrap: ${flexWrap.value};
    justify-content: ${justifyContent.value};
    align-items: ${alignItems.value};
    gap: ${gapValue.value}px;
}`;
        
        // Add item styles if any are non-default
        const hasCustomItemStyles = Object.values(itemStyles).some(styles => 
            styles.flexGrow !== 0 || 
            styles.flexShrink !== 1 || 
            styles.alignSelf !== 'auto'
        );
        
        if (hasCustomItemStyles) {
            css += '\n';
            Object.entries(itemStyles).forEach(([index, styles]) => {
                if (parseInt(index) < parseInt(itemCount.value)) {
                    if (styles.flexGrow !== 0 || styles.flexShrink !== 1 || styles.alignSelf !== 'auto') {
                        css += `\n.item:nth-child(${parseInt(index) + 1}) {`;
                        if (styles.flexGrow !== 0) css += `\n    flex-grow: ${styles.flexGrow};`;
                        if (styles.flexShrink !== 1) css += `\n    flex-shrink: ${styles.flexShrink};`;
                        if (styles.alignSelf !== 'auto') css += `\n    align-self: ${styles.alignSelf};`;
                        css += '\n}';
                    }
                }
            });
        }
        
        cssDisplay.textContent = css;
    }
    
    // Update value displays
    function updateValueDisplay(input) {
        const display = input.nextElementSibling;
        if (display && display.classList.contains('value-display')) {
            display.textContent = input.value + (input.id === 'gap-value' ? 'px' : '');
        }
    }
    
    // Event listeners
    flexDirection.addEventListener('change', updateContainer);
    flexWrap.addEventListener('change', updateContainer);
    justifyContent.addEventListener('change', updateContainer);
    alignItems.addEventListener('change', updateContainer);
    
    gapValue.addEventListener('input', function() {
        updateValueDisplay(this);
        updateContainer();
    });
    
    itemCount.addEventListener('input', function() {
        updateItemCount();
        updateContainer();
    });
    
    selectedItem.addEventListener('change', function() {
        selectedIndex = parseInt(this.value);
        updateSelectedItem();
    });
    
    flexGrow.addEventListener('input', function() {
        updateValueDisplay(this);
        updateItemStyles();
    });
    
    flexShrink.addEventListener('input', function() {
        updateValueDisplay(this);
        updateItemStyles();
    });
    
    alignSelf.addEventListener('change', updateItemStyles);
    
    // Add click handlers to existing items
    container.querySelectorAll('.playground-item').forEach(item => {
        item.addEventListener('click', selectItem);
    });
    
    // Initialize
    initializeItemStyles();
    updateContainer();
    updateSelectedItem();
});