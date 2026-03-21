// TEST POPUP - Direct inline version - DISABLED
// Old alpha beta popup replaced by new beta release popup

// Test function - call from console
window.testPopup = function() {
    // Disabled - using new beta popup instead
    console.log('Old alpha popup disabled - using new beta popup');
};

// Welcome Popup Function - DISABLED
window.showWelcomePopup = function() {
    // Disabled - using new beta popup instead
    console.log('Old alpha popup disabled - using new beta popup');
    return;
};
    
    // Create popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'welcome-popup';
    popupOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    `;
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 52, 96, 0.95) 100%);
        border: 2px solid rgba(102, 126, 234, 0.3);
        border-radius: 24px;
        padding: 50px;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
        text-align: center;
        color: white;
        transform: scale(0.7) translateY(50px) rotateX(10deg);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0;
        position: relative;
        overflow: hidden;
    `;
    
    // Add animated background elements
    popupContent.innerHTML = `
        <div style="
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
            animation: rotate 20s linear infinite;
            pointer-events: none;
        "></div>
        
        <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary-color, #667eea), var(--secondary-color, #764ba2), var(--accent-color, #e94560), transparent);
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
            pointer-events: none;
        "></div>
        
        <div style="
            position: relative;
            z-index: 1;
        ">
            <div style="
                width: 80px;
                height: 80px;
                margin: 0 auto 30px;
                background: linear-gradient(135deg, #667eea, #764ba2, #e94560);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
                box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                animation: float 3s ease-in-out infinite;
            ">🚀</div>
            
            <h2 style="
                font-size: 2.5rem;
                margin-bottom: 20px;
                color: #ffffff;
                font-weight: 800;
                background: linear-gradient(135deg, #667eea, #764ba2, #e94560);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-size: 200% 200%;
                animation: gradientShift 3s ease-in-out infinite;
                text-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
            ">ULTIMATELINKS 0.5.0 ALPHA BETA</h2>
            
            <div style="
                display: inline-block;
                padding: 8px 20px;
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(34, 197, 94, 0.2));
                border: 1px solid rgba(16, 185, 129, 0.3);
                border-radius: 20px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #10b981;
                animation: pulse 2s ease-in-out infinite;
            ">DEVELOPMENT RELEASE</div>
            
            <p style="
                font-size: 1.2rem;
                margin-bottom: 15px;
                color: #94a3b8;
                font-weight: 500;
            ">⚠️ Still in Development</p>
            
            <div style="
                margin: 30px 0;
                padding: 20px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            ">
                <p style="
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                    color: #ffffff;
                    font-weight: 600;
                ">🎨 Upgraded UI • 🔧 New Tools Category • 📱 Enhanced Mobile</p>
                <p style="
                    font-size: 0.95rem;
                    color: #94a3b8;
                    opacity: 0.9;
                ">🔗 70+ Links • 11 Categories • Major UI Overhaul</p>
            </div>
            
            <button id="yippee-close-btn" style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #e94560 100%);
                border: none;
                padding: 18px 40px;
                font-size: 1.2rem;
                font-weight: 800;
                border-radius: 16px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-transform: uppercase;
                letter-spacing: 2px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                pointer-events: auto;
                transform: translateY(0) scale(1);
                color: white;
                margin-top: 20px;
            ">
                <span style="position: relative; z-index: 1;">🎊 EXPLORE BETA</span>
                <div style="
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                "></div>
            </button>
        </div>
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
            closeBtn.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
            closeBtn.style.background = 'linear-gradient(135deg, #764ba2 0%, #e94560 50%, #667eea 100%)';
            // Animate the shimmer effect
            const shimmer = closeBtn.querySelector('div');
            if (shimmer) {
                shimmer.style.left = '100%';
            }
        };
        
        closeBtn.onmouseleave = function() {
            closeBtn.style.transform = 'translateY(0) scale(1)';
            closeBtn.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
            closeBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #e94560 100%)';
            // Reset shimmer
            const shimmer = closeBtn.querySelector('div');
            if (shimmer) {
                shimmer.style.left = '-100%';
            }
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
                showNotification('🚀 Welcome to ULTIMATELINKS 0.5.0 ALPHA BETA!', 'success');
            }
        }, 400);
    }
};

// Auto-trigger popup - DISABLED
// window.addEventListener('load', function() {
//     setTimeout(() => {
//         showWelcomePopup();
//     }, 2500);
// });

console.log('POPUP: Old alpha beta popup disabled - using new beta popup');
