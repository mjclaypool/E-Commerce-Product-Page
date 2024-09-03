/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kumbhSans": ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        "p-orange": "hsl(26, 100%, 55%)",
        "p-pale-orange": "hsl(25, 100%, 94%)",
        "n-v-dark-blue": "hsl(220, 13%, 13%)",
        "n-dark-grey-blue": "hsl(219, 9%, 45%)",
        "n-grey-blue": "hsl(220, 14%, 75%)",
        "n-light-grey-blue": "hsl(223, 64%, 98%)",
        "n-white": "hsl(0, 0%, 100%)",
        "n-black": "hsl(0, 0%, 0%)",
      }
    },
  },
  plugins: [],
}

