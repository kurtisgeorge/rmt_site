export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBFCF3',
        'cream-soft': '#F7F9E8',
        'pink-primary': '#E491AC',
        'pink-dark': '#B67489',
        'pink-overlay': '#E491AC',
        'green-deep': '#575A39',
      },
      fontFamily: {
        sans: ['"Open Sans Variable"', 'sans-serif'],
        serif: ['"DM Serif Text"', 'serif'],
        display: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
