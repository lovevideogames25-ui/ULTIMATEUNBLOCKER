// Data Management - ULTIMATE UNBLOCKER

// Categories Data
const categories = [
    { 
        id: 1, 
        name: 'PROXY SITES', 
        description: 'Access websites through secure proxies', 
        dataFile: 'proxySites',
        icon: '🛡️',
        color: '#e94560'
    },
    { 
        id: 2, 
        name: 'GAME LINKS', 
        description: 'Play games from various sources', 
        dataFile: 'gameLinks',
        icon: '🎮',
        color: '#533483'
    },
    { 
        id: 3, 
        name: 'LIVE CHANNEL LINK', 
        description: 'Watch live streaming channels', 
        dataFile: 'liveChannel',
        icon: '📺',
        color: '#28a745'
    },
    { 
        id: 4, 
        name: 'MOVIE WATCHER LINK', 
        description: 'Stream movies and TV shows', 
        dataFile: 'movieLinks',
        icon: '🎬',
        color: '#ffc107'
    },
    { 
        id: 5, 
        name: 'AI LINK', 
        description: 'Access AI tools and chatbots', 
        dataFile: 'aiLinks',
        icon: '🤖',
        color: '#17a2b8'
    },
    { 
        id: 6, 
        name: 'MUSIC LINK', 
        description: 'Listen to music and audio', 
        dataFile: 'musicLinks',
        icon: '🎵',
        color: '#6610f2'
    },
    { 
        id: 7, 
        name: 'RADIO LINK', 
        description: 'Tune into online radio stations', 
        dataFile: 'radioLinks',
        icon: '📻',
        color: '#fd7e14'
    },
    { 
        id: 8, 
        name: 'SPORT WATCHER LINK', 
        description: 'Watch live sports events', 
        dataFile: 'sportsLinks',
        icon: '⚽',
        color: '#20c997'
    },
    { 
        id: 9, 
        name: 'ALTERNATIVE YOUTUBE', 
        description: 'YouTube alternatives for privacy', 
        dataFile: 'altYoutube',
        icon: '📹',
        color: '#ff6b6b'
    },
    { 
        id: 10, 
        name: 'SOUNDBOARDS', 
        description: 'Fun sound effects and memes', 
        dataFile: 'soundboards',
        icon: '🔊',
        color: '#4ecdc4'
    }
];

