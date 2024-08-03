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
        'p-footer': ['0.8rem', '1.2rem'],
        'p-footer-lg': ['1.08rem', '1.2rem'],
        // p
        'p-xxs': ['0.8rem', '1.2rem'],  
        'p-xs': ['0.9rem', '1.4rem'],        
        'p-md': ['1.1rem', '1.4rem'],        
        'p-lg': ['1.11rem', '1.4rem'],       
        'p-xl': ['1.15rem', '1.6rem'],          
        'p-2xl': ['1.4rem', '2.2rem'],       
      
        // h1
        'h1-xxs': ['2rem', '2.5rem'],        
        'h1-xs': ['2.4rem', '3rem'],         
        'h1-sm': ['3rem', '4rem'],           
        'h1-md': ['3.5rem', '4.5rem'],       
        'h1-lg': ['4rem', '5rem'],           
        'h1-xl': ['4.3rem', '6rem'],         
        'h1-2xl': ['5rem', '7rem'],   
        
        'nav': ['1.28rem', '1.4rem'],
      
      },

      screens: {
        'xxs': {'max': '287px'},
        'xs': {'min': '288px', 'max': '409px'},
        'sm': {'min': '410px', 'max': '539px'},
        'md': {'min': '540px', 'max': '1021px'},

        // Desktop
        'lg': {'min': '1022px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
      },

      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        instrument_sans: ['Instrument Sans', 'sans-serif'],
        gtWalsheim: ['GT Walsheim'],
      },

      letterSpacing: {
        widest: '0.03em',
        wider: '0.02em',
        wide: '0.01em',
      },

      colors: {
        'primary': '#FF6363',
        'customGreen': '#70B835',
        'customGreenLight': '#A3C269',
        'content-color': '#aeb0aef1',
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
