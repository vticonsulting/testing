module.exports = {
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
        '44': '11rem',
      },
    },
    aspectRatio: {
      'square': [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio')(),
  ],
}
