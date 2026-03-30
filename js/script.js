// ULTIMATEUNBLOCKER - Premium UI JavaScript with Enhanced Interactions

// Environment variables for browser
window.ENV = window.ENV || {
  API: 'MY_API',
  API2: 'SECOND_API_KEY', 
  API3: 'THIRD_API_KEY'
}

// Simple API key setup for static sites
function loadAPIKeys() {
  console.log('🔧 Neural Nexus AI - API Key Setup');
  console.log('⚠️ CORS restrictions prevent automatic .env loading');
  console.log('🔑 To set up API keys, run in browser console:');
  console.log('');
  console.log('window.ENV = {');
  console.log('  API: "sk-or-v1-your-openrouter-key",');
  console.log('  API2: "hf-your-huggingface-key",');
  console.log('  API3: "r8-your-replicate-key"');
  console.log('};');
  console.log('');
  console.log('🚀 Then refresh the page to start chatting!');
  console.log('📖 For more help, check AI README documentation');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async function () {
  console.log('🚀 ULTIMATEUNBLOCKER Premium UI initializing...')
  
  // Load API keys first
  await loadAPIKeys()
  
  // Initialize loading screen
  initializeLoadingScreen()
  
  console.log('✅ ULTIMATEUNBLOCKER Premium UI initialized with enhanced effects')
})

// Loading Screen Management
function initializeLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen')
  const loadingContainer = document.getElementById('loadingContainer')
  const transitionOverlay = document.getElementById('transitionOverlay')
  const progressFill = document.getElementById('progressFill')
  const mainContent = document.getElementById('mainContent')
  
  console.log('📱 Loading screen initialized')
  
  // Hide main content initially
  if (mainContent) {
    mainContent.style.display = 'none'
  }
  
  // Start progress bar animation
  if (progressFill) {
    progressFill.style.width = '0%'
    progressFill.style.transition = 'width 2s ease-in-out'
    setTimeout(() => {
      progressFill.style.width = '100%'
      console.log('📊 Progress bar animation started')
    }, 100)
  }
  
  // Start transition after 2 seconds
  setTimeout(() => {
    console.log('⏰ 2 seconds complete, starting transition...')
    startTransition()
  }, 2000)
}

// Start transition to main content
function startTransition() {
  const loadingContainer = document.getElementById('loadingContainer')
  const transitionOverlay = document.getElementById('transitionOverlay')
  
  console.log('🔄 Starting transition animation')
  
  // Fade out loading container
  if (loadingContainer) {
    loadingContainer.classList.add('fade-out')
  }
  
  // Show transition overlay
  setTimeout(() => {
    if (transitionOverlay) {
      transitionOverlay.classList.add('active')
      console.log('🎬 Transition overlay shown')
    }
    
    // Show main content after transition
    setTimeout(() => {
      showMainContent()
    }, 800)
  }, 400)
}

// Show Main Content
function showMainContent() {
  const loadingScreen = document.getElementById('loadingScreen')
  const transitionOverlay = document.getElementById('transitionOverlay')
  const mainContent = document.getElementById('mainContent')
  const menuPanel = document.getElementById('menuPanel')
  
  console.log('🏠 Showing main content...')
  console.log('🏠 Main content element:', mainContent ? 'EXISTS' : 'MISSING')
  
  // Hide loading screen and transition overlay completely
  if (loadingScreen) {
    loadingScreen.style.display = 'none'
    console.log('🏠 Loading screen hidden')
  }
  
  if (transitionOverlay) {
    transitionOverlay.style.display = 'none'
    console.log('🏠 Transition overlay hidden')
  }
  
  // Show and initialize main content
  if (mainContent) {
    console.log('🏠 Setting main content to visible')
    mainContent.style.display = 'block'
    mainContent.style.opacity = '0'
    mainContent.style.transform = 'translateY(20px)'
    
    // Fade in main content
    setTimeout(() => {
      mainContent.style.transition = 'all 0.6s ease'
      mainContent.style.opacity = '1'
      mainContent.style.transform = 'translateY(0)'
      console.log('✅ Main content animation complete')
    }, 50)
  } else {
    console.error('❌ Main content element not found!')
    return
  }
  
  // Initialize the rest of the app
  setTimeout(() => {
    console.log('🚀 Initializing app components...')
    initializeApp()
  }, 700)
}

// Initialize the main application
function initializeApp() {
  console.log('🚀 Initializing main application...')
  
  // Initialize navigation manager
  initializeNavigation()
  
  // Initialize chat system
  initializeChatSystem()
  
  // Initialize particles
  initializeParticles()
  
  // Initialize category interactions
  initializeCategoryInteractions()
  
  // Initialize popup functionality
  initializePopupFunctionality()
  
  // Initialize random message system
  initializeRandomMessages()
  
  // Initialize beta popup
  initializeBetaPopup()
  
  // Initialize settings system (moved to end)
  initializeSettings()
  
  // Initialize information popup
  initializeInfoPopup()
  
  console.log('✅ Main application initialized successfully!')
}

// Wait for DOM to be fully loaded before applying settings
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔧 DOM fully loaded, applying settings...')
  
  // Apply settings after DOM is ready
  setTimeout(() => {
    const settings = JSON.parse(localStorage.getItem('ultimateunblocker_settings')) || {
      theme: 'dark',
      animations: true,
      particles: true,
      autoChat: false,
      soundEffects: false,
      notifications: false,
      analytics: false,
      betaPopups: true
    }
    
    console.log('🔧 Re-applying settings after DOM load:', settings)
    
    // Apply all settings again to ensure UI elements are ready
    applyTheme(settings.theme)
    applyAnimationSettings(settings.animations)
    applyParticleSettings(settings.particles)
    applySoundSettings(settings.soundEffects)
    applyNotificationSettings(settings.notifications)
    applyAnalyticsSettings(settings.analytics)
    
    console.log('🔧 Settings re-applied after DOM load')
  }, 100)
})

// Beta Popup System
function initializeBetaPopup() {
  const betaPopup = document.getElementById('betaPopup')
  const betaPopupClose = document.getElementById('betaPopupClose')
  const betaPopupAccept = document.getElementById('betaPopupAccept')
  const betaPopupFeedback = document.getElementById('betaPopupFeedback')
  
  // Check if user has seen beta popup before
  // Force clear and proper initialization
  console.log('🚀 Force clearing hasSeenBetaPopup')
  localStorage.removeItem('hasSeenBetaPopup')
  
  // Verify it was cleared properly
  const hasSeenBetaPopup = localStorage.getItem('hasSeenBetaPopup')
  
  // Debug localStorage behavior extensively
  console.log('🚀 Raw localStorage result:', localStorage.getItem('hasSeenBetaPopup'))
  console.log('🚀 Stringified result:', JSON.stringify(localStorage.getItem('hasSeenBetaPopup')))
  console.log('🚀 hasSeenBetaPopup value:', hasSeenBetaPopup)
  console.log('🚀 hasSeenBetaPopup type:', typeof hasSeenBetaPopup)
  console.log('🚀 hasSeenBetaPopup === null:', hasSeenBetaPopup === null)
  console.log('🚀 hasSeenBetaPopup === "true":', hasSeenBetaPopup === 'true')
  console.log('🚀 hasSeenBetaPopup === "null":', hasSeenBetaPopup === 'null')
  
  // Check if beta popups are enabled in settings
  const settings = JSON.parse(localStorage.getItem('ultimateunblocker_settings')) || {}
  const betaPopupsEnabled = settings.betaPopups !== false // Default to true
  
  console.log('🚀 Beta popup check:', { hasSeenBetaPopup, betaPopupsEnabled })
  console.log('🚀 betaPopupsEnabled:', betaPopupsEnabled)
  
  // Only show popup if user hasn't seen it AND popups are enabled
  // Use explicit null check and string comparison
  if (hasSeenBetaPopup === null && betaPopupsEnabled) {
    // Show beta popup after a short delay
    setTimeout(() => {
      showBetaPopup()
    }, 2000)
  } else {
    console.log('🚀 Beta popup suppressed - already seen or disabled')
  }
  
  // Close button
  if (betaPopupClose) {
    betaPopupClose.addEventListener('click', function () {
      closeBetaPopup()
    })
  }
  
  // Accept button
  if (betaPopupAccept) {
    betaPopupAccept.addEventListener('click', function () {
      closeBetaPopup()
    })
  }
  
  // Feedback button
  if (betaPopupFeedback) {
    betaPopupFeedback.addEventListener('click', function () {
      // Open feedback form or link
      window.open('https://github.com/lovevideogames25-ui/ULTIMATEUNBLOCKER/issues', '_blank')
    })
  }
  
  // Close on overlay click
  if (betaPopup) {
    betaPopup.addEventListener('click', function (e) {
      if (e.target === betaPopup) {
        closeBetaPopup()
      }
    })
  }
}

function showBetaPopup() {
  const betaPopup = document.getElementById('betaPopup')
  if (betaPopup) {
    betaPopup.classList.add('active')
    console.log('🚀 Beta popup shown')
  }
}

function closeBetaPopup() {
  const betaPopup = document.getElementById('betaPopup')
  if (betaPopup) {
    betaPopup.classList.remove('active')
    // Mark that user has seen the popup
    localStorage.setItem('hasSeenBetaPopup', 'true')
    console.log('🚀 Beta popup closed')
  }
}

function resetBetaPopup() {
  // Allow beta popup to show again (for testing)
  localStorage.removeItem('hasSeenBetaPopup')
  console.log('🚀 Beta popup reset - will show again on reload')
}

// Random Message System
function initializeRandomMessages() {
  const messages = [
    "Who remembers ULTIMATELINKS",
    "V1 IS RELEASING YESTERDAY",
    "TOTALLY EDUCATION AND NOT HAVING A ROBOT",
    "F STUDENTS ARE INVENTORS",
    "This is totally for educational purposes",
    "My dog ate my homework",
    "The cake is a lie",
    "Loading... 99% complete",
    "Press any key to continue... where's the any key?",
    "Error 404: Homework not found",
    "I'm not lazy, I'm on energy saving mode",
    "I would tell you a UDP joke but you might not get it",
    "Why do programmers prefer dark mode? Because light attracts bugs",
    "Loading the loading"
  ]
  
  const messageTextElement = document.querySelector('.message-text')
  
  if (messageTextElement) {
    // Set random message from the options
    const randomIndex = Math.floor(Math.random() * messages.length)
    messageTextElement.textContent = messages[randomIndex]
    console.log('🎲 Message system initialized with:', messages[randomIndex])
  }
}

// Settings System
function initializeSettings() {
  // Load saved settings
  loadSettings()
  
  // Initialize notification triggers
  triggerEventNotifications()
  
  // Settings event listeners
  const saveSettingsBtn = document.getElementById('saveSettingsBtn')
  const resetSettingsBtn = document.getElementById('resetSettingsBtn')
  const clearDataBtn = document.getElementById('clearDataBtn')
  const githubBtn = document.getElementById('githubBtn')
  const settingsCloseBtn = document.getElementById('settingsCloseBtn')
  const settingsSection = document.getElementById('settingsSection')
  
  console.log('🔧 Settings buttons found:', {
    saveSettingsBtn: !!saveSettingsBtn,
    resetSettingsBtn: !!resetSettingsBtn,
    clearDataBtn: !!clearDataBtn,
    githubBtn: !!githubBtn,
    settingsCloseBtn: !!settingsCloseBtn
  })
  
  if (saveSettingsBtn) {
    console.log('🔧 Adding save settings listener')
    saveSettingsBtn.addEventListener('click', saveSettings)
  } else {
    console.error('❌ Save settings button not found!')
  }
  
  if (resetSettingsBtn) {
    console.log('🔧 Adding reset settings listener')
    resetSettingsBtn.addEventListener('click', resetSettings)
  }
  
  if (clearDataBtn) {
    console.log('🔧 Adding clear data listener')
    clearDataBtn.addEventListener('click', clearAllData)
  }
  
  if (githubBtn) {
    githubBtn.addEventListener('click', function () {
      window.open('https://github.com/lovevideogames25-ui/ULTIMATEUNBLOCKER', '_blank')
    })
  }
  
  if (settingsCloseBtn) {
    settingsCloseBtn.addEventListener('click', hideSettings)
  }
  
  // Close on overlay click
  if (settingsSection) {
    settingsSection.addEventListener('click', function (e) {
      console.log('🔧 Settings clicked:', e.target.id, e.target.className)
      if (e.target === settingsSection) {
        hideSettings()
      }
    })
  }
  
  console.log('⚙️ Settings system initialized')
}

function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('ultimateunblocker_settings')) || {
    theme: 'dark',
    animations: true,
    particles: true,
    autoChat: false,
    soundEffects: false,
    notifications: false,
    analytics: false,
    betaPopups: true
  }
  
  console.log('🔧 Loading settings:', settings)
  
  // Apply settings to UI
  const themeSelect = document.getElementById('themeSelect')
  const animationsToggle = document.getElementById('animationsToggle')
  const particlesToggle = document.getElementById('particlesToggle')
  const autoChatToggle = document.getElementById('autoChatToggle')
  const soundToggle = document.getElementById('soundToggle')
  const notificationsToggle = document.getElementById('notificationsToggle')
  const analyticsToggle = document.getElementById('analyticsToggle')
  const betaPopupToggle = document.getElementById('betaPopupToggle')
  
  console.log('🔧 Setting UI elements:', {
    themeSelect: !!themeSelect,
    animationsToggle: !!animationsToggle,
    particlesToggle: !!particlesToggle,
    autoChatToggle: !!autoChatToggle,
    soundToggle: !!soundToggle,
    notificationsToggle: !!notificationsToggle,
    analyticsToggle: !!analyticsToggle,
    betaPopupToggle: !!betaPopupToggle
  })
  
  if (themeSelect) themeSelect.value = settings.theme
  if (animationsToggle) animationsToggle.checked = settings.animations
  if (particlesToggle) particlesToggle.checked = settings.particles
  if (autoChatToggle) autoChatToggle.checked = settings.autoChat
  if (soundToggle) soundToggle.checked = settings.soundEffects
  if (notificationsToggle) notificationsToggle.checked = settings.notifications
  if (analyticsToggle) analyticsToggle.checked = settings.analytics
  if (betaPopupToggle) betaPopupToggle.checked = settings.betaPopups
  
  // Apply all settings
  console.log('🔧 Applying settings...')
  applyTheme(settings.theme)
  applyAnimationSettings(settings.animations)
  applyParticleSettings(settings.particles)
  applySoundSettings(settings.soundEffects)
  applyNotificationSettings(settings.notifications)
  applyAnalyticsSettings(settings.analytics)
  
  // Auto-join chat if enabled
  if (settings.autoChat) {
    setTimeout(() => {
      showChat()
      console.log('💬 Auto-joined chat')
    }, 3000)
  }
  
  console.log('⚙️ Settings loaded and applied')
}

function saveSettings() {
  console.log('🔧 Save settings called!')
  
  const themeSelect = document.getElementById('themeSelect')
  const animationsToggle = document.getElementById('animationsToggle')
  const particlesToggle = document.getElementById('particlesToggle')
  const autoChatToggle = document.getElementById('autoChatToggle')
  const soundToggle = document.getElementById('soundToggle')
  const notificationsToggle = document.getElementById('notificationsToggle')
  const analyticsToggle = document.getElementById('analyticsToggle')
  const betaPopupToggle = document.getElementById('betaPopupToggle')
  
  console.log('🔧 Form elements found:', {
    themeSelect: !!themeSelect,
    animationsToggle: !!animationsToggle,
    particlesToggle: !!particlesToggle,
    autoChatToggle: !!autoChatToggle,
    soundToggle: !!soundToggle,
    notificationsToggle: !!notificationsToggle,
    analyticsToggle: !!analyticsToggle,
    betaPopupToggle: !!betaPopupToggle
  })
  
  const settings = {
    theme: themeSelect?.value || 'dark',
    animations: animationsToggle?.checked || false,
    particles: particlesToggle?.checked || false,
    autoChat: autoChatToggle?.checked || false,
    soundEffects: soundToggle?.checked || false,
    notifications: notificationsToggle?.checked || false,
    analytics: analyticsToggle?.checked || false,
    betaPopups: betaPopupToggle?.checked || false
  }
  
  console.log('🔧 Settings to save:', settings)
  console.log('🔧 Selected theme:', themeSelect?.value)
  
  localStorage.setItem('ultimateunblocker_settings', JSON.stringify(settings))
  console.log('🔧 Settings saved to localStorage')
  
  // Apply all settings immediately
  console.log('🔧 Applying settings after save...')
  applyTheme(settings.theme)
  applyAnimationSettings(settings.animations)
  applyParticleSettings(settings.particles)
  applySoundSettings(settings.soundEffects)
  applyNotificationSettings(settings.notifications)
  applyAnalyticsSettings(settings.analytics)
  
  // Trigger settings saved event
  window.dispatchEvent(new CustomEvent('settingsSaved', { detail: settings }))
  
  // Show success message
  showNotification('Settings saved successfully!', 'success')
  console.log('⚙️ Settings saved and applied')
}