// Links Data
const linksData = {
    proxySites: [
        { 
            name: 'TRUFFLED', 
            url: 'https://staffhiring.metropolitanstaffingsolutions.com/', 
            warning: null,
            description: 'Secure proxy service',
            popularity: 85,
            category: 'proxy'
        },
        { 
            name: 'GALAXY V6', 
            url: 'https://call.it.smasesorias.cl/', 
            warning: null,
            description: 'Fast galaxy proxy',
            popularity: 78,
            category: 'proxy'
        },
        { 
            name: 'DOGEUB', 
            url: 'https://classlink-ixl-learning.epic.c01.kr.cdn.cloudflare.net/', 
            warning: null,
            description: 'Doge-themed unblocker',
            popularity: 92,
            category: 'proxy'
        },
        { 
            name: 'INTERSTELLAR', 
            url: 'https://oh67.asistdoc.ar/', 
            warning: null,
            description: 'Space-themed proxy',
            popularity: 76,
            category: 'proxy'
        },
        { 
            name: 'SPACE', 
            url: 'https://academy.canadianlocomotivelogistics.ca/', 
            warning: null,
            description: 'Space proxy service',
            popularity: 81,
            category: 'proxy'
        },
        { 
            name: 'RAMMERHEAD', 
            url: 'https://shared.learn.acepod.com/', 
            warning: null,
            description: 'Browser-based proxy',
            popularity: 88,
            category: 'proxy'
        },
        { 
            name: 'UTOPIA', 
            url: 'https://login.i-ready.com.a.noviolencia.ar/', 
            warning: null,
            description: 'Perfect world proxy',
            popularity: 73,
            category: 'proxy'
        },
        { 
            name: 'ENDIS', 
            url: 'https://endis.rest/', 
            warning: null,
            description: 'Endless proxy service',
            popularity: 69,
            category: 'proxy'
        },
        { 
            name: 'OVERCLOAKED', 
            url: 'https://cjklakljfsdfdfe.cxvjlkewdfw.1000pizzas.com', 
            warning: null,
            description: 'Stealth proxy',
            popularity: 84,
            category: 'proxy'
        },
        { 
            name: 'BOREDOM', 
            url: 'https://playernation.canalspa.cl/', 
            warning: null,
            description: 'Cure boredom proxy',
            popularity: 71,
            category: 'proxy'
        },
        { 
            name: 'GLINT', 
            url: 'https://top100coolbugfacts.martinwguy.net', 
            warning: null,
            description: 'Shiny proxy service',
            popularity: 65,
            category: 'proxy'
        },
        { 
            name: 'ABYSS', 
            url: 'https://thetotalabyssboys.vercel.app/', 
            warning: null,
            description: 'Deep web proxy',
            popularity: 79,
            category: 'proxy'
        },
        { 
            name: 'GHOST', 
            url: 'https://poemsforkids.vseesa.martinwguy.net/', 
            warning: null,
            description: 'Ghost proxy service',
            popularity: 82,
            category: 'proxy'
        },
        { 
            name: 'QUASAR', 
            url: 'https://hoverfc.com/', 
            warning: null,
            description: 'Cosmic proxy',
            popularity: 74,
            category: 'proxy'
        },
        { 
            name: 'ROSIN', 
            url: 'https://rosin.vcsa.national-birdshow.com/', 
            warning: null,
            description: 'Music-themed proxy',
            popularity: 68,
            category: 'proxy'
        },
        { 
            name: 'UNIUB', 
            url: 'https://uniub.srvdns.de/', 
            warning: null,
            description: 'Universal unblocker',
            popularity: 90,
            category: 'proxy'
        },
        { 
            name: 'BROMINE', 
            url: 'https://nativeamericanhistory.netlify.app/', 
            warning: null,
            description: 'Element-themed proxy',
            popularity: 72,
            category: 'proxy'
        },
        { 
            name: 'LUNAR', 
            url: 'https://book.today.hotelconsuladoinn.com/', 
            warning: null,
            description: 'Moon-based proxy',
            popularity: 77,
            category: 'proxy'
        }
    ],
    gameLinks: [
        { 
            name: 'COMPLETELY SCIENCE', 
            url: 'http://d1tmbzjih4bfq6.cloudfront.net', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: 'Science games collection',
            popularity: 95,
            category: 'games'
        },
        { 
            name: 'PETEZAH', 
            url: 'https://totallynotgames.seclogistic.com/', 
            warning: null,
            description: 'Pete Zah games',
            popularity: 88,
            category: 'games'
        },
        { 
            name: 'RED EXPLOIT CORNER', 
            url: 'http://bull33.infotechnology.com', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: 'Exploit games',
            popularity: 76,
            category: 'games'
        },
        { 
            name: 'DUCK', 
            url: 'https://quack-learn.web.app/', 
            warning: null,
            description: 'Duck-themed games',
            popularity: 82,
            category: 'games'
        },
        { 
            name: 'FROGIESARCADE', 
            url: 'https://frogieeisback-edu.zone.id/', 
            warning: null,
            description: 'Frog arcade games',
            popularity: 79,
            category: 'games'
        },
        { 
            name: 'VAPOR V4', 
            url: 'https://ge-lao-shi.global.ssl.fastly.net/', 
            warning: null,
            description: 'Vapor games v4',
            popularity: 91,
            category: 'games'
        },
        { 
            name: 'VAPOR V3', 
            url: 'https://gelaoshi.global.ssl.fastly.net/', 
            warning: null,
            description: 'Vapor games v3',
            popularity: 87,
            category: 'games'
        },
        { 
            name: 'BROS GAMES', 
            url: 'https://nbadebate.com/', 
            warning: null,
            description: 'Bro games collection',
            popularity: 73,
            category: 'games'
        },
        { 
            name: 'GOFLO GAMES', 
            url: 'https://goflogames.github.io/', 
            warning: null,
            description: 'GoFlo games',
            popularity: 80,
            category: 'games'
        },
        { 
            name: 'CCPORTED', 
            url: 'https://d1yh00vn2fvto7.cloudfront.net/', 
            warning: null,
            description: 'CC ported games',
            popularity: 85,
            category: 'games'
        },
        { 
            name: 'EXTREMEMATH', 
            url: 'https://extrememath.freetls.fastly.net/', 
            warning: null,
            description: 'Math games extreme',
            popularity: 78,
            category: 'games'
        },
        { 
            name: 'NOWGG', 
            url: 'http://198.ip.nowgg.fun', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: 'Now.gg games',
            popularity: 93,
            category: 'games'
        },
        { 
            name: 'EAGLECRAFT', 
            url: 'https://client.eaglercraft.win/eagler-files/wasm/1.8/Main/index.html', 
            warning: null,
            description: 'Minecraft alternative',
            popularity: 96,
            category: 'games'
        },
        { 
            name: 'JORDANS MATH WORK', 
            url: 'https://subscribevseesa.infotechnology.com/', 
            warning: null,
            description: 'Math learning games',
            popularity: 71,
            category: 'games'
        },
        { 
            name: 'CLASSROOM GAMES', 
            url: 'https://dnrweqffuwjtx.cloudfront.net/', 
            warning: null,
            description: 'Classroom safe games',
            popularity: 84,
            category: 'games'
        },
        { 
            name: 'ALL GAMES', 
            url: 'https://nb-ga.github.io/games-site/', 
            warning: null,
            description: 'All games hub',
            popularity: 89,
            category: 'games'
        },
        { 
            name: 'SYCES GAME SHACK', 
            url: 'https://subkeys.github.io/sayeo/index.html', 
            warning: null,
            description: 'Syces games',
            popularity: 75,
            category: 'games'
        },
        { 
            name: 'TOPVAZ (BASKET RANDOM EDITION)', 
            url: 'https://basket-random.gitlab.io/category/shooting.htm', 
            warning: null,
            description: 'Basket random games',
            popularity: 81,
            category: 'games'
        },
        { 
            name: 'VOID NETWORK V5', 
            url: 'https://chemistrypracticelab.cencopro.cl/', 
            warning: null,
            description: 'Void network games',
            popularity: 86,
            category: 'games'
        },
        { 
            name: 'BROMINE (GAME EDITION)', 
            url: 'https://codeprojects.org/projects/weblab/vm34VbcbEEmT5SAi_UWswHp7q2SBriUipjk4WmuXXJk/', 
            warning: null,
            description: 'Bromine games',
            popularity: 77,
            category: 'games'
        }
    ],
    liveChannel: [
        { 
            name: 'FAMELACK', 
            url: 'https://famelack.com/', 
            warning: null,
            description: 'Live streaming channel',
            popularity: 72,
            category: 'live'
        }
    ],
    movieLinks: [
        { 
            name: 'FMOVIES', 
            url: 'https://fmovieisthegoat.vercel.app/', 
            warning: null,
            description: 'Free movies online',
            popularity: 94,
            category: 'movies'
        },
        { 
            name: 'CINEBY', 
            url: 'https://cineby.io/', 
            warning: null,
            description: 'Cinema by',
            popularity: 87,
            category: 'movies'
        },
        { 
            name: 'PLUTO TV', 
            url: 'https://pluto.tv/us/live-tv/68757c45759366af05b3b199', 
            warning: null,
            description: 'Free live TV',
            popularity: 91,
            category: 'movies'
        },
        { 
            name: 'MAPPLE TV', 
            url: 'https://mappl.tv/', 
            warning: null,
            description: 'Maple TV streaming',
            popularity: 76,
            category: 'movies'
        },
        { 
            name: 'VIDORA', 
            url: 'https://watch.vidora.su/', 
            warning: null,
            description: 'Vidora streaming',
            popularity: 82,
            category: 'movies'
        },
        { 
            name: 'MYFLIXER', 
            url: 'https://myflixer.ps/home', 
            warning: null,
            description: 'Flixer alternative',
            popularity: 89,
            category: 'movies'
        },
        { 
            name: 'RIVESTREAM', 
            url: 'https://rivestream.org/', 
            warning: null,
            description: 'Rive streaming',
            popularity: 85,
            category: 'movies'
        }
    ],
    aiLinks: [
        { 
            name: 'DUCKDUCKGO AI CHAT', 
            url: 'http://duck.ai', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: 'DuckDuckGo AI chat',
            popularity: 88,
            category: 'ai'
        },
        { 
            name: 'DEEPAI', 
            url: 'http://deepai.org', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: 'Deep AI tools',
            popularity: 92,
            category: 'ai'
        },
        { 
            name: 'GEMINI', 
            url: 'http://gemini.google.com', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: 'Google Gemini AI',
            popularity: 95,
            category: 'ai'
        },
        { 
            name: 'ECOSIA', 
            url: 'https://www.ecosia.org/ai-search/aa4dca27-ff32-4574-82d3-375a05c6eae5?q=if+you+came+from+ULTIMATE+UNBLOCKER+ur+a+w', 
            warning: null,
            description: 'Ecosia AI search',
            popularity: 79,
            category: 'ai'
        },
        { 
            name: 'SATURN AI', 
            url: 'https://vcsa-saturn.ciko.ch/pages/ai.html', 
            warning: null,
            description: 'Saturn AI tools',
            popularity: 73,
            category: 'ai'
        }
    ],
    musicLinks: [
        { 
            name: 'VAPOR (MUSIC)', 
            url: 'https://ge-lao-shi.global.ssl.fastly.net//page/music/index.html', 
            warning: null,
            description: 'Vapor music streaming',
            popularity: 86,
            category: 'music'
        },
        { 
            name: 'PETEZAH (MUSIC)', 
            url: 'https://totallynotgames.seclogistic.com/embed.html#https://byod.petezahgames.com/pages/other/music/', 
            warning: null,
            description: 'Pete Zah music',
            popularity: 81,
            category: 'music'
        },
        { 
            name: 'GHOST', 
            url: 'https://poemsforkids.vseesa.martinwguy.net/music/', 
            warning: null,
            description: 'Ghost music player',
            popularity: 74,
            category: 'music'
        },
        { 
            name: 'TIDAL', 
            url: 'https://tidal.com/', 
            warning: '⚠ WARNING: Requires signup. No detected malware.',
            description: 'Tidal music streaming',
            popularity: 90,
            category: 'music'
        }
    ],
    radioLinks: [
        { 
            name: 'RADIO GARDEN', 
            url: 'https://www.radio.garden/', 
            warning: null,
            description: 'Global radio garden',
            popularity: 93,
            category: 'radio'
        }
    ],
    sportsLinks: [
        { 
            name: 'EUROVISION SPORT', 
            url: 'https://eurovisionsport.com/en', 
            warning: null,
            description: 'Eurovision sports',
            popularity: 84,
            category: 'sports'
        },
        { 
            name: 'RIVESTREAM (LIVE SPORT)', 
            url: 'https://rivestream.org/livesports', 
            warning: null,
            description: 'Live sports streaming',
            popularity: 88,
            category: 'sports'
        }
    ],
    altYoutube: [
        { 
            name: 'INVIDIOUS', 
            url: 'https://inv.nadeko.net/', 
            warning: null,
            description: 'Privacy-focused YouTube',
            popularity: 91,
            category: 'video'
        }
    ],
    soundboards: [
        { 
            name: '101SOUNDBOARD', 
            url: 'http://101soundboards.com', 
            warning: '⚠ WARNING: This website does not have a secure connection (HTTP://). No detected malware.',
            description: '101 soundboards',
            popularity: 85,
            category: 'audio'
        },
        { 
            name: 'FREE MEME SOUNDBOARD', 
            url: 'https://filme.imyfone.com/soundboards/meme', 
            warning: null,
            description: 'Meme soundboards',
            popularity: 78,
            category: 'audio'
        },
        { 
            name: 'MEME SOUNDBOARD', 
            url: 'https://www.tynker.com/community/projects/play/meme-soundboard/62f1ae42667c79348823eee8/', 
            warning: null,
            description: 'Tynker meme sounds',
            popularity: 72,
            category: 'audio'
        }
    ]
};

