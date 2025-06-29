// Lightweight syntax highlighting for CSS code examples
// Custom implementation to avoid external dependencies

document.addEventListener('DOMContentLoaded', function() {
    // CSS syntax patterns
    const patterns = {
        comment: /\/\*[\s\S]*?\*\//g,
        string: /(["'])(?:(?=(\\?))\2.)*?\1/g,
        selector: /^[^{]+(?=\s*{)/gm,
        property: /[\w-]+(?=\s*:)/g,
        value: /:\s*([^;]+)/g,
        important: /!important/g,
        number: /\b\d+(\.\d+)?(px|em|rem|%|vh|vw|ch|ex|cm|mm|in|pt|pc|deg|rad|turn|s|ms)?\b/g,
        color: /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)/g,
        function: /[\w-]+(?=\()/g,
        variable: /var\(--[\w-]+\)/g,
        keyword: /\b(inherit|initial|unset|revert|none|auto|flex|grid|block|inline|inline-block|absolute|relative|fixed|sticky)\b/g
    };

    // Process all code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        // Skip if already highlighted
        if (block.classList.contains('highlighted')) return;
        
        let code = block.textContent;
        
        // Store original code
        const originalCode = code;
        
        // Temporary placeholders to avoid conflicts
        const placeholders = [];
        let placeholderIndex = 0;
        
        // Helper function to create placeholder
        function createPlaceholder(match, className) {
            const placeholder = `__PLACEHOLDER_${placeholderIndex}__`;
            placeholders[placeholderIndex] = `<span class="token ${className}">${escapeHtml(match)}</span>`;
            placeholderIndex++;
            return placeholder;
        }
        
        // Apply highlighting in specific order
        // 1. Comments (to avoid highlighting within comments)
        code = code.replace(patterns.comment, match => createPlaceholder(match, 'comment'));
        
        // 2. Strings
        code = code.replace(patterns.string, match => createPlaceholder(match, 'string'));
        
        // 3. CSS Variables
        code = code.replace(patterns.variable, match => createPlaceholder(match, 'variable'));
        
        // 4. Colors
        code = code.replace(patterns.color, match => createPlaceholder(match, 'color'));
        
        // 5. Numbers with units
        code = code.replace(patterns.number, match => createPlaceholder(match, 'number'));
        
        // 6. Functions
        code = code.replace(patterns.function, match => createPlaceholder(match, 'function'));
        
        // 7. Keywords
        code = code.replace(patterns.keyword, match => createPlaceholder(match, 'keyword'));
        
        // 8. Important
        code = code.replace(patterns.important, match => createPlaceholder(match, 'important'));
        
        // 9. Properties (in property: value context)
        const lines = code.split('\n');
        code = lines.map(line => {
            // Check if line contains property: value pattern
            if (line.includes(':') && !line.trim().startsWith('//') && !line.includes('__PLACEHOLDER_')) {
                const colonIndex = line.indexOf(':');
                const beforeColon = line.substring(0, colonIndex);
                const afterColon = line.substring(colonIndex);
                
                // Find the property name
                const propertyMatch = beforeColon.match(/[\w-]+$/);
                if (propertyMatch) {
                    const property = propertyMatch[0];
                    const beforeProperty = beforeColon.substring(0, propertyMatch.index);
                    line = beforeProperty + createPlaceholder(property, 'property') + afterColon;
                }
            }
            return line;
        }).join('\n');
        
        // 10. Selectors (complex pattern, do last)
        code = code.replace(/^([^{]*?)({)/gm, (match, selector, brace) => {
            // Don't highlight if it's a placeholder
            if (selector.includes('__PLACEHOLDER_')) return match;
            
            // Clean selector and highlight
            const highlightedSelector = selector
                .split(',')
                .map(s => {
                    const trimmed = s.trim();
                    if (!trimmed) return s;
                    
                    // Check for pseudo-classes and pseudo-elements
                    const parts = trimmed.split(/(:+)/);
                    return parts.map((part, i) => {
                        if (i % 2 === 0 && part) {
                            // Regular selector part
                            return createPlaceholder(part, 'selector');
                        } else if (part) {
                            // Pseudo part
                            return part;
                        }
                        return '';
                    }).join('');
                })
                .join(', ');
            
            return highlightedSelector + brace;
        });
        
        // Replace placeholders with actual highlighted content
        placeholders.forEach((replacement, index) => {
            code = code.replace(`__PLACEHOLDER_${index}__`, replacement);
        });
        
        // Update the code block
        block.innerHTML = code;
        block.classList.add('highlighted');
    });
    
    // Helper function to escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Add line numbers to code blocks
    const addLineNumbers = (block) => {
        const lines = block.innerHTML.split('\n');
        const numberedLines = lines.map((line, index) => {
            return `<span class="line-number">${index + 1}</span>${line}`;
        }).join('\n');
        
        block.innerHTML = numberedLines;
        block.classList.add('line-numbers');
    };
    
    // Optionally add line numbers to larger code blocks
    codeBlocks.forEach(block => {
        const lineCount = block.textContent.split('\n').length;
        if (lineCount > 10) {
            addLineNumbers(block);
        }
    });
    
    // Add copy buttons to code examples
    addCopyButtons();
});

// Add copy-to-clipboard functionality
function addCopyButtons() {
    const codeExamples = document.querySelectorAll('.code-example');
    
    codeExamples.forEach(example => {
        // Skip if button already exists
        if (example.querySelector('.copy-button')) return;
        
        const codeBlock = example.querySelector('code');
        if (!codeBlock) return;
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Get the original code text (before highlighting)
        const getCodeText = () => {
            // Create a temporary element to strip HTML
            const temp = document.createElement('div');
            temp.innerHTML = codeBlock.innerHTML;
            
            // Remove line numbers if present
            temp.querySelectorAll('.line-number').forEach(ln => ln.remove());
            
            // Get text content
            return temp.textContent.trim();
        };
        
        copyButton.addEventListener('click', async () => {
            const codeText = getCodeText();
            
            try {
                // Use modern clipboard API if available
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(codeText);
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = codeText;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                }
                
                // Show success feedback
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy:', err);
                copyButton.textContent = 'Failed';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            }
        });
        
        // Add button to code example
        example.appendChild(copyButton);
    });
}