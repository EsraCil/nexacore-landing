/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface': '#0f1a12',
        'surface-dim': '#050b07',
        'surface-bright': '#2a3d2f',
        'surface-container-lowest': '#040a06',
        'surface-container-low': '#111d14',
        'surface-container': '#151f18',
        'surface-container-high': '#1c2920',
        'surface-container-highest': '#232e27',
        'on-surface': '#dde8dd',
        'on-surface-variant': '#a8b5a8',
        'inverse-surface': '#dde8dd',
        'inverse-on-surface': '#1a2a1e',
        'outline': '#4a6450',
        'outline-variant': '#2a3d2f',
        'surface-tint': '#10b981',
        'primary': '#10b981',
        'on-primary': '#002114',
        'primary-container': '#059669',
        'on-primary-container': '#a7f3d0',
        'inverse-primary': '#047857',
        'secondary': '#e07b39',
        'on-secondary': '#3d1a00',
        'secondary-container': '#92400e',
        'on-secondary-container': '#fde8d8',
        'tertiary': '#34d399',
        'on-tertiary': '#002914',
        'tertiary-container': '#065f46',
        'on-tertiary-container': '#a7f3d0',
        'error': '#ffb4ab',
        'on-error': '#690005',
        'error-container': '#93000a',
        'on-error-container': '#ffdad6',
        'background': '#070e09',
        'on-background': '#dde8dd',
        'surface-variant': '#1e2e22',
        'glass-border': 'rgba(16, 185, 129, 0.08)',
        'emerald-glow': 'rgba(16, 185, 129, 0.3)',
        'deep-obsidian': '#040a06'
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px'
      },
      spacing: {
        'container-margin': '40px',
        'stack-sm': '12px',
        'stack-lg': '48px',
        'stack-md': '24px',
        'base': '8px',
        'gutter': '24px',
        'margin-desktop': '80px',
        'section-gap': '96px'
      },
      fontFamily: {
        'label-caps': ['Space Grotesk'],
        'body-lg': ['Space Grotesk'],
        'body-md': ['Space Grotesk'],
        'code-sm': ['Space Grotesk'],
        'headline-md': ['Space Grotesk'],
        'headline-lg-mobile': ['Space Grotesk'],
        'headline-lg': ['Space Grotesk'],
        'display-xl': ['Space Grotesk']
      },
      fontSize: {
        'label-caps': ['12px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'code-sm': ['13px', { lineHeight: '18px', fontWeight: '500' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'headline-lg-mobile': ['32px', { lineHeight: '38px', fontWeight: '800' }],
        'headline-lg': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '800' }],
        'display-xl': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em', fontWeight: '800' }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
