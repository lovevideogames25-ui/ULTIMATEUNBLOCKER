// ENHANCED ULTIMATELINKS CORE LOGIC & FUNCTIONALITY

// Global Variables
let categories = [];
let currentSection = 'home';
let isLoading = true;
let totalLinks = 70;
isLoading = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Enhanced loading with progress
    initializeLoading();
    
    // Initialize mobile navigation
    initializeMobileNavigation();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize navigation
    initializeNavigation();
    
    // Load categories
    loadCategories();
    
    // Initialize search
    initializeSearch();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
    
    // Debug navigation
    debugNavigation();
    
    console.log('ULTIMATELINKS - Enhanced version initialized successfully!');
}

// Debug Navigation
function debugNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    console.log('Navigation Debug:');
    console.log('Found nav links:', navLinks.length);
    console.log('Found sections:', sections.length);
    
    navLinks.forEach((link, index) => {
        console.log(`Nav ${index}:`, link.textContent, 'href:', link.getAttribute('href'));
    });
    
    sections.forEach((section, index) => {
        console.log(`Section ${index}:`, section.id, 'active:', section.classList.contains('active'));
    });
}

// Enhanced Loading Screen
function initializeLoading() {
    const progressFill = document.getElementById('progressFill');
    const loadingText = document.querySelector('.loading-text');
    let progress = 0;
    
    const loadingMessages = [
        'Loading ULTIMATELINKS...',
        'Preparing your gateway...',
        'Optimizing experience...',
        'Almost ready...'
    ];
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
        
        if (loadingText && progress > 25 && progress < 75) {
            const messageIndex = Math.floor((progress - 25) / 12.5);
            if (loadingMessages[messageIndex]) {
                loadingText.textContent = loadingMessages[messageIndex];
            }
        }
        
        if (progress >= 90) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                if (progressFill) progressFill.style.width = '100%';
                setTimeout(() => hideLoadingScreen(), 300);
            }, 200);
        }
    }, 100);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transform = 'scale(0.9)';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Initialize home section
            initializeHomeSection();
        }, 800);
    }
}

// Initialize Home Section
function initializeHomeSection() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
        homeSection.style.opacity = '1';
        homeSection.style.transform = 'translateY(0)';
        
        // Set active nav link
        const homeNavLink = document.querySelector('[href="#home"]');
        if (homeNavLink) {
            homeNavLink.classList.add('active');
        }
        
        // Animate hero elements
        animateHeroElements();
    }
    
    currentSection = 'home';
}

// Mobile Navigation
function initializeMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Navbar scroll effects
        if (navbar) {
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        
        // Animate elements on scroll
        animateOnScroll();
    });
}

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Remove existing event listeners to prevent duplicates
        link.removeEventListener('click', handleNavClick);
        // Add new event listener
        link.addEventListener('click', handleNavClick);
    });
}

// Handle navigation clicks
function handleNavClick(e) {
    const href = e.target.getAttribute('href');
    
    // Handle external links
    if (href && href.startsWith('http')) {
        return; // Let external links work normally
    }
    
    e.preventDefault();
    
    if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        if (targetId && document.getElementById(targetId)) {
            showSection(targetId);
        }
    }
}

