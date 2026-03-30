// Popup System JavaScript
class PopupManager {
    constructor() {
        this.popup = null
        this.overlay = null
        this.content = null
        this.closeBtn = null
        this.title = null
        this.body = null
    }

    init() {
        this.createPopupElements()
        this.attachEventListeners()
    }

    createPopupElements() {
        // Create overlay
        this.overlay = document.createElement('div')
        this.overlay.className = 'popup-overlay'
        document.body.appendChild(this.overlay)

        // Create popup content
        this.content = document.createElement('div')
        this.content.className = 'popup-content'
        this.overlay.appendChild(this.content)

        // Create popup header
        const header = document.createElement('div')
        header.className = 'popup-header'
        this.content.appendChild(header)

        // Create title
        this.title = document.createElement('h2')
        this.title.className = 'popup-title'
        this.title.textContent = '0.7.0 ALPHA BETA - 0.7.0 DEVELOPMENT RELEASE'
        header.appendChild(this.title)

        // Create close button
        this.closeBtn = document.createElement('button')
        this.closeBtn.className = 'popup-close'
        this.closeBtn.innerHTML = '✕'
        this.closeBtn.setAttribute('aria-label', 'Close popup')
        header.appendChild(this.closeBtn)

        // Create popup body
        this.body = document.createElement('div')
        this.body.className = 'popup-body'
        this.content.appendChild(this.body)

        // Add content
        this.body.innerHTML = `
            <h3>🚀 Major AI System Overhaul</h3>
            <ul>
                <li>Complete AI system overhaul with multi-provider support</li>
                <li>Advanced API fallback system - OpenRouter → HuggingFace → Replicate → LockLLM</li>
                <li>Real-time model switching - GEMMA-3, GPT-OSS-20b, GPT-OSS-120b</li>
                <li>Enhanced code detection with language-specific expert modes</li>
                <li>Removed fallback chains - direct API switching for better performance</li>
                <li>✨ NEW badge added to AI menu item</li>
                <li>🔗 Updated license links to correct GitHub repository</li>
                <li>🎨 Improved error handling and user feedback</li>
            </ul>
            
            <h3>🎨 Chat Functionality</h3>
            <ul>
                <li>Added Discord widget integration with server ID 1487910769776394343</li>
                <li>Channel ID 1487951675057508444 for #💬-general-chat</li>
                <li>1200x800px widget dimensions with responsive design</li>
                <li>JOIN DISCORD SERVER button in chat header</li>
                <li>Clean, focused interface for Discord integration</li>
            </ul>
        `
    }

    attachEventListeners() {
        // Close on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.hide()
            }
        })

        // Close on button click
        this.closeBtn.addEventListener('click', () => {
            this.hide()
        })

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hide()
            }
        })
    }

    show() {
        // Check if popup elements exist before showing
        if (!this.overlay || !this.content || !this.closeBtn || !this.title || !this.body) {
            console.error('❌ Popup elements not initialized, reinitializing...')
            this.init()
        }
        
        this.overlay.classList.add('active')
        this.content.classList.add('active')
        document.body.style.overflow = 'hidden'
        console.log('✅ Popup shown successfully')
    }

    hide() {
        this.overlay.classList.remove('active')
        this.content.classList.remove('active')
        document.body.style.overflow = ''
    }

    destroy() {
        if (this.overlay && this.overlay.parentNode) {
            this.overlay.parentNode.removeChild(this.overlay)
        }
        this.overlay = null
        this.content = null
        this.closeBtn = null
        this.title = null
        this.body = null
    }
}

// Initialize popup system
const popupManager = new PopupManager()

// Show popup on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎉 Popup system initialized')
    
    // Add debug button to manually trigger popup
    const debugBtn = document.createElement('button')
    debugBtn.textContent = '🚀 Show Update Popup'
    debugBtn.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 99998;
        padding: 8px 12px;
        background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    `
    document.body.appendChild(debugBtn)
    
    debugBtn.addEventListener('click', () => {
        console.log('🎯 Manual popup trigger clicked')
        // Use simple test popup instead
        showSimpleTestPopup()
    })
    
    console.log('🔧 Auto popup display disabled - use debug button')
})

// Simple test popup function
function showSimpleTestPopup() {
    // Create simple popup
    const popup = document.createElement('div')
    popup.className = 'test-popup'
    popup.innerHTML = `
        <h2>🚀 0.7.0 ALPHA BETA - 0.7.0 DEVELOPMENT RELEASE</h2>
        <h3>🎯 Major AI System Overhaul</h3>
        <p>Complete AI system overhaul with multi-provider support</p>
        <p>Advanced API fallback system - OpenRouter → HuggingFace → Replicate → LockLLM</p>
        <p>Real-time model switching - GEMMA-3, GPT-OSS-20b, GPT-OSS-120b</p>
        <p>Enhanced code detection with language-specific expert modes</p>
        <p>✨ NEW badge added to AI menu item</p>
        <p>🔗 Updated license links to correct GitHub repository</p>
        <p>🎨 Improved error handling and user feedback</p>
        
        <h3>🎨 Chat Functionality</h3>
        <p>Added Discord widget integration with server ID 1487910769776394343</p>
        <p>Channel ID 1487951675057508444 for #💬-general-chat</p>
        <p>1200x800px widget dimensions with responsive design</p>
        <p>JOIN DISCORD SERVER button in chat header</p>
        <p>Clean, focused interface for Discord integration</p>
        
        <button onclick="this.parentElement.remove()" style="
            margin-top: 20px;
            padding: 10px 20px;
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
        ">Close Popup</button>
    `
    
    document.body.appendChild(popup)
    
    // Show popup
    setTimeout(() => {
        popup.classList.add('active')
    }, 100)
}
