// GLM.TECH Landing Page JavaScript - English Only

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeMobileMenu();
    initializeScrollEffects();
    initializeDemo();
    initializeBackToTop();
    initializeTracking();
});

// Mobile menu functionality
function initializeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });

        // Close menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Scroll effects
function initializeScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }

        lastScroll = currentScroll;
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Demo functionality
function initializeDemo() {
    // Demo input character counter
    const demoInput = document.getElementById('demo-input');
    if (demoInput) {
        demoInput.addEventListener('input', function() {
            // Optional: Add character limit or other validations
        });
    }
}

// Handle demo submission
function handleDemo() {
    const input = document.getElementById('demo-input');
    const output = document.getElementById('demo-output');
    const message = input.value.trim();

    if (!message) return;

    // Show loading state
    output.classList.remove('hidden');
    output.querySelector('p').textContent = 'Sending...';

    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "Thank you for your question! GLM-4.7 can understand various complex questions and provide professional answers. You can try asking about programming, creation, data analysis, etc.",
            "That's a great question! GLM-4.7 performs excellently in multiple fields, whether it's technical issues or creative needs, I can help you.",
            "GLM-4.7 has powerful understanding and reasoning abilities, can accurately grasp your needs and provide professional solutions."
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        output.querySelector('p').textContent = randomResponse;

        // Send tracking event
        if (window.gtag) {
            gtag('event', 'demo_submitted', {
                'event_category': 'Conversion',
                'event_label': 'demo_interaction'
            });
        }
    }, 1500);
}

// Back to top button
function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
                backToTopButton.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll to functions
function scrollToFeatures() {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTry() {
    document.getElementById('try-now')?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPricing() {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
}

// Conversion actions
function handleTryNow() {
    // Track the action
    if (window.gtag) {
        gtag('event', 'try_now_clicked', {
            'event_category': 'Conversion',
            'event_label': 'primary_cta'
        });
    }

    // Redirect to ChatGLM
    window.open('https://chatglm.cn/main/alltoolsdetail', '_blank');

    // Alternatively, show a modal or inline experience
    // showExperienceModal();
}

function handleSelectPlan(plan) {
    // Track plan selection
    if (window.gtag) {
        gtag('event', 'plan_selected', {
            'event_category': 'Conversion',
            'event_label': plan
        });
    }

    // Handle different plan selections
    switch(plan) {
        case 'free':
            // Redirect to signup or show free tier details
            window.open('https://chatglm.cn/signup', '_blank');
            break;
        case 'pro':
            // Show upgrade flow
            window.open('https://open.bigmodel.cn/console/modelcenter/square', '_blank');
            break;
        case 'enterprise':
            // Show contact form
            showContactForm();
            break;
    }
}

function handleContact() {
    if (window.gtag) {
        gtag('event', 'contact_clicked', {
            'event_category': 'Conversion',
            'event_label': 'schedule_demo'
        });
    }

    // Show contact modal or redirect
    window.location.href = '#contact';
}

// Show contact form (if needed)
function showContactForm() {
    // This would typically show a modal or navigate to a contact page
    alert('Please contact us for enterprise solutions: contact@zhipu.ai');
}

// Initialize tracking
function initializeTracking() {
    // Track page view
    if (window.gtag) {
        gtag('event', 'page_view', {
            'event_category': 'Engagement',
            'event_label': 'landing_page_view'
        });
    }

    // Track scroll depth
    let scrollPercentage = 0;
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;

        if (Math.floor(scrolled) > scrollPercentage) {
            scrollPercentage = Math.floor(scrolled);

            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': `${scrollPercentage}%_scrolled`
                });
            }
        }
    });

    // Track time on page
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage++;

        // Send time tracking every 30 seconds
        if (timeOnPage % 30 === 0) {
            if (window.gtag) {
                gtag('event', 'time_on_page', {
                    'event_category': 'Engagement',
                    'event_label': `${timeOnPage}_seconds`
                });
            }
        }
    }, 1000);
}

// Utility functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Performance optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images if any
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        // Observe all images with lazy class
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Page Error:', e.error);

    // Send error to tracking if available
    if (window.gtag) {
        gtag('event', 'javascript_error', {
            'event_category': 'Error',
            'event_label': e.message,
            'non_interaction': true
        });
    }
});

// Export functions for external use if needed
window.GLM_Landing = {
    handleTryNow: handleTryNow,
    handleSelectPlan: handleSelectPlan,
    handleDemo: handleDemo
};
