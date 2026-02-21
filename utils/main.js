// Main JavaScript - ULTIMATE UNBLOCKER

// Import data (loaded from data.js)
// These are available globally from data.js
// categories, linksData, dataManager

// Global Variables
let currentPage = 'homepage';
let currentCategory = null;
let currentView = 'grid';
let comments = [];

// DOM Elements
const elements = {
    loadingScreen: document.getElementById('loadingScreen'),
    welcomeScreen: document.getElementById('welcomeScreen'),
    mainContent: document.getElementById('mainContent'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    loadingStatus: document.getElementById('loadingStatus'),
    navbar: document.getElementById('navbar'),
    navToggle: document.getElementById('navToggle'),
    searchInput: document.getElementById('searchInput'),
    categoriesGrid: document.getElementById('categoriesGrid'),
    linksGrid: document.getElementById('linksGrid'),
    commentsList: document.getElementById('commentsList'),
    authorInput: document.getElementById('authorInput'),
    commentInput: document.getElementById('commentInput'),
    commentCount: document.getElementById('commentCount'),
    linkCount: document.getElementById('linkCount')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    startLoadingAnimation();
    loadStoredData();
    initializeAnimations();
}

function setupEventListeners() {
    // Navigation toggle
    if (elements.navToggle) {
        elements.navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Search functionality
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', debounce(filterCategories, 300));
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);

    // Scroll effects
    window.addEventListener('scroll', handleScroll);

    // Page visibility
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

function startLoadingAnimation() {
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
            
            setTimeout(() => {
                completeLoading();
            }, 500);
        }

        updateProgressBar(progress);
        updateLoadingStatus(loadingMessages, progress);
    }, 200);
}

function updateProgressBar(progress) {
    if (elements.progressFill) {
        elements.progressFill.style.width = progress + '%';
    }
    if (elements.progressText) {
        elements.progressText.textContent = Math.round(progress) + '%';
    }
}

function updateLoadingStatus(messages, progress) {
    if (elements.loadingStatus) {
        const messageIndex = Math.floor((progress / 100) * messages.length);
        elements.loadingStatus.textContent = messages[Math.min(messageIndex, messages.length - 1)];
    }
}

function completeLoading() {
    // Fade out loading screen
    if (elements.loadingScreen) {
        elements.loadingScreen.style.opacity = '0';
        setTimeout(() => {
            elements.loadingScreen.style.display = 'none';
        }, 500);
    }

    // Show welcome screen
    if (elements.welcomeScreen) {
        elements.welcomeScreen.classList.add('active');
        
        setTimeout(() => {
            elements.welcomeScreen.style.opacity = '0';
            setTimeout(() => {
                elements.welcomeScreen.style.display = 'none';
                showMainContent();
            }, 500);
        }, 3000);
    }
}

function showMainContent() {
    if (elements.mainContent) {
        elements.mainContent.classList.add('active');
    }
    showHomepage();
}

// Navigation Functions
function showHomepage() {
    hideAllPages();
    const homepage = document.getElementById('homepage');
    if (homepage) {
        homepage.style.display = 'block';
        homepage.classList.add('fade-in');
    }
    currentPage = 'homepage';
    updateActiveNavLink();
    animatePageEntry();
}

function showCategories() {
    hideAllPages();
    const categoriesPage = document.getElementById('categoriesPage');
    if (categoriesPage) {
        categoriesPage.style.display = 'block';
        categoriesPage.classList.add('fade-in');
    }
    currentPage = 'categories';
    updateActiveNavLink();
    renderCategories();
    animatePageEntry();
}

function showComments() {
    hideAllPages();
    const commentsPage = document.getElementById('commentsPage');
    if (commentsPage) {
        commentsPage.style.display = 'block';
        commentsPage.classList.add('fade-in');
    }
    currentPage = 'comments';
    updateActiveNavLink();
    loadComments();
    animatePageEntry();
}

function showAbout() {
    hideAllPages();
    const aboutPage = document.getElementById('aboutPage');
    if (aboutPage) {
        aboutPage.style.display = 'block';
        aboutPage.classList.add('fade-in');
    }
    currentPage = 'about';
    updateActiveNavLink();
    animatePageEntry();
}

function hideAllPages() {
    const pages = ['homepage', 'categoriesPage', 'categoryDetailPage', 'commentsPage', 'aboutPage'];
    pages.forEach(pageId => {
        const page = document.getElementById(pageId);
        if (page) {
            page.style.display = 'none';
            page.classList.remove('fade-in');
        }
    });
}

function updateActiveNavLink() {
    // No top navigation to update
}

// Mobile Menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = elements.navToggle;
    
    if (navMenu && navToggle) {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    }
}

// Categories Functions
function renderCategories() {
    if (!elements.categoriesGrid) return;

    elements.categoriesGrid.innerHTML = '';
    elements.categoriesGrid.className = 'categories-grid stagger-fade-in';

    categories.forEach((category, index) => {
        const card = createCategoryCard(category, index);
        elements.categoriesGrid.appendChild(card);
    });
}

