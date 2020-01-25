// theme.config.js
const { ThemeBuilder, Theme } = require('tailwindcss-theming')

const mainTheme = new Theme()
  .default()
  .colors({
    'brand': '#2196f3',
    'on-brand': '#ffffff',
  })

const darkTheme = new Theme()
  .colors({
    'brand': '#1565c0',
    'on-brand': '#ffffff',
  })
  .opacityVariant('muted', 0.35)

module.exports = new ThemeBuilder()
  .asDataThemeAttribute()
  .default(mainTheme)
  .dark(darkTheme)
