/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette sampled directly from the Comrade logo artwork.
        cream: {
          DEFAULT: '#FBF3E6', // primary background
          50: '#FFFDFA',
          100: '#FBF3E6',
          200: '#F5E9D6', // secondary / card background
          300: '#EDDCC0',
        },
        ink: {
          DEFAULT: '#15120E', // primary typography / near-black
          900: '#15120E',
          800: '#221E18',
          700: '#332D25',
          600: '#4A443C',
          500: '#6B6459', // muted secondary text
          400: '#948C7E',
          300: '#C9C2B4',
        },
        wine: {
          DEFAULT: '#8F0C45', // primary accent
          50: '#FBEAF0',
          100: '#F3CBDA',
          200: '#DE8CA9',
          300: '#C24E78',
          400: '#A81E58',
          500: '#8F0C45', // primary accent
          600: '#750938',
          700: '#5A072C',
          800: '#420520',
          900: '#2C0316',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 7vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-huge': ['clamp(5rem, 18vw, 16rem)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        label: '0.28em',
        wideish: '0.08em',
      },
      maxWidth: {
        content: '1320px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(21, 18, 14, 0.04), 0 12px 32px -16px rgba(21, 18, 14, 0.12)',
        card: '0 1px 1px rgba(21, 18, 14, 0.03), 0 20px 40px -24px rgba(21, 18, 14, 0.18)',
        wine: '0 12px 32px -12px rgba(143, 12, 69, 0.35)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '4xl': '2rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(8px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateX(10px) rotate(1.5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.06)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        drift: 'drift 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
