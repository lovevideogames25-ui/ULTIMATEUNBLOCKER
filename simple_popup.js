// TEST POPUP - Direct inline version

// Test function - call from console
window.testPopup = function() {
    showWelcomePopup();
};

// Welcome Popup Function
window.showWelcomePopup = function() {
    // Remove any existing popup
    const existing = document.getElementById('welcome-popup');
    if (existing) {
        existing.remove();
    }
    
    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'welcome-popup';
    popupOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(15px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        pointer-events: none;
    `;
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        border: 3px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        text-align: center;
        color: white;
        transform: scale(0.8) translateY(20px);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        opacity: 0;
    `;
    
    popupContent.innerHTML = `
        <h2 style="font-size: 2.2rem; margin-bottom: 20px; color: #10b981;">🎉 Welcome to ULTIMATELINKS! 🎉</h2>
        <p style="font-size: 1.1rem; margin-bottom: 20px; color: #94a3b8;">Your gateway to unlimited access</p>
        <p style="font-size: 1.1rem; margin-bottom: 20px;">We've added <strong style="color: #10b981; font-size: 1.3rem;">8 new links</strong> today!</p>
        <p style="font-size: 1.1rem; margin-bottom: 30px;">Total collection: <strong style="color: #10b981; font-size: 1.3rem;">70+ verified links</strong></p>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">
            <div style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255, 255, 255, 0.12); border-radius: 15px; padding: 20px 10px;">
                <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin-bottom: 8px;">26</div>
                <div style="font-size: 0.9rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Games</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255, 255, 255, 0.12); border-radius: 15px; padding: 20px 10px;">
                <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin-bottom: 8px;">19</div>
                <div style="font-size: 0.9rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Proxies</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.08); border: 2px solid rgba(255, 255, 255, 0.12); border-radius: 15px; padding: 20px 10px;">
                <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin-bottom: 8px;">4</div>
                <div style="font-size: 0.9rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Soundboards</div>
            </div>
        </div>
        
        <button id="yippee-close-btn" style="
            background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
            border: none;
            padding: 20px 40px;
            font-size: 1.4rem;
            font-weight: 800;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: white;
            box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
            pointer-events: auto;
            transform: translateY(0) scale(1);
        ">
            🎊 YIPPIE
        </button>
    `;
    
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);
    
    // Show popup with animation
    setTimeout(() => {
        popupOverlay.style.opacity = '1';
        popupOverlay.style.pointerEvents = 'auto';
        
        setTimeout(() => {
            popupContent.style.opacity = '1';
            popupContent.style.transform = 'scale(1) translateY(0)';
        }, 100);
    }, 100);
    
    // Add click event to button
    const closeBtn = document.getElementById('yippee-close-btn');
    if (closeBtn) {
        closeBtn.onclick = function() {
            closeWelcomePopup();
        };
        
        closeBtn.onmouseenter = function() {
            closeBtn.style.transform = 'translateY(-3px) scale(1.05)';
            closeBtn.style.boxShadow = '0 15px 35px rgba(245, 158, 11, 0.5)';
        };
        
        closeBtn.onmouseleave = function() {
            closeBtn.style.transform = 'translateY(0) scale(1)';
            closeBtn.style.boxShadow = '0 10px 25px rgba(245, 158, 11, 0.3)';
        };
    }
};

// Close Welcome Popup
window.closeWelcomePopup = function() {
    const popupOverlay = document.getElementById('welcome-popup');
    const popupContent = popupOverlay ? popupOverlay.querySelector('div') : null;
    
    if (popupOverlay) {
        // Fade out animation
        popupOverlay.style.opacity = '0';
        popupOverlay.style.pointerEvents = 'none';
        
        if (popupContent) {
            popupContent.style.opacity = '0';
            popupContent.style.transform = 'scale(0.8) translateY(20px)';
        }
        
        setTimeout(() => {
            if (document.body.contains(popupOverlay)) {
                document.body.removeChild(popupOverlay);
            }
            // Show celebration notification using website's notification system
            if (typeof showNotification === 'function') {
                showNotification('🎊 YIPPIE! Welcome to ULTIMATELINKS!', 'success');
            }
        }, 400);
    }
};

// Auto-trigger popup
window.addEventListener('load', function() {
    setTimeout(() => {
        showWelcomePopup();
    }, 2500);
});

console.log('POPUP: Script loaded, testPopup() available');