function createCategoryCard(category, index) {
    const card = document.createElement('div');
    card.className = 'category-card fade-in-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const icon = getCategoryIcon(category.id);
    
    card.innerHTML = `
        <span class="category-icon">${icon}</span>
        <h3 class="category-name">${category.name}</h3>
        <p class="category-description">${category.description}</p>
    `;
    
    card.addEventListener('click', () => showCategoryDetail(category.id));
    return card;
}

function getCategoryIcon(categoryId) {
    const icons = {
        1: '🛡️', // PROXY SITES
        2: '🎮', // GAME LINKS
        3: '📺', // LIVE CHANNEL LINK
        4: '🎬', // MOVIE WATCHER LINK
        5: '🤖', // AI LINK
        6: '🎵', // MUSIC LINK
        7: '📻', // RADIO LINK
        8: '⚽', // SPORT WATCHER LINK
        9: '📹', // ALTERNATIVE YOUTUBE
        10: '🔊'  // SOUNDBOARDS
    };
    return icons[categoryId] || '📂';
}

function filterCategories() {
    if (!elements.searchInput || !elements.categoriesGrid) return;

    const searchTerm = elements.searchInput.value.toLowerCase();
    const cards = elements.categoriesGrid.querySelectorAll('.category-card');

    cards.forEach((card, index) => {
        const category = categories[index];
        const matches = category.name.toLowerCase().includes(searchTerm) || 
                       category.description.toLowerCase().includes(searchTerm);
        
        card.style.display = matches ? 'block' : 'none';
        if (matches) {
            card.classList.add('fade-in-up');
        }
    });
}

// Category Detail Functions
function showCategoryDetail(categoryId) {
    hideAllPages();
    const categoryDetailPage = document.getElementById('categoryDetailPage');
    if (categoryDetailPage) {
        categoryDetailPage.style.display = 'block';
        categoryDetailPage.classList.add('fade-in');
    }
    
    currentCategory = categories.find(c => c.id === categoryId);
    currentPage = 'categoryDetail';
    
    if (currentCategory) {
        updateCategoryHeader();
        renderCategoryLinks();
    }
    
    updateActiveNavLink();
    animatePageEntry();
}

function updateCategoryHeader() {
    const categoryTitle = document.getElementById('categoryTitle');
    const infoTitle = document.getElementById('infoTitle');
    const infoDescription = document.getElementById('infoDescription');
    const categoryIcon = document.getElementById('categoryIcon');
    
    if (categoryTitle) categoryTitle.textContent = currentCategory.name;
    if (infoTitle) infoTitle.textContent = currentCategory.name;
    if (infoDescription) infoDescription.textContent = currentCategory.description;
    if (categoryIcon) categoryIcon.textContent = getCategoryIcon(currentCategory.id);
    
    updateLinkCount();
}

function updateLinkCount() {
    const links = linksData[currentCategory.dataFile] || [];
    if (elements.linkCount) {
        elements.linkCount.textContent = `${links.length} links`;
    }
}

function renderCategoryLinks() {
    if (!elements.linksGrid || !currentCategory) return;

    const links = linksData[currentCategory.dataFile] || [];
    elements.linksGrid.innerHTML = '';
    elements.linksGrid.className = currentView === 'grid' ? 'links-grid stagger-fade-in' : 'links-grid list-view stagger-fade-in';

    links.forEach((link, index) => {
        const card = createLinkCard(link, index);
        elements.linksGrid.appendChild(card);
    });
}

function createLinkCard(link, index) {
    const card = document.createElement('div');
    card.className = 'link-card fade-in-up';
    card.style.animationDelay = `${index * 0.05}s`;
    
    if (currentView === 'list') {
        card.classList.add('list-view');
    }
    
    card.innerHTML = `
        <div class="link-content">
            <div class="link-name">${link.name}</div>
            ${link.warning ? `<div class="link-warning">⚠ Warning</div>` : ''}
        </div>
    `;
    
    card.addEventListener('click', () => openLink(link.url, link.warning));
    return card;
}

function openLink(url, warning) {
    if (warning) {
        showWarningDialog(warning, () => {
            window.open(url, '_blank');
        });
    } else {
        window.open(url, '_blank');
    }
}

function showWarningDialog(warning, onConfirm) {
    const confirmed = confirm(warning + '\n\nDo you want to continue?');
    if (confirmed && onConfirm) {
        onConfirm();
    }
}

function toggleView() {
    currentView = currentView === 'grid' ? 'list' : 'grid';
    updateViewButtons();
    renderCategoryLinks();
}

function updateViewButtons() {
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === currentView);
    });
}

function setView(view) {
    currentView = view;
    updateViewButtons();
    renderCategoryLinks();
}

// Comments Functions
function loadComments() {
    // Try to load from storageManager first, then fallback to direct localStorage
    try {
        if (window.storageManager) {
            comments = storageManager.getComments();
        } else {
            const stored = localStorage.getItem('ultimateUnblocker_comments');
            comments = stored ? JSON.parse(stored) : [];
        }
    } catch (error) {
        console.error('Failed to load comments:', error);
        comments = [];
    }
    
    renderComments();
    updateCommentCount();
}

