/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'customGreen': '#70B835',
        'customGreenLight': '#A3C269',
        // 'customGradient': 'conic-gradient(from 180deg at 50% 50%, #FF6363 0deg, #70B835 360deg)',
      },

      fontSize: {
        sm: ['14px', '20px'],
        base: ['17px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },

      letterSpacing: {
        wider: '0.01em',
        widest: '0.2em',
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
      }
    
    },
  },
  plugins: [],
}