// Enhanced Section Display
function showSection(sectionId) {
    if (isLoading) return;
    
    console.log('showSection called with:', sectionId);
    
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('Found sections:', sections.length);
    console.log('Found nav links:', navLinks.length);
    
    // Hide all sections with animation
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.display = 'none';
    });
    
    // Remove active state from nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show target section
    setTimeout(() => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            console.log('Found target section:', sectionId);
            targetSection.classList.add('active');
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
            targetSection.style.display = 'block';
            
            // Update active nav link (only for main navigation sections)
            const activeNavLink = document.querySelector(`[href="#${sectionId}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add('active');
                console.log('Set active nav link for:', sectionId);
            }
            
            currentSection = sectionId;
            
            // Initialize section-specific features
            initializeSectionFeatures(sectionId);
        } else {
            console.error('Section not found:', sectionId);
        }
    }, 300);
}

// Initialize Section Features
function initializeSectionFeatures(sectionId) {
    switch(sectionId) {
        case 'home':
            animateHeroElements();
            break;
        case 'categories':
            if (categories.length === 0) {
                loadCategories();
            }
            break;
        case 'chat':
            initializeChat();
            break;
        case 'settings':
            initializeSettings();
            break;
    }
}

// Animate Hero Elements
function animateHeroElements() {
    const heroContent = document.querySelector('.hero-content');
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('slide-up');
        }, index * 100);
    });
}

// Load Categories with Animation
function loadCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
    
    // Show loading state
    categoriesGrid.innerHTML = '<div class="loading-spinner"></div>';
    
    // Simulate loading
    setTimeout(() => {
        categories = [
            {
                name: 'PROXY SITES', 
                icon: '�️', 
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
                    { name: 'GHOST', url: 'https://poemsforkids.vseesa.martinwguy.net/', description: 'Ghost proxy', warning: null },
                    { name: 'QUASAR', url: 'https://hoverfc.com/', description: 'Quasar proxy', warning: null },
                    { name: 'ROSIN', url: 'https://rosin.vcsa.national-birdshow.com/', description: 'Rosin proxy', warning: null },
                    { name: 'UNIUB', url: 'https://uniub.srvdns.de/', description: 'Uniub proxy', warning: null },
                    { name: 'BROMINE', url: 'https://nativeamericanhistory.netlify.app/', description: 'Bromine proxy', warning: null },
                    { name: 'LUNAR', url: 'https://book.today.hotelconsuladoinn.com/', description: 'Lunar proxy', warning: null },
                    { name: 'CHERRI', url: 'https://vcsa-yt.jtlanguage.com/onboarding/', description: 'Cherri proxy', warning: null }
                ]
            },
            { 
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
                    { name: 'CLASSROOM GAMES', url: 'https://dnrweqffuwjtx.cloudfront.net', description: 'Classroom games', warning: null },
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
                name: 'LIVE CHANNEL LINK', 
                icon: '📺', 
                count: 1, 
                description: 'Live streaming channels',
                links: [
                    { name: 'FAMELACK', url: 'https://famelack.com/', description: 'Live streaming', warning: null }
                ]
            },
            { 
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
                name: 'RADIO LINK', 
                icon: '�', 
                count: 1, 
                description: 'Listen to radio stations worldwide',
                links: [
                    { name: 'RADIO GARDEN', url: 'https://www.radio.garden/', description: 'Radio Garden', warning: null }
                ]
            },
            { 
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
                name: 'ALTERNATIVE YOUTUBE', 
                icon: '�', 
                count: 1, 
                description: 'Alternative YouTube platforms',
                links: [
                    { name: 'INVIDIOUS', url: 'https://inv.nadeko.net/', description: 'Invidious YouTube', warning: null }
                ]
            },
            { 
                name: 'SOUNDBOARDS', 
                icon: '�', 
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
    }, 800);
}

function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) {
        console.error('Categories grid not found!');
        return;
    }
    
    categoriesGrid.innerHTML = '';
    
    categories.forEach((category, index) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-info">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <div class="category-stats">
                    <span class="category-count">${category.count} links</span>
                </div>
            </div>
            <div class="category-action">
                <button class="btn btn-primary" onclick="window.ULTIMATELINKS.showCategoryDetail('${category.name}')">
                    Explore
                </button>
            </div>
        `;
        
        categoriesGrid.appendChild(categoryCard);
        
        // Animate card appearance
        setTimeout(() => {
            categoryCard.classList.add('slide-up');
        }, index * 100);
    });
    
    console.log('Categories rendered:', categories.length);
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('categorySearch');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchCategories(e.target.value);
        }, 300);
    });
}

function searchCategories(query) {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const searchTerm = query.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = '';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animations on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
}