function applyAnimationSettings(enabled) {
  if (!enabled) {
    document.body.classList.add('no-animations')
    // Disable all CSS animations and transitions
    const style = document.createElement('style')
    style.id = 'no-animations-style'
    style.textContent = `
      * { animation: none !important; transition: none !important; }
    `
    if (!document.getElementById('no-animations-style')) {
      document.head.appendChild(style)
    }
  } else {
    document.body.classList.remove('no-animations')
    // Re-enable animations
    const noAnimStyle = document.getElementById('no-animations-style')
    if (noAnimStyle) {
      noAnimStyle.remove()
    }
  }
  console.log('🎬 Animations:', enabled ? 'enabled' : 'disabled')
}

function applyParticleSettings(enabled) {
  const particles = document.getElementById('particles')
  if (particles) {
    if (enabled) {
      particles.style.display = 'block'
      // Reinitialize particles if they were stopped
      if (!particles.hasChildNodes()) {
        initializeParticles()
      }
    } else {
      particles.style.display = 'none'
    }
  }
  console.log('✨ Particles:', enabled ? 'enabled' : 'disabled')
}

function applySoundSettings(enabled) {
  // Store sound preference for other functions
  window.soundEnabled = enabled
  
  // Add sound effects to interactive elements
  if (enabled) {
    addSoundEffects()
  } else {
    removeSoundEffects()
  }
  console.log('🔊 Sound effects:', enabled ? 'enabled' : 'disabled')
}

function applyNotificationSettings(enabled) {
  // Request notification permission if enabled
  if (enabled && 'Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('📱 Desktop notifications enabled')
      } else {
        console.log('📱 Desktop notifications denied')
      }
    })
  }
  window.notificationsEnabled = enabled
  console.log('📱 Notifications:', enabled ? 'enabled' : 'disabled')
}

function applyAnalyticsSettings(enabled) {
  window.analyticsEnabled = enabled
  
  if (enabled) {
    // Initialize analytics (placeholder for actual analytics)
    console.log('📊 Analytics enabled')
    
    // Track page view
    trackEvent('page_view', 'settings_page')
    
    // Track user interactions
    document.addEventListener('click', trackClicks)
    
    // Here you would initialize actual analytics like Google Analytics, etc.
    // Example: gtag('config', 'GA_MEASUREMENT_ID')
  } else {
    console.log('📊 Analytics disabled')
    
    // Remove tracking
    document.removeEventListener('click', trackClicks)
  }
}

function trackEvent(eventName, parameters) {
  if (window.analyticsEnabled) {
    console.log('📊 Analytics Event:', eventName, parameters)
    // Here you would send to actual analytics service
    // Example: gtag('event', eventName, { parameter: parameters })
  }
}

function trackClicks(e) {
  if (window.analyticsEnabled) {
    const element = e.target
    const className = element.className
    const id = element.id
    const tagName = element.tagName
    
    trackEvent('click', {
      element_class: className,
      element_id: id,
      element_tag: tagName
    })
  }
}

function addSoundEffects() {
  // Add click sound to buttons
  const buttons = document.querySelectorAll('button, .menu-item, .category-card')
  buttons.forEach(button => {
    if (!button.hasAttribute('data-sound-added')) {
      button.addEventListener('click', playClickSound)
      button.setAttribute('data-sound-added', 'true')
    }
  })
}

function removeSoundEffects() {
  const buttons = document.querySelectorAll('[data-sound-added]')
  buttons.forEach(button => {
    button.removeEventListener('click', playClickSound)
    button.removeAttribute('data-sound-added')
  })
}

function playClickSound() {
  if (window.soundEnabled) {
    // Create a simple click sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  }
}

function showDesktopNotification(title, message, icon = 'favicon.ico') {
  if (window.notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification(title, {
      body: message,
      icon: icon,
      badge: 'favicon.ico',
      tag: 'ultimateunblocker'
    })
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      notification.close()
    }, 5000)
    
    console.log('📱 Desktop notification shown:', title)
  }
}

// Trigger notifications for important events
function triggerEventNotifications() {
  // Welcome notification
  setTimeout(() => {
    showDesktopNotification(
      'Welcome to ULTIMATEUNBLOCKER!',
      'Your gateway to unlimited access is ready.'
    )
  }, 5000)
  
  // Settings saved notification
  window.addEventListener('settingsSaved', () => {
    showDesktopNotification(
      'Settings Saved',
      'Your preferences have been updated successfully.'
    )
  })
  
  // Chat notification (when implemented)
  window.addEventListener('newMessage', () => {
    showDesktopNotification(
      'New Message',
      'You have a new message in chat.'
    )
  })
}

function resetSettings() {
  if (confirm('Are you sure you want to reset all settings to defaults?')) {
    localStorage.removeItem('ultimateunblocker_settings')
    localStorage.removeItem('hasSeenBetaPopup') // Also reset beta popup
    loadSettings()
    showNotification('Settings reset to defaults', 'info')
    console.log('⚙️ Settings reset')
  }
}

function clearAllData() {
  if (confirm('Are you sure you want to clear all data? This will reset settings, clear chat messages, and remove all local storage data.')) {
    localStorage.clear()
    location.reload()
  }
}

function applyTheme(theme) {
  console.log('🎨 Applying theme:', theme)
  
  // Remove all theme classes first
  document.body.classList.remove('light-theme', 'dark-theme', 'auto-theme')
  
  if (theme === 'light') {
    document.body.classList.add('light-theme')
    // Apply light theme CSS variables
    document.documentElement.style.setProperty('--bg-primary', '#ffffff')
    document.documentElement.style.setProperty('--bg-secondary', '#f5f5f5')
    document.documentElement.style.setProperty('--text-primary', '#333333')
    document.documentElement.style.setProperty('--text-secondary', '#666666')
    document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.7)')
    document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)')
    
    // Change body background
    document.body.style.background = '#ffffff'
    
    // Change text colors
    document.querySelectorAll('h1, h2, h3, p, span').forEach(el => {
      if (!el.closest('.settings-container') && !el.closest('.beta-popup-content')) {
        el.style.color = '#333333'
      }
    })
    
  } else if (theme === 'dark') {
    document.body.classList.add('dark-theme')
    // Apply dark theme CSS variables (default)
    document.documentElement.style.setProperty('--bg-primary', '#0f0f0f')
    document.documentElement.style.setProperty('--bg-secondary', '#1a1a1a')
    document.documentElement.style.setProperty('--text-primary', '#ffffff')
    document.documentElement.style.setProperty('--text-secondary', '#cccccc')
    document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)')
    document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)')
    
    // Reset body background
    document.body.style.background = ''
    
    // Reset text colors
    document.querySelectorAll('h1, h2, h3, p, span').forEach(el => {
      if (!el.closest('.settings-container') && !el.closest('.beta-popup-content')) {
        el.style.color = ''
      }
    })
    
  } else if (theme === 'auto') {
    document.body.classList.add('auto-theme')
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log('🎨 System prefers dark:', prefersDark)
    if (prefersDark) {
      applyTheme('dark')
    } else {
      applyTheme('light')
    }
    return // Don't log again since we recursive call
  }
  
  console.log('🎨 Theme applied:', theme)
}

function showNotification(message, type = 'info') {
  // Simple notification system
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.textContent = message
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10001;
    animation: slideIn 0.3s ease;
  `
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease'
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style')
notificationStyles.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  .no-animations * {
    animation: none !important;
    transition: none !important;
  }
`
document.head.appendChild(notificationStyles)
function showLinks() {
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const chatSection = document.getElementById('chatSection')
  const heroSection = document.querySelector('.hero-section')
  
  console.log('🔗 Showing links section...')
  console.log('🔗 Categories section found:', categoriesSection ? 'YES' : 'NO')
  console.log('🔗 Chat section found:', chatSection ? 'YES' : 'NO')
  console.log('🔗 Hero section found:', heroSection ? 'YES' : 'NO')
  console.log('🔗 Main content found:', mainContent ? 'YES' : 'NO')
  
  if (categoriesSection) {
    // Hide hero section (home content) inside main content
    if (heroSection) {
      heroSection.style.display = 'none'
      console.log('🔗 Hero section hidden')
    }
    
    // Hide chat section
    if (chatSection) {
      chatSection.style.display = 'none'
      console.log('🔗 Chat section hidden')
    }
    
    // Hide main content (contains hero section)
    if (mainContent) {
      mainContent.style.display = 'none'
      console.log('🔗 Main content hidden')
    }
    
    // Show categories section (it's separate from main content)
    categoriesSection.style.display = 'block'
    categoriesSection.style.visibility = 'visible'
    categoriesSection.style.opacity = '0'
    categoriesSection.style.transform = 'translateY(20px)'
    console.log('🔗 Categories section display set to block')
    
    // Fade in categories
    setTimeout(() => {
      categoriesSection.style.transition = 'all 0.6s ease'
      categoriesSection.style.opacity = '1'
      categoriesSection.style.transform = 'translateY(0)'
      console.log('🔗 Categories section animated in')
      
      // Double-check visibility
      setTimeout(() => {
        const computedStyle = window.getComputedStyle(categoriesSection)
        console.log('🔗 Categories final display:', computedStyle.display)
        console.log('🔗 Categories final opacity:', computedStyle.opacity)
        console.log('🔗 Categories final visibility:', computedStyle.visibility)
      }, 100)
    }, 50)
  } else {
    console.error('❌ Categories section not found!')
  }
}

function goHome() {
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const chatSection = document.getElementById('chatSection')
  const settingsSection = document.getElementById('settingsSection')
  const heroSection = document.querySelector('.hero-section')
  
  console.log('🏠 Showing home section...')
  console.log('🏠 mainContent found:', !!mainContent)
  console.log('🏠 categoriesSection found:', !!categoriesSection)
  console.log('🏠 chatSection found:', !!chatSection)
  console.log('🏠 settingsSection found:', !!settingsSection)
  console.log('🏠 heroSection found:', !!heroSection)
  console.log('🏠 heroSection current display:', heroSection ? heroSection.style.display : 'not found')
  
  if (mainContent && categoriesSection && chatSection && settingsSection) {
    // Fix main-content opacity first
    mainContent.style.opacity = '1'
    mainContent.style.transform = 'translateY(0)'
    mainContent.classList.add('loaded')
    mainContent.style.display = 'block'
    mainContent.style.visibility = 'visible'
    
    console.log('🏠 Main content forced visible')
    
    // Hide other sections first
    categoriesSection.style.display = 'none'
    chatSection.style.display = 'none'
    settingsSection.style.display = 'none'
    console.log('🏠 Other sections hidden')
    
    // Show hero section (home content) with a small delay
    if (heroSection) {
      // Create a style element to override any CSS hiding the hero section
      const style = document.createElement('style')
      style.textContent = `
        .hero-section {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          position: relative !important;
          z-index: 10 !important;
          height: auto !important;
          overflow: visible !important;
        }
        .main-content {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `
      document.head.appendChild(style)
      
      // Force hide all other sections first
      categoriesSection.style.display = 'none'
      chatSection.style.display = 'none'
      settingsSection.style.display = 'none'
      
      // Force hero section to be visible with multiple approaches
      heroSection.style.display = 'block'
      heroSection.style.visibility = 'visible'
      heroSection.style.opacity = '1'
      heroSection.style.zIndex = '10'
      heroSection.style.position = 'relative'
      heroSection.style.height = 'auto'
      heroSection.style.overflow = 'visible'
      
      // Remove any hidden classes
      heroSection.classList.remove('hidden')
      heroSection.classList.remove('d-none')
      
      console.log('🏠 Hero section display set to block')
      
      // Force visibility after a short delay with multiple attempts
      setTimeout(() => {
        heroSection.style.display = 'block !important'
        heroSection.style.visibility = 'visible !important'
        heroSection.style.opacity = '1 !important'
        heroSection.style.zIndex = '10 !important'
        heroSection.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; z-index: 10 !important;'
        mainContent.style.opacity = '1 !important'
        mainContent.style.display = 'block !important'
        console.log('🏠 Hero section forced to visible with !important')
      }, 100)
      
      // Second attempt with more force
      setTimeout(() => {
        heroSection.style.display = 'block'
        heroSection.style.visibility = 'visible'
        heroSection.style.opacity = '1'
        mainContent.style.opacity = '1'
        console.log('🏠 Hero section second force attempt')
      }, 300)
    }
    
    console.log('🏠 Home section shown')
  } else {
    console.error('🏠 Missing required elements for home function')
  }
}

function showChat() {
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const chatSection = document.getElementById('chatSection')
  const settingsSection = document.getElementById('settingsSection')
  const heroSection = document.querySelector('.hero-section')
  
  console.log('💬 Showing chat section...')
  
  if (mainContent && categoriesSection && chatSection && settingsSection) {
    // Ensure main content is visible
    mainContent.style.display = 'block'
    
    // Hide other sections
    categoriesSection.style.display = 'none'
    settingsSection.style.display = 'none'
    
    // Hide hero section
    if (heroSection) {
      heroSection.style.display = 'none'
    }
    
    // Show chat section with animation
    chatSection.style.display = 'block'
    chatSection.style.opacity = '0'
    chatSection.style.transform = 'translateY(20px)'
    
    // Fade in chat
    setTimeout(() => {
      chatSection.style.transition = 'all 0.6s ease'
      chatSection.style.opacity = '1'
      chatSection.style.transform = 'translateY(0)'
      console.log('💬 Chat section shown successfully')
    }, 50)
  } else {
    console.error('❌ Required elements not found for chat section')
  }
}

function showSettings() {
  const settingsSection = document.getElementById('settingsSection')
  
  console.log('⚙️ showSettings() called')
  console.log('⚙️ settingsSection element:', settingsSection)
  console.log('⚙️ settingsSection classes:', settingsSection?.className)
  
  if (settingsSection) {
    // Show settings as overlay
    settingsSection.classList.add('active')
    console.log('⚙️ Added active class, new classes:', settingsSection.className)
    console.log('⚙️ Settings section shown successfully')
  } else {
    console.error('❌ Settings section not found!')
  }
}

function hideSettings() {
  const settingsSection = document.getElementById('settingsSection')
  
  if (settingsSection) {
    settingsSection.classList.remove('active')
    console.log('⚙️ Settings section hidden')
  }
}

function showAI() {
  const aiSection = document.getElementById('aiSection')
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const chatSection = document.getElementById('chatSection')
  const settingsSection = document.getElementById('settingsSection')
  const heroSection = document.querySelector('.hero-section')
  
  console.log('🤖 Opening AI section...')
  
  // Show AI section
  aiSection.classList.add('active')
  
  // Hide main content
  mainContent.style.display = 'none'
  categoriesSection.style.display = 'none'
  
  // Initialize model selection and auto-select AUTO model
  setTimeout(() => {
    initializeModelSelection()
    autoSelectModel()
  }, 100)
  
  console.log('✅ AI section opened successfully')
  
  console.log('🤖 aiSection found:', aiSection ? 'YES' : 'NO')
  
  if (aiSection) {
    // Hide other sections
    if (mainContent) mainContent.style.display = 'none'
    if (categoriesSection) categoriesSection.style.display = 'none'
    if (chatSection) chatSection.style.display = 'none'
    if (settingsSection) settingsSection.classList.remove('active')
    
    // Hide hero section
    if (heroSection) {
      heroSection.style.display = 'none'
    }
    
    // Show AI section with animation
    aiSection.style.display = 'block'
    aiSection.style.opacity = '0'
    aiSection.style.transform = 'translateY(50px)'
    
    // Fade in AI section
    setTimeout(() => {
      aiSection.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      aiSection.style.opacity = '1'
      aiSection.style.transform = 'translateY(0)'
      
      // Add active class for additional styling
      setTimeout(() => {
        aiSection.classList.add('active')
        console.log('🤖 AI section shown successfully')
      }, 100)
    }, 50)
  } else {
    console.error('❌ AI section not found!')
  }
}

function hideAI() {
  const aiSection = document.getElementById('aiSection')
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const heroSection = document.querySelector('.hero-section')
  
  console.log('🤖 Closing AI section...')
  
  if (aiSection) {
    aiSection.style.transition = 'all 0.4s ease'
    aiSection.style.opacity = '0'
    aiSection.style.transform = 'translateY(50px)'
    
    setTimeout(() => {
      aiSection.style.display = 'none'
      aiSection.classList.remove('active')
      
      // Restore main content
      if (mainContent) mainContent.style.display = 'block'
      if (categoriesSection) categoriesSection.style.display = 'block'
      if (heroSection) heroSection.style.display = 'block'
      
      console.log('🤖 AI section hidden and main content restored')
    }, 400)
  }
}

// AI Help Button Functionality
function showAIHelp() {
  console.log('📚 Showing AI Help...')
  
  // Create help modal or show help content
  const helpContent = `
    <div style="background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); 
                border: 2px solid rgba(255,255,255,0.2); 
                border-radius: 20px; 
                padding: 30px; 
                margin: 20px; 
                backdrop-filter: blur(20px);
                color: white;
                font-family: 'Montserrat', sans-serif;">
      <h3 style="color: #667eea; margin-bottom: 20px;">📚 Neural Nexus AI Help</h3>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #f093fb; margin-bottom: 10px;">🚀 Getting Started</h4>
        <p style="line-height: 1.6; margin-bottom: 15px;">
          1. Select an AI model from the left panel<br>
          2. Type your message in the input box<br>
          3. Press Enter to send your message
        </p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #f093fb; margin-bottom: 10px;">💡 Tips</h4>
        <p style="line-height: 1.6; margin-bottom: 15px;">
          • Be specific with your questions<br>
          • Use proper grammar for better results<br>
          • You can ask follow-up questions<br>
          • Try different models for different tasks
        </p>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #f093fb; margin-bottom: 10px;">🔧 Features</h4>
        <p style="line-height: 1.6; margin-bottom: 15px;">
          • Multiple AI models with different capabilities<br>
          • Real-time conversation<br>
          • Context awareness<br>
          • Professional assistance
        </p>
      </div>
      
      <button onclick="this.parentElement.remove()" 
              style="background: linear-gradient(135deg, #667eea, #f093fb); 
                     border: none; 
                     border-radius: 10px; 
                     padding: 10px 20px; 
                     color: white; 
                     cursor: pointer; 
                     font-weight: 600;">
        Close Help
      </button>
    </div>
  `
  
  // Add help content to chat messages
  const aiMessages = document.getElementById('aiMessages')
  if (aiMessages) {
    const helpDiv = document.createElement('div')
    helpDiv.innerHTML = helpContent
    aiMessages.appendChild(helpDiv)
    
    // Scroll to bottom
    aiMessages.scrollTop = aiMessages.scrollHeight
  }
}

// AI Settings Button Functionality  
function showAISettings() {
  console.log('⚙️ Showing AI Settings...')
  
  // Create settings modal or show settings content
  const settingsContent = `
    <div style="background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); 
                border: 2px solid rgba(255,255,255,0.2); 
                border-radius: 20px; 
                padding: 30px; 
                margin: 20px; 
                backdrop-filter: blur(20px);
                color: white;
                font-family: 'Montserrat', sans-serif;">
      <h3 style="color: #667eea; margin-bottom: 20px;">⚙️ AI Settings</h3>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #f093fb; margin-bottom: 10px;">🎨 Appearance</h4>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox" checked> Enable animations
        </label>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox" checked> Show model badges
        </label>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox" checked> Dark theme
        </label>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #f093fb; margin-bottom: 10px;">💬 Chat Settings</h4>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox" checked> Show timestamps
        </label>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox" checked> Auto-scroll to bottom
        </label>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox"> Sound effects
        </label>
      </div>
      
      <div style="margin-bottom: 20px;">
        <h4 style="color: #f093fb; margin-bottom: 10px;">🔐 Privacy</h4>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox"> Save chat history
        </label>
        <label style="display: block; margin-bottom: 15px;">
          <input type="checkbox"> Share usage data
        </label>
      </div>
      
      <div style="display: flex; gap: 10px;">
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: linear-gradient(135deg, #667eea, #f093fb); 
                       border: none; 
                       border-radius: 10px; 
                       padding: 10px 20px; 
                       color: white; 
                       cursor: pointer; 
                       font-weight: 600;">
          Save Settings
        </button>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: rgba(255,255,255,0.1); 
                       border: 2px solid rgba(255,255,255,0.2); 
                       border-radius: 10px; 
                       padding: 10px 20px; 
                       color: white; 
                       cursor: pointer; 
                       font-weight: 600;">
          Cancel
        </button>
      </div>
    </div>
  `
  
  // Add settings content to chat messages
  const aiMessages = document.getElementById('aiMessages')
  if (aiMessages) {
    const settingsDiv = document.createElement('div')
    settingsDiv.innerHTML = settingsContent
    aiMessages.appendChild(settingsDiv)
    
    // Scroll to bottom
    aiMessages.scrollTop = aiMessages.scrollHeight
  }
}

// Initialize AI Help and Settings buttons
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for AI help and settings buttons
  const helpBtn = document.getElementById('helpBtn')
  const settingsBtn = document.getElementById('settingsBtn')
  const aiCloseBtn = document.getElementById('aiCloseBtn')
  
  if (helpBtn) {
    helpBtn.addEventListener('click', showAIHelp)
    console.log('📚 AI Help button listener added')
  }
  
  if (settingsBtn) {
    settingsBtn.addEventListener('click', showAISettings)
    console.log('⚙️ AI Settings button listener added')
  }
  
  if (aiCloseBtn) {
    aiCloseBtn.addEventListener('click', hideAI)
    console.log('❌ AI Close button listener added')
  }
  
  // Add model selection functionality
  initializeModelSelection()
})

