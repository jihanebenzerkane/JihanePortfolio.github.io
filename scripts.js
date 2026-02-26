/* ════════════════════════════════════════
   ✨ EXTRAVAGANT PORTFOLIO — SCRIPTS
   ════════════════════════════════════════ */

// ═══ LOADER ═══
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2500);
});

// ═══ CURSOR GLOW ═══
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// ═══ PARTICLES ═══
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';
        container.appendChild(particle);
    }
}
createParticles();

// ═══ NAVBAR SCROLL ═══
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ═══ ACTIVE NAV LINK ═══
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ═══ HAMBURGER MENU ═══
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ═══ ROTATING WORDS ═══
const words = ['AI Engineer', 'Digital Strategist', 'Problem Solver', 'Innovator', 'Hardworker'];
let wordIndex = 0;

function rotateWords() {
    const glowText = document.querySelector('.glow-text');

    glowText.style.opacity = '0';
    glowText.style.transform = 'translateY(10px)';

    setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        glowText.textContent = words[wordIndex];
        glowText.style.opacity = '1';
        glowText.style.transform = 'translateY(0)';
    }, 400);
}

glowText = document.querySelector('.glow-text');
glowText.style.transition = 'all 0.4s ease';

setInterval(rotateWords, 3000);

// ═══ SCROLL REVEAL ═══
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Add reveal class to elements
document.querySelectorAll('.project-item, .skill-item, .stat-card, .about-content, .about-image-wrapper, .contact-form, .contact-aside, .work-header, .skills-header').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ═══ SKILL BARS ANIMATION ═══
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                fill.classList.add('animate');
            });
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ═══ COUNTER ANIMATION ═══
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                const increment = target / 60;

                const updateCounter = () => {
                    count += increment;
                    if (count < target) {
                        counter.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) counterObserver.observe(aboutStats);

// ═══ SMOOTH SCROLL ═══
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ═══ STAGGER ANIMATION FOR PROJECT ITEMS ═══
document.querySelectorAll('.project-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
});

document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// ═══ MAGNETIC HOVER EFFECT ON BUTTONS ═══
document.querySelectorAll('.btn-glass, .btn-outline, .btn-submit').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

console.log('%c✨ Portfolio loaded successfully!', 'color: #d4a574; font-size: 14px; font-weight: bold;');