// Initialize Animations
function initializeAnimations() {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Show Category Detail
function showCategoryDetail(categoryName) {
    console.log('showCategoryDetail called with:', categoryName);
    console.log('Available categories:', categories.map(c => c.name));
    
    const category = categories.find(cat => cat.name === categoryName);
    if (!category) {
        console.error('Category not found:', categoryName);
        return;
    }
    
    console.log('Found category:', category);
    
    // Update category detail section
    const categoryTitle = document.getElementById('categoryTitle');
    const categoryDescription = document.getElementById('categoryDescription');
    
    if (categoryTitle) {
        categoryTitle.textContent = category.name;
        console.log('Updated title to:', category.name);
    } else {
        console.error('Category title element not found!');
    }
    
    if (categoryDescription) {
        categoryDescription.textContent = category.description;
        console.log('Updated description to:', category.description);
    } else {
        console.error('Category description element not found!');
    }
    
    // Render category links
    console.log('Rendering links for category...');
    renderCategoryLinks(category.links);
    
    // Show category detail section
    console.log('Showing category detail section...');
    showSection('categoryDetail');
}

// Render Category Links
function renderCategoryLinks(links) {
    const linksContainer = document.getElementById('linksContainer');
    if (!linksContainer) {
        console.error('Links container not found!');
        return;
    }
    
    console.log('renderCategoryLinks called with links:', links);
    
    if (!links || links.length === 0) {
        console.log('No links to render');
        linksContainer.innerHTML = '<p class="no-links">No links available for this category.</p>';
        return;
    }
    
    console.log('Rendering', links.length, 'links');
    linksContainer.innerHTML = '';
    linksContainer.className = 'links-container links-grid';
    
    links.forEach((link, index) => {
        console.log('Creating link card for:', link.name);
        const linkCard = document.createElement('div');
        linkCard.className = 'link-card';
        linkCard.innerHTML = `
            <div class="link-header">
                <h3>${link.name}</h3>
                <span class="link-status status-active">Active</span>
            </div>
            <div class="link-content">
                <p>${link.description}</p>
                <div class="link-actions">
                    <a href="${link.url}" class="btn btn-primary" target="_blank">
                        <span>🚀</span>
                        Visit Site
                    </a>
                </div>
            </div>
        `;
        
        linksContainer.appendChild(linkCard);
        
        // Animate card appearance
        setTimeout(() => {
            linkCard.classList.add('slide-up');
        }, index * 100);
    });
    
    console.log('Finished rendering links');
}

// Set View Mode
function setView(mode) {
    const viewBtns = document.querySelectorAll('.view-btn');
    const linksContainer = document.getElementById('linksContainer');
    
    // Update button states
    viewBtns.forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Update container class
    if (linksContainer) {
        linksContainer.className = 'links-container';
        if (mode === 'grid') {
            linksContainer.classList.add('links-grid');
        } else if (mode === 'list') {
            linksContainer.classList.add('links-list');
        }
    }
}

// Enhanced Error Handling
window.addEventListener('error', (e) => {
    console.error('ULTIMATELINKS Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('ULTIMATELINKS Unhandled Promise Rejection:', e.reason);
});

// Performance Monitoring
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
}

window.addEventListener('load', logPerformance);

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('categorySearch');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Touch Gestures for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for navigation
            console.log('Swipe left detected');
        } else {
            // Swipe right - could be used for navigation
            console.log('Swipe right detected');
        }
    }
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for global access
window.ULTIMATELINKS = {
    showSection,
    showCategoryDetail,
    setView,
    searchCategories,
    categories,
    totalLinks,
    testCategoryFunction
};

// Test Category Function
function testCategoryFunction() {
    console.log('=== Testing Category Function ===');
    console.log('Categories loaded:', categories.length);
    console.log('First category:', categories[0]);
    
    if (categories.length > 0) {
        console.log('Testing showCategoryDetail with first category...');
        showCategoryDetail(categories[0].name);
    } else {
        console.error('No categories loaded!');
    }
}
