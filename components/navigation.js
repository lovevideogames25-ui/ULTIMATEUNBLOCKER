// Navigation Components - ULTIMATE UNBLOCKER

class NavigationManager {
    constructor() {
        this.navigation = new Map();
        this.breadcrumbs = [];
        this.currentTab = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeNavigation();
    }

    // Breadcrumb Navigation
    setBreadcrumb(items) {
        this.breadcrumbs = items;
        this.renderBreadcrumb();
    }

    renderBreadcrumb() {
        let breadcrumbElement = document.querySelector('.breadcrumb');
        
        if (!breadcrumbElement) {
            breadcrumbElement = document.createElement('nav');
            breadcrumbElement.className = 'breadcrumb';
            const header = document.querySelector('.page-header');
            if (header) {
                header.insertBefore(breadcrumbElement, header.firstChild);
            }
        }

        breadcrumbElement.innerHTML = this.breadcrumbs.map((item, index) => {
            const isLast = index === this.breadcrumbs.length - 1;
            if (isLast) {
                return `<span class="breadcrumb-item active">${item.label}</span>`;
            } else {
                return `
                    <span class="breadcrumb-item">
                        <a href="${item.href || '#'}" class="breadcrumb-link" onclick="navigationManager.navigate('${item.href || '#'}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">${item.label}</a>
                    </span>
                `;
            }
        }).join('');
    }

    // Tab Navigation
    createTabs(container, tabs, defaultTab = 0) {
        const tabNavHTML = `
            <div class="tab-nav">
                ${tabs.map((tab, index) => `
                    <button class="tab-button ${index === defaultTab ? 'active' : ''}" 
                            data-tab="${tab.id}" onclick="navigationManager.switchTab('${tab.id}')">
                        ${tab.icon ? `<span class="tab-icon">${tab.icon}</span>` : ''}
                        ${tab.label}
                    </button>
                `).join('')}
            </div>
        `;

        const tabContentHTML = `
            <div class="tab-content">
                ${tabs.map(tab => `
                    <div class="tab-pane ${tab.id === tabs[defaultTab].id ? 'active' : ''}" 
                         data-tab-content="${tab.id}">
                        ${tab.content}
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = tabNavHTML + tabContentHTML;
        this.currentTab = tabs[defaultTab].id;
    }

