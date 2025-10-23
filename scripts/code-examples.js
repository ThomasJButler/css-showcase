/**
 * @author Tom Butler
 * @date 2025-10-23
 * @description Adds copy-to-clipboard functionality to code examples throughout the showcase
 */

/**
 * @constructs - Initialises copy buttons for all code examples
 */
document.addEventListener('DOMContentLoaded', function() {
    const codeExamples = document.querySelectorAll('.code-example pre');
    
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
            
            try {
                await navigator.clipboard.writeText(code);
                button.classList.add('copied');
                button.textContent = 'Copied!';
                
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.textContent = 'Copy';
                }, 2000);
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
                    button.classList.add('copied');
                    button.textContent = 'Copied!';
                    
                    setTimeout(() => {
                        button.classList.remove('copied');
                        button.textContent = 'Copy';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }
                
                document.body.removeChild(textArea);
            }
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