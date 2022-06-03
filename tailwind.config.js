module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        side: {
          bg: '#212121',
          primary: '#ffffff',
          secodary: '#373737'
        },
        main: {
          bg: 'ffffff',
          primary: '#212121'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}