// Animations - ULTIMATE UNBLOCKER

class AnimationManager {
    constructor() {
        this.observers = new Map();
        this.activeAnimations = new Set();
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Initialize all animation systems
    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverAnimations();
        this.setupLoadingAnimations();
        this.setupPageTransitions();
    }

    // Intersection Observer for scroll-triggered animations
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);

        // Observe all elements with animation classes
        document.querySelectorAll('.animate-on-scroll, .fade-in-up, .slide-in-up, .scale-in').forEach(el => {
            observer.observe(el);
        });

        this.observers.set('intersection', observer);
    }

    // Animate individual element
    animateElement(element) {
        const animationType = this.getAnimationType(element);
        const delay = parseFloat(element.dataset.delay) || 0;

        setTimeout(() => {
            element.classList.add('animate');
            this.activeAnimations.add(element);
            
            // Remove from active animations when complete
            const duration = this.getAnimationDuration(element);
            setTimeout(() => {
                this.activeAnimations.delete(element);
            }, duration);
        }, delay);
    }

    // Get animation type from element classes
    getAnimationType(element) {
        const classes = element.classList;
        if (classes.contains('fade-in-up')) return 'fade-in-up';
        if (classes.contains('fade-in-down')) return 'fade-in-down';
        if (classes.contains('fade-in-left')) return 'fade-in-left';
        if (classes.contains('fade-in-right')) return 'fade-in-right';
        if (classes.contains('slide-in-up')) return 'slide-in-up';
        if (classes.contains('scale-in')) return 'scale-in';
        return 'fade-in-up';
    }

    // Get animation duration
    getAnimationDuration(element) {
        const style = window.getComputedStyle(element);
        const duration = style.animationDuration || style.transitionDuration;
        return parseFloat(duration) * 1000; // Convert to milliseconds
    }

    // Scroll-based animations
    setupScrollAnimations() {
        let ticking = false;

        const updateScrollAnimations = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Parallax effects
            this.updateParallax(scrollY);
            
            // Progress indicators
            this.updateScrollProgress(scrollY, windowHeight);
            
            // Navbar effects
            this.updateNavbar(scrollY);
            
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // Parallax scrolling effects
    updateParallax(scrollY) {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Update scroll progress indicators
    updateScrollProgress(scrollY, windowHeight) {
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const progress = (scrollY / documentHeight) * 100;
        
        const progressBars = document.querySelectorAll('.scroll-progress');
        progressBars.forEach(bar => {
            bar.style.width = `${progress}%`;
        });
    }

    // Navbar scroll effects
    updateNavbar(scrollY) {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (scrollY > 100) {
                navbar.classList.add('scrolled', 'navbar-scrolled');
            } else {
                navbar.classList.remove('scrolled', 'navbar-scrolled');
            }
        }
    }

    // Hover animations
    setupHoverAnimations() {
        // Card hover effects
        document.querySelectorAll('.hover-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => this.handleCardHover(e, true));
            card.addEventListener('mouseleave', (e) => this.handleCardHover(e, false));
        });

        // Button hover effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', (e) => this.handleButtonHover(e, true));
            btn.addEventListener('mouseleave', (e) => this.handleButtonHover(e, false));
        });

        // Magnetic effect for buttons
        document.querySelectorAll('.magnetic').forEach(element => {
            this.setupMagneticEffect(element);
        });
    }

    // Handle card hover animations
    handleCardHover(event, isEntering) {
        const card = event.currentTarget;
        
        if (isEntering) {
            card.classList.add('hover-active');
            this.addRippleEffect(event);
        } else {
            card.classList.remove('hover-active');
        }
    }

    // Handle button hover animations
    handleButtonHover(event, isEntering) {
        const btn = event.currentTarget;
        
        if (isEntering) {
            btn.classList.add('btn-hover');
            this.addRippleEffect(event);
        } else {
            btn.classList.remove('btn-hover');
        }
    }

    // Ripple effect on click
    addRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Magnetic effect for interactive elements
    setupMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const distance = Math.sqrt(x * x + y * y);
            const maxDistance = 100;
            
            if (distance < maxDistance) {
                const strength = (maxDistance - distance) / maxDistance;
                const moveX = (x / maxDistance) * strength * 10;
                const moveY = (y / maxDistance) * strength * 10;
                
                element.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + strength * 0.05})`;
            }
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    }

    // Loading animations
    setupLoadingAnimations() {
        this.createLoadingParticles();
        this.setupProgressAnimations();
    }

    // Create particle effects for loading
    createLoadingParticles() {
        const container = document.querySelector('.loading-content');
        if (!container) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'loading-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(45deg, #e94560, #533483);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0;
            `;
            container.appendChild(particle);
            
            this.animateParticle(particle, i);
        }
    }

    // Animate individual particle
    animateParticle(particle, index) {
        const delay = index * 200;
        const duration = 3000 + Math.random() * 2000;
        
        setTimeout(() => {
            this.animateParticleMovement(particle, duration);
        }, delay);
    }

    // Particle movement animation
    animateParticleMovement(particle, duration) {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100 - 50;

        particle.animate([
            { 
                transform: `translate(${startX}vw, ${startY}vh) scale(0)`,
                opacity: 0
            },
            { 
                transform: `translate(${startX}vw, ${startY}vh) scale(1)`,
                opacity: 1,
                offset: 0.1
            },
            { 
                transform: `translate(${endX}vw, ${endY}vh) scale(1)`,
                opacity: 1,
                offset: 0.9
            },
            { 
                transform: `translate(${endX}vw, ${endY}vh) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'ease-in-out'
        }).onfinish = () => {
            this.animateParticleMovement(particle, duration);
        };
    }

    // Progress bar animations
    setupProgressAnimations() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach(bar => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.dataset.width || '100%';
                        entry.target.style.width = width;
                        entry.target.style.transition = 'width 1s ease-out';
                    }
                });
            });
            
            observer.observe(bar);
        });
    }

    // Page transition animations
    setupPageTransitions() {
        // Add transition classes to body
        document.body.classList.add('page-transitions-enabled');
        
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimations();
            } else {
                this.resumeAnimations();
            }
        });
    }

    // Pause all animations for performance
    pauseAnimations() {
        this.activeAnimations.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    }

    // Resume all animations
    resumeAnimations() {
        this.activeAnimations.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }

    // Custom animation functions
    fadeIn(element, duration = 300, delay = 0) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, delay);
    }

    fadeOut(element, duration = 300, delay = 0) {
        element.style.transition = `opacity ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.opacity = '0';
        }, delay);
    }

    slideIn(element, direction = 'up', distance = 30, duration = 400, delay = 0) {
        const transforms = {
            up: `translateY(${distance}px)`,
            down: `translateY(-${distance}px)`,
            left: `translateX(${distance}px)`,
            right: `translateX(-${distance}px)`
        };
        
        element.style.transform = transforms[direction];
        element.style.opacity = '0';
        element.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.transform = 'translate(0, 0)';
            element.style.opacity = '1';
        }, delay);
    }

    scaleIn(element, scale = 0.8, duration = 400, delay = 0) {
        element.style.transform = `scale(${scale})`;
        element.style.opacity = '0';
        element.style.transition = `transform ${duration}ms ease, opacity ${duration}ms ease`;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '1';
        }, delay);
    }

    // Stagger animation for groups
    staggerAnimate(elements, animation = 'fadeIn', staggerDelay = 100) {
        elements.forEach((element, index) => {
            const delay = index * staggerDelay;
            
            switch (animation) {
                case 'fadeIn':
                    this.fadeIn(element, 400, delay);
                    break;
                case 'slideIn':
                    this.slideIn(element, 'up', 30, 400, delay);
                    break;
                case 'scaleIn':
                    this.scaleIn(element, 0.8, 400, delay);
                    break;
            }
        });
    }

    // Performance optimization
    optimizeAnimations() {
        // Reduce animations on low-end devices
        if (this.isLowEndDevice()) {
            document.body.classList.add('reduced-animations');
        }
        
        // Use GPU acceleration where beneficial
        this.enableGPUAcceleration();
    }

    // Detect low-end devices
    isLowEndDevice() {
        // Check for reduced motion preference
        if (this.isReducedMotion) return true;
        
        // Check hardware concurrency
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            return true;
        }
        
        // Check device memory
        if (navigator.deviceMemory && navigator.deviceMemory < 4) {
            return true;
        }
        
        return false;
    }

    // Enable GPU acceleration for animated elements
    enableGPUAcceleration() {
        const animatedElements = document.querySelectorAll('.will-change-transform, .floating-card, .category-card, .link-card');
        
        animatedElements.forEach(element => {
            element.style.willChange = 'transform';
            element.style.transform = 'translateZ(0)';
        });
    }

    // Cleanup
    destroy() {
        // Disconnect all observers
        this.observers.forEach(observer => {
            observer.disconnect();
        });
        this.observers.clear();
        
        // Clear active animations
        this.activeAnimations.clear();
    }
}

// Global animation manager instance
let animationManager;

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    animationManager = new AnimationManager();
    animationManager.init();
    animationManager.optimizeAnimations();
});

// Export for global access
window.AnimationManager = AnimationManager;
window.animationManager = animationManager;
