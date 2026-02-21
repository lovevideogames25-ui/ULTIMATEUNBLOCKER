// Card Components - ULTIMATE UNBLOCKER

class CardManager {
    constructor() {
        this.cards = new Map();
        this.init();
    }

    init() {
        // Auto-initialize cards with data attributes
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeCards();
        });
    }

    initializeCards() {
        const cardElements = document.querySelectorAll('[data-card]');
        cardElements.forEach(element => {
            const type = element.dataset.card;
            this.createCard(element, type);
        });
    }

    createCard(element, type) {
        const cardTypes = {
            stats: this.createStatsCard,
            profile: this.createProfileCard,
            info: this.createInfoCard,
            testimonial: this.createTestimonialCard,
            pricing: this.createPricingCard
        };

        if (cardTypes[type]) {
            cardTypes[type].call(this, element);
        }
    }

    createStatsCard(element) {
        const number = element.dataset.number || '0';
        const label = element.dataset.label || 'Statistic';
        const icon = element.dataset.icon || '📊';
        const color = element.dataset.color || 'primary';

        element.className = `card stats-card card-${color}`;
        element.innerHTML = `
            <div class="card-icon">${icon}</div>
            <span class="stats-number">${number}</span>
            <span class="stats-label">${label}</span>
        `;
    }

    createProfileCard(element) {
        const name = element.dataset.name || 'User';
        const bio = element.dataset.bio || 'User bio';
        const avatar = element.dataset.avatar || '👤';
        const role = element.dataset.role || '';

        element.className = 'card profile-card';
        element.innerHTML = `
            <div class="profile-avatar">${avatar}</div>
            <h3 class="profile-name">${name}</h3>
            ${role ? `<p class="profile-role">${role}</p>` : ''}
            <p class="profile-bio">${bio}</p>
        `;
    }

    createInfoCard(element) {
        const title = element.dataset.title || 'Info';
        const description = element.dataset.description || '';
        const icon = element.dataset.icon || 'ℹ️';

        element.className = 'card info-card';
        element.innerHTML = `
            <div class="card-icon">${icon}</div>
            <div class="info-content">
                <h4 class="info-title">${title}</h4>
                <p class="info-description">${description}</p>
            </div>
        `;
    }

    createTestimonialCard(element) {
        const content = element.dataset.content || '';
        const author = element.dataset.author || 'Anonymous';
        const role = element.dataset.role || '';

        element.className = 'card testimonial-card';
        element.innerHTML = `
            <div class="testimonial-content">"${content}"</div>
            <div class="testimonial-author">${author}</div>
            ${role ? `<div class="testimonial-role">${role}</div>` : ''}
        `;
    }

    createPricingCard(element) {
        const title = element.dataset.title || 'Plan';
        const price = element.dataset.price || '$0';
        const period = element.dataset.period || '/month';
        const features = element.dataset.features ? element.dataset.features.split(',') : [];
        const featured = element.dataset.featured === 'true';

        element.className = `card pricing-card ${featured ? 'featured' : ''}`;
        element.innerHTML = `
            ${featured ? '<div class="pricing-badge">POPULAR</div>' : ''}
            <h3 class="card-title">${title}</h3>
            <div class="pricing-price">${price}<span class="pricing-period">${period}</span></div>
            <ul class="pricing-features">
                ${features.map(feature => `<li>${feature.trim()}</li>`).join('')}
            </ul>
            <button class="btn btn-primary" style="width: 100%;">Choose Plan</button>
        `;
    }

    // Dynamic card creation
    create(element, options) {
        const {
            type = 'default',
            title,
            content,
            icon,
            actions = [],
            variant = 'primary'
        } = options;

        element.className = `card card-${variant}`;
        
        let html = '';
        
        if (icon || title) {
            html += '<div class="card-header">';
            if (icon) html += `<div class="card-icon">${icon}</div>`;
            if (title) html += `<h3 class="card-title">${title}</h3>`;
            html += '</div>';
        }
        
        if (content) {
            html += `<div class="card-body"><div class="card-text">${content}</div></div>`;
        }
        
        if (actions.length > 0) {
            html += '<div class="card-footer"><div class="card-actions">';
            actions.forEach(action => {
                html += `<button class="btn btn-${action.type || 'secondary'}" onclick="${action.onclick || ''}">${action.text}</button>`;
            });
            html += '</div></div>';
        }
        
        element.innerHTML = html;
        return element;
    }

    // Grid layout helper
    createGrid(container, cards, columns = 3) {
        container.className = `card-grid card-grid-${columns}`;
        container.innerHTML = '';
        
        cards.forEach(cardData => {
            const cardElement = document.createElement('div');
            this.create(cardElement, cardData);
            container.appendChild(cardElement);
        });
    }

    // Masonry layout
    createMasonry(container, cards) {
        container.className = 'masonry';
        container.innerHTML = '';
        
        cards.forEach(cardData => {
            const cardElement = document.createElement('div');
            cardElement.className = 'masonry-item';
            this.create(cardElement, cardData);
            container.appendChild(cardElement);
        });
    }
}

// Create global instance
const cardManager = new CardManager();

// Export for global access
window.cardManager = cardManager;
window.CardManager = CardManager;