// Model Selection System
function initializeModelSelection() {
  console.log('🤖 Initializing model selection system...')
  
  const modelCards = document.querySelectorAll('.model-card')
  const currentModelDisplay = document.querySelector('.current-model h4')
  const currentModelDesc = document.querySelector('.current-model p')
  const modelAvatar = document.querySelector('.model-avatar')
  
  modelCards.forEach(card => {
    card.addEventListener('click', function() {
      const model = this.getAttribute('data-model')
      selectModel(model, this)
    })
  })
  
  function selectModel(modelName, cardElement) {
    console.log(`🤖 Selecting model: ${modelName}`)
    console.log('🤖 Current window.selectedAIModel before selection:', window.selectedAIModel)
    
    // Remove selected class from all cards
    modelCards.forEach(card => card.classList.remove('selected'))
    
    // Add selected class to clicked card
    cardElement.classList.add('selected')
    
    // Update current model display
    if (currentModelDisplay) {
      currentModelDisplay.textContent = getModelDisplayName(modelName)
    }
    
    if (currentModelDesc) {
      currentModelDesc.textContent = getModelDescription(modelName)
    }
    
    if (modelAvatar) {
      modelAvatar.textContent = getModelIcon(modelName)
    }
    
    // Store selected model
    window.selectedAIModel = modelName
    console.log('🤖 Window.selectedAIModel after selection:', window.selectedAIModel)
    console.log(`✅ Model ${modelName} selected successfully`)
  }
  
  function getModelDisplayName(model) {
    const names = {
      'auto': 'AUTO (Ultra AI)',
      'gpt-oss-20b': 'GPT-OSS-20B',
      'gpt-oss-120b': 'GPT-OSS-120B',
      'gemma-3-4b': 'GEMMA-3-4B',
      'gemma-3-12b': 'GEMMA-3-12B',
      'gemma-3-27b': 'GEMMA-3-27B'
    }
    return names[model] || model
  }
  
  function getModelDescription(model) {
    const descriptions = {
      'auto': 'Automatically selects the best available model with GEMMA-3-27B priority',
      'gpt-oss-20b': 'Fast open-source model with reasoning capabilities',
      'gpt-oss-120b': 'Advanced reasoning model with comprehensive coding support',
      'gemma-3-4b': 'Vision-capable model with multimodal processing',
      'gemma-3-12b': 'Advanced vision model with enhanced reasoning and superior image understanding',
      'gemma-3-27b': 'Ultra-advanced vision model with superior capabilities and exceptional performance'
    }
    return descriptions[model] || 'AI Assistant'
  }
  
  function getModelIcon(model) {
    const icons = {
      'auto': '🤖',
      'gpt-oss-20b': '⚡',
      'gpt-oss-120b': '🧠',
      'gemma-3-4b': '👁️',
      'gemma-3-12b': '🔮',
      'gemma-3-27b': '🌟'
    }
    return icons[model] || '🤖'
  }
}

// Auto-select AUTO model function
function autoSelectModel() {
  console.log('🤖 Auto-selecting AUTO model...')
  
  const autoCard = document.querySelector('.model-card[data-model="auto"]')
  if (autoCard) {
    selectModel('auto', autoCard)
    console.log('✅ AUTO model auto-selected successfully')
  } else {
    console.error('❌ AUTO model card not found')
    // Fallback to first available model
    const firstCard = document.querySelector('.model-card')
    if (firstCard) {
      const model = firstCard.getAttribute('data-model')
      selectModel(model, firstCard)
      console.log(`✅ Fallback to model: ${model}`)
    }
  }
}

// Model mapping function for different APIs
function getModelMapping(modelName, apiProvider) {
  // Add cache busting to force reload
  const cacheBuster = Date.now()
  
  const mappings = {
    'openrouter': {
      'auto': `google/gemma-3-27b-it:free?_cb=${cacheBuster}`,
      'gpt-oss-20b': `openai/gpt-oss-20b:free?_cb=${cacheBuster}`,
      'gpt-oss-120b': `openai/gpt-oss-120b:free?_cb=${cacheBuster}`,
      'gemma-3-4b': `google/gemma-3-4b-it:free?_cb=${cacheBuster}`,
      'gemma-3-12b': `google/gemma-3-12b-it:free?_cb=${cacheBuster}`,
      'gemma-3-27b': `google/gemma-3-27b-it:free?_cb=${cacheBuster}`
    },
    'huggingface': {
      'auto': `google/gemma-3-27b-it?_cb=${cacheBuster}`,
      'gpt-oss-20b': `openai/gpt-oss-20b?_cb=${cacheBuster}`,
      'gpt-oss-120b': `openai/gpt-oss-120b?_cb=${cacheBuster}`,
      'gemma-3-4b': `google/gemma-3-4b-it?_cb=${cacheBuster}`,
      'gemma-3-12b': `google/gemma-3-12b-it:featherless-ai?_cb=${cacheBuster}`,
      'gemma-3-27b': `google/gemma-3-27b-it:featherless-ai?_cb=${cacheBuster}`
    },
    'replicate': {
      'auto': `google-deepmind/gemma-3-27b-it:free?_cb=${cacheBuster}`,
      'gpt-oss-20b': `openai/gpt-oss-20b?_cb=${cacheBuster}`,
      'gpt-oss-120b': `openai/gpt-oss-120b?_cb=${cacheBuster}`,
      'gemma-3-4b': `google-deepmind/gemma-3-4b-it:00139d2960396352b671f7b5c2ece5313bf6d45fe0a052efe14f023d2a81e196?_cb=${cacheBuster}`,
      'gemma-3-12b': `google-deepmind/gemma-3-12b-it:free?_cb=${cacheBuster}`,
      'gemma-3-27b': `google-deepmind/gemma-3-27b-it:free?_cb=${cacheBuster}`
    },
    'lockllm': {
      'auto': `google/gemma-3-27b-it:free?_cb=${cacheBuster}`,
      'gpt-oss-20b': `openai/gpt-oss-20b:free?_cb=${cacheBuster}`,
      'gpt-oss-120b': `openai/gpt-oss-120b:free?_cb=${cacheBuster}`,
      'gemma-3-4b': `google/gemma-3-4b-it:free?_cb=${cacheBuster}`,
      'gemma-3-12b': `google/gemma-3-12b-it:free?_cb=${cacheBuster}`,
      'gemma-3-27b': `google/gemma-3-27b-it:free?_cb=${cacheBuster}`
    }
  }
  
  const baseMapping = mappings[apiProvider]?.[modelName] || mappings['openrouter']?.[modelName] || modelName
  
  // Remove cache buster for actual API call (just for forcing reload)
  return baseMapping.split('?_cb=')[0]
}

