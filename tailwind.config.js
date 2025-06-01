/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",       
    "./custom.css",      
    "./src/**/*.{css,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'brain-blue': '#1a73e8',
        'brain-light': '#e8f0fe',
        'brain-dark': '#174ea6',
        'brain-accent': '#34a853',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
