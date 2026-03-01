// CORE LOGIC & FUNCTIONALITY

// Global Variables
let currentSection = 'home';
let categories = [];
let totalLinks = 70;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);
    
    // Initialize navigation
    initializeNavigation();
    
    // Load categories
    loadCategories();
    
    // Initialize search
    initializeSearch();
    
    // Add scroll effects
    initializeScrollEffects();
    
    console.log('ULTIMATELINKS - Initialized successfully!');
}

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Navigation
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Section Management
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Update active nav link
        updateActiveNavLink(sectionId);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Show Links Section
function showLinks() {
    showSection('links');
}

// Show Chat Section
function showChat() {
    showSection('chat');
}

// Update Active Navigation Link
function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Categories Data and Functions
function loadCategories() {
    categories = [
        {
            id: 'proxy',
            name: 'PROXY SITES',
            icon: '🛡️',
            count: 19,
            description: 'Secure proxy services to bypass restrictions',
            links: [
                { name: 'TRUFFLED', url: 'https://staffhiring.metropolitanstaffingsolutions.com/', description: 'Fast and secure proxy', warning: null },
                { name: 'GALAXY V6', url: 'https://call.it.smasesorias.cl/', description: 'Galaxy proxy service', warning: null },
                { name: 'DOGEUB', url: 'https://classlink-ixl-learning.epic.c01.kr.cdn.cloudflare.net/', description: 'Doge themed proxy', warning: null },
                { name: 'INTERSTELLAR', url: 'https://oh67.asistdoc.ar/', description: 'Space themed proxy', warning: null },
                { name: 'SPACE', url: 'https://academy.canadianlocomotivelogistics.ca/', description: 'Space proxy service', warning: null },
                { name: 'RAMMERHEAD', url: 'https://shared.learn.acepod.com/', description: 'Rammerhead proxy', warning: null },
                { name: 'UTOPIA', url: 'https://login.i-ready.com.a.noviolencia.ar/', description: 'Utopia proxy service', warning: null },
                { name: 'ENDIS', url: 'https://endis.rest/', description: 'Endis proxy', warning: null },
                { name: 'OVERCLOAKED', url: 'https://cjklakljfsdfdfe.cxvjlkewdfw.1000pizzas.com', description: 'Overcloaked proxy', warning: null },
                { name: 'BOREDOM', url: 'https://playernation.canalspa.cl/', description: 'Boredom killer proxy', warning: null },
                { name: 'GLINT', url: 'https://top100coolbugfacts.martinwguy.net', description: 'Glint proxy service', warning: null },
                { name: 'ABYSS', url: 'https://damsonyougotatshi.vercel.app/', description: 'Abyss proxy', warning: null },
                { name: 'GHOST', url: 'https://poemsforkids.vseesa.martinwguy.net', description: 'Ghost proxy', warning: null },
                { name: 'QUASAR', url: 'https://hoverfc.com/', description: 'Quasar proxy', warning: null },
                { name: 'ROSIN', url: 'https://rosin.vcsa.national-birdshow.com/', description: 'Rosin proxy', warning: null },
                { name: 'UNIUB', url: 'https://uniub.srvdns.de/', description: 'Uniub proxy', warning: null },
                { name: 'BROMINE', url: 'https://nativeamericanhistory.netlify.app/', description: 'Bromine proxy', warning: null },
                { name: 'LUNAR', url: 'https://book.today.hotelconsuladoinn.com/', description: 'Lunar proxy', warning: null },
                { name: 'CHERRI', url: 'https://vcsa-yt.jtlanguage.com/onboarding/', description: 'Cherri proxy', warning: null }
            ]
        },
        {
            id: 'games',
            name: 'GAME LINKS',
            icon: '🎮',
            count: 26,
            description: 'Play your favorite games online without limits',
            links: [
                { name: 'FREEZENOVA CLOUD', url: 'https://d3tecwpbnz01jy.cloudfront.net/classes/all/', description: 'Freezenova cloud games', warning: null },
                { name: 'GN MATH', url: 'https://fantasticfour99.github.io/gnmath/', description: 'GN math games', warning: null },
                { name: 'COMPLETELY SCIENCE', url: 'http://d1tmbzjih4bfq6.cloudfront.net', description: 'Science games collection', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'PETEZAH', url: 'https://gatekeep-this-please-t.seedlandia.ru/', description: 'Petezah games', warning: null },
                { name: 'PETEZAH (OLD)', url: 'https://pineapple-petezah.github.io/pages/home.html', description: 'Petezah old games', warning: null },
                { name: 'RED EXPLOIT CORNER', url: 'http://bull33.infotechnology.com', description: 'Exploit games', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'DUCK', url: 'https://quack-learn.web.app/', description: 'Duck games', warning: null },
                { name: 'FROGIESARCADE', url: 'https://frogieeisback-edu.zone.id/', description: 'Frogie arcade games', warning: null },
                { name: 'VAPOR V4', url: 'https://ge-lao-shi.global.ssl.fastly.net/', description: 'Vapor V4 games', warning: null },
                { name: 'VAPOR V3', url: 'https://gelaoshi.global.ssl.fastly.net/', description: 'Vapor V3 games', warning: null },
                { name: 'BROS GAMES', url: 'https://nbadebate.com/', description: 'Bros collection', warning: null },
                { name: 'GOFLO GAMES', url: 'https://goflogames.github.io/', description: 'Goflo games hub', warning: null },
                { name: 'CCPORTED', url: 'https://d1yh00vn2fvto7.cloudfront.net/', description: 'CC ported games', warning: null },
                { name: 'EXTREMEMATH', url: 'https://extrememath.freetls.fastly.net/', description: 'Extreme math games', warning: null },
                { name: 'NOWGG', url: 'https://now.gg', description: 'Now.gg games', warning: null },
                { name: 'FROGIESARCADE NOWGG', url: 'http://198.ip.nowgg.fun', description: 'Frogiesarcade Now.gg games', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'EAGLECRAFT', url: 'https://client.eaglercraft.win/eagler-files/wasm/1.8/Main/index.html', description: 'Eaglercraft Minecraft', warning: null },
                { name: 'JORDANS MATH WORK', url: 'https://subscribevseesa.infotechnology.com/', description: 'Math work games', warning: null },
                { name: 'CLASSROOM GAMES', url: 'https://dnrweqffuwjtx.cloudfront.net/', description: 'Classroom games', warning: null },
                { name: 'ALL GAMES', url: 'https://nb-ga.github.io/games-site/', description: 'All games collection', warning: null },
                { name: 'SYCES GAME SHACK', url: 'https://subkeys.github.io/sayeo/index.html', description: 'Syces games', warning: null },
                { name: 'TOPVAZ (BASKET RANDOM EDITION)', url: 'https://basket-random.gitlab.io/category/shooting.htm', description: 'Basket random games', warning: null },
                { name: 'VOID NETWORK V5', url: 'https://chemistrypracticelab.cencopro.cl/', description: 'Void Network V5', warning: null },
                { name: 'BROMINE (GAME EDITION)', url: 'https://codeprojects.org/projects/weblab/vm34VbcbEEmT5SAi_UWswHp7q2SBriUipjk4WmuXXJk/', description: 'Bromine games', warning: null },
                { name: 'LUNARSYNC', url: 'https://friendly-palm-tree-4j9jp4g5457pcvrr-8080.app.github.dev', description: 'Lunarsync games', warning: null },
                { name: 'SELENITE', url: 'https://french.jtlanguage.com', description: 'Selenite games', warning: null }
            ]
        },
        {
            id: 'live',
            name: 'LIVE CHANNEL LINK',
            icon: '📺',
            count: 1,
            description: 'Live streaming channels',
            links: [
                { name: 'FAMELACK', url: 'https://famelack.com/', description: 'Live streaming', warning: null }
            ]
        },
        {
            id: 'movies',
            name: 'MOVIE WATCHER LINK',
            icon: '🎬',
            count: 7,
            description: 'Stream the latest movies and TV shows',
            links: [
                { name: 'FMOVIES', url: 'https://fmovieisthegoat.vercel.app/', description: 'Fmovies streaming', warning: null },
                { name: 'CINEBY', url: 'https://cineby.io/', description: 'Cineby movies', warning: null },
                { name: 'PLUTO TV', url: 'https://pluto.tv/us/live-tv/68757c45759366af05b3b199', description: 'Pluto TV live', warning: null },
                { name: 'MAPPLE TV', url: 'https://mappl.tv/', description: 'Mapple TV', warning: null },
                { name: 'VIDORA', url: 'https://watch.vidora.su/', description: 'Vidora streaming', warning: null },
                { name: 'MYFLIXER', url: 'https://myflixer.ps/home', description: 'MyFlixer movies', warning: null },
                { name: 'RIVESTREAM', url: 'https://rivestream.org/', description: 'Rivestream movies', warning: null }
            ]
        },
        {
            id: 'ai',
            name: 'AI LINK',
            icon: '🤖',
            count: 5,
            description: 'Access powerful AI tools and chatbots',
            links: [
                { name: 'DUCKDUCKGO AI CHAT', url: 'http://duck.ai', description: 'DuckDuckGo AI chat', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'DEEPAI', url: 'http://deepai.org', description: 'Deep AI tools', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'GEMINI', url: 'http://gemini.google.com', description: 'Google Gemini AI', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'ECOSIA', url: 'https://www.ecosia.org/ai-search/aa4dca27-ff32-4574-82d3-375a05c6eae5?q=if+you+came+from+ULTIMATE+UNBLOCKER+ur+a+w', description: 'Ecosia AI search', warning: null },
                { name: 'SATURN AI', url: 'https://vcsa-saturn.ciko.ch/pages/ai.html', description: 'Saturn AI tools', warning: null }
            ]
        },
        {
            id: 'music',
            name: 'MUSIC LINK',
            icon: '🎵',
            count: 4,
            description: 'Stream music from around the world',
            links: [
                { name: 'VAPOR (MUSIC)', url: 'https://ge-lao-shi.global.ssl.fastly.net//page/music/index.html', description: 'Vapor music', warning: null },
                { name: 'PETEZAH (MUSIC)', url: 'https://totallynotgames.seclogistic.com/embed.html#https://byod.petezahgames.com/pages/other/music/', description: 'Petezah music', warning: null },
                { name: 'GHOST', url: 'https://poemsforkids.vseesa.martinwguy.net/music/', description: 'Ghost music', warning: null },
                { name: 'TIDAL', url: 'https://tidal.com/', description: 'Tidal music streaming', warning: '⚠ WARNING: Requires signup, No detected malware' }
            ]
        },
        {
            id: 'radio',
            name: 'RADIO LINK',
            icon: '📻',
            count: 1,
            description: 'Listen to radio stations worldwide',
            links: [
                { name: 'RADIO GARDEN', url: 'https://www.radio.garden/', description: 'Radio Garden', warning: null }
            ]
        },
        {
            id: 'sports',
            name: 'SPORT WATCHER LINK',
            icon: '⚽',
            count: 2,
            description: 'Watch live sports events and matches',
            links: [
                { name: 'EUROVISION SPORT', url: 'https://eurovisionsport.com/en', description: 'Eurovision sports', warning: null },
                { name: 'RIVESTREAM (LIVE SPORT)', url: 'https://rivestream.org/livesports', description: 'Rivestream live sports', warning: null }
            ]
        },
        {
            id: 'youtube',
            name: 'ALTERNATIVE YOUTUBE',
            icon: '📹',
            count: 1,
            description: 'Alternative YouTube platforms',
            links: [
                { name: 'INVIDIOUS', url: 'https://inv.nadeko.net/', description: 'Invidious YouTube', warning: null }
            ]
        },
        {
            id: 'soundboards',
            name: 'SOUNDBOARDS',
            icon: '🔊',
            count: 4,
            description: 'Fun soundboards and meme sounds',
            links: [
                { name: 'GENIZY SOUNDBOARD', url: 'https://genizy.github.io/soundboard/', description: 'Genizy soundboard', warning: null },
                { name: '101SOUNDBOARD', url: 'http://101soundboards.com', description: '101 soundboards', warning: '⚠ WARNING: HTTP, No detected malware' },
                { name: 'FREE MEME SOUNDBOARD', url: 'https://filme.imyfone.com/soundboards/meme', description: 'Free meme sounds', warning: null },
                { name: 'MEME SOUNDBOARD', url: 'https://www.tynker.com/community/projects/play/meme-soundboard/62f1ae42667c79348823eee8/', description: 'Meme soundboard', warning: null }
            ]
        }
    ];
    
    renderCategories();
}

