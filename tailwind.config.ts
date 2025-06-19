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
        'dark-bg-main': '#0F001F',
        'dark-bg-card': '#1A0033',
        'accent-heading': '#00E0D0',
        'accent-purple': '#8A2BE2',
        'accent-teal': '#00E0D0',
        'accent-orange': '#FFA07A',
        'accent-pink': '#FF69B4',
        'accent-yellow': '#FFD700',
        'text-light': '#E0E0E0',
        'text-medium': '#A0A0A0',
        'text-dark': '#707070',
        'link-blue': '#4299E1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 