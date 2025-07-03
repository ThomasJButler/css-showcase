// CSS Showcase Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search index - all searchable content
    const searchIndex = [
        // Fundamentals
        { title: 'Basic CSS', url: 'basic.html', category: 'Fundamentals', tags: ['selectors', 'properties', 'cascade', 'specificity', 'units', 'colours'] },
        { title: 'Box Model', url: 'box-model.html', category: 'Fundamentals', tags: ['padding', 'margin', 'border', 'box-sizing', 'spacing'] },
        { title: 'Typography', url: 'typography.html', category: 'Fundamentals', tags: ['fonts', 'text', 'font-size', 'line-height', 'letter-spacing', 'web fonts'] },
        
        // Layout
        { title: 'Flexbox', url: 'flexbox.html', category: 'Layout', tags: ['flex', 'flexible', 'layout', 'align', 'justify', 'direction'] },
        { title: 'CSS Grid', url: 'grid.html', category: 'Layout', tags: ['grid', 'layout', 'columns', 'rows', 'areas', 'template'] },
        { title: 'Responsive Design', url: 'responsive.html', category: 'Layout', tags: ['responsive', 'mobile', 'tablet', 'media queries', 'breakpoints'] },
        { title: 'Container Queries', url: 'container-queries.html', category: 'Layout', tags: ['container', 'queries', 'responsive', 'component'] },
        { title: 'Layout Techniques', url: 'layout.html', category: 'Layout', tags: ['layout', 'position', 'float', 'display'] },
        
        // Visual Effects
        { title: 'Gradients', url: 'gradients.html', category: 'Visual Effects', tags: ['gradient', 'linear', 'radial', 'conic', 'colours'] },
        { title: 'Transitions', url: 'transitions.html', category: 'Visual Effects', tags: ['transition', 'hover', 'animation', 'smooth', 'timing'] },
        { title: 'Animations', url: 'animations.html', category: 'Visual Effects', tags: ['animation', 'keyframes', 'motion', 'timing', 'movement'] },
        { title: 'Filters', url: 'filters.html', category: 'Visual Effects', tags: ['filter', 'blur', 'brightness', 'contrast', 'effects'] },
        
        // Components
        { title: 'Buttons', url: 'buttons.html', category: 'Components', tags: ['button', 'click', 'hover', 'states', 'interactive'] },
        { title: 'Forms', url: 'forms.html', category: 'Components', tags: ['form', 'input', 'select', 'textarea', 'validation'] },
        { title: 'Tables', url: 'tables.html', category: 'Components', tags: ['table', 'data', 'rows', 'columns', 'responsive'] },
        { title: 'Cards', url: 'cards.html', category: 'Components', tags: ['card', 'component', 'container', 'layout', 'design'] },
        { title: 'Icons', url: 'icons.html', category: 'Components', tags: ['icon', 'pure css', 'shapes', 'symbols'] },
        
        // Advanced
        { title: 'Advanced CSS', url: 'advanced.html', category: 'Advanced', tags: ['advanced', 'pseudo', 'selectors', 'variables'] },
        
        // Modern CSS
        { title: ':has() Selector', url: 'has-selector.html', category: 'Modern CSS', tags: ['has', 'parent', 'selector', 'modern'] },
        { title: 'CSS Nesting', url: 'css-nesting.html', category: 'Modern CSS', tags: ['nesting', 'nested', 'modern', 'sass-like'] },
        
        // Tools
        { title: 'CSS Playground', url: 'playground.html', category: 'Tools', tags: ['playground', 'experiment', 'try', 'code', 'editor'] }
    ];
    
    // Create search modal
    const searchModal = document.createElement('div');
    searchModal.className = 'search-modal';
    searchModal.innerHTML = `
        <div class="search-modal-content">
            <div class="search-header">
                <input type="text" class="search-input" placeholder="Search CSS features..." autocomplete="off">
                <button class="search-close" aria-label="Close search">&times;</button>
            </div>
            <div class="search-results"></div>
            <div class="search-footer">
                <span class="search-hint">Press <kbd>ESC</kbd> to close</span>
            </div>
        </div>
    `;
    document.body.appendChild(searchModal);
    
    const searchInput = searchModal.querySelector('.search-input');
    const searchResults = searchModal.querySelector('.search-results');
    const searchClose = searchModal.querySelector('.search-close');
    
    // Search functionality
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '<p class="search-empty">Start typing to search...</p>';
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const results = searchIndex.filter(item => {
            return item.title.toLowerCase().includes(lowerQuery) ||
                   item.category.toLowerCase().includes(lowerQuery) ||
                   item.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
        });
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="search-empty">No results found. Try different keywords.</p>';
            return;
        }
        
        // Group results by category
        const grouped = results.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});
        
        let html = '';
        for (const [category, items] of Object.entries(grouped)) {
            html += `<div class="search-category">
                <h4 class="search-category-title">${category}</h4>
                <ul class="search-list">`;
            
            items.forEach(item => {
                const highlightedTitle = highlightMatch(item.title, query);
                const matchingTags = item.tags
                    .filter(tag => tag.toLowerCase().includes(lowerQuery))
                    .slice(0, 3)
                    .map(tag => highlightMatch(tag, query));
                
                html += `
                    <li class="search-item">
                        <a href="${item.url}" class="search-link">
                            <span class="search-item-title">${highlightedTitle}</span>
                            ${matchingTags.length > 0 ? 
                                `<span class="search-item-tags">${matchingTags.join(', ')}</span>` : 
                                ''}
                        </a>
                    </li>`;
            });
            
            html += '</ul></div>';
        }
        
        searchResults.innerHTML = html;
    }
    
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    // Event handlers
    function openSearch() {
        searchModal.classList.add('active');
        searchInput.value = '';
        searchInput.focus();
        searchResults.innerHTML = '<p class="search-empty">Start typing to search...</p>';
        document.body.style.overflow = 'hidden';
    }
    
    function closeSearch() {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        
        // ESC to close
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            closeSearch();
        }
    });
    
    // Input handling
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            performSearch(e.target.value);
        }, 200);
    });
    
    // Close button
    searchClose.addEventListener('click', closeSearch);
    
    // Close on backdrop click
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) {
            closeSearch();
        }
    });
    
    // Add search button to header
    const navList = document.querySelector('.nav-list');
    if (navList) {
        const searchButton = document.createElement('li');
        searchButton.className = 'nav-item';
        searchButton.innerHTML = `
            <button class="nav-link search-trigger" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            </button>
        `;
        navList.appendChild(searchButton);
        
        searchButton.querySelector('.search-trigger').addEventListener('click', openSearch);
    }
});