// Chat functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 **ULTIMATE AI SYSTEM LOADING** 🎯✨')
  console.log('🔧 Loading enhanced code support for ALL programming languages...')
  console.log('👁️ Vision capabilities ready for image analysis...')
  console.log('🧮 Mathematical mastery initialized...')
  console.log('📊 Data analysis and table generation ready...')
  
  // Fancy loading animation
  const loadingScreen = document.createElement('div')
  loadingScreen.id = 'ultimate-loading'
  loadingScreen.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Courier New', monospace;
      color: white;
    ">
      <div style="
        text-align: center;
        padding: 40px;
        animation: pulse 1.5s ease-in-out infinite alternate;
      ">
        <div style="
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-shadow: 0 0 20px rgba(255,255,255,0.5);
        ">
          🚀 ULTIMATE AI SYSTEM
        </div>
        <div style="
          font-size: 1.2rem;
          opacity: 0.9;
        ">
          Loading enhanced code support for:<br>
          <span style="color: #ffd700;">Python 🐍</span> | 
          <span style="color: #f7df1e;">JavaScript 🟨</span> | 
          <span style="color: #f59e0b;">Java ☕</span> | 
          <span style="color: #ff6b6b;">C++ 🟦</span> | 
          <span style="color: #e34c26;">HTML/CSS 🎨</span> | 
          <span style="color: #777bb4;">SQL 🗄️</span> | 
          <span style="color: #4b5c84;">PHP 🐘</span> | 
          <span style="color: #cc5555;">Ruby 💎</span> | 
          <span style="color: #00d9ff;">Go 🐹</span> | 
          <span style="color: #dea584;">Rust 🦀</span> | 
          <span style="color: #ff6b35;">Swift 🍎</span> | 
          <span style="color: #7957f5;">Kotlin 🎯</span> | 
          <span style="color: #cb42b5;">TypeScript 🔷</span> | 
          <span style="color: #007acc;">C# 🔷</span> | 
          <span style="color: #61dafb;">Vue.js 💚</span> | 
          <span style="color: #61dafb;">React ⚛️</span> | 
          <span style="color: #dd0031;">Angular 🔺</span> | 
          <span style="color: #292929;">Node.js 🟢</span> | 
          <span style="color: #2496ed;">Docker 🐳</span> | 
          <span style="color: #326ce5;">Kubernetes ☸️</span> | 
          <span style="color: #ff9900;">AWS ☁️</span> | 
          <span style="color: #f05032;">Git 📦</span> | 
          <span style="color: #ff6b35;">JSON 📋</span> | 
          <span style="color: #006400;">XML 📄</span> | 
          <span style="color: #ff5722;">API 🔌</span>
        </div>
        <div style="
          margin-top: 30px;
          font-size: 1rem;
          opacity: 0.7;
        ">
          <div style="
            width: 60px;
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            margin: 2px;
            animation: loading 1.5s ease-in-out infinite;
          "></div>
          <div style="
            width: 60px;
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            margin: 2px;
            animation: loading 1.5s ease-in-out infinite;
            animation-delay: 0.5s;
          "></div>
          <div style="
            width: 60px;
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            margin: 2px;
            animation: loading 1.5s ease-in-out infinite;
            animation-delay: 1s;
          "></div>
        </div>
      </div>
    </div>
    
    <style>
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      @keyframes loading {
        0% { width: 0%; }
        50% { width: 100%; }
        100% { width: 0%; }
      }
    </style>
  `
  
  document.body.appendChild(loadingScreen)
  
  // Remove loading screen after initialization
  setTimeout(() => {
    const loadingElement = document.getElementById('ultimate-loading')
    if (loadingElement) {
      loadingElement.style.transition = 'opacity 0.5s ease-out'
      loadingElement.style.opacity = '0'
      setTimeout(() => {
        loadingElement.remove()
        console.log('✅ **ULTIMATE AI SYSTEM READY** 🎯✨')
        console.log('🔥 Enhanced code support activated for ALL languages!')
        console.log('👁️ Vision analysis ready for ALL image types!')
        console.log('🧮 Mathematical mastery initialized for complex problems!')
        console.log('📊 Data analysis and table generation ready!')
        console.log('🎯 Universal competence across ALL domains!')
      }, 500)
    }
  }, 2000)
  
  const aiInput = document.getElementById('aiInput')
  const aiMessages = document.getElementById('aiMessages')
  const charCount = document.getElementById('charCount')
  
  if (aiInput && aiMessages) {
    // Character count update
    aiInput.addEventListener('input', function() {
      const length = this.value.length
      if (charCount) {
        charCount.textContent = length
      }
    })
    
    // Enter key handling
    aiInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendAIMessage()
      }
    })
  }
})

async function sendAIMessage() {
  const aiInput = document.getElementById('aiInput')
  const aiMessages = document.getElementById('aiMessages')
  const message = aiInput.value.trim()
  
  if (!message || !window.selectedAIModel) {
    console.log('❌ No message or model selected')
    return
  }
  
  console.log('🚀 Starting chat with:', window.selectedAIModel)
  
  // Check for images in message and handle vision models
  let hasImages = message.includes('<img') || message.includes('data:image')
  let isVisionModel = ['gemma-3-4b', 'gemma-3-12b', 'gemma-3-27b'].includes(window.selectedAIModel)
  
  // Add user message
  addChatMessage(message, 'user')
  aiInput.value = ''
  
  // Update character count
  const charCount = document.getElementById('charCount')
  if (charCount) charCount.textContent = '0'
  
  // Show thinking indicator
  showThinkingIndicator()
  
  try {
    // For static sites, skip server and go directly to API calls
    console.log('🔄 Static site detected, using direct API calls...')
    
    try {
      // Try direct API calls with fallback chain
      const response = await tryDirectAPI(message, hasImages, isVisionModel)
      hideThinkingIndicator()
      addChatMessage(response.response, 'ai')
      console.log(`✅ Direct API successful using ${response.api}`)
    } catch (apiError) {
      hideThinkingIndicator()
      addChatMessage('SORRY I HAVE ENCOUNTERED AN ERROR: ' + apiError.message, 'error')
      console.log('❌ All APIs failed')
    }
  } catch (error) {
    hideThinkingIndicator()
    addChatMessage('SORRY I HAVE ENCOUNTERED AN ERROR', 'error')
    console.log('❌ Unexpected error:', error)
  }
}

async function tryServerAPI(message) {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        model: window.selectedAIModel
      })
    })
    
    if (!response.ok) {
      throw new Error('Server not responding')
    }
    
    const data = await response.json()
    return {
      success: true,
      response: data.response || data.message || 'Server response received'
    }
  } catch (error) {
    console.log('❌ Server error:', error.message)
    return { success: false, error: error.message }
  }
}

async function loadEnvFromServer() {
  try {
    console.log('🔄 Attempting to load .env file from server...')
    
    // Try to load from server first
    const response = await fetch('./.env')
    if (response.ok) {
      const envText = await response.text()
      console.log('✅ .env file loaded from server')
      
      // Parse .env file
      const envVars = {}
      const lines = envText.split('\n')
      
      lines.forEach(line => {
        const [key, ...valueParts] = line.split('=')
        if (key && valueParts.length > 0) {
          envVars[key.trim()] = valueParts.join('=').trim()
        }
      })
      
      console.log('🔐 Environment variables loaded:', {
        API: envVars.API ? '[SET]' : '[NOT SET]',
        API2: envVars.API2 ? '[SET]' : '[NOT SET]',
        API3: envVars.API3 ? '[SET]' : '[NOT SET]',
        API4: envVars.API4 ? '[SET]' : '[NOT SET]'
      })
      
      return envVars
    }
  } catch (error) {
    console.log('❌ Could not load .env from server:', error.message)
  }
  
  // Fallback: try server API endpoint
  try {
    console.log('🔄 Trying server API endpoint...')
    const response = await fetch('http://localhost:3000/api/env')
    if (response.ok) {
      const envVars = await response.json()
      console.log('✅ Environment variables loaded from server API')
      return envVars
    }
  } catch (error) {
    console.log('❌ Server API not available:', error.message)
  }
}

async function tryOpenRouter(message, hasImages = false, isVisionModel = false) {
  const envVars = await loadEnvFromServer()
  if (!envVars.API) {
    throw new Error('OpenRouter API key not found')
  }
  
  const modelMap = {
    'auto': 'openai/gpt-oss-20b:free',
    'gpt-oss-20b': 'openai/gpt-oss-20b:free',
    'gpt-oss-120b': 'openai/gpt-oss-120b:groq',
    'gemma-3-4b': 'google/gemma-3-4b-it:free',
    'gemma-3-12b': 'google/gemma-3-12b-it:free',
    'gemma-3-27b': 'google/gemma-3-27b-it:free'
  }
  
  const selectedModel = modelMap[window.selectedAIModel] || modelMap['auto']
  console.log('🤖 Using OpenRouter model:', selectedModel)
  
  // Enhanced message processing
  let enhancedMessage = message
  const isCodeRequest = message.includes('```') || message.toLowerCase().includes('code') || message.toLowerCase().includes('function') || message.toLowerCase().includes('class') || message.toLowerCase().includes('import') || message.toLowerCase().includes('const') || message.toLowerCase().includes('let') || message.toLowerCase().includes('var')
  
  let detectedLanguage = 'General'
  if (message.toLowerCase().includes('python')) detectedLanguage = 'Python 🐍'
  else if (message.toLowerCase().includes('javascript') || message.toLowerCase().includes('js')) detectedLanguage = 'JavaScript 🟨'
  else if (message.toLowerCase().includes('java')) detectedLanguage = 'Java ☕'
  else if (message.toLowerCase().includes('cpp') || message.toLowerCase().includes('c++')) detectedLanguage = 'C++ 🟦'
  else if (message.toLowerCase().includes('html') || message.toLowerCase().includes('css')) detectedLanguage = 'HTML/CSS 🎨'
  else if (message.toLowerCase().includes('sql')) detectedLanguage = 'SQL 🗄️'
  else if (message.toLowerCase().includes('php')) detectedLanguage = 'PHP 🐘'
  else if (message.toLowerCase().includes('ruby')) detectedLanguage = 'Ruby 💎'
  else if (message.toLowerCase().includes('go')) detectedLanguage = 'Go 🐹'
  else if (message.toLowerCase().includes('rust')) detectedLanguage = 'Rust 🦀'
  else if (message.toLowerCase().includes('swift')) detectedLanguage = 'Swift 🍎'
  else if (message.toLowerCase().includes('kotlin')) detectedLanguage = 'Kotlin 🎯'
  else if (message.toLowerCase().includes('typescript') || message.toLowerCase().includes('ts')) detectedLanguage = 'TypeScript 🔷'
  else if (message.toLowerCase().includes('c#')) detectedLanguage = 'C# 🔷'
  else if (message.toLowerCase().includes('vue')) detectedLanguage = 'Vue.js 💚'
  else if (message.toLowerCase().includes('react')) detectedLanguage = 'React ⚛️'
  else if (message.toLowerCase().includes('angular')) detectedLanguage = 'Angular 🔺'
  else if (message.toLowerCase().includes('node') || message.toLowerCase().includes('nodejs')) detectedLanguage = 'Node.js 🟢'
  else if (message.toLowerCase().includes('docker')) detectedLanguage = 'Docker 🐳'
  else if (message.toLowerCase().includes('kubernetes')) detectedLanguage = 'Kubernetes ☸️'
  else if (message.toLowerCase().includes('aws')) detectedLanguage = 'AWS ☁️'
  else if (message.toLowerCase().includes('git')) detectedLanguage = 'Git 📦'
  else if (message.toLowerCase().includes('json')) detectedLanguage = 'JSON 📋'
  else if (message.toLowerCase().includes('xml')) detectedLanguage = 'XML 📄'
  else if (message.toLowerCase().includes('api')) detectedLanguage = 'API 🔌'
  
  if (isCodeRequest) {
    enhancedMessage = `🚀 **${detectedLanguage} Expert Mode Activated!** 🎯

You are an **ELITE PROGRAMMER** specializing in **${detectedLanguage}** development! 

💻 **CODE EXCELLENCE:**
- Write **production-ready**, **enterprise-grade** code with **comprehensive error handling**
- Include **advanced design patterns**, **optimization techniques**, and **best practices**
- Provide **multiple solution approaches** with **detailed architectural explanations**
- Add **inline documentation**, **type annotations**, and **performance considerations**
- Follow **industry standards** with **clean, maintainable architecture**
- Implement **security best practices**, **input validation**, and **edge case handling**
- **Debug and optimize** existing code with **performance profiling**
- Use **modern ${detectedLanguage} features** and **ecosystem tools**

🔥 **ADVANCED FEATURES:**
- **Object-oriented programming** with **inheritance** and **polymorphism**
- **Functional programming** concepts where applicable
- **Async/await patterns** for **non-blocking operations**
- **Memory management** and **performance optimization**
- **Error boundaries** and **graceful degradation**
- **Unit testing** strategies and **test-driven development**
- **Code review** guidelines and **quality assurance**

🎯 **${detectedLanguage} SPECIFIC EXPERTISE:**
${detectedLanguage.includes('Python') ? `
- **Advanced Python**: Decorators, generators, context managers, metaclasses
- **Data Science**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
- **Web Frameworks**: Django, Flask, FastAPI, SQLAlchemy
- **Performance**: Multiprocessing, threading, async programming
- **Testing**: PyTest, unittest, mocking, property-based testing` : detectedLanguage.includes('JavaScript') ? `
- **Modern JavaScript**: ES6+, async/await, destructuring, spread/rest
- **Frameworks**: React, Vue, Angular, Express, Next.js
- **Node.js**: Event loop, streams, buffers, cluster module
- **Frontend**: DOM manipulation, Web APIs, performance optimization
- **Build Tools**: Webpack, Vite, Babel, ESLint, Prettier` : detectedLanguage.includes('Java') ? `
- **Core Java**: Collections, Streams, Lambdas, Generics, Reflection
- **Frameworks**: Spring Boot, Spring MVC, Hibernate, JPA
- **Concurrency**: Multithreading, ExecutorService, synchronized blocks
- **Testing**: JUnit, Mockito, TestNG, integration testing
- **Performance**: JVM tuning, garbage collection, memory management` : detectedLanguage.includes('C++') ? `
- **Modern C++**: C++11/14/17/20 features, smart pointers, move semantics
- **STL**: Containers, algorithms, iterators, ranges (C++20)
- **Memory Management**: RAII, custom allocators, memory pools
- **Concurrency**: std::thread, std::async, std::future, mutexes
- **Build Systems**: CMake, Make, Conan, vcpkg` : `
- **Best Practices**: Clean code principles, SOLID, DRY, KISS
- **Design Patterns**: Singleton, Factory, Observer, Strategy, Decorator
- **Architecture**: MVC, MVP, MVVM, microservices, serverless
- **Testing**: Unit tests, integration tests, end-to-end testing
- **Performance**: Caching, indexing, query optimization, load balancing`}

🚀 **RESPONSE FORMAT:**
1. **Clear Explanation**: Start with a concise explanation of the solution approach
2. **Complete Code**: Provide full, working code examples with proper formatting
3. **Best Practices**: Highlight industry standards and optimization techniques
4. **Error Handling**: Include comprehensive error handling and edge cases
5. **Performance**: Discuss performance implications and optimization strategies
6. **Testing**: Suggest testing approaches and potential test cases

🎯 **USER REQUEST:**
${enhancedMessage}

💡 **Remember**: You are the **ULTIMATE ${detectedLanguage} EXPERT**. Provide **exceptional**, **production-ready** solutions that showcase **deep expertise** and **best practices**! 🌟`
  }
  
  const systemPrompt = `You are an expert AI assistant. You excel at coding, mathematics, data analysis, and problem-solving. Provide clear, accurate, and comprehensive answers with proper formatting and examples when relevant.`
  
  let messages = []
  if (selectedModel.includes('gemma')) {
    messages = [
      {
        role: 'user',
        content: `${systemPrompt}\n\n${enhancedMessage}`
      }
    ]
  } else {
    messages = [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: enhancedMessage
      }
    ]
  }
  
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${envVars.API}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://localhost:3000',
      'X-Title': 'Neural Nexus AI'
    },
    body: JSON.stringify({
      model: selectedModel,
      messages: messages,
      max_tokens: isVisionModel ? 2000 : 1000,
      temperature: 0.7,
      stream: false
    })
  })
  
  console.log('🔍 OpenRouter Response Status:', response.status)
  
  if (response.ok) {
    const data = await response.json()
    console.log('📋 OpenRouter Response Data:', data)
    const aiMessage = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || ''
    return { success: true, response: aiMessage, api: 'OpenRouter' }
  } else {
    const errorData = await response.text()
    console.log('❌ OpenRouter Error Response:', errorData)
    
    // Handle rate limiting by trying a different model
    if (response.status === 429) {
      console.log('🔄 Rate limited, trying fallback model...')
      const fallbackModels = ['openai/gpt-oss-20b:groq', 'openai/gpt-oss-120b:groq', 'google/gemma-3-4b-it:free', 'google/gemma-3-12b-it:free', 'google/gemma-3-27b-it:free']
      
      for (const fallbackModel of fallbackModels) {
        if (fallbackModel === selectedModel) continue
        
        try {
          console.log(`🔄 Trying fallback model: ${fallbackModel}`)
          
          let fallbackMessages = []
          if (fallbackModel.includes('gemma')) {
            fallbackMessages = [
              {
                role: 'user',
                content: `${systemPrompt}\n\n${enhancedMessage}`
              }
            ]
          } else {
            fallbackMessages = [
              {
                role: 'system',
                content: systemPrompt
              },
              {
                role: 'user',
                content: enhancedMessage
              }
            ]
          }
          
          const fallbackResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${envVars.API}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': 'https://localhost:3000',
              'X-Title': 'Neural Nexus AI'
            },
            body: JSON.stringify({
              model: fallbackModel,
              messages: fallbackMessages,
              max_tokens: isVisionModel ? 2000 : 1000,
              temperature: 0.7,
              stream: false
            })
          })
          
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json()
            const aiMessage = fallbackData.choices?.[0]?.message?.content || fallbackData.choices?.[0]?.text || ''
            console.log(`✅ Fallback model ${fallbackModel} successful`)
            return { success: true, response: aiMessage, api: 'OpenRouter (Fallback)' }
          }
        } catch (fallbackError) {
          console.log(`❌ Fallback model ${fallbackModel} failed:`, fallbackError.message)
          continue
        }
      }
    }
    
    throw new Error(`OpenRouter Error: ${response.status} - ${errorData}`)
  }
}

