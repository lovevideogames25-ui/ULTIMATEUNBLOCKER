// Storage Management - ULTIMATE UNBLOCKER

class StorageManager {
    constructor() {
        this.prefix = 'ultimateUnblocker_';
        this.version = '1.0.0';
        this.defaultSettings = {
            theme: 'dark',
            animations: true,
            soundEffects: false,
            autoSave: true,
            viewMode: 'grid',
            language: 'en',
            notifications: true,
            compactMode: false
        };
    }

    // Get storage key with prefix
    getKey(key) {
        return `${this.prefix}${key}`;
    }

    // Set item in localStorage
    setItem(key, value) {
        try {
            const item = {
                value,
                timestamp: Date.now(),
                version: this.version
            };
            localStorage.setItem(this.getKey(key), JSON.stringify(item));
            return true;
        } catch (error) {
            console.error('Storage set error:', error);
            return false;
        }
    }

    // Get item from localStorage
    getItem(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(this.getKey(key));
            if (!item) return defaultValue;
            
            const parsed = JSON.parse(item);
            
            // Check version compatibility
            if (parsed.version !== this.version) {
                this.migrateData(key, parsed);
                return this.getItem(key, defaultValue);
            }
            
            return parsed.value;
        } catch (error) {
            console.error('Storage get error:', error);
            return defaultValue;
        }
    }

    // Remove item from localStorage
    removeItem(key) {
        try {
            localStorage.removeItem(this.getKey(key));
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    }

    // Clear all app data
    clearAll() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.prefix)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        } catch (error) {
            console.error('Storage clear error:', error);
            return false;
        }
    }

    // Get storage size
    getStorageSize() {
        let totalSize = 0;
        const keys = Object.keys(localStorage);
        
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                totalSize += localStorage.getItem(key).length;
            }
        });
        
        return {
            bytes: totalSize,
            kb: (totalSize / 1024).toFixed(2),
            mb: (totalSize / (1024 * 1024)).toFixed(2)
        };
    }

    // Comments Management
    getComments() {
        return this.getItem('comments', []);
    }

    saveComments(comments) {
        if (!Array.isArray(comments)) {
            throw new Error('Comments must be an array');
        }
        
        // Validate comments
        comments.forEach(comment => {
            if (!comment.id || !comment.author || !comment.content) {
                throw new Error('Invalid comment format');
            }
        });
        
        return this.setItem('comments', comments);
    }

    addComment(comment) {
        const comments = this.getComments();
        const newComment = {
            id: Date.now(),
            author: comment.author,
            content: comment.content,
            timestamp: new Date().toISOString(),
            likes: 0,
            replies: []
        };
        
        comments.push(newComment);
        this.saveComments(comments);
        return newComment;
    }

    deleteComment(commentId) {
        const comments = this.getComments();
        const filteredComments = comments.filter(c => c.id !== commentId);
        return this.saveComments(filteredComments);
    }

    likeComment(commentId) {
        const comments = this.getComments();
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.likes = (comment.likes || 0) + 1;
            this.saveComments(comments);
            return comment.likes;
        }
        return 0;
    }

    // User Preferences
    getSettings() {
        return { ...this.defaultSettings, ...this.getItem('settings', {}) };
    }

    saveSettings(settings) {
        const currentSettings = this.getSettings();
        const newSettings = { ...currentSettings, ...settings };
        return this.setItem('settings', newSettings);
    }

    updateSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        return this.saveSettings(settings);
    }

    // User Profile
    getUserProfile() {
        return this.getItem('userProfile', {
            name: '',
            avatar: '',
            bio: '',
            favoriteCategories: [],
            blockedLinks: [],
            joinDate: new Date().toISOString()
        });
    }

    saveUserProfile(profile) {
        return this.setItem('userProfile', profile);
    }

    updateProfile(updates) {
        const profile = this.getUserProfile();
        const newProfile = { ...profile, ...updates };
        return this.saveUserProfile(newProfile);
    }

    // Favorites Management
    getFavorites() {
        return this.getItem('favorites', []);
    }

    addToFavorite(link) {
        const favorites = this.getFavorites();
        const exists = favorites.find(f => f.url === link.url);
        
        if (!exists) {
            favorites.push({
                ...link,
                addedAt: new Date().toISOString()
            });
            this.setItem('favorites', favorites);
            return true;
        }
        return false;
    }

    removeFromFavorite(url) {
        const favorites = this.getFavorites();
        const filtered = favorites.filter(f => f.url !== url);
        return this.setItem('favorites', filtered);
    }

    isFavorite(url) {
        const favorites = this.getFavorites();
        return favorites.some(f => f.url === url);
    }

    // History Management
    getHistory() {
        return this.getItem('history', []);
    }

    addToHistory(link) {
        const history = this.getHistory();
        
        // Remove if already exists
        const filtered = history.filter(h => h.url !== link.url);
        
        // Add to beginning
        filtered.unshift({
            ...link,
            visitedAt: new Date().toISOString()
        });
        
        // Keep only last 100 items
        const limited = filtered.slice(0, 100);
        
        return this.setItem('history', limited);
    }

    clearHistory() {
        return this.setItem('history', []);
    }

    // Search History
    getSearchHistory() {
        return this.getItem('searchHistory', []);
    }

    addToSearchHistory(query) {
        const history = this.getSearchHistory();
        
        // Remove if already exists
        const filtered = history.filter(h => h.query !== query);
        
        // Add to beginning
        filtered.unshift({
            query,
            searchedAt: new Date().toISOString()
        });
        
        // Keep only last 50 items
        const limited = filtered.slice(0, 50);
        
        return this.setItem('searchHistory', limited);
    }

    clearSearchHistory() {
        return this.setItem('searchHistory', []);
    }

    // Statistics
    getStatistics() {
        return this.getItem('statistics', {
            totalVisits: 0,
            categoriesVisited: {},
            linksClicked: {},
            timeSpent: 0,
            lastVisit: null,
            joinDate: new Date().toISOString()
        });
    }

    updateStatistics(update) {
        const stats = this.getStatistics();
        const newStats = { ...stats, ...update };
        return this.setItem('statistics', newStats);
    }

    incrementLinkClick(linkUrl, categoryName) {
        const stats = this.getStatistics();
        
        if (!stats.linksClicked[linkUrl]) {
            stats.linksClicked[linkUrl] = 0;
        }
        stats.linksClicked[linkUrl]++;
        
        if (!stats.categoriesVisited[categoryName]) {
            stats.categoriesVisited[categoryName] = 0;
        }
        stats.categoriesVisited[categoryName]++;
        
        stats.totalVisits++;
        stats.lastVisit = new Date().toISOString();
        
        return this.setItem('statistics', stats);
    }

    // Cache Management
    getCache(key) {
        return this.getItem(`cache_${key}`);
    }

    setCache(key, data, ttl = 300000) { // 5 minutes default TTL
        const cacheData = {
            data,
            expiresAt: Date.now() + ttl
        };
        return this.setItem(`cache_${key}`, cacheData);
    }

    isCacheExpired(key) {
        const cache = this.getCache(key);
        if (!cache) return true;
        return Date.now() > cache.expiresAt;
    }

    clearExpiredCache() {
        const keys = Object.keys(localStorage);
        let cleared = 0;
        
        keys.forEach(key => {
            if (key.startsWith(this.prefix) && key.includes('cache_')) {
                try {
                    const item = JSON.parse(localStorage.getItem(key));
                    if (Date.now() > item.value.expiresAt) {
                        localStorage.removeItem(key);
                        cleared++;
                    }
                } catch (error) {
                    // Remove invalid cache items
                    localStorage.removeItem(key);
                    cleared++;
                }
            }
        });
        
        return cleared;
    }

    // Data Migration
    migrateData(key, oldData) {
        console.log(`Migrating data for key: ${key}`);
        
        // Example migration logic
        if (key === 'settings' && oldData.version === '0.9.0') {
            // Migrate from version 0.9.0 to 1.0.0
            const newSettings = { ...oldData.value };
            if (!newSettings.compactMode) {
                newSettings.compactMode = false;
            }
            this.setItem(key, newSettings);
        }
    }

    // Export/Import
    exportData() {
        const data = {
            settings: this.getSettings(),
            userProfile: this.getUserProfile(),
            favorites: this.getFavorites(),
            history: this.getHistory(),
            searchHistory: this.getSearchHistory(),
            statistics: this.getStatistics(),
            comments: this.getComments(),
            exportedAt: new Date().toISOString(),
            version: this.version
        };
        
        return JSON.stringify(data, null, 2);
    }

    importData(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            
            // Validate data structure
            const requiredKeys = ['settings', 'userProfile', 'favorites', 'history', 'comments'];
            for (const key of requiredKeys) {
                if (!data.hasOwnProperty(key)) {
                    throw new Error(`Missing required key: ${key}`);
                }
            }
            
            // Import data
            this.setItem('settings', data.settings);
            this.setItem('userProfile', data.userProfile);
            this.setItem('favorites', data.favorites);
            this.setItem('history', data.history);
            this.setItem('searchHistory', data.searchHistory || []);
            this.setItem('statistics', data.statistics);
            this.setItem('comments', data.comments);
            
            return true;
        } catch (error) {
            console.error('Import error:', error);
            return false;
        }
    }

    // Backup and Restore
    createBackup() {
        const backup = {
            data: this.exportData(),
            timestamp: new Date().toISOString(),
            version: this.version
        };
        
        const backupKey = `backup_${Date.now()}`;
        this.setItem(backupKey, backup);
        
        return backupKey;
    }

    restoreBackup(backupKey) {
        const backup = this.getItem(backupKey);
        if (!backup) {
            throw new Error('Backup not found');
        }
        
        return this.importData(backup.data);
    }

    listBackups() {
        const keys = Object.keys(localStorage);
        const backups = [];
        
        keys.forEach(key => {
            if (key.startsWith(this.prefix) && key.includes('backup_')) {
                const backup = this.getItem(key);
                backups.push({
                    key,
                    timestamp: backup.timestamp,
                    version: backup.version
                });
            }
        });
        
        return backups.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    deleteBackup(backupKey) {
        return this.removeItem(backupKey);
    }

    // Storage Maintenance
    cleanup() {
        let cleaned = 0;
        
        // Clear expired cache
        cleaned += this.clearExpiredCache();
        
        // Clean old history (keep last 30 days)
        const history = this.getHistory();
        const thirtyDaysAgo = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000));
        const filteredHistory = history.filter(item => 
            new Date(item.visitedAt) > thirtyDaysAgo
        );
        
        if (filteredHistory.length !== history.length) {
            this.setItem('history', filteredHistory);
            cleaned++;
        }
        
        // Clean old search history (keep last 7 days)
        const searchHistory = this.getSearchHistory();
        const sevenDaysAgo = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000));
        const filteredSearchHistory = searchHistory.filter(item => 
            new Date(item.searchedAt) > sevenDaysAgo
        );
        
        if (filteredSearchHistory.length !== searchHistory.length) {
            this.setItem('searchHistory', filteredSearchHistory);
            cleaned++;
        }
        
        return cleaned;
    }

    // Debug utilities
    debug() {
        return {
            size: this.getStorageSize(),
            keys: Object.keys(localStorage).filter(key => key.startsWith(this.prefix)),
            version: this.version,
            settings: this.getSettings(),
            statistics: this.getStatistics()
        };
    }
}

// Create singleton instance
const storageManager = new StorageManager();

// Auto-cleanup on load
setTimeout(() => {
    storageManager.cleanup();
}, 5000);

// Export for global access
window.StorageManager = StorageManager;
window.storageManager = storageManager;

// Export individual functions for convenience
export const {
    getComments,
    saveComments,
    addComment,
    deleteComment,
    likeComment,
    getSettings,
    saveSettings,
    updateSetting,
    getUserProfile,
    saveUserProfile,
    updateProfile,
    getFavorites,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
    getHistory,
    addToHistory,
    clearHistory,
    getSearchHistory,
    addToSearchHistory,
    clearSearchHistory,
    getStatistics,
    updateStatistics,
    incrementLinkClick,
    exportData,
    importData,
    createBackup,
    restoreBackup,
    listBackups,
    deleteBackup,
    cleanup,
    debug
} = storageManager;
