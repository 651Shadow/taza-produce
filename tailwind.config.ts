import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        text: 'var(--text)',
        textSoft: 'var(--text-soft)',
        onBrand: 'var(--on-brand)',
        line: 'var(--line)',
        green700: 'var(--green-700)',
        green900: 'var(--green-900)',
        accent: 'var(--accent)',
        gold: 'var(--gold)',
        cream: 'var(--cream)',
        deep: 'var(--deep)',
      },
    },
  },
  plugins: [],
}

export default config
