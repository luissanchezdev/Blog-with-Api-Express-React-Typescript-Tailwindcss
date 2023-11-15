/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      },
      backgroundImage : {
        'hero-image': "url('./src/assets/img/hero-image.svg')",
        'image-post-random': "url('https://picsum.photos/500')"
      }
    },
  },
  plugins: [],
}