import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: '#C8E6F5',
        'sky-dark': '#a8d4ee',
        'sky-mid': '#dceefb',
        'text-dark': '#1E3A5F',
        'text-sub': '#5A7A9A',
        wa: '#25D366',
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)', 'Fredoka', 'sans-serif'],
        nunito:  ['var(--font-nunito)',  'Nunito',  'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card:       '0 8px 32px rgba(30, 58, 95, 0.10)',
        'card-hover':'0 20px 48px rgba(30, 58, 95, 0.18)',
        wa:         '0 6px 20px rgba(37, 211, 102, 0.35)',
        'wa-hover': '0 12px 30px rgba(37, 211, 102, 0.40)',
        'wa-big':   '0 8px 28px rgba(37, 211, 102, 0.35)',
        nav:        '0 4px 24px rgba(30, 58, 95, 0.10)',
      },
    },
  },
  plugins: [],
}

export default config