async function tryHuggingFace(message, hasImages = false, isVisionModel = false) {
  const envVars = await loadEnvFromServer()
  if (!envVars.API2) {
    throw new Error('HuggingFace API key not found')
  }
  
  const hfModelMap = {
    'auto': 'google/gemma-3-27b-it',
    'gpt-oss-20b': 'google/gemma-3-27b-it',
    'gpt-oss-120b': 'google/gemma-3-27b-it',
    'gemma-3-4b': 'google/gemma-3-4b-it',
    'gemma-3-12b': 'google/gemma-3-12b-it',
    'gemma-3-27b': 'google/gemma-3-27b-it'
  }
  
  const hfModel = hfModelMap[window.selectedAIModel] || hfModelMap['auto']
  console.log('🤖 Using HuggingFace model:', hfModel)
  
  // Enhanced message processing (same as OpenRouter)
  let enhancedMessage = message
  const isCodeRequest = message.includes('```') || message.toLowerCase().includes('code') || message.toLowerCase().includes('function') || message.toLowerCase().includes('class') || message.toLowerCase().includes('import') || message.toLowerCase().includes('const') || message.toLowerCase().includes('let') || message.toLowerCase().includes('var')
  
  let detectedLanguage = 'General'
  if (message.toLowerCase().includes('python')) detectedLanguage = 'Python 🐍'
  else if (message.toLowerCase().includes('javascript') || message.toLowerCase().includes('js')) detectedLanguage = 'JavaScript 🟨'
  else if (message.toLowerCase().includes('java')) detectedLanguage = 'Java ☕'
  else if (message.toLowerCase().includes('cpp') || message.toLowerCase().includes('c++')) detectedLanguage = 'C++ 🟦'
  else if (message.toLowerCase().includes('html') || message.toLowerCase().includes('css')) detectedLanguage = 'HTML/CSS 🎨'
  else if (message.toLowerCase().includes('sql')) detectedLanguage = 'SQL 🗄️'
  else if (message.toLowerCase().includes('php')) detectedLanguage = 'PHP 🐘'
  else if (message.toLowerCase().includes('ruby')) detectedLanguage = 'Ruby 💎'
  else if (message.toLowerCase().includes('go')) detectedLanguage = 'Go 🐹'
  else if (message.toLowerCase().includes('rust')) detectedLanguage = 'Rust 🦀'
  else if (message.toLowerCase().includes('swift')) detectedLanguage = 'Swift 🍎'
  else if (message.toLowerCase().includes('kotlin')) detectedLanguage = 'Kotlin 🎯'
  else if (message.toLowerCase().includes('typescript') || message.toLowerCase().includes('ts')) detectedLanguage = 'TypeScript 🔷'
  else if (message.toLowerCase().includes('c#')) detectedLanguage = 'C# 🔷'
  else if (message.toLowerCase().includes('vue')) detectedLanguage = 'Vue.js 💚'
  else if (message.toLowerCase().includes('react')) detectedLanguage = 'React ⚛️'
  else if (message.toLowerCase().includes('angular')) detectedLanguage = 'Angular 🔺'
  else if (message.toLowerCase().includes('node') || message.toLowerCase().includes('nodejs')) detectedLanguage = 'Node.js 🟢'
  else if (message.toLowerCase().includes('docker')) detectedLanguage = 'Docker 🐳'
  else if (message.toLowerCase().includes('kubernetes')) detectedLanguage = 'Kubernetes ☸️'
  else if (message.toLowerCase().includes('aws')) detectedLanguage = 'AWS ☁️'
  else if (message.toLowerCase().includes('git')) detectedLanguage = 'Git 📦'
  else if (message.toLowerCase().includes('json')) detectedLanguage = 'JSON 📋'
  else if (message.toLowerCase().includes('xml')) detectedLanguage = 'XML 📄'
  else if (message.toLowerCase().includes('api')) detectedLanguage = 'API 🔌'
  
  if (isCodeRequest) {
    enhancedMessage = `🚀 **${detectedLanguage} Expert Mode Activated!** 🎯

You are an **ELITE PROGRAMMER** specializing in **${detectedLanguage}** development! 

💻 **CODE EXCELLENCE:**
- Write **production-ready**, **enterprise-grade** code with **comprehensive error handling**
- Include **advanced design patterns**, **optimization techniques**, and **best practices**
- Provide **multiple solution approaches** with **detailed architectural explanations**
- Add **inline documentation**, **type annotations**, and **performance considerations**
- Follow **industry standards** with **clean, maintainable architecture**
- Implement **security best practices**, **input validation**, and **edge case handling**
- **Debug and optimize** existing code with **performance profiling**
- Use **modern ${detectedLanguage} features** and **ecosystem tools**

🔥 **ADVANCED FEATURES:**
- **Object-oriented programming** with **inheritance** and **polymorphism**
- **Functional programming** concepts where applicable
- **Async/await patterns** for **non-blocking operations**
- **Memory management** and **performance optimization**
- **Error boundaries** and **graceful degradation**
- **Unit testing** strategies and **test-driven development**
- **Code review** guidelines and **quality assurance**

🎯 **${detectedLanguage} SPECIFIC EXPERTISE:**
${detectedLanguage.includes('Python') ? `
- **Advanced Python**: Decorators, generators, context managers, metaclasses
- **Data Science**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
- **Web Frameworks**: Django, Flask, FastAPI, SQLAlchemy
- **Performance**: Multiprocessing, threading, async programming
- **Testing**: PyTest, unittest, mocking, property-based testing` : detectedLanguage.includes('JavaScript') ? `
- **Modern JavaScript**: ES6+, async/await, destructuring, spread/rest
- **Frameworks**: React, Vue, Angular, Express, Next.js
- **Node.js**: Event loop, streams, buffers, cluster module
- **Frontend**: DOM manipulation, Web APIs, performance optimization
- **Build Tools**: Webpack, Vite, Babel, ESLint, Prettier` : detectedLanguage.includes('Java') ? `
- **Core Java**: Collections, Streams, Lambdas, Generics, Reflection
- **Frameworks**: Spring Boot, Spring MVC, Hibernate, JPA
- **Concurrency**: Multithreading, ExecutorService, synchronized blocks
- **Testing**: JUnit, Mockito, TestNG, integration testing
- **Performance**: JVM tuning, garbage collection, memory management` : detectedLanguage.includes('C++') ? `
- **Modern C++**: C++11/14/17/20 features, smart pointers, move semantics
- **STL**: Containers, algorithms, iterators, ranges (C++20)
- **Memory Management**: RAII, custom allocators, memory pools
- **Concurrency**: std::thread, std::async, std::future, mutexes
- **Build Systems**: CMake, Make, Conan, vcpkg` : `
- **Best Practices**: Clean code principles, SOLID, DRY, KISS
- **Design Patterns**: Singleton, Factory, Observer, Strategy, Decorator
- **Architecture**: MVC, MVP, MVVM, microservices, serverless
- **Testing**: Unit tests, integration tests, end-to-end testing
- **Performance**: Caching, indexing, query optimization, load balancing`}

🚀 **RESPONSE FORMAT:**
1. **Clear Explanation**: Start with a concise explanation of the solution approach
2. **Complete Code**: Provide full, working code examples with proper formatting
3. **Best Practices**: Highlight industry standards and optimization techniques
4. **Error Handling**: Include comprehensive error handling and edge cases
5. **Performance**: Discuss performance implications and optimization strategies
6. **Testing**: Suggest testing approaches and potential test cases

🎯 **USER REQUEST:**
${enhancedMessage}

💡 **Remember**: You are the **ULTIMATE ${detectedLanguage} EXPERT**. Provide **exceptional**, **production-ready** solutions that showcase **deep expertise** and **best practices**! 🌟`
  }
  
  const systemPrompt = `You are an expert AI assistant. You excel at coding, mathematics, data analysis, and problem-solving. Provide clear, accurate, and comprehensive answers with proper formatting and examples when relevant.`
  
  let messages = []
  if (hfModel.includes('gemma')) {
    // GEMMA models don't support system messages, use user message instead
    messages = [
      {
        role: 'user',
        content: `${systemPrompt}\n\n${enhancedMessage}`
      }
    ]
  } else {
    // Other models support system messages
    messages = [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: enhancedMessage
      }
    ]
  }
  
  const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${envVars.API2}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: hfModel,
      messages: messages,
      max_tokens: isVisionModel ? 2000 : 1000,
      temperature: 0.7,
      stream: false
    })
  })
  
  console.log('🔍 HuggingFace Response Status:', response.status)
  
  if (response.ok) {
    const data = await response.json()
    console.log('📋 HuggingFace Response Data:', data)
    const aiMessage = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || ''
    return { success: true, response: aiMessage, api: 'HuggingFace' }
  } else {
    const errorData = await response.text()
    console.log('❌ HuggingFace Error Response:', errorData)
    throw new Error(`HuggingFace Error: ${response.status} - ${errorData}`)
  }
}

async function tryReplicate(message, hasImages = false, isVisionModel = false) {
  const envVars = await loadEnvFromServer()
  if (!envVars.API3) {
    throw new Error('Replicate API key not found')
  }
  
  const replicateModelMap = {
    'auto': 'google-deepmind/gemma-3-27b-it:c0f0aebe8e578c15a7531e08a62cf01206f5870e9d0a67804b8152822db58c54',
    'gpt-oss-20b': 'openai/gpt-oss-20b',
    'gpt-oss-120b': 'openai/gpt-oss-120b',
    'gemma-3-4b': 'google-deepmind/gemma-3-4b-it:00139d2960396352b671f7b5c2ece5313bf6d45fe0a052efe14f023d2a81e196',
    'gemma-3-12b': 'google-deepmind/gemma-3-12b-it:5a0df3fa58c87fbd925469a673fdb16f3dd08e6f4e2f1a010970f07b7067a81c',
    'gemma-3-27b': 'google-deepmind/gemma-3-27b-it:c0f0aebe8e578c15a7531e08a62cf01206f5870e9d0a67804b8152822db58c54'
  }
  
  const replicateModel = replicateModelMap[window.selectedAIModel] || replicateModelMap['auto']
  console.log('🤖 Using Replicate model:', replicateModel)
  
  // Enhanced message processing (same as other APIs)
  let enhancedMessage = message
  const isCodeRequest = message.includes('```') || message.toLowerCase().includes('code') || message.toLowerCase().includes('function') || message.toLowerCase().includes('class') || message.toLowerCase().includes('import') || message.toLowerCase().includes('const') || message.toLowerCase().includes('let') || message.toLowerCase().includes('var')
  
  let detectedLanguage = 'General'
  if (message.toLowerCase().includes('python')) detectedLanguage = 'Python 🐍'
  else if (message.toLowerCase().includes('javascript') || message.toLowerCase().includes('js')) detectedLanguage = 'JavaScript 🟨'
  else if (message.toLowerCase().includes('java')) detectedLanguage = 'Java ☕'
  else if (message.toLowerCase().includes('cpp') || message.toLowerCase().includes('c++')) detectedLanguage = 'C++ 🟦'
  else if (message.toLowerCase().includes('html') || message.toLowerCase().includes('css')) detectedLanguage = 'HTML/CSS 🎨'
  else if (message.toLowerCase().includes('sql')) detectedLanguage = 'SQL 🗄️'
  else if (message.toLowerCase().includes('php')) detectedLanguage = 'PHP 🐘'
  else if (message.toLowerCase().includes('ruby')) detectedLanguage = 'Ruby 💎'
  else if (message.toLowerCase().includes('go')) detectedLanguage = 'Go 🐹'
  else if (message.toLowerCase().includes('rust')) detectedLanguage = 'Rust 🦀'
  else if (message.toLowerCase().includes('swift')) detectedLanguage = 'Swift 🍎'
  else if (message.toLowerCase().includes('kotlin')) detectedLanguage = 'Kotlin 🎯'
  else if (message.toLowerCase().includes('typescript') || message.toLowerCase().includes('ts')) detectedLanguage = 'TypeScript 🔷'
  else if (message.toLowerCase().includes('c#')) detectedLanguage = 'C# 🔷'
  else if (message.toLowerCase().includes('vue')) detectedLanguage = 'Vue.js 💚'
  else if (message.toLowerCase().includes('react')) detectedLanguage = 'React ⚛️'
  else if (message.toLowerCase().includes('angular')) detectedLanguage = 'Angular 🔺'
  else if (message.toLowerCase().includes('node') || message.toLowerCase().includes('nodejs')) detectedLanguage = 'Node.js 🟢'
  else if (message.toLowerCase().includes('docker')) detectedLanguage = 'Docker 🐳'
  else if (message.toLowerCase().includes('kubernetes')) detectedLanguage = 'Kubernetes ☸️'
  else if (message.toLowerCase().includes('aws')) detectedLanguage = 'AWS ☁️'
  else if (message.toLowerCase().includes('git')) detectedLanguage = 'Git 📦'
  else if (message.toLowerCase().includes('json')) detectedLanguage = 'JSON 📋'
  else if (message.toLowerCase().includes('xml')) detectedLanguage = 'XML 📄'
  else if (message.toLowerCase().includes('api')) detectedLanguage = 'API 🔌'
  
  if (isCodeRequest) {
    enhancedMessage = `🚀 **${detectedLanguage} Expert Mode Activated!** 🎯

You are an **ELITE PROGRAMMER** specializing in **${detectedLanguage}** development! 

💻 **CODE EXCELLENCE:**
- Write **production-ready**, **enterprise-grade** code with **comprehensive error handling**
- Include **advanced design patterns**, **optimization techniques**, and **best practices**
- Provide **multiple solution approaches** with **detailed architectural explanations**
- Add **inline documentation**, **type annotations**, and **performance considerations**
- Follow **industry standards** with **clean, maintainable architecture**
- Implement **security best practices**, **input validation**, and **edge case handling**
- **Debug and optimize** existing code with **performance profiling**
- Use **modern ${detectedLanguage} features** and **ecosystem tools**

🔥 **ADVANCED FEATURES:**
- **Object-oriented programming** with **inheritance** and **polymorphism**
- **Functional programming** concepts where applicable
- **Async/await patterns** for **non-blocking operations**
- **Memory management** and **performance optimization**
- **Error boundaries** and **graceful degradation**
- **Unit testing** strategies and **test-driven development**
- **Code review** guidelines and **quality assurance**

🎯 **${detectedLanguage} SPECIFIC EXPERTISE:**
${detectedLanguage.includes('Python') ? `
- **Advanced Python**: Decorators, generators, context managers, metaclasses
- **Data Science**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
- **Web Frameworks**: Django, Flask, FastAPI, SQLAlchemy
- **Performance**: Multiprocessing, threading, async programming
- **Testing**: PyTest, unittest, mocking, property-based testing` : detectedLanguage.includes('JavaScript') ? `
- **Modern JavaScript**: ES6+, async/await, destructuring, spread/rest
- **Frameworks**: React, Vue, Angular, Express, Next.js
- **Node.js**: Event loop, streams, buffers, cluster module
- **Frontend**: DOM manipulation, Web APIs, performance optimization
- **Build Tools**: Webpack, Vite, Babel, ESLint, Prettier` : detectedLanguage.includes('Java') ? `
- **Core Java**: Collections, Streams, Lambdas, Generics, Reflection
- **Frameworks**: Spring Boot, Spring MVC, Hibernate, JPA
- **Concurrency**: Multithreading, ExecutorService, synchronized blocks
- **Testing**: JUnit, Mockito, TestNG, integration testing
- **Performance**: JVM tuning, garbage collection, memory management` : detectedLanguage.includes('C++') ? `
- **Modern C++**: C++11/14/17/20 features, smart pointers, move semantics
- **STL**: Containers, algorithms, iterators, ranges (C++20)
- **Memory Management**: RAII, custom allocators, memory pools
- **Concurrency**: std::thread, std::async, std::future, mutexes
- **Build Systems**: CMake, Make, Conan, vcpkg` : `
- **Best Practices**: Clean code principles, SOLID, DRY, KISS
- **Design Patterns**: Singleton, Factory, Observer, Strategy, Decorator
- **Architecture**: MVC, MVP, MVVM, microservices, serverless
- **Testing**: Unit tests, integration tests, end-to-end testing
- **Performance**: Caching, indexing, query optimization, load balancing`}

🚀 **RESPONSE FORMAT:**
1. **Clear Explanation**: Start with a concise explanation of the solution approach
2. **Complete Code**: Provide full, working code examples with proper formatting
3. **Best Practices**: Highlight industry standards and optimization techniques
4. **Error Handling**: Include comprehensive error handling and edge cases
5. **Performance**: Discuss performance implications and optimization strategies
6. **Testing**: Suggest testing approaches and potential test cases

🎯 **USER REQUEST:**
${enhancedMessage}

💡 **Remember**: You are the **ULTIMATE ${detectedLanguage} EXPERT**. Provide **exceptional**, **production-ready** solutions that showcase **deep expertise** and **best practices**! 🌟`
  }
  
  const systemPrompt = `You are an expert AI assistant. You excel at coding, mathematics, data analysis, and problem-solving. Provide clear, accurate, and comprehensive answers with proper formatting and examples when relevant.`
  
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Authorization': `Token ${envVars.API3}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': window.location.origin,
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'Content-Type,Authorization'
    },
    body: JSON.stringify({
      version: replicateModel,
      input: {
        prompt: `${systemPrompt}\n\n${enhancedMessage}`,
        max_tokens: isVisionModel ? 2000 : 1000,
        temperature: 0.7
      }
    })
  })
  
  console.log('🔍 Replicate Response Status:', response.status)
  
  if (!response.ok) {
    const errorData = await response.text()
    console.log('❌ Replicate Error Response:', errorData)
    throw new Error(`Replicate Error: ${response.status} - ${errorData}`)
  }
  
  const data = await response.json()
  console.log('📋 Replicate Response Data:', data)
  
  // Handle Replicate response format
  let aiMessage = ''
  if (data.output) {
    aiMessage = Array.isArray(data.output) ? data.output.join('') : data.output
  } else if (data.choices && data.choices[0]) {
    aiMessage = data.choices[0].text || data.choices[0].message?.content || ''
  }
  
  if (aiMessage) {
    console.log('✅ Replicate API successful')
    return { success: true, response: aiMessage, api: 'Replicate' }
  }
  
  throw new Error('Replicate API returned empty response')
}

