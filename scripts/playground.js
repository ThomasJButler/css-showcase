// CSS Playground JavaScript
// Author: Thomas Butler

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const htmlInput = document.getElementById('htmlInput');
    const cssInput = document.getElementById('cssInput');
    const preview = document.getElementById('preview');
    const exampleSelect = document.getElementById('exampleSelect');
    const resetBtn = document.getElementById('resetBtn');
    const shareBtn = document.getElementById('shareBtn');
    const saveBtn = document.getElementById('saveBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const formatHtmlBtn = document.getElementById('formatHtmlBtn');
    const formatCssBtn = document.getElementById('formatCssBtn');
    const copyHtmlBtn = document.getElementById('copyHtmlBtn');
    const copyCssBtn = document.getElementById('copyCssBtn');
    const previewSizes = document.querySelectorAll('.preview-size');
    const viewBtns = document.querySelectorAll('.view-btn');

    // Default content
    const defaultHTML = htmlInput.value;
    const defaultCSS = cssInput.value;

    // Start in fullscreen preview mode
    document.body.classList.add('fullscreen-preview');

    // View switcher functionality
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });

    /**
     * Switches between different view modes with toggle behavior
     * @param {string} view - View mode: 'preview', 'html', or 'css'
     */
    function switchView(view) {
        if (view === 'preview') {
            // Preview button removes all editors and shows fullscreen preview
            document.body.classList.remove('show-html-editor', 'show-css-editor');
            document.body.classList.add('fullscreen-preview');
            updateActiveButtons();
        } else if (view === 'html') {
            // Toggle HTML editor
            document.body.classList.toggle('show-html-editor');
            if (!document.body.classList.contains('show-html-editor') && !document.body.classList.contains('show-css-editor')) {
                document.body.classList.add('fullscreen-preview');
            } else {
                document.body.classList.add('fullscreen-preview');
            }
            applyEditorWidths();
            updateActiveButtons();
        } else if (view === 'css') {
            // Toggle CSS editor
            document.body.classList.toggle('show-css-editor');
            if (!document.body.classList.contains('show-html-editor') && !document.body.classList.contains('show-css-editor')) {
                document.body.classList.add('fullscreen-preview');
            } else {
                document.body.classList.add('fullscreen-preview');
            }
            applyEditorWidths();
            updateActiveButtons();
        }

        // Save editor states to localStorage
        saveEditorStates();
    }

    /**
     * Updates active button states based on visible editors
     */
    function updateActiveButtons() {
        viewBtns.forEach(btn => {
            const view = btn.dataset.view;
            if (view === 'preview') {
                // Preview is always "active" in the sense that it's always visible
                btn.classList.toggle('active',
                    !document.body.classList.contains('show-html-editor') &&
                    !document.body.classList.contains('show-css-editor'));
            } else if (view === 'html') {
                btn.classList.toggle('active', document.body.classList.contains('show-html-editor'));
            } else if (view === 'css') {
                btn.classList.toggle('active', document.body.classList.contains('show-css-editor'));
            }
        });
    }

    // Dual resize functionality
    const resizeHandleLeft = document.querySelector('.resize-handle-left');
    const resizeHandleRight = document.querySelector('.resize-handle-right');
    let isResizingLeft = false;
    let isResizingRight = false;
    let startX = 0;
    let startWidth = 0;

    /**
     * Applies saved editor widths from localStorage
     */
    function applyEditorWidths() {
        const savedLeftWidth = localStorage.getItem('playground_left_editor_width');
        const savedRightWidth = localStorage.getItem('playground_right_editor_width');

        if (savedLeftWidth) {
            document.documentElement.style.setProperty('--left-editor-width', savedLeftWidth);
        }
        if (savedRightWidth) {
            document.documentElement.style.setProperty('--right-editor-width', savedRightWidth);
        }
    }

    /**
     * Saves editor visibility states to localStorage
     */
    function saveEditorStates() {
        localStorage.setItem('playground_show_html', document.body.classList.contains('show-html-editor'));
        localStorage.setItem('playground_show_css', document.body.classList.contains('show-css-editor'));
    }

    /**
     * Loads editor visibility states from localStorage
     */
    function loadEditorStates() {
        const showHtml = localStorage.getItem('playground_show_html') === 'true';
        const showCss = localStorage.getItem('playground_show_css') === 'true';

        if (showHtml) {
            document.body.classList.add('show-html-editor');
        }
        if (showCss) {
            document.body.classList.add('show-css-editor');
        }

        applyEditorWidths();
        updateActiveButtons();
    }

    /**
     * Handles left resize drag start
     * @param {MouseEvent} e - Mouse event
     */
    function startResizeLeft(e) {
        isResizingLeft = true;
        startX = e.clientX;
        startWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--left-editor-width')) || 33.33;

        resizeHandleLeft.classList.add('dragging');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        e.preventDefault();
    }

    /**
     * Handles right resize drag start
     * @param {MouseEvent} e - Mouse event
     */
    function startResizeRight(e) {
        isResizingRight = true;
        startX = e.clientX;
        startWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--right-editor-width')) || 33.33;

        resizeHandleRight.classList.add('dragging');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        e.preventDefault();
    }

    /**
     * Handles resize dragging
     * @param {MouseEvent} e - Mouse event
     */
    function resize(e) {
        if (isResizingLeft) {
            const deltaX = e.clientX - startX;
            const deltaPercent = (deltaX / window.innerWidth) * 100;
            let newWidth = startWidth + deltaPercent;

            // Constrain between 20% and 80%
            newWidth = Math.max(20, Math.min(80, newWidth));

            document.documentElement.style.setProperty('--left-editor-width', newWidth + '%');
            e.preventDefault();
        } else if (isResizingRight) {
            const deltaX = startX - e.clientX;
            const deltaPercent = (deltaX / window.innerWidth) * 100;
            let newWidth = startWidth + deltaPercent;

            // Constrain between 20% and 80%
            newWidth = Math.max(20, Math.min(80, newWidth));

            document.documentElement.style.setProperty('--right-editor-width', newWidth + '%');
            e.preventDefault();
        }
    }

    /**
     * Handles resize drag end
     */
    function stopResize() {
        if (isResizingLeft) {
            isResizingLeft = false;
            resizeHandleLeft.classList.remove('dragging');

            const currentWidth = getComputedStyle(document.documentElement).getPropertyValue('--left-editor-width');
            localStorage.setItem('playground_left_editor_width', currentWidth);
        }

        if (isResizingRight) {
            isResizingRight = false;
            resizeHandleRight.classList.remove('dragging');

            const currentWidth = getComputedStyle(document.documentElement).getPropertyValue('--right-editor-width');
            localStorage.setItem('playground_right_editor_width', currentWidth);
        }

        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    }

    // Resize event listeners
    if (resizeHandleLeft) {
        resizeHandleLeft.addEventListener('mousedown', startResizeLeft);
    }
    if (resizeHandleRight) {
        resizeHandleRight.addEventListener('mousedown', startResizeRight);
    }
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);

    // Load saved editor states on startup
    loadEditorStates();

    // Load saved content
    loadSavedContent();

    // Update preview on load
    updatePreview();

    // Live preview updates
    let updateTimeout;
    htmlInput.addEventListener('input', () => {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(updatePreview, 300);
        saveToLocal();
    });
    
    cssInput.addEventListener('input', () => {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(updatePreview, 300);
        saveToLocal();
    });
    
    // Preview size controls
    previewSizes.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.dataset.size;
            previewSizes.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            preview.classList.remove('tablet', 'mobile');
            if (size !== 'desktop') {
                preview.classList.add(size);
            }
        });
    });
    
    // Example selection
    exampleSelect.addEventListener('change', () => {
        const example = exampleSelect.value;
        if (example) {
            loadExample(example);
        }
    });
    
    // Control buttons
    resetBtn.addEventListener('click', () => {
        if (confirm('Reset to default content? Your current work will be lost.')) {
            htmlInput.value = defaultHTML;
            cssInput.value = defaultCSS;
            updatePreview();
            clearSavedContent();
        }
    });
    
    shareBtn.addEventListener('click', sharePlayground);
    saveBtn.addEventListener('click', downloadCode);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Format and copy buttons for HTML
    if (formatHtmlBtn) formatHtmlBtn.addEventListener('click', () => formatCode('html'));
    if (copyHtmlBtn) copyHtmlBtn.addEventListener('click', () => copyCode('html'));

    // Format and copy buttons for CSS
    if (formatCssBtn) formatCssBtn.addEventListener('click', () => formatCode('css'));
    if (copyCssBtn) copyCssBtn.addEventListener('click', () => copyCode('css'));
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 's':
                    e.preventDefault();
                    downloadCode();
                    break;
                case 'Enter':
                    e.preventDefault();
                    updatePreview();
                    break;
            }
        }
    });
    
    // Tab key handling in editors
    [htmlInput, cssInput].forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = input.selectionStart;
                const end = input.selectionEnd;
                const value = input.value;
                
                input.value = value.substring(0, start) + '  ' + value.substring(end);
                input.selectionStart = input.selectionEnd = start + 2;
            }
        });
    });
    
    // Functions
    function updatePreview() {
        const html = htmlInput.value;
        const css = cssInput.value;
        
        const previewContent = `
            <!DOCTYPE html>
            <html lang="en-GB">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                        line-height: 1.5;
                        color: #1f2937;
                        background: #ffffff;
                    }
                    ${css}
                </style>
            </head>
            <body>
                ${html}
            </body>
            </html>
        `;
        
        preview.srcdoc = previewContent;
    }
    
    function loadExample(exampleName) {
        const examples = {
            'bounce': {
                html: `<div class="bouncing-ball"></div>`,
                css: `.bouncing-ball {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  position: relative;
  margin: 100px auto;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-200px);
  }
}`
            },
            'spinner': {
                html: `<div class="loading-spinner">
  <div class="spinner"></div>
  <p>Loading...</p>
</div>`,
                css: `.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e5e7eb;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

p {
  color: #6b7280;
  font-weight: 500;
}`
            },
            'has-selector': {
                html: `<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required>
    <span class="error">Please enter a valid email</span>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" required>
    <span class="error">Password is required</span>
  </div>
</form>`,
                css: `form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.error {
  display: none;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

/* The magic of :has() */
.form-group:has(input:invalid:not(:placeholder-shown)) .error {
  display: block;
}

.form-group:has(input:invalid:not(:placeholder-shown)) input {
  border-color: #ef4444;
}

.form-group:has(input:valid) input {
  border-color: #10b981;
}`
            },
            'container-query': {
                html: `<div class="container">
  <div class="card">
    <h2>Container Queries</h2>
    <p>Resize the preview to see this card adapt based on its container size, not the viewport!</p>
  </div>
</div>

<div class="small-container">
  <div class="card">
    <h2>Same Card</h2>
    <p>But in a smaller container - notice how it adapts!</p>
  </div>
</div>`,
                css: `.container {
  container-type: inline-size;
  width: 100%;
  padding: 2rem;
}

.small-container {
  container-type: inline-size;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Container query magic! */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .card h2 {
    font-size: 2rem;
  }
}`
            },
            'tea-animation': {
                html: `<div class="tea-container">
  <div class="cup">
    <div class="tea"></div>
    <div class="steam">
      <div class="steam-particle"></div>
      <div class="steam-particle"></div>
      <div class="steam-particle"></div>
    </div>
  </div>
  <div class="saucer"></div>
  <p class="caption">Time for a proper brew! ☕</p>
</div>`,
                css: `.tea-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f3f4f6;
}

.cup {
  width: 120px;
  height: 100px;
  background: white;
  border-radius: 0 0 40px 40px;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.cup::before {
  content: '';
  position: absolute;
  right: -30px;
  top: 20px;
  width: 30px;
  height: 40px;
  background: white;
  border-radius: 0 15px 15px 0;
}

.tea {
  position: absolute;
  inset: 10px;
  background: linear-gradient(to bottom, #8b4513 0%, #654321 100%);
  border-radius: 0 0 30px 30px;
  animation: fill 3s ease-in-out infinite;
}

@keyframes fill {
  0%, 100% { height: 70%; }
  50% { height: 80%; }
}

.steam {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.steam-particle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  filter: blur(10px);
  animation: steam 3s ease-out infinite;
}

.steam-particle:nth-child(2) {
  left: -15px;
  animation-delay: 0.5s;
}

.steam-particle:nth-child(3) {
  left: 15px;
  animation-delay: 1s;
}

@keyframes steam {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(2);
    opacity: 0;
  }
}

.saucer {
  width: 160px;
  height: 20px;
  background: white;
  border-radius: 50%;
  margin-top: -10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.caption {
  margin-top: 2rem;
  color: #6b7280;
  font-style: italic;
}`
            },
            'union-jack': {
                html: `<div class="flag">
  <div class="diagonal diagonal-1"></div>
  <div class="diagonal diagonal-2"></div>
  <div class="diagonal diagonal-3"></div>
  <div class="diagonal diagonal-4"></div>
  <div class="cross vertical"></div>
  <div class="cross horizontal"></div>
</div>
<p class="caption">God Save the King! 🇬🇧</p>`,
                css: `.flag {
  width: 300px;
  height: 200px;
  margin: 50px auto;
  position: relative;
  background: #012169;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cross {
  position: absolute;
  background: white;
}

.cross.vertical {
  width: 60px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.cross.horizontal {
  width: 100%;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
}

.cross::after {
  content: '';
  position: absolute;
  background: #C8102E;
}

.cross.vertical::after {
  width: 40px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.cross.horizontal::after {
  width: 100%;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
}

.diagonal {
  position: absolute;
  background: white;
  width: 30px;
  height: 200%;
  transform-origin: center;
}

.diagonal-1 {
  transform: rotate(30deg);
  top: -50%;
  left: -10px;
}

.diagonal-2 {
  transform: rotate(-30deg);
  top: -50%;
  right: -10px;
}

.diagonal-3 {
  transform: rotate(-30deg);
  bottom: -50%;
  left: -10px;
}

.diagonal-4 {
  transform: rotate(30deg);
  bottom: -50%;
  right: -10px;
}

.diagonal::after {
  content: '';
  position: absolute;
  background: #C8102E;
  width: 15px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.caption {
  text-align: center;
  font-size: 1.25rem;
  color: #374151;
  margin-top: 2rem;
  font-weight: 600;
}`
            }
        };
        
        const example = examples[exampleName];
        if (example) {
            htmlInput.value = example.html;
            cssInput.value = example.css;
            updatePreview();
        }
    }
    
    function saveToLocal() {
        localStorage.setItem('playground_html', htmlInput.value);
        localStorage.setItem('playground_css', cssInput.value);
    }
    
    function loadSavedContent() {
        const savedHTML = localStorage.getItem('playground_html');
        const savedCSS = localStorage.getItem('playground_css');
        
        if (savedHTML !== null) htmlInput.value = savedHTML;
        if (savedCSS !== null) cssInput.value = savedCSS;
    }
    
    function clearSavedContent() {
        localStorage.removeItem('playground_html');
        localStorage.removeItem('playground_css');
    }
    
    function downloadCode() {
        const html = htmlInput.value;
        const css = cssInput.value;
        
        const fullHTML = `<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Playground Export</title>
    <style>
${css}
    </style>
</head>
<body>
${html}
</body>
</html>`;
        
        const blob = new Blob([fullHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'css-playground-' + Date.now() + '.html';
        a.click();
        URL.revokeObjectURL(url);
        
        // Show success message
        showMessage('Code downloaded successfully!');
    }
    
    function sharePlayground() {
        const html = htmlInput.value;
        const css = cssInput.value;
        
        // Create a shareable URL (in a real app, this would save to a server)
        const shareData = {
            html: html,
            css: css
        };
        
        const encodedData = btoa(JSON.stringify(shareData));
        const shareURL = window.location.origin + window.location.pathname + '#shared=' + encodedData;
        
        // Copy to clipboard
        navigator.clipboard.writeText(shareURL).then(() => {
            showMessage('Share link copied to clipboard!');
        });
    }
    
    function toggleFullscreen() {
        document.body.classList.toggle('fullscreen');
        fullscreenBtn.innerHTML = document.body.classList.contains('fullscreen') 
            ? '<span>⊡</span> Exit' 
            : '<span>⛶</span> Fullscreen';
    }
    
    /**
     * Formats code for specified editor
     * @param {string} editorType - 'html' or 'css'
     */
    function formatCode(editorType) {
        if (editorType === 'css') {
            cssInput.value = formatCSS(cssInput.value);
        } else {
            htmlInput.value = formatHTML(htmlInput.value);
        }

        updatePreview();
        showMessage('Code formatted!');
    }
    
    function formatCSS(css) {
        // Basic CSS formatting
        return css
            .replace(/\s*{\s*/g, ' {\n  ')
            .replace(/;\s*/g, ';\n  ')
            .replace(/\s*}\s*/g, '\n}\n\n')
            .replace(/\n\s*\n/g, '\n')
            .trim();
    }
    
    function formatHTML(html) {
        // Basic HTML formatting
        let formatted = '';
        let indent = 0;
        const lines = html.split(/>\s*</);
        
        lines.forEach((line, i) => {
            if (i > 0) line = '<' + line;
            if (i < lines.length - 1) line = line + '>';
            
            if (line.match(/^<\/\w/)) indent--;
            formatted += '  '.repeat(Math.max(0, indent)) + line.trim() + '\n';
            if (line.match(/^<\w[^>]*[^\/]>.*$/) && !line.match(/<(br|img|input|meta|link)/)) indent++;
        });
        
        return formatted.trim();
    }
    
    /**
     * Copies code from specified editor to clipboard
     * @param {string} editorType - 'html' or 'css'
     */
    function copyCode(editorType) {
        const editor = editorType === 'css' ? cssInput : htmlInput;
        editor.select();
        document.execCommand('copy');
        showMessage(`${editorType.toUpperCase()} copied to clipboard!`);
    }
    
    function showMessage(text) {
        const message = document.createElement('div');
        message.className = 'toast-message';
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }
    
    // Add animations for messages
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Check for shared content in URL
    if (window.location.hash.startsWith('#shared=')) {
        try {
            const encodedData = window.location.hash.substring(8);
            const shareData = JSON.parse(atob(encodedData));
            htmlInput.value = shareData.html;
            cssInput.value = shareData.css;
            updatePreview();
            showMessage('Shared playground loaded!');
        } catch (e) {
            console.error('Failed to load shared content:', e);
        }
    }
});