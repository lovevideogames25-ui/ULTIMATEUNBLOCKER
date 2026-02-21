// Utility Components - ULTIMATE UNBLOCKER

class UtilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupTooltips();
        this.setupBadges();
        this.setupAlerts();
        this.setupProgressBars();
        this.setupLoadingStates();
    }

    // Badge Management
    createBadge(text, type = 'primary', container = null) {
        const badge = document.createElement('span');
        badge.className = `badge badge-${type}`;
        badge.textContent = text;

        if (container) {
            container.appendChild(badge);
        }

        return badge;
    }

    updateBadge(badge, newText, newType = null) {
        badge.textContent = newText;
        if (newType) {
            badge.className = `badge badge-${newType}`;
        }
    }

    // Tag Management
    createTag(text, removable = false, onRemove = null, container = null) {
        const tag = document.createElement('span');
        tag.className = 'tag';
        if (removable) {
            tag.className += ' tag-removable';
        }

        tag.innerHTML = `
            ${text}
            ${removable ? `<span class="tag-remove" onclick="utilityManager.removeTag(this.parentElement, ${onRemove ? onRemove.toString() : 'null'})">×</span>` : ''}
        `;

        if (container) {
            container.appendChild(tag);
        }

        return tag;
    }

    removeTag(tag, callback) {
        if (callback && typeof callback === 'function') {
            callback(tag);
        }
        tag.remove();
    }

    // Alert Management
    showAlert(message, type = 'info', title = null, dismissible = true, container = null) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;

        const iconMap = {
            success: '✓',
            warning: '⚠',
            danger: '✕',
            info: 'ℹ'
        };

        alert.innerHTML = `
            <div class="alert-icon">${iconMap[type] || 'ℹ'}</div>
            <div class="alert-content">
                ${title ? `<div class="alert-title">${title}</div>` : ''}
                <div class="alert-message">${message}</div>
            </div>
            ${dismissible ? '<button class="alert-close" onclick="utilityManager.dismissAlert(this.parentElement)">×</button>' : ''}
        `;

        if (container) {
            container.appendChild(alert);
        } else {
            // Add to top of page
            const existingContainer = document.querySelector('.alert-container');
            if (existingContainer) {
                existingContainer.appendChild(alert);
            } else {
                const alertContainer = document.createElement('div');
                alertContainer.className = 'alert-container';
                alertContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 1000; max-width: 400px;';
                alertContainer.appendChild(alert);
                document.body.appendChild(alertContainer);
            }
        }

        // Auto-dismiss after 5 seconds
        if (dismissible) {
            setTimeout(() => this.dismissAlert(alert), 5000);
        }

        return alert;
    }

    dismissAlert(alert) {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => alert.remove(), 300);
    }

    // Tooltip Management
    createTooltip(element, content, position = 'top') {
        element.classList.add('tooltip');
        element.setAttribute('title', content); // Fallback

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-content';
        tooltip.textContent = content;
        tooltip.style.position = 'absolute';

        // Position based on parameter
        const positionClasses = {
            top: 'bottom: 100%; left: 50%; transform: translateX(-50%);',
            bottom: 'top: 100%; left: 50%; transform: translateX(-50%);',
            left: 'right: 100%; top: 50%; transform: translateY(-50%);',
            right: 'left: 100%; top: 50%; transform: translateY(-50%);'
        };

        tooltip.style.cssText = positionClasses[position] || positionClasses.top;
        element.appendChild(tooltip);

        return tooltip;
    }

    setupTooltips() {
        // Auto-initialize tooltips with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            const tooltipElements = document.querySelectorAll('[data-tooltip]');
            tooltipElements.forEach(element => {
                const content = element.dataset.tooltip;
                const position = element.dataset.tooltipPosition || 'top';
                this.createTooltip(element, content, position);
            });
        });
    }

    // Progress Bar Management
    createProgressBar(value = 0, max = 100, type = 'primary', showLabel = true, container = null) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-bar';
        progressFill.style.width = `${(value / max) * 100}%`;
        progressFill.setAttribute('role', 'progressbar');
        progressFill.setAttribute('aria-valuenow', value);
        progressFill.setAttribute('aria-valuemin', 0);
        progressFill.setAttribute('aria-valuemax', max);

        progressBar.appendChild(progressFill);

        if (showLabel) {
            const label = document.createElement('div');
            label.className = 'progress-label';
            label.textContent = `${value}/${max} (${Math.round((value / max) * 100)}%)`;
            progressContainer.appendChild(label);
        }

        progressContainer.appendChild(progressBar);

        if (container) {
            container.appendChild(progressContainer);
        }

        return {
            container: progressContainer,
            bar: progressFill,
            updateValue: (newValue) => {
                progressFill.style.width = `${(newValue / max) * 100}%`;
                progressFill.setAttribute('aria-valuenow', newValue);
                if (showLabel) {
                    const label = progressContainer.querySelector('.progress-label');
                    if (label) {
                        label.textContent = `${newValue}/${max} (${Math.round((newValue / max) * 100)}%)`;
                    }
                }
            }
        };
    }

    // Loading States
    showLoading(element, text = 'Loading...') {
        const originalContent = element.innerHTML;
        element.dataset.originalContent = originalContent;
        
        element.innerHTML = `
            <div class="loading-content">
                <span class="spinner"></span>
                <span class="loading-text">${text}</span>
            </div>
        `;
        element.classList.add('loading');
        element.disabled = true;
    }

    hideLoading(element) {
        if (element.dataset.originalContent) {
            element.innerHTML = element.dataset.originalContent;
            delete element.dataset.originalContent;
        }
        element.classList.remove('loading');
        element.disabled = false;
    }

    // Skeleton Loading
    createSkeleton(lines = 3, container = null) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-container';

        for (let i = 0; i < lines; i++) {
            const line = document.createElement('div');
            line.className = 'loading-skeleton';
            
            // Vary the widths for more realistic appearance
            const width = i === lines - 1 ? '60%' : '100%';
            line.style.width = width;
            line.style.height = '1rem';
            line.style.marginBottom = '0.5rem';
            
            skeleton.appendChild(line);
        }

        if (container) {
            container.appendChild(skeleton);
        }

        return skeleton;
    }

    // Empty States
    showEmptyState(container, options = {}) {
        const {
            icon = '📭',
            title = 'No Data',
            description = 'There\'s nothing to show here.',
            action = null
        } = options;

        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';

        let html = `
            <div class="empty-icon">${icon}</div>
            <h3 class="empty-title">${title}</h3>
            <p class="empty-description">${description}</p>
        `;

        if (action) {
            html += `<button class="btn btn-primary" onclick="${action.onclick}">${action.text}</button>`;
        }

        emptyState.innerHTML = html;
        container.innerHTML = '';
        container.appendChild(emptyState);

        return emptyState;
    }

    // Spinner Management
    showSpinner(size = 'medium', container = null) {
        const spinner = document.createElement('div');
        spinner.className = `spinner spinner-${size}`;

        if (container) {
            container.appendChild(spinner);
        }

        return spinner;
    }

    // Notification System
    showNotification(message, type = 'info', duration = 3000, action = null) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        let html = `<span class="notification-message">${message}</span>`;
        
        if (action) {
            html += `<button class="notification-action" onclick="${action.onclick}">${action.text}</button>`;
        }

        notification.innerHTML = html;

        // Add to notification container
        let container = document.querySelector('.notification-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
            `;
            document.body.appendChild(container);
        }

        container.appendChild(notification);

        // Auto dismiss
        if (duration > 0) {
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }, duration);
        }

        return notification;
    }

    // Avatar Management
    createAvatar(name, size = 'medium', imageUrl = null, container = null) {
        const avatar = document.createElement('div');
        avatar.className = `avatar avatar-${size}`;

        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = name;
            img.onerror = () => {
                // Fallback to initials if image fails
                img.remove();
                avatar.textContent = this.getInitials(name);
            };
            avatar.appendChild(img);
        } else {
            avatar.textContent = this.getInitials(name);
        }

        avatar.title = name;

        if (container) {
            container.appendChild(avatar);
        }

        return avatar;
    }

    getInitials(name) {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .slice(0, 2)
            .join('');
    }

    // Code Block
    createCodeBlock(code, language = 'javascript', container = null) {
        const codeBlock = document.createElement('pre');
        codeBlock.className = 'code';
        
        const codeElement = document.createElement('code');
        codeElement.className = `language-${language}`;
        codeElement.textContent = code;
        
        codeBlock.appendChild(codeElement);

        if (container) {
            container.appendChild(codeBlock);
        }

        return codeBlock;
    }

    // Setup methods
    setupBadges() {
        // Auto-initialize badges with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            const badgeElements = document.querySelectorAll('[data-badge]');
            badgeElements.forEach(element => {
                const text = element.dataset.badge;
                const type = element.dataset.badgeType || 'primary';
                const badge = this.createBadge(text, type);
                element.appendChild(badge);
            });
        });
    }

    setupAlerts() {
        // Auto-initialize alerts with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            const alertElements = document.querySelectorAll('[data-alert]');
            alertElements.forEach(element => {
                const config = JSON.parse(element.dataset.alert);
                this.showAlert(config.message, config.type, config.title, config.dismissible, element);
            });
        });
    }

    setupProgressBars() {
        // Auto-initialize progress bars with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            const progressElements = document.querySelectorAll('[data-progress]');
            progressElements.forEach(element => {
                const value = parseInt(element.dataset.progress) || 0;
                const max = parseInt(element.dataset.progressMax) || 100;
                const type = element.dataset.progressType || 'primary';
                const showLabel = element.dataset.progressLabel !== 'false';
                this.createProgressBar(value, max, type, showLabel, element);
            });
        });
    }

    setupLoadingStates() {
        // Auto-initialize loading states with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            const loadingElements = document.querySelectorAll('[data-loading]');
            loadingElements.forEach(element => {
                const text = element.dataset.loadingText || 'Loading...';
                element.addEventListener('click', () => {
                    this.showLoading(element, text);
                    setTimeout(() => this.hideLoading(element), 2000);
                });
            });
        });
    }
}

// Create global instance
const utilityManager = new UtilityManager();

// Export for global access
window.utilityManager = utilityManager;
window.UtilityManager = UtilityManager;
