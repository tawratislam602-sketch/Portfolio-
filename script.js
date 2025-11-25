// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
const modeIcon = modeToggle.querySelector('i');

// Check for saved theme preference or respect OS preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
} else {
    document.body.classList.remove('dark-mode');
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
}

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px var(--shadow)';
    } else {
        header.style.boxShadow = '0 2px 10px var(--shadow)';
    }
});

// Improved animation with staggered delays
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delay
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.interest-card').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.timeline-item').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.education-card').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.contact-item').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.social-link').forEach((el, index) => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .interest-card, .timeline-item, .education-card, .contact-item, .social-link {
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .project-card {
        transition-delay: 0.1s;
    }
    
    .interest-card {
        transition-delay: 0.2s;
    }
    
    .timeline-item {
        transition-delay: 0.3s;
    }
    
    .education-card {
        transition-delay: 0.4s;
    }
    
    .contact-item {
        transition-delay: 0.5s;
    }
    
    .social-link {
        transition-delay: 0.6s;
    }
`;
document.head.appendChild(style);
