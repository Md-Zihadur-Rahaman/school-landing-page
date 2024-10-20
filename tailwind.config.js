/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
      Open_Sans: 'Open Sans',
      Source_Code_Pro: 'Source Code Pro',
    },
    colors: {
      green: '#09B451',
      white: '#ffffff',
      black: '#000000',
      gary_text: '#333333',
      banner_bg_color: '#f0faf4',
      light_green: '#E4FFFF',
      modified_green: '#DDFFFF',
      modified_blue: '#1a222a',
    },
    extend: {
      backgroundImage: {
        'first-step-bg1': "url('./src/assets/above-Footer-bg.svg')",
        'first-step-bg2': "url('./src/assets/above-Footer-bg-2.svg')",
        'first-step-bg3': "url('./src/assets/above-Footer-bg-mobile.svg')",
      },
    },
  },
  plugins: [],
}
