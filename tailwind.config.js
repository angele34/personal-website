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
        '2xl': ['1.563rem', '2rem'],
        '3xl': ['1.953rem', '2.5rem'],

        // p
        'p-xs': ['0.9rem', '1.4rem'],
        'p-footer': ['0.8rem', '1.2rem'],
        'p-footer-lg': ['1.08rem', '1.2rem'],
        'p-sm': ['1.1rem', '1.5rem'],
        'p-md': ['1.3rem', '1.6rem'],
        'p-lg': ['1.5rem', '2rem'],
        'p': ['1.15rem', '1.5rem'],

        // h1
        'h1-xs': ['2.4rem', '3rem'],
        'h1-sm': ['3.6rem', '4rem'],
        'h1-xl': ['4.6rem', '6.75rem'],
        'h1': ['4.1rem', '5.5rem'],
        'h1-md': ['2rem', '2.5rem'],
      },

      screens: {
        'xxs': {'max': '280px'},
        'xs': {'max': '409px'}, // 'min': '281px', 
        'sm': {'min': '410px', 'max': '539px'},
        'md': {'min': '540px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },
      
      colors: {
        'primary': '#FF6363',
        'customGreen': '#70B835',
        'customGreenLight': '#A3C269',
        'content-color': '#aeb0aef1',
      },

      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        instrument_sans: ['Instrument Sans', 'sans-serif'],
      },

      letterSpacing: {
        widest: '0.02em',
        wider: '0.03em',
        wide: '0.05em',
      },

      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}