// Data Management Class
class DataManager {
    constructor() {
        this.categories = categories;
        this.linksData = linksData;
        this.cache = new Map();
        this.lastUpdated = Date.now();
    }

    // Get all categories
    getCategories() {
        return this.categories;
    }

    // Get category by ID
    getCategory(id) {
        return this.categories.find(cat => cat.id === parseInt(id));
    }

    // Get links for a category
    getLinks(categoryId) {
        const category = this.getCategory(categoryId);
        if (!category) return [];
        
        return this.linksData[category.dataFile] || [];
    }

    // Search links across all categories
    searchLinks(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        
        this.categories.forEach(category => {
            const links = this.linksData[category.dataFile] || [];
            const matchingLinks = links.filter(link => 
                link.name.toLowerCase().includes(lowerQuery) ||
                link.description?.toLowerCase().includes(lowerQuery) ||
                category.name.toLowerCase().includes(lowerQuery)
            );
            
            if (matchingLinks.length > 0) {
                results.push({
                    category: category,
                    links: matchingLinks
                });
            }
        });
        
        return results;
    }

    // Get popular links
    getPopularLinks(limit = 10) {
        const allLinks = [];
        
        Object.entries(this.linksData).forEach(([key, links]) => {
            links.forEach(link => {
                allLinks.push({
                    ...link,
                    dataFile: key,
                    category: this.categories.find(cat => cat.dataFile === key)
                });
            });
        });
        
        return allLinks
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
            .slice(0, limit);
    }

