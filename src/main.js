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
                sans: ['Manrope', 'Inter', 'Noto Sans', 'system-ui', 'sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate'
            }
        }
    }
};

function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
}

function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedMode === 'true' || (savedMode === null && prefersDark)) {
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
                const offset = target.offsetTop - navHeight;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });
}

function initNavbarScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const updateNavbar = () => {
        nav.classList.toggle('shadow-lg', window.scrollY > 100);
    };
    window.addEventListener('scroll', debounce(updateNavbar, 20));
}

function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.section-reveal');
        if (this.elements.length > 0) this.init();
    }

    init() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(el => observer.observe(el));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    smoothScroll();
    initNavbarScroll();
    new ScrollReveal();
});
