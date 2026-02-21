// Modal Components - ULTIMATE UNBLOCKER

class ModalManager {
    constructor() {
        this.modals = new Map();
        this.activeModal = null;
        this.init();
    }

    init() {
        // Create modal container if it doesn't exist
        if (!document.getElementById('modal-container')) {
            const container = document.createElement('div');
            container.id = 'modal-container';
            document.body.appendChild(container);
        }
    }

    create(options) {
        const {
            id,
            title,
            content,
            type = 'info',
            showClose = true,
            buttons = [],
            size = 'medium'
        } = options;

        const modalHTML = `
            <div class="modal-overlay" id="modal-${id}">
                <div class="modal modal-${type} modal-${size}">
                    <div class="modal-header">
                        <h3 class="modal-title">${title}</h3>
                        ${showClose ? '<button class="modal-close" onclick="modalManager.close(\'' + id + '\')">&times;</button>' : ''}
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    ${buttons.length > 0 ? `
                        <div class="modal-footer">
                            ${buttons.map(btn => `
                                <button class="btn btn-${btn.type || 'secondary'}" onclick="${btn.onclick || ''}">
                                    ${btn.text}
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        const container = document.getElementById('modal-container');
        container.insertAdjacentHTML('beforeend', modalHTML);

        this.modals.set(id, {
            element: document.getElementById(`modal-${id}`),
            options
        });

        return id;
    }

    show(id) {
        const modal = this.modals.get(id);
        if (!modal) {
            console.error(`Modal with id "${id}" not found`);
            return;
        }

        // Close any existing modal
        if (this.activeModal) {
            this.close(this.activeModal);
        }

        modal.element.classList.add('active');
        this.activeModal = id;
        document.body.style.overflow = 'hidden';

        // Add escape key listener
        document.addEventListener('keydown', this.handleEscape);
    }

    close(id) {
        const modal = this.modals.get(id);
        if (!modal) return;

        modal.element.classList.remove('active');
        
        if (this.activeModal === id) {
            this.activeModal = null;
            document.body.style.overflow = '';
            document.removeEventListener('keydown', this.handleEscape);
        }
    }

    closeAll() {
        this.modals.forEach((modal, id) => {
            this.close(id);
        });
    }

    destroy(id) {
        const modal = this.modals.get(id);
        if (!modal) return;

        this.close(id);
        modal.element.remove();
        this.modals.delete(id);
    }

    handleEscape = (e) => {
        if (e.key === 'Escape' && this.activeModal) {
            this.close(this.activeModal);
        }
    };

    // Predefined modals
    showWarning(title, message, onConfirm = null) {
        return this.create({
            id: 'warning-' + Date.now(),
            title,
            content: `<p>${message}</p>`,
            type: 'warning',
            buttons: [
                {
                    text: 'Cancel',
                    type: 'secondary',
                    onclick: 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                },
                {
                    text: 'Continue',
                    type: 'primary',
                    onclick: onConfirm || 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                }
            ]
        });
    }

    showSuccess(title, message) {
        return this.create({
            id: 'success-' + Date.now(),
            title,
            content: `<p>${message}</p>`,
            type: 'success',
            buttons: [
                {
                    text: 'OK',
                    type: 'primary',
                    onclick: 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                }
            ]
        });
    }

    showError(title, message) {
        return this.create({
            id: 'error-' + Date.now(),
            title,
            content: `<p>${message}</p>`,
            type: 'error',
            buttons: [
                {
                    text: 'Close',
                    type: 'primary',
                    onclick: 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                }
            ]
        });
    }

    showInfo(title, message) {
        return this.create({
            id: 'info-' + Date.now(),
            title,
            content: `<p>${message}</p>`,
            type: 'info',
            buttons: [
                {
                    text: 'OK',
                    type: 'primary',
                    onclick: 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                }
            ]
        });
    }

    confirm(title, message, onConfirm, onCancel = null) {
        return this.create({
            id: 'confirm-' + Date.now(),
            title,
            content: `<p>${message}</p>`,
            type: 'warning',
            buttons: [
                {
                    text: 'Cancel',
                    type: 'secondary',
                    onclick: onCancel || 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                },
                {
                    text: 'Confirm',
                    type: 'primary',
                    onclick: onConfirm || 'modalManager.close(this.closest(".modal-overlay").id.replace("modal-", ""))'
                }
            ]
        });
    }
}

// Create global instance
const modalManager = new ModalManager();

// Export for global access
window.modalManager = modalManager;
window.ModalManager = ModalManager;
