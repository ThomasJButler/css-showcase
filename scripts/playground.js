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
            },
            'typewriter': {
                html: `<div class="typewriter-container">
  <h1 class="typewriter">Hello, CSS World!</h1>
</div>`,
                css: `.typewriter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1f2937;
}

.typewriter {
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  color: #10b981;
  border-right: 3px solid #10b981;
  width: 19ch;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(19, end), blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 19ch;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}`
            },
            'nesting': {
                html: `<article class="post">
  <header>
    <h2>CSS Nesting is Here!</h2>
    <p class="meta">Published today</p>
  </header>
  <div class="content">
    <p>Native CSS nesting allows you to nest selectors, just like in Sass!</p>
    <button class="read-more">Read More</button>
  </div>
</article>`,
                css: `/* Modern CSS Nesting - No preprocessor needed! */
.post {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  & header {
    margin-bottom: 1.5rem;

    & h2 {
      font-size: 1.75rem;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    & .meta {
      color: #6b7280;
      font-size: 0.875rem;
    }
  }

  & .content {
    & p {
      line-height: 1.6;
      color: #4b5563;
      margin-bottom: 1.5rem;
    }

    & .read-more {
      background: #667eea;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #5568d3;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
      }
    }
  }
}`
            },
            'scroll-animation': {
                html: `<div class="scroll-container">
  <div class="scroll-message">⬇️ Scroll down to see the magic! ⬇️</div>
  <div class="scroll-box box-1">Box 1</div>
  <div class="scroll-box box-2">Box 2</div>
  <div class="scroll-box box-3">Box 3</div>
  <div class="scroll-box box-4">Box 4</div>
  <div class="scroll-message">⬆️ Scroll up to reverse! ⬆️</div>
</div>`,
                css: `.scroll-container {
  padding: 2rem;
  overflow-y: scroll;
  height: 100vh;
}

.scroll-message {
  text-align: center;
  padding: 3rem;
  font-size: 1.5rem;
  color: #6b7280;
  font-weight: 600;
}

.scroll-box {
  width: 200px;
  height: 200px;
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border-radius: 1rem;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeIn linear forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}

.box-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
.box-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
.box-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
.box-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Note: Scroll-driven animations may need browser support */`
            },
            'holy-grail': {
                html: `<div class="holy-grail">
  <header class="hg-header">Header</header>
  <nav class="hg-nav">Navigation</nav>
  <main class="hg-main">
    <h1>Holy Grail Layout</h1>
    <p>Classic 3-column layout with header and footer, using modern CSS Grid!</p>
  </main>
  <aside class="hg-aside">Sidebar</aside>
  <footer class="hg-footer">Footer</footer>
</div>`,
                css: `.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  height: 100vh;
  padding: 1rem;
}

.hg-header {
  grid-area: header;
  background: #667eea;
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.hg-nav {
  grid-area: nav;
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
}

.hg-main {
  grid-area: main;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hg-aside {
  grid-area: aside;
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
}

.hg-footer {
  grid-area: footer;
  background: #374151;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}`
            },
            'masonry': {
                html: `<div class="masonry">
  <div class="masonry-item tall">Item 1</div>
  <div class="masonry-item">Item 2</div>
  <div class="masonry-item medium">Item 3</div>
  <div class="masonry-item">Item 4</div>
  <div class="masonry-item tall">Item 5</div>
  <div class="masonry-item medium">Item 6</div>
  <div class="masonry-item">Item 7</div>
  <div class="masonry-item tall">Item 8</div>
</div>`,
                css: `.masonry {
  column-count: 3;
  column-gap: 1rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.masonry-item:hover {
  transform: scale(1.05);
}

.masonry-item {
  height: 150px;
}

.masonry-item.medium {
  height: 200px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.masonry-item.tall {
  height: 300px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

@media (max-width: 768px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .masonry {
    column-count: 1;
  }
}`
            },
            'magazine': {
                html: `<div class="magazine">
  <article class="feature">
    <h1>Featured Article</h1>
    <p>This is the main story with a large prominent layout.</p>
  </article>
  <article class="story">
    <h2>Story 1</h2>
    <p>Secondary story content.</p>
  </article>
  <article class="story">
    <h2>Story 2</h2>
    <p>More interesting content.</p>
  </article>
  <aside class="sidebar">
    <h3>Quick Links</h3>
    <p>Additional information</p>
  </aside>
  <article class="story wide">
    <h2>Wide Story</h2>
    <p>This story spans multiple columns for emphasis.</p>
  </article>
</div>`,
                css: `.magazine {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature {
  grid-column: span 2;
  grid-row: span 2;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.feature h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.story {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.story.wide {
  grid-column: span 2;
  background: #f3f4f6;
}

.story h2 {
  color: #1f2937;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
}

.sidebar {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 2px dashed #f59e0b;
}

.sidebar h3 {
  color: #92400e;
  margin-bottom: 0.75rem;
}

@media (max-width: 768px) {
  .magazine {
    grid-template-columns: 1fr;
  }

  .feature,
  .story.wide {
    grid-column: span 1;
  }
}`
            },
            'glassmorphism': {
                html: `<div class="glass-background">
  <div class="glass-card">
    <h2>Glassmorphism</h2>
    <p>A modern design trend using frosted glass effects with backdrop filters.</p>
    <button class="glass-btn">Learn More</button>
  </div>
</div>`,
                css: `.glass-background {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.glass-background::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 20%;
  left: 20%;
  filter: blur(60px);
}

.glass-background::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  bottom: 20%;
  right: 20%;
  filter: blur(80px);
}

.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  color: white;
  position: relative;
  z-index: 1;
}

.glass-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.glass-card p {
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.glass-btn {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}`
            },
            'neumorphism': {
                html: `<div class="neu-container">
  <div class="neu-card">
    <h2 class="neu-title">Neumorphism</h2>
    <p class="neu-text">Soft UI design with subtle shadows creating a extruded effect.</p>
    <button class="neu-button">Press Me</button>
  </div>
</div>`,
                css: `.neu-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e5ec;
  padding: 2rem;
}

.neu-card {
  background: #e0e5ec;
  border-radius: 2rem;
  padding: 3rem;
  max-width: 400px;
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.neu-title {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 1px 1px 2px #ffffff;
}

.neu-text {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.neu-button {
  background: #e0e5ec;
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: #667eea;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow:
    5px 5px 10px #bebebe,
    -5px -5px 10px #ffffff;
  transition: all 0.3s ease;
}

.neu-button:hover {
  box-shadow:
    3px 3px 6px #bebebe,
    -3px -3px 6px #ffffff;
}

.neu-button:active {
  box-shadow:
    inset 5px 5px 10px #bebebe,
    inset -5px -5px 10px #ffffff;
}`
            },
            'gradient-text': {
                html: `<div class="gradient-showcase">
  <h1 class="gradient-text-1">Gradient Text</h1>
  <h2 class="gradient-text-2">Multiple Styles</h2>
  <p class="gradient-text-3">Beautiful colour gradients applied to text using background-clip!</p>
  <div class="gradient-text-4">Animated Gradient</div>
</div>`,
                css: `.gradient-showcase {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #1f2937;
  padding: 2rem;
}

.gradient-text-1 {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-2 {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(to right, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-3 {
  font-size: 1.5rem;
  max-width: 600px;
  text-align: center;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-4 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(
    90deg,
    #ff0080,
    #ff8c00,
    #40e0d0,
    #ff0080
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}`
            },
            '3d-card': {
                html: `<div class="card-scene">
  <div class="card-3d">
    <div class="card-face card-front">
      <h2>Flip Me!</h2>
      <p>Hover to see the back</p>
    </div>
    <div class="card-face card-back">
      <h2>Surprise! 🎉</h2>
      <p>3D CSS transforms are amazing!</p>
    </div>
  </div>
</div>`,
                css: `.card-scene {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  perspective: 1000px;
}

.card-3d {
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
  cursor: pointer;
}

.card-3d:hover {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.card-front {
  background: white;
  color: #1f2937;
}

.card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
}

.card-face h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.card-face p {
  text-align: center;
  line-height: 1.6;
  font-size: 1.125rem;
}`
            },
            'rainbow': {
                html: `<div class="rainbow-scene">
  <div class="rainbow">
    <div class="rainbow-band band-1"></div>
    <div class="rainbow-band band-2"></div>
    <div class="rainbow-band band-3"></div>
    <div class="rainbow-band band-4"></div>
    <div class="rainbow-band band-5"></div>
    <div class="rainbow-band band-6"></div>
    <div class="rainbow-band band-7"></div>
  </div>
  <div class="clouds">
    <div class="cloud cloud-1">☁️</div>
    <div class="cloud cloud-2">☁️</div>
  </div>
  <h1 class="rainbow-text">Pure CSS Rainbow! 🌈</h1>
</div>`,
                css: `.rainbow-scene {
  height: 100vh;
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.rainbow {
  position: relative;
  width: 400px;
  height: 200px;
  margin-bottom: 3rem;
}

.rainbow-band {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 200px 200px 0 0;
  border: 20px solid;
  border-bottom: none;
  opacity: 0.8;
}

.band-1 { border-color: #ff0000; transform: scale(1); }
.band-2 { border-color: #ff7f00; transform: scale(0.85); }
.band-3 { border-color: #ffff00; transform: scale(0.70); }
.band-4 { border-color: #00ff00; transform: scale(0.55); }
.band-5 { border-color: #0000ff; transform: scale(0.40); }
.band-6 { border-color: #4b0082; transform: scale(0.25); }
.band-7 { border-color: #9400d3; transform: scale(0.10); }

.clouds {
  position: absolute;
  width: 100%;
  height: 100%;
}

.cloud {
  position: absolute;
  font-size: 4rem;
  animation: float 20s ease-in-out infinite;
}

.cloud-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.cloud-2 {
  top: 60%;
  right: 15%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(20px);
  }
}

.rainbow-text {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(
    to right,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #9400d3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  animation: rainbow-pulse 2s ease-in-out infinite;
}

@keyframes rainbow-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
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