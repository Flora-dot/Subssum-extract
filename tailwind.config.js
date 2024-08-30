/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans' : ['Poppins']
    },
    colors: {
      'faint-blue': '#eff3fb',
      'custom-white': '#ffffff',
      'custom-faint-white': '#f7f9fd',
      'custom-grey-70': '#4C689E',
      'custom-primary-blue' : '#4169e1',
      'custom-grey-100' : '#eff3fb',
      'custom-grey-30' : '#d7e1f4',
      'custom-grey-20' : '#eef3fb',
      'custom-red-error' : '#ee5d50',
      'custom-grey-90' : '#2b3b5a',
      'placeholder-blue' : '#869DCB',
      'custom-grey-60': '#6882b6',
      'dark-blue': '#000080'
      
    },
    extend: {},
  },
  plugins: [],
}
