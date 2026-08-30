/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Paragraph
        'p-xxs': ['0.8rem', '1.2rem'],
        'p-xs': ['0.9rem', '1.4rem'],
        'p-sm': ['1rem', '1.4rem'],
        'p-md': ['1.1rem', '1.5rem'],
        'p-lg': ['1.11rem', '1.7rem'],
        'p-xl': ['1.15rem', '1.7rem'],
        'p-2xl': ['1.4rem', '2.2rem'],

        // Headings
        'h1-xxs': ['2rem', '2.5rem'],
        'h1-xs': ['2.4rem', '3rem'],
        'h1-sm': ['3rem', '4rem'],
        'h1-md': ['3.5rem', '4.5rem'],
        'h1-lg': ['4rem', '4.8rem'],
        'h1-xl': ['4.2rem', '6rem'],
        'h1-2xl': ['5rem', '7rem'],

        'nav': ['1.28rem', '1.4rem'],
      },

      screens: {
        'xxs': { max: '287px' },
        'xs': { min: '288px', max: '409px' },
        'sm': { min: '410px', max: '607px' },
        'md': { min: '608px', max: '1021px' },

        // Desktop
        'lg': { min: '1022px', max: '1279px' },
        'xl': { min: '1280px', max: '1535px' },
        '2xl': { min: '1536px' },
      },

      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        instrument_sans: ['Instrument Sans', 'sans-serif'],
        sans_serif: ['sans-serif'],
        gtWalsheim: ['GT Walsheim', 'sans-serif'],
      },

      letterSpacing: {
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.03em',
      },

      colors: {
        primary: '#FF6363',
        green: {
          DEFAULT: '#baf2bb', // was customGreen
          light: '#A3C269',   // was customGreenLight
          dark: '#88a750',    // was custom4
        },
        accent: {
          light: '#eaf6cf',   // was custom2
          lighter: '#f8fff8', // was custom3
        },
        content: {
          DEFAULT: '#aeb0ae', // was content-color (dropped baked-in alpha; use text-content/80 etc.)
          dark: '#21201e',    // was content-color-2
        },
      },

  
    },
  },
  plugins: [],
}