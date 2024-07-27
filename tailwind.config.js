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
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',

        // p
        'p-xs': '0.8rem',
        'p-sm': '1.1rem', 
        'p-md': '1.25rem',
        'p-lg': '1.563rem', 
        'p': '1.125rem',

        // h1
        'h1-xs': '2.2rem', 
        'h1-sm': '3.3rem',
        'h1-xl': '5.625rem', 
        'h1': '4.375rem', 
        'h1-md': '2rem',
      },

      screens: {
        'xs': {'max': '409px'},
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
      },

      letterSpacing: {
        wider: '0.01em',
        widest: '0.2em',
        'content-spacing': '0.01em',
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
