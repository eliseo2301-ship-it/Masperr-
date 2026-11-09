/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00A8E8',
          magenta: '#E6007E',
          yellow: '#FFDD00',
          blue: '#003459',
          navy: '#00171F',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          accent: '#0284C7'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 168, 232, 0.4)',
        'glow-magenta': '0 0 25px -5px rgba(230, 0, 126, 0.35)',
        'glow-yellow': '0 0 25px -5px rgba(255, 221, 0, 0.4)',
        'premium': '0 20px 40px -15px rgba(0, 52, 89, 0.08), 0 0 1px 1px rgba(0, 52, 89, 0.04)',
        'premium-hover': '0 25px 50px -12px rgba(0, 168, 232, 0.18), 0 0 1px 1px rgba(0, 168, 232, 0.1)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
