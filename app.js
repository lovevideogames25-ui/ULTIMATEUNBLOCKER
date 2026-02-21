// Main Application - ULTIMATE UNBLOCKER

// Import modules
import { dataManager, categories, linksData } from './utils/data.js';
import { storageManager } from './utils/storage.js';
import { animationManager } from './utils/animations.js';

// Application State
class AppState {
    constructor() {
        this.currentPage = 'homepage';
        this.currentCategory = null;
        this.currentView = 'grid';
        this.comments = [];
        this.searchQuery = '';
        this.settings = {};
        this.isLoading = false;
        this.error = null;
    }

    reset() {
        this.currentPage = 'homepage';
        this.currentCategory = null;
        this.currentView = 'grid';
        this.searchQuery = '';
        this.error = null;
    }
}

// Main Application Class
class UltimateUnblocker {
    constructor() {
        this.state = new AppState();
        this.elements = {};
        this.init();
    }

    async init() {
        try {
            this.cacheElements();
            this.setupEventListeners();
            await this.loadInitialData();
            this.startLoadingAnimation();
            this.setupKeyboardShortcuts();
            this.setupServiceWorker();
        } catch (error) {
            this.handleError(error);
        }
    }

    cacheElements() {
        this.elements = {
            // Loading elements
            loadingScreen: document.getElementById('loadingScreen'),
            welcomeScreen: document.getElementById('welcomeScreen'),
            mainContent: document.getElementById('mainContent'),
            progressFill: document.getElementById('progressFill'),
            progressText: document.getElementById('progressText'),
            loadingStatus: document.getElementById('loadingStatus'),
            
            // Navigation
            navbar: document.getElementById('navbar'),
            navToggle: document.getElementById('navToggle'),
            
            // Pages
            homepage: document.getElementById('homepage'),
            categoriesPage: document.getElementById('categoriesPage'),
            categoryDetailPage: document.getElementById('categoryDetailPage'),
            commentsPage: document.getElementById('commentsPage'),
            aboutPage: document.getElementById('aboutPage'),
            
            // Interactive elements
            searchInput: document.getElementById('searchInput'),
            categoriesGrid: document.getElementById('categoriesGrid'),
            linksGrid: document.getElementById('linksGrid'),
            commentsList: document.getElementById('commentsList'),
            authorInput: document.getElementById('authorInput'),
            commentInput: document.getElementById('commentInput'),
            
            // UI elements
            commentCount: document.getElementById('commentCount'),
            linkCount: document.getElementById('linkCount'),
            categoryTitle: document.getElementById('categoryTitle'),
            categoryIcon: document.getElementById('categoryIcon'),
            infoTitle: document.getElementById('infoTitle'),
            infoDescription: document.getElementById('infoDescription')
        };
    }

    setupEventListeners() {
        // Navigation toggle
        if (this.elements.navToggle) {
            this.elements.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Search functionality
        if (this.elements.searchInput) {
            this.elements.searchInput.addEventListener('input', 
                this.debounce((e) => this.handleSearch(e.target.value), 300)
            );
        }

        // Global events
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcut(e));
        window.addEventListener('scroll', () => this.handleScroll());
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());