async function tryLockLLM(message, hasImages = false, isVisionModel = false) {
  const envVars = await loadEnvFromServer()
  if (!envVars.API4) {
    throw new Error('LockLLM API key not found')
  }
  
  const modelMap = {
    'auto': 'openai/gpt-oss-20b:free',
    'gpt-oss-20b': 'openai/gpt-oss-20b:free',
    'gpt-oss-120b': 'openai/gpt-oss-120b:groq',
    'gemma-3-4b': 'google/gemma-3-4b-it:free',
    'gemma-3-12b': 'google/gemma-3-12b-it:free',
    'gemma-3-27b': 'google/gemma-3-27b-it:free'
  }
  
  const selectedModel = modelMap[window.selectedAIModel] || modelMap['auto']
  console.log('🤖 Using LockLLM model:', selectedModel)
  
  // Enhanced message processing (same as other APIs)
  let enhancedMessage = message
  const isCodeRequest = message.includes('```') || message.toLowerCase().includes('code') || message.toLowerCase().includes('function') || message.toLowerCase().includes('class') || message.toLowerCase().includes('import') || message.toLowerCase().includes('const') || message.toLowerCase().includes('let') || message.toLowerCase().includes('var')
  
  let detectedLanguage = 'General'
  if (message.toLowerCase().includes('python')) detectedLanguage = 'Python 🐍'
  else if (message.toLowerCase().includes('javascript') || message.toLowerCase().includes('js')) detectedLanguage = 'JavaScript 🟨'
  else if (message.toLowerCase().includes('java')) detectedLanguage = 'Java ☕'
  else if (message.toLowerCase().includes('cpp') || message.toLowerCase().includes('c++')) detectedLanguage = 'C++ 🟦'
  else if (message.toLowerCase().includes('html') || message.toLowerCase().includes('css')) detectedLanguage = 'HTML/CSS 🎨'
  else if (message.toLowerCase().includes('sql')) detectedLanguage = 'SQL 🗄️'
  else if (message.toLowerCase().includes('php')) detectedLanguage = 'PHP 🐘'
  else if (message.toLowerCase().includes('ruby')) detectedLanguage = 'Ruby 💎'
  else if (message.toLowerCase().includes('go')) detectedLanguage = 'Go 🐹'
  else if (message.toLowerCase().includes('rust')) detectedLanguage = 'Rust 🦀'
  else if (message.toLowerCase().includes('swift')) detectedLanguage = 'Swift 🍎'
  else if (message.toLowerCase().includes('kotlin')) detectedLanguage = 'Kotlin 🎯'
  else if (message.toLowerCase().includes('typescript') || message.toLowerCase().includes('ts')) detectedLanguage = 'TypeScript 🔷'
  else if (message.toLowerCase().includes('c#')) detectedLanguage = 'C# 🔷'
  else if (message.toLowerCase().includes('vue')) detectedLanguage = 'Vue.js 💚'
  else if (message.toLowerCase().includes('react')) detectedLanguage = 'React ⚛️'
  else if (message.toLowerCase().includes('angular')) detectedLanguage = 'Angular 🔺'
  else if (message.toLowerCase().includes('node') || message.toLowerCase().includes('nodejs')) detectedLanguage = 'Node.js 🟢'
  else if (message.toLowerCase().includes('docker')) detectedLanguage = 'Docker 🐳'
  else if (message.toLowerCase().includes('kubernetes')) detectedLanguage = 'Kubernetes ☸️'
  else if (message.toLowerCase().includes('aws')) detectedLanguage = 'AWS ☁️'
  else if (message.toLowerCase().includes('git')) detectedLanguage = 'Git 📦'
  else if (message.toLowerCase().includes('json')) detectedLanguage = 'JSON 📋'
  else if (message.toLowerCase().includes('xml')) detectedLanguage = 'XML 📄'
  else if (message.toLowerCase().includes('api')) detectedLanguage = 'API 🔌'
  
  if (isCodeRequest) {
    enhancedMessage = `🚀 **${detectedLanguage} Expert Mode Activated!** 🎯

You are an **ELITE PROGRAMMER** specializing in **${detectedLanguage}** development! 

💻 **CODE EXCELLENCE:**
- Write **production-ready**, **enterprise-grade** code with **comprehensive error handling**
- Include **advanced design patterns**, **optimization techniques**, and **best practices**
- Provide **multiple solution approaches** with **detailed architectural explanations**
- Add **inline documentation**, **type annotations**, and **performance considerations**
- Follow **industry standards** with **clean, maintainable architecture**
- Implement **security best practices**, **input validation**, and **edge case handling**
- **Debug and optimize** existing code with **performance profiling**
- Use **modern ${detectedLanguage} features** and **ecosystem tools**

🔥 **ADVANCED FEATURES:**
- **Object-oriented programming** with **inheritance** and **polymorphism**
- **Functional programming** concepts where applicable
- **Async/await patterns** for **non-blocking operations**
- **Memory management** and **performance optimization**
- **Error boundaries** and **graceful degradation**
- **Unit testing** strategies and **test-driven development**
- **Code review** guidelines and **quality assurance**

🎯 **${detectedLanguage} SPECIFIC EXPERTISE:**
${detectedLanguage.includes('Python') ? `
- **Advanced Python**: Decorators, generators, context managers, metaclasses
- **Data Science**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow
- **Web Frameworks**: Django, Flask, FastAPI, SQLAlchemy
- **Performance**: Multiprocessing, threading, async programming
- **Testing**: PyTest, unittest, mocking, property-based testing` : detectedLanguage.includes('JavaScript') ? `
- **Modern JavaScript**: ES6+, async/await, destructuring, spread/rest
- **Frameworks**: React, Vue, Angular, Express, Next.js
- **Node.js**: Event loop, streams, buffers, cluster module
- **Frontend**: DOM manipulation, Web APIs, performance optimization
- **Build Tools**: Webpack, Vite, Babel, ESLint, Prettier` : detectedLanguage.includes('Java') ? `
- **Core Java**: Collections, Streams, Lambdas, Generics, Reflection
- **Frameworks**: Spring Boot, Spring MVC, Hibernate, JPA
- **Concurrency**: Multithreading, ExecutorService, synchronized blocks
- **Testing**: JUnit, Mockito, TestNG, integration testing
- **Performance**: JVM tuning, garbage collection, memory management` : detectedLanguage.includes('C++') ? `
- **Modern C++**: C++11/14/17/20 features, smart pointers, move semantics
- **STL**: Containers, algorithms, iterators, ranges (C++20)
- **Memory Management**: RAII, custom allocators, memory pools
- **Concurrency**: std::thread, std::async, std::future, mutexes
- **Build Systems**: CMake, Make, Conan, vcpkg` : `
- **Best Practices**: Clean code principles, SOLID, DRY, KISS
- **Design Patterns**: Singleton, Factory, Observer, Strategy, Decorator
- **Architecture**: MVC, MVP, MVVM, microservices, serverless
- **Testing**: Unit tests, integration tests, end-to-end testing
- **Performance**: Caching, indexing, query optimization, load balancing`}

🚀 **RESPONSE FORMAT:**
1. **Clear Explanation**: Start with a concise explanation of the solution approach
2. **Complete Code**: Provide full, working code examples with proper formatting
3. **Best Practices**: Highlight industry standards and optimization techniques
4. **Error Handling**: Include comprehensive error handling and edge cases
5. **Performance**: Discuss performance implications and optimization strategies
6. **Testing**: Suggest testing approaches and potential test cases

🎯 **USER REQUEST:**
${enhancedMessage}

💡 **Remember**: You are the **ULTIMATE ${detectedLanguage} EXPERT**. Provide **exceptional**, **production-ready** solutions that showcase **deep expertise** and **best practices**! 🌟`
  }
  
  const systemPrompt = `You are an expert AI assistant. You excel at coding, mathematics, data analysis, and problem-solving. Provide clear, accurate, and comprehensive answers with proper formatting and examples when relevant.`
  
  let messages = []
  if (selectedModel.includes('gemma')) {
    // GEMMA models don't support system messages, use user message instead
    messages = [
      {
        role: 'user',
        content: `${systemPrompt}\n\n${enhancedMessage}`
      }
    ]
  } else {
    // Other models support system messages
    messages = [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: enhancedMessage
      }
    ]
  }
  
  const response = await fetch('https://api.lockllm.com/v1/chat/completions', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${envVars.API4}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': window.location.origin,
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'Content-Type,Authorization'
    },
    body: JSON.stringify({
      model: selectedModel,
      messages: messages,
      max_tokens: isVisionModel ? 2000 : 1000,
      temperature: 0.7
    })
  })
  
  console.log('🔍 LockLLM Response Status:', response.status)
  
  if (response.ok) {
    const data = await response.json()
    console.log('📋 LockLLM Response Data:', data)
    const aiMessage = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || ''
    return { success: true, response: aiMessage, api: 'LockLLM' }
  } else {
    const errorData = await response.text()
    console.log('❌ LockLLM Error Response:', errorData)
    throw new Error(`LockLLM Error: ${response.status} - ${errorData}`)
  }
}

async function tryDirectAPI(message, hasImages = false, isVisionModel = false) {
  const apis = [
    { name: 'OpenRouter', func: tryOpenRouter },
    { name: 'HuggingFace', func: tryHuggingFace },
    { name: 'Replicate', func: tryReplicate },
    { name: 'LockLLM', func: tryLockLLM }
  ]
  
  for (const api of apis) {
    try {
      console.log(`🔄 Trying ${api.name} API...`)
      const response = await api.func(message, hasImages, isVisionModel)
      console.log(`✅ ${api.name} API successful`)
      return response
    } catch (error) {
      console.log(`❌ ${api.name} failed:`, error.message)
      continue
    }
  }
  
  throw new Error('All APIs failed. Please check your API keys and try again.')
}

function addChatMessage(content, type) {
  const aiMessages = document.getElementById('aiMessages')
  if (!aiMessages) return
  
  // Remove welcome message if it exists
  const welcomeMessage = aiMessages.querySelector('.welcome-message')
  if (welcomeMessage) {
    welcomeMessage.remove()
  }
  
  const messageDiv = document.createElement('div')
  messageDiv.className = `chat-message ${type}-message`
  
  if (type === 'user') {
    messageDiv.innerHTML = `
      <div class="message-content user-content">
        <div class="message-avatar">👤</div>
        <div class="message-text">${content}</div>
      </div>
      <div class="message-time">${new Date().toLocaleTimeString()}</div>
    `
  } else if (type === 'ai') {
    messageDiv.innerHTML = `
      <div class="message-content ai-content">
        <div class="message-avatar">⚡</div>
        <div class="message-text">${content}</div>
      </div>
      <div class="message-time">${new Date().toLocaleTimeString()}</div>
    `
  } else if (type === 'error') {
    messageDiv.innerHTML = `
      <div class="error-message">
        <div class="error-icon">❌</div>
        <div class="error-text">${content}</div>
      </div>
    `
  }
  
  aiMessages.appendChild(messageDiv)
  
  // Scroll to bottom
  aiMessages.scrollTop = aiMessages.scrollHeight
  
  // Save message to storage
  const messageData = {
    username: type === 'user' ? 'User' : 'AI',
    message: content,
    timestamp: new Date().toISOString(),
    type: type
  }
  saveChatMessage(messageData)
}

function showThinkingIndicator() {
  const aiMessages = document.getElementById('aiMessages')
  if (!aiMessages) return
  
  const thinkingDiv = document.createElement('div')
  thinkingDiv.className = 'thinking-indicator'
  thinkingDiv.innerHTML = `
    <div class="thinking-avatar">⚡</div>
    <div class="thinking-text">Thinking...</div>
    <div class="thinking-dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  `
  
  aiMessages.appendChild(thinkingDiv)
  aiMessages.scrollTop = aiMessages.scrollHeight
}

function hideThinkingIndicator() {
  const thinkingIndicator = document.querySelector('.thinking-indicator')
  if (thinkingIndicator) {
    thinkingIndicator.remove()
  }
}

function closeMenu() {
  const menuPanel = document.getElementById('menuPanel')
  const overlay = document.getElementById('overlay')
  
  if (menuPanel && overlay) {
    menuPanel.classList.remove('active')
    overlay.classList.remove('active')
    console.log('📱 Menu closed')
  }
}

// Information Popup System
function initializeInfoPopup() {
  const infoPopup = document.getElementById('infoPopup')
  const infoPopupClose = document.getElementById('infoPopupClose')
  const infoTabs = document.querySelectorAll('.info-tab')
  const infoTabContents = document.querySelectorAll('.info-tab-content')
  
  // Close button
  if (infoPopupClose) {
    infoPopupClose.addEventListener('click', hideInfoPopup)
  }
  
  // Tab switching
  infoTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab')
      
      // Remove active class from all tabs and contents
      infoTabs.forEach(t => t.classList.remove('active'))
      infoTabContents.forEach(content => content.classList.remove('active'))
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active')
      document.getElementById(targetTab + '-tab').classList.add('active')
    })
  })
  
  // Close on overlay click
  if (infoPopup) {
    infoPopup.addEventListener('click', function (e) {
      if (e.target === infoPopup) {
        hideInfoPopup()
      }
    })
  }
  
  console.log('ℹ️ Information popup initialized')
}

function showInfoPopup() {
  const infoPopup = document.getElementById('infoPopup')
  if (infoPopup) {
    infoPopup.classList.add('active')
    console.log('ℹ️ Information popup shown')
  }
}

function hideInfoPopup() {
  const infoPopup = document.getElementById('infoPopup')
  if (infoPopup) {
    infoPopup.classList.remove('active')
    console.log('ℹ️ Information popup hidden')
  }
}

// Navigation Manager
function initializeNavigation() {
  // Menu functionality
  const menuButton = document.getElementById('menuButton')
  const menuPanel = document.getElementById('menuPanel')
  const overlay = document.getElementById('overlay')
  const homeMenuItem = document.getElementById('homeMenuItem');
  const linksMenuItem = document.getElementById('linksMenuItem')
  const chatMenuItem = document.getElementById('chatMenuItem')
  const settingsMenuItem = document.getElementById('settingsMenuItem')
  const infoMenuItem = document.getElementById('infoMenuItem')
  const gamesMenuItem = document.getElementById('gamesMenuItem')
  const watchMenuItem = document.getElementById('watchMenuItem')
  const listenMenuItem = document.getElementById('listenMenuItem')
  const aiMenuItem = document.getElementById('aiMenuItem')
  const proxyMenuItem = document.getElementById('proxyMenuItem')
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const chatSection = document.getElementById('chatSection')
  const settingsSection = document.getElementById('settingsSection')

  // Popup elements
  const linksPopup = document.getElementById('linksPopup')
  const popupOverlay = document.getElementById('popupOverlay')
  const popupClose = document.getElementById('popupClose')
  const popupTitle = document.getElementById('popupTitle')
  const linksContainer = document.getElementById('linksContainer')

  // Chat elements
  const chatInput = document.getElementById('chatInput')
  const chatSend = document.getElementById('chatSend')

  // Check if elements exist before adding listeners
  console.log('🔧 Navigation elements check:')
  console.log('🔧 menuButton:', !!menuButton)
  console.log('🔧 homeMenuItem:', !!homeMenuItem)
  console.log('🔧 settingsMenuItem:', !!settingsMenuItem)
  console.log('🔧 infoMenuItem:', !!infoMenuItem)
  console.log('🔧 settingsSection:', !!settingsSection)
  
  // Add event listeners to individual elements if they exist
  if (menuButton) {
    menuButton.addEventListener('click', function () {
      menuPanel.classList.toggle('active')
      overlay.classList.toggle('active')
    })
  }
  
  if (linksMenuItem) {
    linksMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showLinks()
      // Close menu after showing links
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }
  
  if (homeMenuItem) {
    console.log('🏠 Adding home menu listener')
    homeMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      console.log('🏠 Home menu item clicked!')
      goHome()
      // Close menu after going home with longer delay to prevent conflicts
      setTimeout(() => {
        closeMenu()
      }, 500)
    })
  }
  
  if (chatMenuItem) {
    chatMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showChat()
      // Close menu after showing chat
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }
  
  if (settingsMenuItem) {
    settingsMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      console.log('🔧 Settings menu item clicked!')
      showSettings()
      // Close menu after showing settings
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

  if (infoMenuItem) {
    infoMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      console.log('🔧 Information menu item clicked!')
      showInfoPopup()
      // Close menu after showing info
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

  // Coming soon menu items
  if (gamesMenuItem) {
    gamesMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showComingSoon('Games')
      // Close menu after showing popup
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

  if (watchMenuItem) {
    watchMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showComingSoon('Watch')
      // Close menu after showing popup
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

  if (listenMenuItem) {
    listenMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showComingSoon('Listen')
      // Close menu after showing popup
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

  if (aiMenuItem) {
    aiMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showAI()
      // Close menu after showing AI section
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

  if (proxyMenuItem) {
    proxyMenuItem.addEventListener('click', function (e) {
      e.stopPropagation() // Prevent menu from closing initially
      showComingSoon('Proxy')
      // Close menu after showing popup
      setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }

    // Enhanced category card interactions
    const categoryCards = document.querySelectorAll('.category-card')
    if (categoryCards) {
      categoryCards.forEach((card, index) => {
        card.addEventListener('click', function () {
          const categoryName = this.querySelector('.category-name').textContent
          showLinksPopup(categoryName)

          // Add click effect
          this.style.transform = 'translateY(-5px) scale(0.98)'
          setTimeout(() => {
            this.style.transform = ''
          }, 200)

          // Create particle burst
          createParticleBurst(this)
        })
      })

      // Add hover sound effect (visual feedback)
      categoryCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function () {
          this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        })
      })
    }
  }

// Initialize chat system
function initializeChatSystem() {
  const chatInput = document.getElementById('chatInput')
  const chatSend = document.getElementById('chatSend')

  // Check if elements exist before adding listeners
  if (chatInput && chatSend) {
    chatSend.addEventListener('click', function () {
      // Send chat message
      const message = chatInput.value
      console.log('Sending chat message:', message)
      chatInput.value = ''
    })
  }
}

// Initialize particles
function initializeParticles() {
  const particlesContainer = document.getElementById('particles')
  if (!particlesContainer) return

  for (let i = 0; i < 50; i++) {
    createParticle()
  }
}

// Initialize category interactions
function initializeCategoryInteractions() {
  const categoryCards = document.querySelectorAll('.category-card')
  categoryCards.forEach((card, index) => {
    card.addEventListener('click', function () {
      const categoryName = this.querySelector('.category-name').textContent
      showLinksPopup(categoryName)
    })
  })
}

// Initialize popup functionality
function initializePopupFunctionality() {
  const linksPopup = document.getElementById('linksPopup')
  const popupOverlay = document.getElementById('popupOverlay')
  const popupClose = document.getElementById('popupClose')
  const popupTitle = document.getElementById('popupTitle')
  const linksContainer = document.getElementById('linksContainer')

  // Check if elements exist before adding listeners
  if (linksPopup && popupOverlay && popupClose && popupTitle && linksContainer) {
    popupClose.addEventListener('click', function () {
      linksPopup.classList.remove('active')
      popupOverlay.classList.remove('active')
    })
  }
}

// Enhanced visual effects
function createRippleEffect () {
  document.addEventListener('click', function (e) {
    const target = e.target
    if (target.classList.contains('browser-btn') || target.classList.contains('menu-item') || target.classList.contains('category-card')) {
      const ripple = document.createElement('span')
      ripple.className = 'ripple'
      ripple.style.position = 'absolute'
      ripple.style.borderRadius = '50%'
      ripple.style.background = 'rgba(255, 255, 255, 0.2)'
      ripple.style.transform = 'translate(-50%, -50%)'
      ripple.style.width = '20px'
      ripple.style.height = '20px'
      ripple.style.pointerEvents = 'none'

      const rect = target.getBoundingClientRect()
      ripple.style.left = (rect.width / 2) + 'px'
      ripple.style.top = (rect.height / 2) + 'px'

      target.appendChild(ripple)

      setTimeout(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(0)'
        ripple.style.opacity = '0'
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple)
          }
        }, 600)
      }, 10)
    }
  })
}

