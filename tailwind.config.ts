import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8941F',
        },
        'rose-gold': {
          DEFAULT: '#B76E79',
          light: '#C98E97',
          dark: '#9F5861',
        },
        cream: {
          DEFAULT: '#1A1A1A', // Soft dark background
          50: '#2A2A2A',
          100: '#262626',
          200: '#1F1F1F',
          300: '#1A1A1A',
        },
        black: '#0F0F0F',
        white: '#FDFBF7', // Warm white
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1A1A1A',
        },
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'display-lg': [
          '4.5rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        'display-md': [
          '3.75rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h2: ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        h3: ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
        h4: ['1.25rem', { lineHeight: '1.4', letterSpacing: '0' }],
        h5: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }],
        h6: ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        body: ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
        'price-lg': ['1.875rem', { lineHeight: '1.2', fontWeight: '600' }],
        price: ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        button: ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '7rem',
        'section-xl': '10rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
        DEFAULT:
          '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        gold: '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 24px 0 rgba(212, 175, 55, 0.4)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        container: '1440px',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
        slow: '300ms',
        slower: '500ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      aspectRatio: {
        product: '3/4',
      },
      gridTemplateColumns: {
        'products-mobile': 'repeat(2, 1fr)',
        'products-tablet': 'repeat(3, 1fr)',
        'products-desktop': 'repeat(4, 1fr)',
        'products-wide': 'repeat(5, 1fr)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E5C158 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1A1A1A 0%, #0F0F0F 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

export default config;
