/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Adds copy-to-clipboard and collapsible code functionality to code examples
 */

/**
 * @constructs - Initialises copy buttons and toggle functionality for all code examples
 */
document.addEventListener('DOMContentLoaded', function() {
    const codeExamples = document.querySelectorAll('.code-example pre');

    // ============================================
    // Collapsible Code Blocks (Phase 10.1)
    // ============================================

    /**
     * Add toggle buttons to all code examples within demo cards
     * Code is collapsed by default for cleaner page scanning
     */
    function initCodeToggles() {
        const demoCards = document.querySelectorAll('.demo-card');

        demoCards.forEach(card => {
            const codeExample = card.querySelector('.code-example');

            // Skip if no code example or toggle already exists
            if (!codeExample || card.querySelector('.code-toggle')) return;

            // Collapse code by default
            codeExample.classList.add('collapsed');

            // Create toggle button
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'code-toggle';
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.setAttribute('aria-controls', `code-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`);
            toggleBtn.innerHTML = '<span class="toggle-icon">▶</span> View Code';

            // Give code example an ID for aria-controls
            codeExample.id = toggleBtn.getAttribute('aria-controls');

            // Insert toggle button before code example
            codeExample.parentNode.insertBefore(toggleBtn, codeExample);

            // Toggle functionality
            toggleBtn.addEventListener('click', () => {
                const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

                toggleBtn.setAttribute('aria-expanded', !isExpanded);
                codeExample.classList.toggle('collapsed');

                if (isExpanded) {
                    toggleBtn.innerHTML = '<span class="toggle-icon">▶</span> View Code';
                } else {
                    toggleBtn.innerHTML = '<span class="toggle-icon">▼</span> Hide Code';
                    // Check for overflow when code is expanded
                    requestAnimationFrame(() => {
                        const pre = codeExample.querySelector('pre');
                        if (pre && pre.scrollWidth > pre.clientWidth) {
                            codeExample.classList.add('has-overflow');
                        }
                    });
                }
            });
        });
    }

    // Initialise code toggles
    initCodeToggles();

    // ============================================
    // Code Toggle Hint Animation (Phase 12.5)
    // Show pulse animation to first-time visitors
    // ============================================

    /**
     * Add subtle pulse animation to first visible code toggle
     * Only shown once per session to avoid annoyance
     */
    function initCodeToggleHint() {
        // Skip if user has already seen the hint
        if (sessionStorage.getItem('codeToggleHintSeen')) return;

        const firstToggle = document.querySelector('.code-toggle');
        if (!firstToggle) return;

        // Add pulse hint class
        firstToggle.classList.add('hint-pulse');

        // Mark as seen after animation ends or user clicks any toggle
        firstToggle.addEventListener('animationend', () => {
            sessionStorage.setItem('codeToggleHintSeen', 'true');
            firstToggle.classList.remove('hint-pulse');
        });

        // Also mark as seen if user clicks any toggle before animation ends
        document.addEventListener('click', function handleToggleClick(e) {
            if (e.target.closest('.code-toggle')) {
                sessionStorage.setItem('codeToggleHintSeen', 'true');
                firstToggle.classList.remove('hint-pulse');
                document.removeEventListener('click', handleToggleClick);
            }
        });
    }

    // Initialise code toggle hint
    initCodeToggleHint();

    // Create aria-live region for copy feedback announcements
    const copyAnnounce = document.createElement('div');
    copyAnnounce.setAttribute('aria-live', 'polite');
    copyAnnounce.setAttribute('aria-atomic', 'true');
    copyAnnounce.className = 'sr-only';
    copyAnnounce.id = 'copy-announce';
    document.body.appendChild(copyAnnounce);
    
    codeExamples.forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Position button relative to code example
        const codeExample = pre.closest('.code-example');
        codeExample.style.position = 'relative';
        codeExample.appendChild(button);
        
        button.addEventListener('click', async () => {
            const code = pre.textContent;

            // Helper to show copy success
            function showCopySuccess() {
                button.classList.add('copied');
                button.textContent = 'Copied!';
                copyAnnounce.textContent = 'Code copied to clipboard';

                setTimeout(() => {
                    button.classList.remove('copied');
                    button.textContent = 'Copy';
                }, 2000);
            }

            // Helper to show copy failure
            function showCopyFailure() {
                copyAnnounce.textContent = 'Failed to copy code';
                console.error('Failed to copy code');
            }

            try {
                await navigator.clipboard.writeText(code);
                showCopySuccess();
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                document.body.appendChild(textArea);
                textArea.select();

                try {
                    document.execCommand('copy');
                    showCopySuccess();
                } catch (copyErr) {
                    showCopyFailure();
                }

                document.body.removeChild(textArea);
            }
        });
    });

    // Detect horizontal overflow and add class for scroll indicator
    codeExamples.forEach(pre => {
        const codeExample = pre.closest('.code-example');

        // Check initial overflow
        if (pre.scrollWidth > pre.clientWidth) {
            codeExample.classList.add('has-overflow');
        }

        // Track scroll position to hide indicator when at end
        pre.addEventListener('scroll', () => {
            const isAtEnd = pre.scrollLeft + pre.clientWidth >= pre.scrollWidth - 5;
            codeExample.classList.toggle('scrolled-end', isAtEnd);
        });
    });

    // Basic syntax highlighting (if not using a library)
    function highlightSyntax() {
        const codeBlocks = document.querySelectorAll('.code-example code');
        
        codeBlocks.forEach(block => {
            let html = block.innerHTML;
            
            // CSS syntax highlighting patterns
            const patterns = [
                // Comments
                { regex: /(\/\*[\s\S]*?\*\/)/g, class: 'comment' },
                { regex: /(\/\/.*$)/gm, class: 'comment' },
                
                // Selectors
                { regex: /([.#]?[\w-]+)(?=\s*{)/g, class: 'selector' },
                
                // Properties
                { regex: /([\w-]+)(?=\s*:)/g, class: 'property' },
                
                // Values
                { regex: /:\s*([^;{]+)/g, replacement: ': <span class="value">$1</span>' },
                
                // Units
                { regex: /(\d+)(px|rem|em|%|vh|vw|ch|ex|vmin|vmax)/g, replacement: '$1<span class="unit">$2</span>' },
                
                // Functions
                { regex: /(var|calc|min|max|clamp|rgb|rgba|hsl|hsla|linear-gradient|radial-gradient|url)\(/g, replacement: '<span class="function">$1</span>(' },
                
                // Keywords
                { regex: /\b(important|inherit|initial|unset|revert)\b/g, class: 'keyword' },
                
                // Strings
                { regex: /(["'])([^"']*)\1/g, replacement: '<span class="string">$1$2$1</span>' }
            ];
            
            // Apply highlighting
            patterns.forEach(pattern => {
                if (pattern.class) {
                    html = html.replace(pattern.regex, `<span class="token ${pattern.class}">$&</span>`);
                } else if (pattern.replacement) {
                    html = html.replace(pattern.regex, pattern.replacement);
                }
            });
            
            block.innerHTML = html;
        });
    }
    
    // Run syntax highlighting
    highlightSyntax();
    
    // Interactive code demos (for elements that can be edited)
    const editableDemos = document.querySelectorAll('[data-editable="true"]');
    
    editableDemos.forEach(demo => {
        demo.contentEditable = true;
        demo.spellcheck = false;
        
        demo.addEventListener('input', () => {
            // Re-apply styles or update preview
            const preview = demo.closest('.demo-card').querySelector('.demo-preview');
            if (preview) {
                // Update preview based on edited code
                try {
                    const style = document.createElement('style');
                    style.textContent = demo.textContent;
                    preview.appendChild(style);
                } catch (err) {
                    console.error('Invalid CSS:', err);
                }
            }
        });
    });
});