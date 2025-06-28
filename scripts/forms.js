// Forms Interactive JavaScript
// Author: Thomas Butler

document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '👁️‍🗨️';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    });

    // Auto-expanding textareas
    const autoExpandTextareas = document.querySelectorAll('.auto-expand');
    autoExpandTextareas.forEach(textarea => {
        const adjustHeight = () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        };
        
        textarea.addEventListener('input', adjustHeight);
        adjustHeight(); // Initial adjustment
    });

    // Character count
    const textareasWithCount = document.querySelectorAll('textarea[maxlength]');
    textareasWithCount.forEach(textarea => {
        const charCount = textarea.parentElement.querySelector('.char-count');
        if (charCount) {
            const updateCount = () => {
                const current = textarea.value.length;
                const max = textarea.getAttribute('maxlength');
                charCount.textContent = `${current}/${max}`;
                
                if (current > max * 0.8) {
                    charCount.style.color = 'var(--colour-warning)';
                } else {
                    charCount.style.color = 'var(--colour-text-muted)';
                }
            };
            
            textarea.addEventListener('input', updateCount);
            updateCount(); // Initial count
        }
    });

    // Range slider value display
    const rangeInputs = document.querySelectorAll('.form-range');
    rangeInputs.forEach(range => {
        const valueDisplay = range.parentElement.querySelector('.range-value');
        if (valueDisplay) {
            range.addEventListener('input', function() {
                valueDisplay.textContent = this.value;
                
                // Update gradient background for custom range
                if (range.classList.contains('range-custom')) {
                    const percent = (this.value / this.max) * 100;
                    range.style.background = `linear-gradient(to right, var(--colour-primary) ${percent}%, var(--colour-border) ${percent}%)`;
                }
            });
            
            // Initial update
            if (range.classList.contains('range-custom')) {
                const percent = (range.value / range.max) * 100;
                range.style.background = `linear-gradient(to right, var(--colour-primary) ${percent}%, var(--colour-border) ${percent}%)`;
            }
        }
    });

    // File upload
    const fileInputs = document.querySelectorAll('.form-file');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileUpload = this.closest('.file-upload');
            const fileName = fileUpload.querySelector('.file-name');
            const fileText = fileUpload.querySelector('.file-text');
            
            if (this.files.length > 0) {
                if (this.files.length === 1) {
                    if (fileName) fileName.textContent = this.files[0].name;
                    if (fileText) fileText.textContent = this.files[0].name;
                } else {
                    const text = `${this.files.length} files selected`;
                    if (fileName) fileName.textContent = text;
                    if (fileText) fileText.textContent = text;
                }
            } else {
                if (fileName) fileName.textContent = 'No file chosen';
                if (fileText) fileText.textContent = 'Choose File';
            }
        });
    });

    // Drag and drop for file upload
    const fileDropAreas = document.querySelectorAll('.file-drop');
    fileDropAreas.forEach(dropArea => {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => {
                dropArea.classList.add('drag-over');
            });
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => {
                dropArea.classList.remove('drag-over');
            });
        });
        
        dropArea.addEventListener('drop', function(e) {
            const fileInput = this.querySelector('.form-file');
            fileInput.files = e.dataTransfer.files;
            
            // Trigger change event
            const event = new Event('change', { bubbles: true });
            fileInput.dispatchEvent(event);
        });
    });

    // Password strength checker
    const passwordInputs = document.querySelectorAll('input[type="password"]#val-password, input[type="password"]#signup-password');
    passwordInputs.forEach(input => {
        const strengthBar = input.parentElement.querySelector('.strength-bar');
        const requirements = input.parentElement.parentElement.querySelector('.password-requirements');
        
        if (strengthBar || requirements) {
            input.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                
                const checks = {
                    length: password.length >= 8,
                    uppercase: /[A-Z]/.test(password),
                    lowercase: /[a-z]/.test(password),
                    number: /[0-9]/.test(password),
                    special: /[^A-Za-z0-9]/.test(password)
                };
                
                // Update requirements display
                if (requirements) {
                    Object.keys(checks).forEach(key => {
                        const req = requirements.querySelector(`[data-req="${key}"]`);
                        if (req) {
                            if (checks[key]) {
                                req.classList.add('met');
                            } else {
                                req.classList.remove('met');
                            }
                        }
                    });
                }
                
                // Calculate strength
                strength = Object.values(checks).filter(Boolean).length;
                
                // Update strength bar
                if (strengthBar) {
                    strengthBar.classList.remove('weak', 'medium', 'strong');
                    if (strength <= 2) {
                        strengthBar.classList.add('weak');
                    } else if (strength <= 3) {
                        strengthBar.classList.add('medium');
                    } else {
                        strengthBar.classList.add('strong');
                    }
                }
            });
        }
    });

    // Password confirmation
    const confirmPassword = document.querySelector('#val-confirm');
    if (confirmPassword) {
        const originalPassword = document.querySelector('#val-password');
        if (originalPassword) {
            const checkMatch = () => {
                const formGroup = confirmPassword.parentElement;
                const message = formGroup.querySelector('.form-message');
                
                if (confirmPassword.value && originalPassword.value) {
                    if (confirmPassword.value === originalPassword.value) {
                        formGroup.classList.remove('error');
                        formGroup.classList.add('success');
                        if (message) message.textContent = '✓ Passwords match';
                    } else {
                        formGroup.classList.remove('success');
                        formGroup.classList.add('error');
                        if (message) message.textContent = '✗ Passwords do not match';
                    }
                } else {
                    formGroup.classList.remove('success', 'error');
                    if (message) message.textContent = '';
                }
            };
            
            confirmPassword.addEventListener('input', checkMatch);
            originalPassword.addEventListener('input', checkMatch);
        }
    }

    // Form validation messages
    const validationInputs = document.querySelectorAll('.validation-form input[required]');
    validationInputs.forEach(input => {
        const formGroup = input.parentElement;
        const message = formGroup.querySelector('.form-message');
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                formGroup.classList.add('error');
                formGroup.classList.remove('success');
                if (message) {
                    message.textContent = '✗ This field is required';
                    message.style.display = 'block';
                }
            } else if (this.validity.valid) {
                formGroup.classList.add('success');
                formGroup.classList.remove('error');
                if (message) {
                    message.textContent = '✓ Looking good!';
                    message.style.display = 'block';
                }
            } else {
                formGroup.classList.add('error');
                formGroup.classList.remove('success');
                if (message) {
                    if (this.type === 'email') {
                        message.textContent = '✗ Please enter a valid email';
                    } else if (this.pattern) {
                        message.textContent = '✗ Please match the required format';
                    } else {
                        message.textContent = '✗ Please check this field';
                    }
                    message.style.display = 'block';
                }
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value && this.validity.valid) {
                formGroup.classList.add('success');
                formGroup.classList.remove('error');
                if (message) {
                    message.textContent = '✓ Looking good!';
                    message.style.display = 'block';
                }
            }
        });
    });

    // Prevent form submission for demo
    const demoForms = document.querySelectorAll('.demo-form');
    demoForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show a temporary success message
            const button = this.querySelector('button[type="submit"]');
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Success! (Demo only)';
                button.style.background = 'var(--colour-success)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            }
        });
    });
});