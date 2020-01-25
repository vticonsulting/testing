// const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
        dark: { raw: '(prefers-color-scheme: dark)' },
        light: { raw: '(prefers-color-scheme: light)' },
      },
      colors: {
        'booster-blue': '#003E7E', // hsla(210, 100%, 25%, 1)
        'booster-red': '#B3282D', // hsla(358, 63%, 43%, 1)
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        easyemailer: 'var(--color-easyemailer)',
        message: 'var(--color-message)',
        brand: '#1B2A60',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        tailwind: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        material: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        cloudflare: {
          50: '#f7f7f8',
          100: '#eaebeb',
          200: '#d5d7d8',
          300: '#b7bbbd',
          400: '#92979b',
          500: '#72777b',
          600: '#62676a',
          700: '#4e5255',
          800: '#36393a',
          900: '#1d1f20',
        },
        carbon: {
          50: '#f3f3f3',
          100: '#dcdcdc',
          200: '#bebebe',
          300: '#a4a4a4',
          400: '#8c8c8c',
          500: '#6f6f6f',
          600: '#565656',
          700: '#3d3d3d',
          800: '#282828',
          900: '#171717',
        },
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.25)',
        'outline-red': '0 0 0 3px rgba(249, 89, 89, 0.15)',
        'solid-white': '0 0 0 2px #fff',
      },
      height: {
        '1/4': '25%',
      },
      spacing: {
        '2px': '2px',
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '28': '7rem',
        '44': '11rem',
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
    fontFamily: {
      sans: ['blokk', 'Inter', ...defaultTheme.fontFamily.sans],
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
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'group-hover', 'hover', 'focus'],
    display: ['responsive', 'group-hover'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus-within', 'focus', 'active'],
    zIndex: ['responsive', 'focus-within', 'focus'],
    // space: ['responsive'],
  },
  plugins: [
    // require('./theme.config.js'),
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
    // function ({ addUtilities, theme, e, variants }) {
    //   const spaceX = Object.fromEntries(
    //     Object.entries(theme('spacing')).map(([k, v]) => [
    //       `.${e(`space-x-${k}`)} > * + *`,
    //       { marginLeft: v },
    //     ])
    //   )
    //   const spaceY = Object.fromEntries(
    //     Object.entries(theme('spacing')).map(([k, v]) => [
    //       `.${e(`space-y-${k}`)} > * + *`,
    //       { marginTop: v },
    //     ])
    //   )
    //   addUtilities(
    //     {
    //       ...spaceX,
    //       ...spaceY,
    //     },
    //     variants('space')
    //   )
    // },
  ],
}