function renderComments() {
    if (!elements.commentsList) return;

    if (comments.length === 0) {
        elements.commentsList.innerHTML = '<div class="no-comments">No comments yet. Be the first to share your thoughts!</div>';
        return;
    }

    elements.commentsList.innerHTML = '';
    elements.commentsList.className = 'comments-list stagger-fade-in';

    const sortedComments = [...comments].reverse();
    sortedComments.forEach((comment, index) => {
        const item = createCommentItem(comment, index);
        elements.commentsList.appendChild(item);
    });
}

function createCommentItem(comment, index) {
    const item = document.createElement('div');
    item.className = 'comment-item fade-in-up permanent-comment';
    item.style.animationDelay = `${index * 0.1}s`;
    
    const timeAgo = getTimeAgo(new Date(comment.timestamp));
    
    item.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${escapeHtml(comment.author)}</span>
            <span class="comment-time">${timeAgo}</span>
            <span class="permanent-badge">⚠️ PERMANENT</span>
        </div>
        <div class="comment-content">${escapeHtml(comment.content)}</div>
        <div class="comment-footer">
            <div class="comment-warning-text">
                ⚠️ This comment is permanent and cannot be deleted. Think before you post.
            </div>
            <div class="comment-actions">
                <button class="comment-like-btn" onclick="app.likeComment(${comment.id})">
                    ❤️ ${comment.likes || 0}
                </button>
            </div>
        </div>
    `;
    
    return item;
}

function addComment(event) {
    event.preventDefault();
    
    const author = elements.authorInput?.value.trim();
    const content = elements.commentInput?.value.trim();
    
    if (!author || !content) {
        showNotification('Please fill in both fields.', 'warning');
        return;
    }
    
    const newComment = {
        id: Date.now(),
        author: author,
        content: content,
        timestamp: new Date().toISOString(),
        likes: 0,
        permanent: true
    };
    
    comments.push(newComment);
    
    // Save to localStorage directly as backup
    try {
        localStorage.setItem('ultimateUnblocker_comments', JSON.stringify(comments));
        if (window.storageManager) {
            storageManager.saveComments(comments);
        }
    } catch (error) {
        console.error('Failed to save comments:', error);
        showNotification('Failed to save comment. Please try again.', 'error');
        return;
    }
    
    clearForm();
    renderComments();
    updateCommentCount();
    showNotification('Comment posted successfully! This comment is permanent and cannot be deleted.', 'success');
}

function clearForm() {
    if (elements.authorInput) elements.authorInput.value = '';
    if (elements.commentInput) elements.commentInput.value = '';
}

function updateCommentCount() {
    if (elements.commentCount) {
        elements.commentCount.textContent = `${comments.length} Comments`;
    }
}

function sortComments(order) {
    if (order === 'oldest') {
        comments.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } else {
        comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }
    renderComments();
}

// Utility Functions
function debounce(func, wait) {
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

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getTimeAgo(date) {
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

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} fade-in-down`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
            case 'k':
                event.preventDefault();
                elements.searchInput?.focus();
                break;
            case '/':
                event.preventDefault();
                showCategories();
                break;
        }
    }
    
    switch (event.key) {
        case 'Escape':
            if (currentPage !== 'homepage') {
                showHomepage();
            }
            break;
    }
}

// Scroll Effects
function handleScroll() {
    // No navbar to handle scroll effects for
}

// Page Visibility
function handleVisibilityChange() {
    if (document.hidden) {
        // Page is hidden
        document.title = '😴 ULTIMATE UNBLOCKER';
    } else {
        // Page is visible
        document.title = 'ULTIMATE UNBLOCKER - Your Gateway to Unlimited Access';
    }
}

// Animations
function animatePageEntry() {
    const elements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-up');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Storage Functions
function loadStoredData() {
    // Load comments with fallback
    try {
        if (window.storageManager) {
            comments = storageManager.getComments();
        } else {
            const stored = localStorage.getItem('ultimateUnblocker_comments');
            comments = stored ? JSON.parse(stored) : [];
        }
    } catch (error) {
        console.error('Failed to load stored data:', error);
        comments = [];
    }
}

// Social Functions
function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'ULTIMATE UNBLOCKER',
            text: 'Check out ULTIMATE UNBLOCKER - Your gateway to unlimited access!',
            url: window.location.href
        });
    } else {
        copyLink();
        showNotification('Link copied to clipboard!', 'success');
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Export functions for global access
window.showHomepage = showHomepage;
window.showCategories = showCategories;
window.showComments = showComments;
window.showAbout = showAbout;
window.showCategoryDetail = showCategoryDetail;
window.addComment = addComment;
window.clearForm = clearForm;
window.filterCategories = filterCategories;
window.toggleView = toggleView;
window.setView = setView;
window.sortComments = sortComments;
window.shareLink = shareLink;
window.copyLink = copyLink;
