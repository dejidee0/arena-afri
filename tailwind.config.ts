import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
        mono: ['var(--font-space-mono)'],
      },
      colors: {
        void: '#0A0A0F',
        surface: '#111118',
        elevated: '#1A1A26',
        card: '#252535',
        hover: '#2E2E42',
        border: '#3D3D55',
        brand: {
          purple: '#7C3AED',
          violet: '#A855F7',
          pink: '#EC4899',
        },
        semantic: {
          live: '#EF4444',
          prize: '#F59E0B',
          payout: '#10B981',
          rank: '#06B6D4',
          coins: '#FCD34D',
          warning: '#F97316',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0B8',
          tertiary: '#6B6B88',
        },
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
}
export default config