        // Form submissions
        const commentForm = document.querySelector('.comment-form');
        if (commentForm) {
            commentForm.addEventListener('submit', (e) => this.handleCommentSubmit(e));
        }
    }

    async loadInitialData() {
        try {
            this.state.settings = storageManager.getSettings();
            this.state.comments = storageManager.getComments();
            
            // Load cached data if available
            const cachedCategories = storageManager.getCache('categories');
            if (cachedCategories && !storageManager.isCacheExpired('categories')) {
                // Use cached data
            } else {
                // Fresh data load
                storageManager.setCache('categories', categories, 300000); // 5 minutes
            }
        } catch (error) {
            console.error('Failed to load initial data:', error);
            this.handleError(error);
        }
    }

    startLoadingAnimation() {
        let progress = 0;
        const loadingMessages = [
            'Initializing...',
            'Loading categories...',
            'Fetching links...',
            'Preparing interface...',
            'Almost ready...'
        ];

        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                setTimeout(() => this.completeLoading(), 500);
            }

            this.updateProgressBar(progress);
            this.updateLoadingStatus(loadingMessages, progress);
        }, 200);
    }

    updateProgressBar(progress) {
        if (this.elements.progressFill) {
            this.elements.progressFill.style.width = `${progress}%`;
        }
        if (this.elements.progressText) {
            this.elements.progressText.textContent = `${Math.round(progress)}%`;
        }
    }

    updateLoadingStatus(messages, progress) {
        if (this.elements.loadingStatus) {
            const messageIndex = Math.floor((progress / 100) * messages.length);
            this.elements.loadingStatus.textContent = 
                messages[Math.min(messageIndex, messages.length - 1)];
        }
    }

    completeLoading() {
        // Fade out loading screen
        if (this.elements.loadingScreen) {
            this.elements.loadingScreen.style.opacity = '0';
            setTimeout(() => {
                this.elements.loadingScreen.style.display = 'none';
            }, 500);
        }

        // Show welcome screen
        if (this.elements.welcomeScreen) {
            this.elements.welcomeScreen.classList.add('active');
            
            setTimeout(() => {
                this.elements.welcomeScreen.style.opacity = '0';
                setTimeout(() => {
                    this.elements.welcomeScreen.style.display = 'none';
                    this.showMainContent();
                }, 500);
            }, 3000);
        }
    }

    showMainContent() {
        if (this.elements.mainContent) {
            this.elements.mainContent.classList.add('active');
        }
        this.showHomepage();
        this.updateStatistics();
    }

    // Navigation Methods
    showHomepage() {
        this.hideAllPages();
        if (this.elements.homepage) {
            this.elements.homepage.style.display = 'block';
            this.elements.homepage.classList.add('fade-in');
        }
        this.state.currentPage = 'homepage';
        this.updateActiveNavLink();
        this.animatePageEntry();
    }

    showCategories() {
        this.hideAllPages();
        if (this.elements.categoriesPage) {
            this.elements.categoriesPage.style.display = 'block';
            this.elements.categoriesPage.classList.add('fade-in');
        }
        this.state.currentPage = 'categories';
        this.updateActiveNavLink();
        this.renderCategories();
        this.animatePageEntry();
    }

    showComments() {
        this.hideAllPages();
        if (this.elements.commentsPage) {
            this.elements.commentsPage.style.display = 'block';
            this.elements.commentsPage.classList.add('fade-in');
        }
        this.state.currentPage = 'comments';
        this.updateActiveNavLink();
        this.loadComments();
        this.animatePageEntry();
    }

    showAbout() {
        this.hideAllPages();
        if (this.elements.aboutPage) {
            this.elements.aboutPage.style.display = 'block';
            this.elements.aboutPage.classList.add('fade-in');
        }
        this.state.currentPage = 'about';
        this.updateActiveNavLink();
        this.animatePageEntry();
    }

    showCategoryDetail(categoryId) {
        this.hideAllPages();
        if (this.elements.categoryDetailPage) {
            this.elements.categoryDetailPage.style.display = 'block';
            this.elements.categoryDetailPage.classList.add('fade-in');
        }
        
        this.state.currentCategory = dataManager.getCategory(categoryId);
        this.state.currentPage = 'categoryDetail';
        
        if (this.state.currentCategory) {
            this.updateCategoryHeader();
            this.renderCategoryLinks();
        }
        
        this.updateActiveNavLink();
        this.animatePageEntry();
    }

    hideAllPages() {
        const pages = [
            'homepage', 'categoriesPage', 'categoryDetailPage', 
            'commentsPage', 'aboutPage'
        ];
        
        pages.forEach(pageId => {
            const page = this.elements[pageId];
            if (page) {
                page.style.display = 'none';
                page.classList.remove('fade-in');
            }
        });
    }

    // Rendering Methods
    renderCategories() {
        if (!this.elements.categoriesGrid) return;

        this.elements.categoriesGrid.innerHTML = '';
        this.elements.categoriesGrid.className = 'categories-grid stagger-fade-in';

        dataManager.getCategories().forEach((category, index) => {
            const card = this.createCategoryCard(category, index);
            this.elements.categoriesGrid.appendChild(card);
        });
    }

    createCategoryCard(category, index) {
        const card = document.createElement('div');
        card.className = 'category-card fade-in-up hover-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-description">${category.description}</p>
        `;
        
        card.addEventListener('click', () => this.showCategoryDetail(category.id));
        return card;
    }

    renderCategoryLinks() {
        if (!this.elements.linksGrid || !this.state.currentCategory) return;

        const links = dataManager.getLinks(this.state.currentCategory.id);
        this.elements.linksGrid.innerHTML = '';
        this.elements.linksGrid.className = this.state.currentView === 'grid' 
            ? 'links-grid stagger-fade-in' 
            : 'links-grid list-view stagger-fade-in';

        links.forEach((link, index) => {
            const card = this.createLinkCard(link, index);
            this.elements.linksGrid.appendChild(card);
        });
    }

    createLinkCard(link, index) {
        const card = document.createElement('div');
        card.className = 'link-card fade-in-up hover-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        if (this.state.currentView === 'list') {
            card.classList.add('list-view');
        }
        
        card.innerHTML = `
            <div class="link-content">
                <div class="link-name">${link.name}</div>
                ${link.warning ? `<div class="link-warning">⚠ Warning</div>` : ''}
                ${link.description ? `<div class="link-description">${link.description}</div>` : ''}
                ${link.popularity ? `<div class="link-popularity">🔥 ${link.popularity}%</div>` : ''}
            </div>
        `;
        
        card.addEventListener('click', () => this.openLink(link));
        return card;
    }

    loadComments() {
        this.state.comments = storageManager.getComments();
        this.renderComments();
        this.updateCommentCount();
    }

    renderComments() {
        if (!this.elements.commentsList) return;

        if (this.state.comments.length === 0) {
            this.elements.commentsList.innerHTML = 
                '<div class="no-comments">No comments yet. Be the first to share your thoughts!</div>';
            return;
        }

        this.elements.commentsList.innerHTML = '';
        this.elements.commentsList.className = 'comments-list stagger-fade-in';

        const sortedComments = [...this.state.comments].reverse();
        sortedComments.forEach((comment, index) => {
            const item = this.createCommentItem(comment, index);
            this.elements.commentsList.appendChild(item);
        });
    }

    createCommentItem(comment, index) {
        const item = document.createElement('div');
        item.className = 'comment-item fade-in-up';
        item.style.animationDelay = `${index * 0.1}s`;
        
        const timeAgo = this.getTimeAgo(new Date(comment.timestamp));
        
        item.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${this.escapeHtml(comment.author)}</span>
                <span class="comment-time">${timeAgo}</span>
            </div>
            <div class="comment-content">${this.escapeHtml(comment.content)}</div>
            <div class="comment-actions">
                <button class="comment-like-btn" onclick="app.likeComment(${comment.id})">
                    ❤️ ${comment.likes || 0}
                </button>
            </div>
        `;
        
        return item;
    }

    // Event Handlers
    handleSearch(query) {
        this.state.searchQuery = query.toLowerCase();
        
        if (this.state.currentPage === 'categories') {
            this.filterCategories();
        }
    }

    filterCategories() {
        if (!this.elements.searchInput || !this.elements.categoriesGrid) return;

        const searchTerm = this.state.searchQuery;
        const cards = this.elements.categoriesGrid.querySelectorAll('.category-card');

        cards.forEach((card, index) => {
            const category = dataManager.getCategories()[index];
            const matches = category.name.toLowerCase().includes(searchTerm) || 
                           category.description.toLowerCase().includes(searchTerm);
            
            card.style.display = matches ? 'block' : 'none';
            if (matches) {
                card.classList.add('fade-in-up');
            }
        });
    }

    handleCommentSubmit(event) {
        event.preventDefault();
        
        const author = this.elements.authorInput?.value.trim();
        const content = this.elements.commentInput?.value.trim();
        
        if (!author || !content) {
            this.showNotification('Please fill in both fields.', 'warning');
            return;
        }
        
        const newComment = {
            id: Date.now(),
            author: author,
            content: content,
            timestamp: new Date().toISOString(),
            likes: 0
        };
        
        this.state.comments.push(newComment);
        storageManager.saveComments(this.state.comments);
        
        this.clearForm();
        this.renderComments();
        this.updateCommentCount();
        this.showNotification('Comment posted successfully!', 'success');
    }

    handleKeyboardShortcut(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (event.key) {
                case 'k':
                    event.preventDefault();
                    this.elements.searchInput?.focus();
                    break;
                case '/':
                    event.preventDefault();
                    this.showCategories();
                    break;
            }
        }
        
        switch (event.key) {
            case 'Escape':
                if (this.state.currentPage !== 'homepage') {
                    this.showHomepage();
                }
                break;
        }
    }

    handleScroll() {
        // No navbar to handle scroll effects for
    }

    handleVisibilityChange() {
        if (document.hidden) {
            document.title = '😴 ULTIMATE UNBLOCKER';
        } else {
            document.title = 'ULTIMATE UNBLOCKER - Your Gateway to Unlimited Access';
        }
    }

    // Link Management
    openLink(link) {
        // Track click
        if (this.state.currentCategory) {
            storageManager.incrementLinkClick(link.url, this.state.currentCategory.name);
        }

        // Add to history
        storageManager.addToHistory(link);

        // Show warning if needed
        if (link.warning) {
            this.showWarningDialog(link.warning, () => {
                window.open(link.url, '_blank');
            });
        } else {
            window.open(link.url, '_blank');
        }
    }

    showWarningDialog(warning, onConfirm) {
        const confirmed = confirm(warning + '\n\nDo you want to continue?');
        if (confirmed && onConfirm) {
            onConfirm();
        }
    }

    // UI Updates
    updateCategoryHeader() {
        if (this.elements.categoryTitle) {
            this.elements.categoryTitle.textContent = this.state.currentCategory.name;
        }
        if (this.elements.infoTitle) {
            this.elements.infoTitle.textContent = this.state.currentCategory.name;
        }
        if (this.elements.infoDescription) {
            this.elements.infoDescription.textContent = this.state.currentCategory.description;
        }
        if (this.elements.categoryIcon) {
            this.elements.categoryIcon.textContent = this.state.currentCategory.icon;
        }
        
        this.updateLinkCount();
    }

    updateLinkCount() {
        if (this.elements.linkCount && this.state.currentCategory) {
            const links = dataManager.getLinks(this.state.currentCategory.id);
            this.elements.linkCount.textContent = `${links.length} links`;
        }
    }

    updateCommentCount() {
        if (this.elements.commentCount) {
            this.elements.commentCount.textContent = `${this.state.comments.length} Comments`;
        }
    }

    updateActiveNavLink() {
        // No top navigation to update
    }

    // Utility Methods
    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = this.elements.navToggle;
        
        if (navMenu && navToggle) {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        }
    }

    toggleView() {
        this.state.currentView = this.state.currentView === 'grid' ? 'list' : 'grid';
        this.updateViewButtons();
        this.renderCategoryLinks();
    }

    updateViewButtons() {
        const viewButtons = document.querySelectorAll('.view-btn');
        viewButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === this.state.currentView);
        });
    }

    setView(view) {
        this.state.currentView = view;
        this.updateViewButtons();
        this.renderCategoryLinks();
    }

    likeComment(commentId) {
        const comment = this.state.comments.find(c => c.id === commentId);
        if (comment) {
            comment.likes = (comment.likes || 0) + 1;
            storageManager.saveComments(this.state.comments);
            this.renderComments();
        }
    }

    sortComments(order) {
        if (order === 'oldest') {
            this.state.comments.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        } else {
            this.state.comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        }
        this.renderComments();
    }

    clearForm() {
        if (this.elements.authorInput) this.elements.authorInput.value = '';
        if (this.elements.commentInput) this.elements.commentInput.value = '';
    }

    // Social Functions
    shareLink() {
        if (navigator.share) {
            navigator.share({
                title: 'ULTIMATE UNBLOCKER',
                text: 'Check out ULTIMATE UNBLOCKER - Your gateway to unlimited access!',
                url: window.location.href
            });
        } else {
            this.copyLink();
            this.showNotification('Link copied to clipboard!', 'success');
        }
    }

    copyLink() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            this.showNotification('Link copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy link', 'error');
        });
    }

    // Notifications
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type} fade-in-down`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Statistics
    updateStatistics() {
        const stats = storageManager.getStatistics();
        stats.totalVisits++;
        stats.lastVisit = new Date().toISOString();
        storageManager.updateStatistics(stats);
    }

    // Animations
    animatePageEntry() {
        const elements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-up');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    // Service Worker
    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered:', registration);
                })
                .catch(error => {
                    console.log('SW registration failed:', error);
                });
        }
    }

    // Error Handling
    handleError(error) {
        console.error('Application error:', error);
        this.state.error = error;
        this.showNotification('An error occurred. Please try again.', 'error');
    }

    // Utility Functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getTimeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) return interval + ' years ago';
        
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + ' months ago';
        
        interval = Math.floor(seconds / 86400);
        if (interval > 1) return interval + ' days ago';
        
        interval = Math.floor(seconds / 3600);
        if (interval > 1) return interval + ' hours ago';
        
        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + ' minutes ago';
        
        return 'Just now';
    }
}

// Initialize application
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new UltimateUnblocker();
    
    // Make app globally available for inline event handlers
    window.app = app;
    
    // Export global functions for HTML onclick handlers
    window.showHomepage = () => app.showHomepage();
    window.showCategories = () => app.showCategories();
    window.showComments = () => app.showComments();
    window.showAbout = () => app.showAbout();
    window.showCategoryDetail = (id) => app.showCategoryDetail(id);
    window.addComment = (e) => app.handleCommentSubmit(e);
    window.clearForm = () => app.clearForm();
    window.filterCategories = () => app.filterCategories();
    window.toggleView = () => app.toggleView();
    window.setView = (view) => app.setView(view);
    window.sortComments = (order) => app.sortComments(order);
    window.shareLink = () => app.shareLink();
    window.copyLink = () => app.copyLink();
});

export default UltimateUnblocker;
