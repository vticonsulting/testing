module.exports = {
  theme: {
    extend: {
      spacing: {
        '28': '7rem',
        '44': '11rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
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
    require('tailwindcss-elevation')(['responsive']),
    require('@tailwindcss/custom-forms'),
  ],
}
