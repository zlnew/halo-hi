/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  
  theme: {
    fontFamily: {
      serif: ['Staatliches'],
      sans: ['Spline Sans Mono'],
    },
    extend: {
      colors: {
        primary: '#000000',
        accent: '#3bceac',
        tertiary: '#ffd23f',
      }
    },
  },
  plugins: [],
}

