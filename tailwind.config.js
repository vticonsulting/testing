module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      spacing: {
        '28': '7rem',
        '44': '11rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
    fontFamily: {
      mono: [
        'JetBrains Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    aspectRatio: {
      'square': [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    customForms: theme => ({
      default: {
        input: {},
        select: {},
        checkbox: {},
      },
    }),
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio')(),
    require('tailwindcss-elevation')(['responsive']),
    require('@tailwindcss/custom-forms'),
    // TODO: Fork `brettgullan/tailwindcss-scrims` and fix for tailwindcss@next
    require('tailwindcss-scrims')({
      directions: {
        't': 'to bottom',
        'b': 'to top',
        'r': 'to left',
        'l': 'to right',
      },
      distances: {
        '1/4': '25%',
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66666%',
        '3/4': '75%',
      },
      colors: {
        default: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0)'],
      },
      variants: ['responsive', 'hover'],
    }),
  ],
}