    // Get recently added links (mock data)
    getRecentLinks(limit = 10) {
        const allLinks = [];
        
        Object.entries(this.linksData).forEach(([key, links]) => {
            links.forEach((link, index) => {
                allLinks.push({
                    ...link,
                    dataFile: key,
                    category: this.categories.find(cat => cat.dataFile === key),
                    addedDate: new Date(Date.now() - (index * 86400000)) // Mock dates
                });
            });
        });
        
        return allLinks
            .sort((a, b) => b.addedDate - a.addedDate)
            .slice(0, limit);
    }

    // Get statistics
    getStatistics() {
        const stats = {
            totalLinks: 0,
            totalCategories: this.categories.length,
            linksByCategory: {},
            popularCategories: [],
            warningLinks: 0
        };
        
        this.categories.forEach(category => {
            const links = this.linksData[category.dataFile] || [];
            stats.totalLinks += links.length;
            stats.linksByCategory[category.name] = links.length;
            
            const warningCount = links.filter(link => link.warning).length;
            stats.warningLinks += warningCount;
        });
        
        // Sort categories by link count
        stats.popularCategories = Object.entries(stats.linksByCategory)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([name, count]) => ({ name, count }));
        
        return stats;
    }

    // Get links with warnings
    getWarningLinks() {
        const warningLinks = [];
        
        Object.entries(this.linksData).forEach(([key, links]) => {
            links.forEach(link => {
                if (link.warning) {
                    warningLinks.push({
                        ...link,
                        dataFile: key,
                        category: this.categories.find(cat => cat.dataFile === key)
                    });
                }
            });
        });
        
        return warningLinks;
    }

    // Validate link data
    validateLink(link) {
        const required = ['name', 'url'];
        const missing = required.filter(field => !link[field]);
        
        if (missing.length > 0) {
            return {
                valid: false,
                errors: [`Missing required fields: ${missing.join(', ')}`]
            };
        }
        
        if (!this.isValidUrl(link.url)) {
            return {
                valid: false,
                errors: ['Invalid URL format']
            };
        }
        
        return { valid: true };
    }

    // Validate URL format
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    // Cache management
    getCachedData(key) {
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.timestamp < 300000) { // 5 minutes
            return cached.data;
        }
        return null;
    }

    setCachedData(key, data) {
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
    }

    clearCache() {
        this.cache.clear();
    }

    // Export data
    exportData() {
        return {
            categories: this.categories,
            linksData: this.linksData,
            statistics: this.getStatistics(),
            exportedAt: new Date().toISOString()
        };
    }

    // Import data (validation required)
    importData(data) {
        if (!data.categories || !data.linksData) {
            throw new Error('Invalid data format');
        }
        
        // Validate categories
        data.categories.forEach(category => {
            if (!category.id || !category.name || !category.dataFile) {
                throw new Error('Invalid category data');
            }
        });
        
        // Validate links
        Object.entries(data.linksData).forEach(([key, links]) => {
            links.forEach(link => {
                const validation = this.validateLink(link);
                if (!validation.valid) {
                    throw new Error(`Invalid link data: ${validation.errors.join(', ')}`);
                }
            });
        });
        
        this.categories = data.categories;
        this.linksData = data.linksData;
        this.clearCache();
    }
}

// Create singleton instance
const dataManager = new DataManager();

// Utility functions
function getCategoryIcon(categoryId) {
    const category = dataManager.getCategory(categoryId);
    return category ? category.icon : '📂';
}

function getCategoryColor(categoryId) {
    const category = dataManager.getCategory(categoryId);
    return category ? category.color : '#e94560';
}

function formatPopularity(popularity) {
    if (!popularity) return 'N/A';
    return `${popularity}%`;
}

function getRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}

// Export for global access
window.dataManager = dataManager;
window.categories = categories;
window.linksData = linksData;
window.getCategoryIcon = getCategoryIcon;
window.getCategoryColor = getCategoryColor;
window.formatPopularity = formatPopularity;
window.getRelativeTime = getRelativeTime;
