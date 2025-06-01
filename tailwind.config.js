/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Intensive dark blue palette
        midnight: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#020617', // Deep midnight - main background
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Navy - primary background
          950: '#020617',
        },
        // Van Gogh inspired colors
        vangogh: {
          gold: '#fbbf24',
          amber: '#f59e0b',
          yellow: '#eab308',
          orange: '#ea580c',
          blue: '#1d4ed8',
        },
        // Glass morphism colors
        glass: {
          dark: 'rgba(15, 23, 42, 0.7)',
          light: 'rgba(30, 41, 59, 0.5)',
          border: 'rgba(148, 163, 184, 0.1)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'starry-night': 
          'radial-gradient(2px 2px at 20px 30px, #fbbf24, transparent), ' +
          'radial-gradient(2px 2px at 40px 70px, #f59e0b, transparent), ' +
          'radial-gradient(1px 1px at 90px 40px, #eab308, transparent), ' +
          'radial-gradient(1px 1px at 130px 80px, #fbbf24, transparent), ' +
          'radial-gradient(2px 2px at 160px 30px, #f59e0b, transparent)',
        'midnight-gradient': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'deep-blue': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'van-gogh-night': 'linear-gradient(180deg, #020617 0%, #0f172a 30%, #1e293b 70%, #334155 100%)',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'parallax-slow': 'parallax 20s linear infinite',
        'parallax-medium': 'parallax 15s linear infinite',
        'parallax-fast': 'parallax 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #fbbf24, 0 0 10px #fbbf24, 0 0 15px #fbbf24' },
          '100%': { boxShadow: '0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      blur: {
        'xs': '2px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(251, 191, 36, 0.3)',
        'glow-strong': '0 0 30px rgba(251, 191, 36, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(251, 191, 36, 0.1)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(15, 23, 42, 0.5)',
      },
      dropShadow: {
        'glow': [
          '0 0px 20px rgba(251, 191, 36, 0.35)',
          '0 0px 65px rgba(251, 191, 36, 0.2)'
        ],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.5), 0 0 30px rgba(251, 191, 36, 0.3)',
        },
        '.text-glow-strong': {
          textShadow: '0 0 15px rgba(251, 191, 36, 1), 0 0 30px rgba(251, 191, 36, 0.7), 0 0 45px rgba(251, 191, 36, 0.4)',
        },
        '.glass-morphism': {
          background: 'rgba(15, 23, 42, 0.25)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
        },
        '.glass-morphism-light': {
          background: 'rgba(30, 41, 59, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.15)',
        },
        '.starry-background': {
          backgroundImage: 
            'radial-gradient(2px 2px at 20px 30px, #fbbf24, transparent), ' +
            'radial-gradient(2px 2px at 40px 70px, #f59e0b, transparent), ' +
            'radial-gradient(1px 1px at 90px 40px, #eab308, transparent), ' +
            'radial-gradient(1px 1px at 130px 80px, #fbbf24, transparent), ' +
            'radial-gradient(2px 2px at 160px 30px, #f59e0b, transparent)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 