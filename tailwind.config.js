/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      backgroundImage: {
        'homeDesktop': "url('/assets/home/background-home-desktop.jpg')  ",
        'homeTablet': "url('/assets/home/background-home-tablet.jpg') ",
        'homeMobile': "url('/assets/home/background-home-mobile.jpg') ",
        'destinationDesktop': "url('/assets/destination/background-destination-desktop.jpg') ",
        'destinationTablet': "url('/assets/destination/background-destination-tablet.jpg') ",
        'destinationMobile': "url('/assets/destination/background-destination-mobile.jpg') ",
        'crewMobile': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/assets/crew/background-crew-mobile.jpg')",
        'crewTablet': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/assets/crew/background-crew-tablet.jpg') ",
        'crewDesktop': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/assets/crew/background-crew-desktop.jpg') ",
        'technologyMobile': "url('/assets/technology/background-technology-mobile.jpg')",
        'technologyTablet': "url('/assets/technology/background-technology-tablet.jpg') ",
        'technologyDesktop': "url('/assets/technology/background-technology-desktop.jpg') ",
      },
      colors: {
        white: '#ffffff',
        darkBlue: '#0B0D17',
        lightBlue: '#D0D6F9',
        lightGray: '#979797',
        darkGray: "#36373F",
        veryDarkGray: '#383B4B'



      },
      fontFamily: {
        'sans': ['Barlow', 'sans-serif'],
        'heading': ['Bellefair', 'sans-serif'],
        'subHeading2': ['Barlow Condensed', 'sans-serif']
      },
    },

  },
  plugins: [],
}