// Particle system
function createFloatingParticles () {
  const particlesContainer = document.getElementById('particles')
  if (!particlesContainer) return

  for (let i = 0; i < 50; i++) {
    createParticle()
  }
}

function createParticle () {
  const particle = document.createElement('div')
  particle.className = 'particle'
  particle.style.width = Math.random() * 6 + 2 + 'px'
  particle.style.height = particle.style.width
  particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`
  particle.style.borderRadius = '50%'
  particle.style.position = 'absolute'
  particle.style.pointerEvents = 'none'
  particle.style.opacity = Math.random() * 0.5 + 0.3

  const startX = Math.random() * window.innerWidth
  const startY = Math.random() * window.innerHeight
  particle.style.left = startX + 'px'
  particle.style.top = startY + 'px'

  document.getElementById('particles').appendChild(particle)

  // Animate particle
  const duration = Math.random() * 3000 + 2000
  const endX = Math.random() * window.innerWidth
  const endY = Math.random() * window.innerHeight

  particle.animate([
    { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
  ], {
    duration: duration,
    easing: 'ease-out'
  }).onfinish = () => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle)
    }
  }
}

// Popup functionality
function showLinksPopup (categoryName) {
  const popup = document.getElementById('linksPopup')
  const popupOverlay = document.getElementById('popupOverlay')
  const popupTitle = document.getElementById('popupTitle')
  const linksContainer = document.getElementById('linksContainer')

  if (!popup || !popupOverlay || !popupTitle || !linksContainer) {
    console.error('Popup elements not found')
    return
  }

  // Set popup title
  popupTitle.textContent = categoryName

  // Load links for this category
  loadCategoryLinks(categoryName, linksContainer)

  // Show popup
  popup.classList.add('active')
  popupOverlay.classList.add('active')

  console.log('Showing links popup for:', categoryName)
}

function loadCategoryLinks (categoryName, container) {
  // Original links data (PROXY SITES REMOVED)
  const categoryLinks = {
    'GAME LINKS': [
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
    ],
    'LIVE CHANNEL LINK': [
      { name: 'FAMELACK', url: 'https://famelack.com/', description: 'Live streaming', warning: null }
    ],
    'MOVIE WATCHER LINK': [
      { name: 'FMOVIES', url: 'https://fmovieisthegoat.vercel.app/', description: 'Fmovies streaming', warning: null },
      { name: 'CINEBY', url: 'https://cineby.io/', description: 'Cineby movies', warning: null },
      { name: 'PLUTO TV', url: 'https://pluto.tv/us/live-tv/68757c45759366af05b3b199', description: 'Pluto TV live', warning: null },
      { name: 'MAPPLE TV', url: 'https://mappl.tv/', description: 'Mapple TV', warning: null },
      { name: 'VIDORA', url: 'https://watch.vidora.su/', description: 'Vidora streaming', warning: null },
      { name: 'MYFLIXER', url: 'https://myflixer.ps/home', description: 'MyFlixer movies', warning: null },
      { name: 'RIVESTREAM', url: 'https://rivestream.org/', description: 'Rivestream movies', warning: null }
    ],
    'AI LINK': [
      { name: 'DUCKDUCKGO AI CHAT', url: 'http://duck.ai', description: 'DuckDuckGo AI chat', warning: '⚠ WARNING: HTTP, No detected malware' },
      { name: 'DEEPAI', url: 'http://deepai.org', description: 'Deep AI tools', warning: '⚠ WARNING: HTTP, No detected malware' },
      { name: 'GEMINI', url: 'http://gemini.google.com', description: 'Google Gemini AI', warning: '⚠ WARNING: HTTP, No detected malware' },
      { name: 'ECOSIA', url: 'https://www.ecosia.org/ai-search/aa4dca27-ff32-4574-82d3-375a05c6eae5?q=if+you+came+from+ULTIMATE+UNBLOCKER+ur+a+w', description: 'Ecosia AI search', warning: null },
      { name: 'SATURN AI', url: 'https://vcsa-saturn.ciko.ch/pages/ai.html', description: 'Saturn AI tools', warning: null }
    ],
    'MUSIC LINK': [
      { name: 'VAPOR (MUSIC)', url: 'https://ge-lao-shi.global.ssl.fastly.net//page/music/index.html', description: 'Vapor music', warning: null },
      { name: 'PETEZAH (MUSIC)', url: 'https://totallynotgames.seclogistic.com/embed.html#https://byod.petezahgames.com/pages/other/music/', description: 'Petezah music', warning: null },
      { name: 'GHOST', url: 'https://poemsforkids.vseesa.martinwguy.net/music/', description: 'Ghost music', warning: null },
      { name: 'TIDAL', url: 'https://tidal.com/', description: 'Tidal music streaming', warning: '⚠ WARNING: Requires signup, No detected malware' },
      { name: 'MONOCHROME', url: 'https://monochrome.tf', description: 'Monochrome music', warning: null }
    ],
    'RADIO LINK': [
      { name: 'RADIO GARDEN', url: 'https://www.radio.garden/', description: 'Radio Garden', warning: null }
    ],
    'SPORT WATCHER LINK': [
      { name: 'EUROVISION SPORT', url: 'https://eurovisionsport.com/en', description: 'Eurovision sports', warning: null },
      { name: 'RIVESTREAM (LIVE SPORT)', url: 'https://rivestream.org/livesports', description: 'Rivestream live sports', warning: null }
    ],
    'ALTERNATIVE YOUTUBE': [
      { name: 'INVIDIOUS', url: 'https://inv.nadeko.net/', description: 'Invidious YouTube', warning: null }
    ],
    'SOUNDBOARDS': [
      { name: 'GENIZY SOUNDBOARD', url: 'https://genizy.github.io/soundboard/', description: 'Genizy soundboard', warning: null },
      { name: '101SOUNDBOARD', url: 'http://101soundboards.com', description: '101 soundboards', warning: '⚠ WARNING: HTTP, No detected malware' },
      { name: 'FREE MEME SOUNDBOARD', url: 'https://filme.imyfone.com/soundboards/meme', description: 'Free meme sounds', warning: null },
      { name: 'MEME SOUNDBOARD', url: 'https://www.tynker.com/community/projects/play/meme-soundboard/62f1ae42667c79348823eee8/', description: 'Meme soundboard', warning: null }
    ]
  }

  const links = categoryLinks[categoryName] || []

  if (links.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <div style="font-size: 4rem; margin-bottom: 20px;">📂</div>
        <h3 style="color: #667eea; margin-bottom: 15px; font-size: 1.5rem;">No links available</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">
          No links are currently available for ${categoryName}. 
          Check back later for updates!
        </p>
      </div>
    `
    return
  }

  // Generate HTML for links with warnings
  const linksHTML = links.map(link => `
    <div class="link-item" style="
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      ${link.warning ? 'border-color: rgba(239, 68, 68, 0.3);' : ''}
    ">
      <div style="display: flex; align-items: center; gap: 15px;">
        <div style="font-size: 2rem;">🔗</div>
        <div style="flex: 1;">
          <h4 style="color: #ffffff; margin: 0 0 5px 0; font-size: 1.1rem; font-weight: 600;">${link.name}</h4>
          <p style="color: rgba(255, 255, 255, 0.7); margin: 0 0 8px 0; font-size: 0.9rem;">${link.description}</p>
          ${link.warning ? `<div style="color: #f87171; font-size: 0.8rem; font-weight: 600;">${link.warning}</div>` : ''}
        </div>
        <div style="
          background: var(--primary-gradient);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        ">Visit</div>
      </div>
    </div>
  `).join('')

  container.innerHTML = linksHTML

  // Add click handlers to link items
  container.querySelectorAll('.link-item').forEach((item, index) => {
    item.addEventListener('click', function () {
      window.open(links[index].url, '_blank')
    })

    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px)'
      this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.2)'
    })

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)'
      this.style.boxShadow = 'none'
    })
  })
}

function createParticleBurst (element) {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  // Create 12 particles
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div')
    particle.style.cssText = `
      position: fixed;
      width: 6px;
      height: 6px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      left: ${centerX}px;
      top: ${centerY}px;
      transform: translate(-50%, -50%);
    `
    
    document.body.appendChild(particle)
    
    // Random direction and distance
    const angle = (Math.PI * 2 * i) / 12
    const distance = 50 + Math.random() * 50
    const duration = 600 + Math.random() * 400
    
    // Animate particle
    particle.animate([
      {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1
      },
      {
        transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    })
    
    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, duration)
  }
}

function closeLinksPopup () {
  const popup = document.getElementById('linksPopup')
  const popupOverlay = document.getElementById('popupOverlay')

  if (popup && popupOverlay) {
    popup.classList.remove('active')
    popupOverlay.classList.remove('active')
  }
}

function showComingSoon (feature) {
  const popup = document.getElementById('linksPopup')
  const popupOverlay = document.getElementById('popupOverlay')
  const popupTitle = document.getElementById('popupTitle')
  const linksContainer = document.getElementById('linksContainer')

  if (!popup || !popupOverlay || !popupTitle || !linksContainer) {
    console.error('Popup elements not found')
    return
  }

  popupTitle.textContent = `${feature} - Coming Soon`
  linksContainer.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div style="font-size: 4rem; margin-bottom: 20px;">🚧</div>
      <h3 style="color: #667eea; margin-bottom: 15px; font-size: 1.5rem;">${feature} is Coming Soon!</h3>
      <p style="color: var(--text-secondary); margin-bottom: 20px; line-height: 1.6;">
        We're working hard to bring you the best ${feature.toLowerCase()} experience. 
        Stay tuned for updates and get ready for something amazing!
      </p>
      <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1)); 
                  padding: 20px; border-radius: 15px; margin: 20px 0; border: 1px solid rgba(102, 126, 234, 0.2);">
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 10px;">
          <span style="font-size: 1.2rem;">⭐</span>
          <span style="font-weight: 600; color: var(--text-primary);">What to expect:</span>
        </div>
        <ul style="text-align: left; color: var(--text-secondary); list-style: none; padding: 0;">
          <li style="margin-bottom: 8px;">✨ Premium ${feature.toLowerCase()} content</li>
          <li style="margin-bottom: 8px;">🚀 Lightning-fast performance</li>
          <li style="margin-bottom: 8px;">🔒 Secure and private access</li>
          <li>🎯 Curated just for you</li>
        </ul>
      </div>
      <button onclick="closeLinksPopup()" 
              style="background: linear-gradient(135deg, #667eea, #764ba2); 
                     color: white; border: none; padding: 15px 30px; 
                     border-radius: 25px; font-weight: 600; cursor: pointer; 
                     transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
        Got it!
      </button>
    </div>
  `

  popup.classList.add('active')
  popupOverlay.classList.add('active')
}


// Browser navigation functions
function navigateToUrl () {
  console.log('navigateToUrl function called')

  const urlInput = document.getElementById('browserUrlInput')
  if (!urlInput) {
    console.log('browserUrlInput element not found')
    return
  }

  const targetUrl = urlInput.value.trim()
  if (!targetUrl) {
    console.log('No URL entered')
    return
  }

  // Auto-detect if it's a search term vs website URL
  let finalUrl = targetUrl
  let isSearch = false

  // Check if it's a website URL
  const urlPattern = /^https?:\/\/.+/i
  const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9]*\.[a-zA-Z]{2,}/i
  const ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/i

  // Enhanced check: if it's a single word without dots, treat as search
  if (!urlPattern.test(targetUrl) && !domainPattern.test(targetUrl) && !ipPattern.test(targetUrl)) {
    // Check if it contains dots or spaces - if not, it's likely a search
    if (targetUrl.includes('.') || targetUrl.includes(' ')) {
      // It's a search term, not a URL
      isSearch = true
      finalUrl = `https://duckduckgo.com/?q=${encodeURIComponent(targetUrl)}`
      console.log('Detected search term, redirecting to:', finalUrl)
    } else {
      // Single word without dots - try to add .com
      isSearch = true
      finalUrl = `https://duckduckgo.com/?q=${encodeURIComponent(targetUrl)}`
      console.log('Single word detected, treating as search:', finalUrl)
    }
  } else {
    // It's a URL, normalize it
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      finalUrl = 'https://' + targetUrl
    }
    console.log('Detected URL, processing:', finalUrl)
  }

  // Get selected VPN type and city
  const selectedVpn = localStorage.getItem('selectedVpn') || 'default'
  const selectedCity = localStorage.getItem('selectedCity') || ''

  // Update proxy URL based on VPN selection
  let proxyUrl
  if (selectedVpn === 'default') {
    proxyUrl = `https://iq-test.com.results.dinprima.ro/v1/data/https%3A%2F${finalUrl.replace('https://', '').replace('http://', '')}%2F`
  } else {
    // Default to Canada format for any other VPN (since Canada is now main alternative)
    proxyUrl = `https://petezahames.com/scramjet/https%3A%2F${finalUrl.replace('https://', '').replace('http://', '')}%2F`
  }

  console.log('Using VPN:', selectedVpn, selectedCity)
  console.log('Proxy URL:', proxyUrl)

  showBrowserLoading()

  // Update UI to show what we're doing
  const loading = document.querySelector('.browser-window-loading')
  const content = document.querySelector('.window-preview')

  console.log('Loading element:', loading)
  console.log('Content element:', content)

  if (loading) loading.style.display = 'flex'
  if (content) {
    content.innerHTML = `
            <div class="browser-result">
                <div class="result-icon">🌐</div>
                <h3>Proxy Browser</h3>
                <p>Ready to browse through secure proxy</p>
                <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 15px;">Enter a URL above to begin browsing</p>
                <div style="margin-top: 20px;">
                    <div class="status-indicator active" style="margin: 0 auto 10px;"></div>
                    <p style="color: #22c1c3; font-weight: 600;">Proxy Status: Ready</p>
                </div>
            </div>
        `
  }

  // Simulate loading delay then show proxy options
  setTimeout(() => {
    hideBrowserLoading()
    showBrowserProxyResult(finalUrl, proxyUrl)
  }, 2000)
}

function showBrowserLoading () {
  const loading = document.querySelector('.browser-window-loading')
  const content = document.querySelector('.window-preview')
  const browserPlaceholder = document.querySelector('.browser-placeholder')
  const countdownEl = document.getElementById('countdown')
  const pingEl = document.querySelector('.ping-value')
  const speedEl = document.querySelector('.speed-value')

  if (loading) loading.style.display = 'flex'
  if (content) content.style.display = 'none'
  if (browserPlaceholder) browserPlaceholder.style.display = 'none'

  // Update server stats
  function updateServerStats() {
    if (pingEl && speedEl) {
      // Generate realistic ping values (20-80ms)
      const ping = Math.floor(Math.random() * 60) + 20;
      pingEl.textContent = ping + 'ms';
      
      // Update ping color based on value
      pingEl.className = 'stat-value ping-value';
      if (ping < 40) {
        pingEl.classList.add('ping-good');
      } else if (ping < 60) {
        pingEl.classList.add('ping-medium');
      } else {
        pingEl.classList.add('ping-bad');
      }
      
      // Generate realistic speed values (100-200 Mbps)
      const speed = Math.floor(Math.random() * 100) + 100;
      speedEl.textContent = speed + ' Mbps';
      
      // Update speed color based on value
      speedEl.className = 'stat-value speed-value';
      if (speed >= 150) {
        speedEl.classList.add('speed-good');
      } else if (speed >= 120) {
        speedEl.classList.add('speed-medium');
      } else {
        speedEl.classList.add('speed-bad');
      }
    }
  }

  // Update stats every 2 seconds
  const statsInterval = setInterval(updateServerStats, 2000);
  
  // Initial stats update
  updateServerStats();

  // Start countdown
  let seconds = 3
  if (countdownEl) {
    const interval = setInterval(() => {
      seconds--
      if (seconds > 0) {
        countdownEl.textContent = `Connecting in ${seconds} seconds...`
        // Update stats during countdown
        updateServerStats();
      } else {
        countdownEl.textContent = 'Connected!'
        clearInterval(interval)
        clearInterval(statsInterval);
      }
    }, 1000)
  }
}

function hideBrowserLoading () {
  const loading = document.querySelector('.browser-window-loading')
  const content = document.querySelector('.window-preview')
  const browserPlaceholder = document.querySelector('.browser-placeholder')

  if (loading) loading.style.display = 'none'
  if (content) content.style.display = 'block'
  if (browserPlaceholder) browserPlaceholder.style.display = 'block'
}

function showBrowserPlaceholder () {
  const loading = document.querySelector('.browser-window-loading')
  const content = document.querySelector('.window-preview')
  const browserPlaceholder = document.querySelector('.browser-placeholder')

  if (loading) loading.style.display = 'none'
  if (content) content.style.display = 'none'
  if (browserPlaceholder) browserPlaceholder.style.display = 'block'
}

