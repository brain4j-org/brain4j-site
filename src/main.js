tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brain-blue': '#1a73e8',
                'brain-light': '#1e293b',
                'brain-dark': '#0f172a',
                'brain-accent': '#34a853'
            },
            fontFamily: {
                sans: ['Manrope', 'Inter', 'Noto Sans', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            }
        }
    }
}

function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    } else {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    }
}

function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedMode === 'true' || (savedMode === null && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-reveal').forEach(el => {
        observer.observe(el);
    });
}

function initNavbarScroll() {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav?.classList.add('shadow-lg');
            nav.style.background = document.documentElement.classList.contains('dark')
                ? 'rgba(5, 5, 5, 0.9)'
                : 'rgba(255, 255, 255, 0.95)';
        } else {
            nav?.classList.remove('shadow-lg');
            nav.style.background = document.documentElement.classList.contains('dark')
                ? 'rgba(5, 5, 5, 0.9)'
                : 'rgba(255, 255, 255, 0.8)';
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function initMobileMenu() {
    const navItems = document.querySelector('.hidden.md\\:flex');
    if (window.innerWidth < 768) {
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    smoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initFloatingShapesAndParallax();
    initMobileMenu();
    handleSystemDarkModeChange();

    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';

        setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.style.opacity = '1';
        }, 500);
    });
});

window.addEventListener('scroll', debounce(() => {
}, 10));
