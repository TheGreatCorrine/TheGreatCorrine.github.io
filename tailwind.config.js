/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#23a6d5',
          dark: '#1a7fa6'
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a'
        },
        text: {
          light: '#2d3748',
          dark: '#e2e8f0'
        },
        dark: {
          primary: '#23a6d5',
          background: '#0a0a0a',
          surface: '#1a1a1a',
          text: '#e2e8f0',
          accent: '#1a7fa6'
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #23a6d5, 0 0 10px #23a6d5, 0 0 15px #23a6d5' },
          '100%': { 'box-shadow': '0 0 20px #23a6d5, 0 0 30px #23a6d5, 0 0 40px #23a6d5' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'border-flow': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'tilt': {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(1deg)'
          }
        }
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 