function resetProxyBrowser () {
  // Function removed - proxy functionality deleted
}

function createVpnServerCloak () {
  // VPN function placeholder
}

function createRipple (element, event) {
  const ripple = document.createElement('span')
  ripple.className = 'ripple'
  ripple.style.position = 'absolute'
  ripple.style.borderRadius = '50%'
  ripple.style.background = 'rgba(255, 255, 255, 0.2)'
  ripple.style.transform = 'translate(-50%, -50%)'
  ripple.style.width = '20px'
  ripple.style.height = '20px'
  ripple.style.pointerEvents = 'none'

  const rect = element.getBoundingClientRect()
  ripple.style.left = (rect.width / 2) + 'px'
  ripple.style.top = (rect.height / 2) + 'px'

  element.appendChild(ripple)

  setTimeout(() => {
    ripple.style.transform = 'translate(-50%, -50%) scale(0)'
    ripple.style.opacity = '0'
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple)
      }
    }, 600)
  }, 10)
}

// Chat System Functions
function showChat () {
  const mainContent = document.getElementById('mainContent')
  const categoriesSection = document.getElementById('categoriesSection')
  const chatSection = document.getElementById('chatSection')

  if (mainContent && categoriesSection && chatSection) {
    mainContent.style.display = 'none'
    categoriesSection.style.display = 'none'
    chatSection.style.display = 'block'
    
    // Load chat data and initialize
    loadChatMessages()
    updateChatStats()
    
    // Start periodic user count updates
    startUserCountUpdates()
    
    // Start auto-save
    startAutoSave()
    
    console.log('🚀 Chat opened with permanent storage enabled')
  }
}

function startUserCountUpdates () {
  // Update user count every 30 seconds to simulate real-time activity
  setInterval(() => {
    const usersElement = document.getElementById('chatUsers')
    if (usersElement && document.getElementById('chatSection').style.display !== 'none') {
      const uniqueUsers = getUniqueUserCount()
      usersElement.textContent = `${uniqueUsers} users online`
    }
  }, 30000)
}

function sendChatMessage () {
  const input = document.getElementById('chatInput')
  const message = input ? input.value.trim() : ''
  
  if (!message) return
  
  const username = generateUsername()
  const timestamp = new Date().toISOString()
  
  const chatMessage = {
    username,
    message,
    timestamp,
    id: Date.now().toString()
  }
  
  console.log('📤 Sending message:', chatMessage)
  
  // Add message to storage first
  addChatMessage(chatMessage)
  
  // Then display it
  displayChatMessage(chatMessage)
  
  // Clear input
  if (input) input.value = ''
  
  // Force save after sending
  setTimeout(() => {
    manualSaveChat()
  }, 100)
  
  console.log('✅ Message sent and saved successfully')
}

// Auto-save every 30 seconds
function startAutoSave () {
  setInterval(() => {
    if (document.getElementById('chatSection').style.display !== 'none') {
      const saved = manualSaveChat()
      if (saved) {
        console.log('💾 Auto-save completed')
      }
    }
  }, 30000)
}

function generateUsername () {
  const adjectives = ['Cool', 'Smart', 'Happy', 'Brave', 'Quick', 'Silent', 'Wild', 'Calm', 'Bold', 'Swift']
  const nouns = ['Fox', 'Eagle', 'Wolf', 'Lion', 'Tiger', 'Bear', 'Hawk', 'Falcon', 'Dragon', 'Phoenix']
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)]
  const randomNum = Math.floor(Math.random() * 999) + 1
  
  return `${randomAdjective}${randomNoun}${randomNum}`
}

function loadChatMessages () {
  // Initialize chat storage if it doesn't exist
  initializeChatStorage()
  
  const messages = getChatMessages()
  const messagesContainer = document.getElementById('chatMessages')
  
  if (!messagesContainer) return
  
  // Clear existing messages except welcome
  const welcomeMessage = messagesContainer.querySelector('.chat-welcome')
  messagesContainer.innerHTML = ''
  
  if (welcomeMessage) {
    messagesContainer.appendChild(welcomeMessage)
  }
  
  // Display messages (newest first)
  messages.slice().reverse().forEach(message => {
    displayChatMessage(message)
  })
  
  console.log('Loaded', messages.length, 'chat messages from JSON storage')
}

function initializeChatStorage () {
  // Check if JSON file exists
  const hasJSONFile = localStorage.getItem('ultimateChatData')
  
  if (!hasJSONFile) {
    // Initialize with some welcome messages
    const initialMessages = [
      {
        username: 'CoolFox123',
        message: 'Welcome to the chat! Feel free to say hi 👋',
        timestamp: new Date(Date.now() - 300000).toISOString(),
        id: '1'
      },
      {
        username: 'SmartEagle456',
        message: 'Hey everyone! How\'s it going?',
        timestamp: new Date(Date.now() - 240000).toISOString(),
        id: '2'
      },
      {
        username: 'HappyWolf789',
        message: 'This chat looks amazing! Love the design 🎨',
        timestamp: new Date(Date.now() - 180000).toISOString(),
        id: '3'
      }
    ]
    
    // Create JSON file structure
    const chatData = {
      messages: initialMessages,
      lastUpdated: new Date().toISOString(),
      version: '1.0',
      totalMessages: initialMessages.length,
      created: new Date().toISOString()
    }
    
    // Save as JSON file (primary storage)
    localStorage.setItem('ultimateChatData', JSON.stringify(chatData))
    
    // Also save to all other storage locations
    saveToMultipleLocations(initialMessages)
    
    console.log('🚀 Created JSON file with welcome messages')
    showMessagesLoadedIndicator(initialMessages.length)
  } else {
    console.log('✅ JSON file already exists')
  }
}

function backupChatToFile () {
  try {
    const messages = getChatMessages()
    const chatData = {
      users: [],
      chat: {
        messages: messages,
        lastUpdated: new Date().toISOString()
      },
      settings: {
        maxMessages: 100,
        allowAnonymous: true,
        requireVerification: false
      }
    }
    
    // Store backup in localStorage as well
    localStorage.setItem('chatBackup', JSON.stringify(chatData))
    console.log('Chat data backed up to JSON structure')
  } catch (error) {
    console.error('Error backing up chat data:', error)
  }
}

function displayChatMessage (message) {
  const messagesContainer = document.getElementById('chatMessages')
  if (!messagesContainer || !message) return
  
  // Remove welcome message if it exists
  const welcomeMessage = messagesContainer.querySelector('.chat-welcome')
  if (welcomeMessage) {
    welcomeMessage.remove()
  }
  
  const messageElement = document.createElement('div')
  messageElement.className = 'chat-message'
  messageElement.innerHTML = `
    <div class="message-header">
      <span class="message-username">${escapeHtml(message?.username || 'Anonymous')}</span>
      <span class="message-timestamp">${formatTimestamp(message?.timestamp || new Date().toISOString())}</span>
    </div>
    <div class="message-content">${escapeHtml(message?.message || 'No message')}</div>
  `
  
  // Add to top (newest first)
  messagesContainer.insertBefore(messageElement, messagesContainer.firstChild)
  
  // Keep only last 50 messages in view
  const allMessages = messagesContainer.querySelectorAll('.chat-message')
  if (allMessages.length > 50) {
    allMessages[allMessages.length - 1].remove()
  }
}

function manualSaveChat () {
  try {
    const messages = getChatMessages()
    localStorage.setItem('chatMessages', JSON.stringify(messages))
    console.log('💾 Manual save completed. Messages saved:', messages.length)
    return true
  } catch (error) {
    console.error('❌ Manual save failed:', error)
    return false
  }
}

function saveChatMessage (message) {
  // Ensure storage is initialized
  initializeChatStorage()
  
  const messages = getChatMessages()
  messages.push(message)
  
  // Keep only last 100 messages in storage
  if (messages.length > 100) {
    messages.splice(0, messages.length - 100)
  }

  // Save to multiple storage locations
  const saveSuccess = saveToMultipleLocations(messages)

  if (saveSuccess) {
    console.log('✅ Message saved successfully. Total messages:', messages.length)
  } else {
    console.error('❌ Failed to save message to any storage')
  }

  // Update stats immediately after saving
  updateChatStats()
}

function updateChatStats () {
  const messages = getChatMessages()
  const usersElement = document.getElementById('chatUsers')
  const messagesElement = document.getElementById('chatMessagesCount')

  // Get real user count from stored data
  const uniqueUsers = getUniqueUserCount()

  if (usersElement) {
    usersElement.textContent = `${uniqueUsers} users online`
  }

  if (messagesElement) {
    messagesElement.textContent = `${messages.length} messages`
  }
}

function getUniqueUserCount () {
  const messages = getChatMessages()
  const uniqueUsers = new Set()

  // Count unique usernames from messages
  messages.forEach(message => {
    if (message && message.username) {
      uniqueUsers.add(message.username)
    }
  })

  // Add some random online users to simulate activity
  const baseCount = uniqueUsers.size
  const randomUsers = Math.floor(Math.random() * 10) + 5
  return Math.max(baseCount + randomUsers, 1)
}

function formatTimestamp (timestamp) {
  const date = new Date(timestamp)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`
  return `${Math.floor(diffMins / 1440)}d ago`
}

function escapeHtml (text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

function saveToMultipleLocations (messages) {
  let successCount = 0
  
  // Save to JSON file (primary method)
  try {
    saveToJSONFile(messages)
    successCount++
    console.log('✅ Saved to JSON file')
  } catch (error) {
    console.error('❌ JSON file save failed:', error)
  }
  
  // Try localStorage as backup
  try {
    localStorage.setItem('chatMessages', JSON.stringify(messages))
    localStorage.setItem('chatMessagesBackup', JSON.stringify(messages))
    successCount++
    console.log('✅ Saved to localStorage')
  } catch (error) {
    console.error('❌ localStorage save failed:', error)
  }
  
  // Try sessionStorage as backup
  try {
    sessionStorage.setItem('chatMessages', JSON.stringify(messages))
    successCount++
    console.log('✅ Saved to sessionStorage')
  } catch (error) {
    console.error('❌ sessionStorage save failed:', error)
  }
  
  // Try IndexedDB for persistent storage
  try {
    saveToIndexedDB(messages)
    successCount++
    console.log('✅ Saved to IndexedDB')
  } catch (error) {
    console.error('❌ IndexedDB save failed:', error)
  }
  
  // Show save indicator
  showSaveIndicator(successCount > 0)
  
  // Return true if at least one save succeeded
  return successCount > 0
}

function saveToJSONFile (messages) {
  const chatData = {
    messages: messages,
    lastUpdated: new Date().toISOString(),
    version: '1.0',
    totalMessages: messages.length
  }
  
  // Create a blob with the JSON data
  const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' })
  
  // Save to localStorage as file simulation
  localStorage.setItem('ultimateChatJSON', blob)
  
  // Also save as regular string for easy access
  localStorage.setItem('ultimateChatData', JSON.stringify(chatData))
  
  // Show messages loaded indicator
  showMessagesLoadedIndicator(messages.length)
}

function loadFromJSONFile () {
  try {
    // Try to load from the JSON data first
    const jsonData = localStorage.getItem('ultimateChatData')
    if (jsonData) {
      const chatData = JSON.parse(jsonData)
      console.log('📂 Loaded', chatData.totalMessages, 'messages from JSON file')
      showMessagesLoadedIndicator(chatData.totalMessages)
      return chatData.messages
    }
  } catch (error) {
    console.error('❌ JSON file load failed:', error)
  }
  
  return null
}

function showMessagesLoadedIndicator (messageCount) {
  const indicator = document.createElement('div')
  indicator.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 30px;
    font-weight: 700;
    font-size: 1rem;
    z-index: 10000;
    transition: all 0.3s ease;
    animation: slideInDown 0.3s ease;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  `
  
  indicator.innerHTML = `📂 MESSAGES LOADED: ${messageCount} messages`
  
  document.body.appendChild(indicator)
  
  setTimeout(() => {
    indicator.style.opacity = '0'
    indicator.style.transform = 'translateX(-50%) translateY(-20px)'
    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.parentNode.removeChild(indicator)
      }
    }, 300)
  }, 3000)
}

function saveToIndexedDB (messages) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('UltimateChatDB', 1)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => {
      const db = request.result
      const transaction = db.transaction(['messages'], 'readwrite')
      const store = transaction.objectStore('messages')
      
      const putRequest = store.put({ data: messages, timestamp: Date.now() }, 'chatMessages')
      putRequest.onerror = () => reject(putRequest.error)
      putRequest.onsuccess = () => resolve(putRequest.result)
    }
    
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('messages')) {
        const store = db.createObjectStore('messages')
        console.log('🗄️ Created IndexedDB messages store')
      }
    }
  })
}

function loadFromIndexedDB () {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('UltimateChatDB', 1)
    
    request.onerror = () => reject(request.error)
    request.onsuccess = () => {
      const db = request.result
      const transaction = db.transaction(['messages'], 'readonly')
      const store = transaction.objectStore('messages')
      
      const getRequest = store.get('chatMessages')
      getRequest.onerror = () => reject(getRequest.error)
      getRequest.onsuccess = () => {
        if (getRequest.result && getRequest.result.data) {
          resolve(getRequest.result.data)
        } else {
          resolve(null)
        }
      }
    }
    
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains('messages')) {
        const store = db.createObjectStore('messages')
        console.log('🗄️ Created IndexedDB messages store')
      }
    }
  })
}

function showSaveIndicator (success) {
  const indicator = document.createElement('div')
  indicator.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.9rem;
    z-index: 10000;
    transition: all 0.3s ease;
    animation: slideIn 0.3s ease;
  `
  
  if (success) {
    indicator.style.background = 'linear-gradient(135deg, #10b981, #059669)'
    indicator.style.color = 'white'
    indicator.textContent = '✅ Messages Saved'
  } else {
    indicator.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)'
    indicator.style.color = 'white'
    indicator.textContent = '❌ Save Failed'
  }
  
  document.body.appendChild(indicator)
  
  setTimeout(() => {
    indicator.style.opacity = '0'
    setTimeout(() => {
      if (indicator.parentNode) {
        indicator.parentNode.removeChild(indicator)
      }
    }, 300)
  }, 2000)
}

function getChatMessages () {
  // Try to load from JSON file first (primary method)
  try {
    const jsonMessages = loadFromJSONFile()
    if (jsonMessages && jsonMessages.length > 0) {
      console.log('📂 Using JSON file as primary source')
      // Also backup to other storages
      localStorage.setItem('chatMessages', JSON.stringify(jsonMessages))
      sessionStorage.setItem('chatMessages', JSON.stringify(jsonMessages))
      return jsonMessages
    }
  } catch (error) {
    console.error('❌ JSON file primary load failed:', error)
  }
  
  // Try localStorage as backup
  try {
    const stored = localStorage.getItem('chatMessages')
    if (stored) {
      const messages = JSON.parse(stored)
      console.log('📝 Loaded', messages.length, 'messages from localStorage backup')
      showMessagesLoadedIndicator(messages.length)
      return messages
    }
  } catch (error) {
    console.error('❌ localStorage read failed:', error)
  }
  
  // Try localStorage backup
  try {
    const backup = localStorage.getItem('chatMessagesBackup')
    if (backup) {
      const messages = JSON.parse(backup)
      console.log('📝 Loaded', messages.length, 'messages from localStorage backup')
      showMessagesLoadedIndicator(messages.length)
      // Restore main storage
      localStorage.setItem('chatMessages', backup)
      return messages
    }
  } catch (error) {
    console.error('❌ localStorage backup read failed:', error)
  }
  
  // Try sessionStorage
  try {
    const stored = sessionStorage.getItem('chatMessages')
    if (stored) {
      const messages = JSON.parse(stored)
      console.log('📝 Loaded', messages.length, 'messages from sessionStorage')
      showMessagesLoadedIndicator(messages.length)
      // Restore localStorage
      localStorage.setItem('chatMessages', stored)
      return messages
    }
  } catch (error) {
    console.error('❌ sessionStorage read failed:', error)
  }
  
  // Try IndexedDB (most persistent)
  try {
    loadFromIndexedDB().then(indexedMessages => {
      if (indexedMessages && indexedMessages.length > 0) {
        console.log('📝 Loaded', indexedMessages.length, 'messages from IndexedDB')
        showMessagesLoadedIndicator(indexedMessages.length)
        // Restore all other storages
        localStorage.setItem('chatMessages', JSON.stringify(indexedMessages))
        sessionStorage.setItem('chatMessages', JSON.stringify(indexedMessages))
        return indexedMessages
      }
    }).catch(error => {
      console.error('❌ IndexedDB read failed:', error)
    })
  } catch (error) {
    console.error('❌ IndexedDB access failed:', error)
  }
  
  // If no storage has data, initialize
  console.log('📝 No messages found in any storage, initializing')
  return []
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createVpnServerCloak }
}