    switchTab(tabId) {
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });

        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.dataset.tabContent === tabId);
        });

        this.currentTab = tabId;
    }

    // Pagination
    createPagination(container, options) {
        const {
            currentPage = 1,
            totalPages = 1,
            onPageChange = null,
            showInfo = true
        } = options;

        let paginationHTML = '<div class="pagination">';

        // Previous button
        paginationHTML += `
            <button class="pagination-button" ${currentPage === 1 ? 'disabled' : ''} 
                    onclick="navigationManager.goToPage(${currentPage - 1}, ${onPageChange})">
                ←
            </button>
        `;

        // Page numbers
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        if (startPage > 1) {
            paginationHTML += `<button class="pagination-button" onclick="navigationManager.goToPage(1, ${onPageChange})">1</button>`;
            if (startPage > 2) {
                paginationHTML += '<span class="pagination-info">...</span>';
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="pagination-button ${i === currentPage ? 'active' : ''}" 
                        onclick="navigationManager.goToPage(${i}, ${onPageChange})">${i}</button>
            `;
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationHTML += '<span class="pagination-info">...</span>';
            }
            paginationHTML += `<button class="pagination-button" onclick="navigationManager.goToPage(${totalPages}, ${onPageChange})">${totalPages}</button>`;
        }

        // Next button
        paginationHTML += `
            <button class="pagination-button" ${currentPage === totalPages ? 'disabled' : ''} 
                    onclick="navigationManager.goToPage(${currentPage + 1}, ${onPageChange})">
                →
            </button>
        `;

        if (showInfo) {
            paginationHTML += `<span class="pagination-info">Page ${currentPage} of ${totalPages}</span>`;
        }

        paginationHTML += '</div>';
        container.innerHTML = paginationHTML;
    }

    goToPage(page, callback) {
        if (callback && typeof callback === 'function') {
            callback(page);
        } else if (callback && typeof window[callback] === 'function') {
            window[callback](page);
        }
    }

    // Side Navigation
    createSideNav(container, items, activeItem = null) {
        const navHTML = `
            <nav class="side-nav">
                ${items.map(item => `
                    <a href="${item.href || '#'}" class="side-nav-item ${item.id === activeItem ? 'active' : ''}"
                       onclick="navigationManager.navigate('${item.href || '#'}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">
                        ${item.icon ? `<span class="side-nav-icon">${item.icon}</span>` : ''}
                        ${item.label}
                    </a>
                `).join('')}
            </nav>
        `;
        container.innerHTML = navHTML;
    }

    // Dropdown Navigation
    createDropdown(container, options) {
        const {
            toggleText = 'Menu',
            items = [],
            position = 'left'
        } = options;

        const dropdownHTML = `
            <div class="dropdown" data-dropdown="${Date.now()}">
                <button class="dropdown-toggle" onclick="navigationManager.toggleDropdown(this.parentElement)">
                    ${toggleText}
                    <span class="dropdown-arrow">▼</span>
                </button>
                <div class="dropdown-menu dropdown-${position}">
                    ${items.map(item => {
                        if (item.divider) {
                            return '<div class="dropdown-divider"></div>';
                        }
                        return `
                            <a href="${item.href || '#'}" class="dropdown-item" 
                               onclick="navigationManager.navigate('${item.href || '#'}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">
                                ${item.icon ? `<span>${item.icon}</span>` : ''}
                                ${item.label}
                            </a>
                        `;
                    }).join('')}
                </div>
            </div>
        `;

        container.innerHTML = dropdownHTML;
    }

    toggleDropdown(dropdown) {
        // Close other dropdowns
        document.querySelectorAll('.dropdown.active').forEach(other => {
            if (other !== dropdown) {
                other.classList.remove('active');
            }
        });

        dropdown.classList.toggle('active');
    }

    // Step Navigation
    createStepNav(container, steps, currentStep = 0) {
        const stepHTML = `
            <div class="step-nav">
                ${steps.map((step, index) => {
                    let stepClass = 'step-item';
                    if (index < currentStep) stepClass += ' completed';
                    if (index === currentStep) stepClass += ' active';

                    return `
                        <div class="${stepClass}">
                            <div class="step-number">${index < currentStep ? '✓' : index + 1}</div>
                            <div class="step-label">${step.label}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        container.innerHTML = stepHTML;
    }

    // Mobile Navigation
    createMobileNav(container, items) {
        const navHTML = `
            <nav class="mobile-nav">
                ${items.map(item => `
                    <a href="${item.href || '#'}" class="mobile-nav-item ${item.active ? 'active' : ''}"
                       onclick="navigationManager.navigate('${item.href || '#'}', ${JSON.stringify(item).replace(/"/g, '&quot;')})">
                        <span class="mobile-nav-icon">${item.icon}</span>
                        <span class="mobile-nav-label">${item.label}</span>
                    </a>
                `).join('')}
            </nav>
        `;

        container.innerHTML = navHTML;
    }

    // Navigation helper
    navigate(href, item) {
        if (href && href !== '#') {
            // Update breadcrumb if item is provided
            if (item && item.breadcrumb) {
                this.setBreadcrumb(item.breadcrumb);
            }
            
            // Navigate to href
            window.location.href = href;
        }
    }

    // Event listeners
    setupEventListeners() {
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });

        // Keyboard navigation for tabs
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const activeTab = document.querySelector('.tab-button.active');
                if (activeTab) {
                    const tabs = Array.from(document.querySelectorAll('.tab-button'));
                    const currentIndex = tabs.indexOf(activeTab);
                    let nextIndex;

                    if (e.key === 'ArrowLeft') {
                        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                    } else {
                        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                    }

                    const nextTab = tabs[nextIndex];
                    if (nextTab) {
                        this.switchTab(nextTab.dataset.tab);
                    }
                }
            }
        });
    }

    // Initialize existing navigation
    initializeNavigation() {
        // Auto-initialize navigation elements with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            // Initialize breadcrumbs
            const breadcrumbElements = document.querySelectorAll('[data-breadcrumb]');
            breadcrumbElements.forEach(element => {
                const items = JSON.parse(element.dataset.breadcrumb);
                this.setBreadcrumb(items);
            });

            // Initialize tabs
            const tabElements = document.querySelectorAll('[data-tabs]');
            tabElements.forEach(element => {
                const tabs = JSON.parse(element.dataset.tabs);
                const defaultTab = parseInt(element.dataset.defaultTab) || 0;
                this.createTabs(element, tabs, defaultTab);
            });
        });
    }
}

// Create global instance
const navigationManager = new NavigationManager();

// Export for global access
window.navigationManager = navigationManager;
window.NavigationManager = NavigationManager;
