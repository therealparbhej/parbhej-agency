/* ========================================
   PixelPulse Studio - Advanced Animations
   Enhanced Visual Effects
   ======================================== */

// ========================================
// Scroll-Triggered Animations
// ========================================
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2');
        this.init();
    }
    
    init() {
        // Add animation classes to elements
        this.setupObserver();
        this.triggerAnimations();
    }
    
    setupObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Optional: Unobserve after animation
                    // this.observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        this.animatedElements.forEach(el => this.observer.observe(el));
    }
    
    triggerAnimations() {
        // Trigger initial animations on page load
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero .fade-in, .hero .fade-in-delay, .hero .fade-in-delay-2');
            heroElements.forEach(el => el.classList.add('active'));
        }, 100);
    }
}

// Initialize scroll animations
const scrollAnimations = new ScrollAnimations();

// ========================================
// Glow Effect on Hover
// ========================================
function initGlowEffects() {
    const glowElements = document.querySelectorAll('.glow-effect');
    
    glowElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create dynamic glow gradient
            element.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(185, 131, 255, 0.15), transparent 40%)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.background = '';
        });
    });
}

initGlowEffects();

// ========================================
// Button Ripple Effect
// ========================================
class RippleEffect {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });
        });
    }
    
    createRipple(e, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Add ripple styles
        Object.assign(ripple.style, {
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.6)',
            transform: 'scale(0)',
            animation: 'rippleEffect 0.6s ease-out',
            pointerEvents: 'none'
        });
        
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    }
}

// Initialize ripple effect
new RippleEffect();

// Add ripple keyframes to stylesheet
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// ========================================
// Text Reveal Animation
// ========================================
function revealText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    
    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.opacity = '0';
        span.style.animation = `fadeInChar 0.3s ease forwards ${i * 0.05}s`;
        element.appendChild(span);
    });
}

