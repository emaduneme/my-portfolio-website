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
        background: 'var(--background)',
        card: 'var(--card)',
        primary: 'var(--primary)',
      },
      textColor: {
        DEFAULT: 'var(--text)',
        primary: 'var(--primary)',
        gray: {
          300: 'var(--text-gray)',
        },
      },
      backgroundColor: {
        primary: 'var(--primary)',
        card: 'var(--card)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
}

export default config 