// Render Categories
function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-title">${category.name}</div>
            <div class="category-count">${category.count} Verified Links</div>
            <p>${category.description}</p>
        `;
        categoryCard.addEventListener('click', () => showCategory(category.id));
        categoriesGrid.appendChild(categoryCard);
    });
}

// Show Category Details
function showCategory(categoryId) {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    // Update category detail section
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    
    if (categoryTitle && categoryDescription) {
        categoryTitle.textContent = category.name;
        categoryDescription.textContent = category.description;
    }
    
    // Render links
    renderCategoryLinks(category);
    
    // Show category detail section
    showSection('categoryDetail');
}

// Render Category Links
function renderCategoryLinks(category) {
    const linksContainer = document.getElementById('linksContainer');
    if (!linksContainer) return;
    
    linksContainer.innerHTML = '';
    
    category.links.forEach((link, index) => {
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        linkCard.style.animationDelay = `${index * 0.1}s`;
        
        let warningHtml = '';
        if (link.warning) {
            warningHtml = `<div class="link-warning">${link.warning}</div>`;
        }
        
        linkCard.innerHTML = `
            <h4>${link.name}</h4>
            <p>${link.description}</p>
            ${warningHtml}
            <a href="${link.url}" class="btn btn-primary" target="_blank">
                <span class="btn-icon">🔗</span>
                Visit Site
            </a>
        `;
        linksContainer.appendChild(linkCard);
    });
}

// Search Functions
function initializeSearch() {
    const searchInput = document.getElementById('categorySearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchCategories(e.target.value);
        });
    }
}

function searchCategories(query) {
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase()) ||
        category.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = '';
    
    if (filteredCategories.length === 0) {
        categoriesGrid.innerHTML = '<p>No categories found. Try a different search term.</p>';
        return;
    }
    
    filteredCategories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.style.animationDelay = `${index * 0.1}s`;
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-title">${category.name}</div>
            <div class="category-count">${category.count} Verified Links</div>
            <p>${category.description}</p>
        `;
        categoryCard.addEventListener('click', () => showCategory(category.id));
        categoriesGrid.appendChild(categoryCard);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Share Functions
