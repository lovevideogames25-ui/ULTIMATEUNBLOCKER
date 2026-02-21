// Form Components - ULTIMATE UNBLOCKER

class FormManager {
    constructor() {
        this.forms = new Map();
        this.validators = new Map();
        this.init();
    }

    init() {
        this.setupGlobalValidation();
        this.setupAutoValidation();
    }

    // Form creation
    create(container, options) {
        const {
            id,
            fields = [],
            onSubmit = null,
            submitText = 'Submit',
            resetText = 'Reset',
            showReset = true,
            method = 'POST',
            action = '#'
        } = options;

        const formHTML = `
            <form class="form" id="${id}" method="${method}" action="${action}">
                ${fields.map(field => this.createField(field)).join('')}
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">${submitText}</button>
                    ${showReset ? `<button type="button" class="btn btn-secondary" onclick="formManager.resetForm('${id}')">${resetText}</button>` : ''}
                </div>
            </form>
        `;

        container.innerHTML = formHTML;
        const form = container.querySelector('form');
        
        this.setupForm(form, onSubmit);
        this.forms.set(id, form);
        
        return form;
    }

    createField(field) {
        const {
            type = 'text',
            name,
            label,
            placeholder = '',
            required = false,
            options = [],
            validation = {},
            help = '',
            value = ''
        } = field;

        let fieldHTML = `
            <div class="form-group">
                <label class="form-label${required ? ' required' : ''}" for="${name}">${label}</label>
        `;

        switch (type) {
            case 'textarea':
                fieldHTML += `
                    <textarea class="form-textarea" id="${name}" name="${name}" 
                              placeholder="${placeholder}" ${required ? 'required' : ''}>${value}</textarea>
                `;
                break;
            
            case 'select':
                fieldHTML += `
                    <select class="form-select" id="${name}" name="${name}" ${required ? 'required' : ''}>
                        <option value="">Select an option</option>
                        ${options.map(opt => `<option value="${opt.value}" ${opt.value === value ? 'selected' : ''}>${opt.label}</option>`).join('')}
                    </select>
                `;
                break;
            
            case 'checkbox':
                fieldHTML += `
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="${name}" name="${name}" 
                               ${required ? 'required' : ''} ${value ? 'checked' : ''}>
                        <label class="form-check-label" for="${name}">${label}</label>
                    </div>
                `;
                break;
            
            case 'radio':
                fieldHTML += `
                    <div class="form-group">
                        ${options.map(opt => `
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="${name}_${opt.value}" 
                                       name="${name}" value="${opt.value}" ${opt.value === value ? 'checked' : ''} ${required ? 'required' : ''}>
                                <label class="form-check-label" for="${name}_${opt.value}">${opt.label}</label>
                            </div>
                        `).join('')}
                    </div>
                `;
                break;
            
            default:
                fieldHTML += `
                    <input type="${type}" class="form-input" id="${name}" name="${name}" 
                           placeholder="${placeholder}" ${required ? 'required' : ''} value="${value}">
                `;
        }

        if (help) {
            fieldHTML += `<div class="form-help">${help}</div>`;
        }

        fieldHTML += '</div>';
        return fieldHTML;
    }

    // Form setup
    setupForm(form, onSubmit) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm(form)) {
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                
                if (onSubmit) {
                    onSubmit(data, form);
                } else {
                    this.handleDefaultSubmit(data, form);
                }
            }
        });

        // Add real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    // Validation
    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.required;
        let isValid = true;
        let errorMessage = '';

        // Required validation
        if (required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Type-specific validation
        if (value && isValid) {
            switch (type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                
                case 'url':
                    try {
                        new URL(value);
                    } catch {
                        isValid = false;
                        errorMessage = 'Please enter a valid URL';
                    }
                    break;
                
                case 'tel':
                    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                    if (!phoneRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid phone number';
                    }
                    break;
            }
        }

        // Custom validation
        const customValidator = this.validators.get(field.name);
        if (customValidator && value) {
            const customResult = customValidator(value);
            if (!customResult.valid) {
                isValid = false;
                errorMessage = customResult.message;
            }
        }

        this.setFieldStatus(field, isValid, errorMessage);
        return isValid;
    }

    setFieldStatus(field, isValid, errorMessage = '') {
        // Remove existing states
        field.classList.remove('error', 'success');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }

        if (isValid) {
            field.classList.add('success');
        } else {
            field.classList.add('error');
            if (errorMessage) {
                const errorElement = document.createElement('div');
                errorElement.className = 'form-error';
                errorElement.textContent = errorMessage;
                field.parentNode.appendChild(errorElement);
            }
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    // Custom validators
    addValidator(fieldName, validator) {
        this.validators.set(fieldName, validator);
    }

    // Form utilities
    resetForm(formId) {
        const form = this.forms.get(formId);
        if (form) {
            form.reset();
            // Clear all validation states
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
                this.clearFieldError(input);
            });
        }
    }

    fillForm(formId, data) {
        const form = this.forms.get(formId);
        if (form) {
            Object.keys(data).forEach(key => {
                const field = form.querySelector(`[name="${key}"]`);
                if (field) {
                    if (field.type === 'checkbox') {
                        field.checked = data[key];
                    } else {
                        field.value = data[key];
                    }
                }
            });
        }
    }

    getFormData(formId) {
        const form = this.forms.get(formId);
        if (form) {
            const formData = new FormData(form);
            return Object.fromEntries(formData.entries());
        }
        return null;
    }

    // Loading states
    setFormLoading(formId, loading = true) {
        const form = this.forms.get(formId);
        if (form) {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = loading;
                submitButton.innerHTML = loading ? 
                    '<span class="spinner"></span> Processing...' : 
                    submitButton.dataset.originalText || 'Submit';
                
                if (loading && !submitButton.dataset.originalText) {
                    submitButton.dataset.originalText = submitButton.textContent;
                }
            }
            
            form.classList.toggle('form-loading', loading);
        }
    }

    // Default submit handler
    handleDefaultSubmit(data, form) {
        console.log('Form submitted:', data);
        // Show success message
        if (window.modalManager) {
            modalManager.showSuccess('Success!', 'Form submitted successfully.');
        }
    }

    // Global setup
    setupGlobalValidation() {
        // Add custom validators
        this.addValidator('password', (value) => {
            if (value.length < 8) {
                return { valid: false, message: 'Password must be at least 8 characters' };
            }
            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
                return { valid: false, message: 'Password must contain uppercase, lowercase, and numbers' };
            }
            return { valid: true };
        });

        this.addValidator('confirm-password', (value) => {
            const password = document.querySelector('input[name="password"]')?.value;
            if (password && value !== password) {
                return { valid: false, message: 'Passwords do not match' };
            }
            return { valid: true };
        });
    }

    setupAutoValidation() {
        // Auto-initialize forms with data-form attributes
        document.addEventListener('DOMContentLoaded', () => {
            const formElements = document.querySelectorAll('[data-form]');
            formElements.forEach(element => {
                const config = JSON.parse(element.dataset.form);
                this.create(element, config);
            });
        });
    }
}

// Create global instance
const formManager = new FormManager();

// Export for global access
window.formManager = formManager;
window.FormManager = FormManager;