// Add character fade-in keyframes
const charFadeStyles = document.createElement('style');
charFadeStyles.textContent = `
    @keyframes fadeInChar {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(charFadeStyles);

// Apply to section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    // Only apply on first view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealText(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(title);
});

// ========================================
// Card Stagger Animation
// ========================================
function animateCards(cards) {
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
    });
}

// Animate service cards on load
const serviceCards = document.querySelectorAll('.service-card');
if (serviceCards.length > 0) {
    const serviceSection = document.querySelector('#services');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards(serviceCards);
                observer.unobserve(serviceSection);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(serviceSection);
}

// Animate pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');
if (pricingCards.length > 0) {
    const pricingSection = document.querySelector('#pricing');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards(pricingCards);
                observer.unobserve(pricingSection);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(pricingSection);
}

// ========================================
// Mouse Trail Effect (Optional - Subtle)
// ========================================
let mouseTrailEnabled = false; // Set to true to enable

if (mouseTrailEnabled) {
    const trailContainer = document.createElement('div');
    trailContainer.id = 'mouse-trail';
    document.body.appendChild(trailContainer);
    
    let particles = [];
    const maxParticles = 20;
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.02;
            
            this.element = document.createElement('div');
            this.element.style.position = 'absolute';
            this.element.style.width = this.element.style.height = this.size + 'px';
            this.element.style.background = 'rgba(185, 131, 255, 0.6)';
            this.element.style.borderRadius = '50%';
            this.element.style.pointerEvents = 'none';
            this.element.style.zIndex = '9999';
            
            trailContainer.appendChild(this.element);
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.decay;
            
            this.element.style.left = this.x + 'px';
            this.element.style.top = this.y + 'px';
            this.element.style.opacity = this.life;
        }
        
        isDead() {
            return this.life <= 0;
        }
        
        remove() {
            this.element.remove();
        }
    }
    
    document.addEventListener('mousemove', (e) => {
        particles.push(new Particle(e.clientX, e.clientY));
        
        if (particles.length > maxParticles) {
            const oldParticle = particles.shift();
            oldParticle.remove();
        }
    });
    
    function animateTrail() {
        particles.forEach((particle, index) => {
            particle.update();
            if (particle.isDead()) {
                particle.remove();
                particles.splice(index, 1);
            }
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// ========================================
// Gradient Background Animation
// ========================================
function animateGradientBackground() {
    const heroBg = document.querySelector('.hero-background');
    if (!heroBg) return;
    
    let hue = 0;
    
    function updateGradient() {
        hue = (hue + 0.2) % 360;
        
        // Subtle color shift
        const orb1 = document.querySelector('.gradient-orb-1');
        const orb2 = document.querySelector('.gradient-orb-2');
        const orb3 = document.querySelector('.gradient-orb-3');
        
        if (orb1) orb1.style.filter = `blur(100px) hue-rotate(${hue}deg)`;
        if (orb2) orb2.style.filter = `blur(100px) hue-rotate(${hue + 120}deg)`;
        if (orb3) orb3.style.filter = `blur(100px) hue-rotate(${hue + 240}deg)`;
        
        requestAnimationFrame(updateGradient);
    }
    
    updateGradient();
}

animateGradientBackground();

// ========================================
// Image Loading Animation
// ========================================
function initImageLoadingAnimation() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading class
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Fallback for cached images
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

initImageLoadingAnimation();

// ========================================
// Magnetic Button Effect
// ========================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

initMagneticButtons();

// ========================================
// Number Counter with Formatting
// ========================================
function formatCounter(number) {
    if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'k+';
    }
    return number + '+';
}

// Enhanced counter animation
function enhancedAnimateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(target * easeProgress);
        
        element.textContent = formatCounter(current);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Re-initialize counters with enhanced version
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                enhancedAnimateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(stat);
});

// ========================================
// Cursor Follower Effect (Optional)
// ========================================
let customCursorEnabled = false; // Set to true to enable

if (customCursorEnabled) {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.id = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    // Styles
    Object.assign(cursor.style, {
        position: 'fixed',
        width: '40px',
        height: '40px',
        border: '2px solid rgba(185, 131, 255, 0.5)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        transition: 'transform 0.1s ease',
        transform: 'translate(-50%, -50%)'
    });
    
    Object.assign(cursorDot.style, {
        position: 'fixed',
        width: '8px',
        height: '8px',
        background: 'var(--neon-purple)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999',
        transform: 'translate(-50%, -50%)'
    });
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Scale cursor on hoverable elements
    const hoverableElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
    hoverableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ========================================
// Portfolio Item 3D Tilt Effect
// ========================================
function initTiltEffect() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

initTiltEffect();

// ========================================
// Typing Effect for Hero (Optional)
// ========================================
let typingEffectEnabled = false; // Set to true to enable

if (typingEffectEnabled) {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        const textToType = heroTitle.textContent || heroTitle.innerText;
        let charIndex = 0;
        
        function typeCharacter() {
            if (charIndex < textToType.length) {
                heroTitle.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, 50);
            } else {
                // Restore HTML with gradient
                heroTitle.innerHTML = originalText;
            }
        }
        
        setTimeout(typeCharacter, 1000);
    }
}

// ========================================
// Performance Monitoring
// ========================================
let scrollPerformanceEnabled = false;

if (scrollPerformanceEnabled) {
    let lastScrollTime = 0;
    let frameCount = 0;
    let fps = 0;
    
    window.addEventListener('scroll', () => {
        const now = performance.now();
        frameCount++;
        
        if (now - lastScrollTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastScrollTime = now;
            
            console.log(`Current FPS: ${fps}`);
        }
    });
}

// ========================================
// Cleanup Function
// ========================================
window.addEventListener('beforeunload', () => {
    // Clean up observers and timers
    if (scrollAnimations && scrollAnimations.observer) {
        scrollAnimations.observer.disconnect();
    }
});

// Export animation functions
window.PixelPulseAnimations = {
    ScrollAnimations,
    RippleEffect,
    animateCards,
    revealText,
    enhancedAnimateCounter,
    initTiltEffect,
    initMagneticButtons,
    initGlowEffects
};
