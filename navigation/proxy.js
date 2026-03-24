// Navigation JavaScript - ULTIMATEUNBLOCKER

// Navigation Manager
class NavigationManager {
    constructor() {
        this.currentSection = 'home';
        this.navigationHistory = [];
        this.proxyMode = false;
        this.init();
    }

    init() {
        console.log('Navigation Manager initialized');
    }

    // Navigate to a section
    navigateTo(section, data = {}) {
        console.log(`Navigating to: ${section}`, data);
        
        // Add to history
        this.navigationHistory.push({
            section: this.currentSection,
            data: data,
            timestamp: Date.now()
        });

        // Update current section
        this.currentSection = section;

        // Handle navigation
        this.handleNavigation(section, data);
    }

    // Handle different navigation types
    handleNavigation(section, data) {
        switch(section) {
            case 'home':
                this.goHome();
                break;
            case 'links':
                this.showLinks();
                break;
            case 'proxy':
                this.showProxy();
                break;
            case 'categories':
                this.showCategories();
                break;
            case 'chat':
                this.showChat();
                break;
            default:
                console.log(`Unknown section: ${section}`);
        }
    }

    // Go to home
    goHome() {
        const mainContent = document.getElementById('mainContent');
        const categoriesSection = document.getElementById('categoriesSection');
        const chatSection = document.getElementById('chatSection');
        const menuButton = document.getElementById('menuButton');
        
        if (mainContent) mainContent.style.display = 'flex';
        if (categoriesSection) categoriesSection.classList.remove('active');
        if (chatSection) chatSection.style.display = 'none';
        
        // Show hamburger menu button
        if (menuButton) menuButton.style.display = 'block';
        
        this.closeMenu();
        this.proxyMode = false;
    }

    // Show links section
    showLinks() {
        const mainContent = document.getElementById('mainContent');
        const categoriesSection = document.getElementById('categoriesSection');
        const menuButton = document.getElementById('menuButton');
        
        if (mainContent) mainContent.style.display = 'none';
        if (categoriesSection) {
            categoriesSection.classList.add('active');
            // Animate category cards
            this.animateCategoryCards();
        }
        
        // Ensure hamburger menu button is visible
        if (menuButton) menuButton.style.display = 'block';
        
        this.closeMenu();
    }

    // Show proxy section
    showProxy() {
        const mainContent = document.getElementById('mainContent');
        const categoriesSection = document.getElementById('categoriesSection');
        const proxyBrowserSection = document.getElementById('proxyBrowserSection');
        const menuButton = document.getElementById('menuButton');
        
        // Hide everything except proxy
        if (mainContent) mainContent.style.display = 'none';
        if (categoriesSection) categoriesSection.classList.remove('active');
        if (proxyBrowserSection) {
            proxyBrowserSection.style.display = 'block';
            proxyBrowserSection.classList.add('fullscreen');
        }
        
        // Hide hamburger menu button
        if (menuButton) menuButton.style.display = 'none';
        
        this.closeMenu();
        this.proxyMode = true;
    }

    // Show categories
    showCategories() {
        const mainContent = document.getElementById('mainContent');
        const categoriesSection = document.getElementById('categoriesSection');
        const menuButton = document.getElementById('menuButton');
        
        if (mainContent) mainContent.style.display = 'none';
        if (categoriesSection) {
            categoriesSection.classList.add('active');
            this.animateCategoryCards();
        }
        
        // Ensure hamburger menu button is visible
        if (menuButton) menuButton.style.display = 'block';
        
        this.closeMenu();
    }

    // Show Chat section
    showChat() {
        const mainContent = document.getElementById('mainContent');
        const categoriesSection = document.getElementById('categoriesSection');
        const chatSection = document.getElementById('chatSection');
        const menuButton = document.getElementById('menuButton');
        
        // Hide everything except chat
        if (mainContent) mainContent.style.display = 'none';
        if (categoriesSection) categoriesSection.classList.remove('active');
        if (chatSection) {
            chatSection.style.display = 'block';
        }
        
        // Ensure hamburger menu button is visible
        if (menuButton) menuButton.style.display = 'block';
        
        this.closeMenu();
        this.proxyMode = false;
    }

    // Close navigation menu
    closeMenu() {
        const menuPanel = document.getElementById('menuPanel');
        const overlay = document.getElementById('overlay');
        
        if (menuPanel) menuPanel.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    }

    // Animate category cards
    animateCategoryCards() {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Go back in history
    goBack() {
        if (this.navigationHistory.length > 0) {
            const previous = this.navigationHistory.pop();
            this.currentSection = previous.section;
            this.handleNavigation(previous.section, previous.data);
        }
    }

    // Get navigation history
    getHistory() {
        return this.navigationHistory;
    }

    // Clear navigation history
    clearHistory() {
        this.navigationHistory = [];
    }

    // Toggle proxy mode
    toggleProxyMode() {
        this.proxyMode = !this.proxyMode;
        console.log(`Proxy mode: ${this.proxyMode ? 'ON' : 'OFF'}`);
        return this.proxyMode;
    }

    // Check if in proxy mode
    isProxyMode() {
        return this.proxyMode;
    }
}

// Initialize Navigation Manager
const navigationManager = new NavigationManager();

// Export for global use
window.NavigationManager = NavigationManager;
window.navigationManager = navigationManager;