function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'ULTIMATELINKS',
            text: 'Check out this amazing collection of verified links!',
            url: window.location.href
        });
    } else {
        copyLink();
        showNotification('Link copied to clipboard!', 'success');
    }
}

// Link Update Notifications
function showAddedLinksNotification(links) {
    const message = `ADDED LINKS: ${links.join(', ')}`;
    showNotification(message, 'success');
}

function showLinksChangedNotification(links) {
    const message = `LINKS CHANGED: ${links.join(', ')}`;
    showNotification(message, 'info');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// View Controls
function setView(viewType) {
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    const linksContainer = document.getElementById('linksContainer');
    if (linksContainer) {
        if (viewType === 'list') {
            linksContainer.style.gridTemplateColumns = '1fr';
        } else {
            linksContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        }
    }
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// Performance Monitoring
window.addEventListener('load', function() {
    console.log('Page loaded successfully');
    console.log('ULTIMATELINKS - All systems operational');
    
    // Show welcome popup after loading
    setTimeout(() => {
        showWelcomePopup();
    }, 2500); // Show after loading screen fades out
    
    // Example usage of new notification functions:
    // showAddedLinksNotification(['GN MATH', 'SELENITE']);
    // showLinksChangedNotification(['NOWGG', 'ABYSS']);
});

// Welcome Popup Function
function showWelcomePopup() {
    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    popupOverlay.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <h2>🎉 Welcome to ULTIMATELINKS! 🎉</h2>
                <p>Your gateway to unlimited access</p>
            </div>
            <div class="popup-body">
                <p>We've added <strong>8 new links</strong> today!</p>
                <p>Total collection: <strong>70+ verified links</strong></p>
                <div class="popup-stats">
                    <div class="stat">
                        <span class="stat-number">26</span>
                        <span class="stat-label">Games</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">19</span>
                        <span class="stat-label">Proxies</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">4</span>
                        <span class="stat-label">Soundboards</span>
                    </div>
                </div>
            </div>
            <div class="popup-footer">
                <button class="btn btn-primary yippee-btn" onclick="closeWelcomePopup()">
                    <span class="btn-icon">🎊</span>
                    YIPPIE
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popupOverlay);
    
    // Add entrance animation
    setTimeout(() => {
        popupOverlay.classList.add('show');
    }, 100);
}

// Close Welcome Popup
function closeWelcomePopup() {
    const popupOverlay = document.querySelector('.popup-overlay');
    if (popupOverlay) {
        popupOverlay.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(popupOverlay);
        }, 300);
    }
    
    // Show celebration notification
    showNotification('🎊 YIPPIE! Welcome to ULTIMATELINKS!', 'success');
}
