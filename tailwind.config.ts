import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        cream: {
          DEFAULT: '#F8F6F3',
          light: '#FDFCFA',
          dark: '#F5F2ED',
        },

        // Gold - Muted
        gold: {
          DEFAULT: '#C9A86A',
          light: '#D4B77F',
          dark: '#B39558',
          muted: '#E5D5B7',
        },

        // Neutrals
        brown: {
          warm: '#8B7355',
        },
        black: {
          premium: '#2D2D2D',
        },

        // Text
        text: {
          primary: '#1A1A1A',
          secondary: '#6B6B6B',
          muted: '#9B9B9B',
          light: '#C4C4C4',
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },

      fontSize: {
        'display-lg': ['72px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        display: ['64px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-sm': ['56px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },

      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.02)',
        sm: '0 2px 8px rgba(0, 0, 0, 0.04)',
        md: '0 4px 16px rgba(0, 0, 0, 0.06)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.08)',
        xl: '0 12px 32px rgba(0, 0, 0, 0.1)',
        gold: '0 4px 16px rgba(201, 168, 106, 0.2)',
      },

      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A86A 0%, #D4B77F 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
