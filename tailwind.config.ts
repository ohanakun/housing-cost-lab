import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A2A3A',
        'navy-light': '#253545',
        'site-bg': '#F5F5F5',
        'site-text': '#333333',
        'site-muted': '#666666',
        brand: '#FF7A00',
        'brand-dark': '#E56E00',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1100px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 28px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
