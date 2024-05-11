import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        lightTransparent: 'rgba(var(--gray-1), .3)',
        translucent: 'rgba(var(--gray-1), .5)',
      },
      colors: {
        primary: 'var(--color-primary)',
        suspension: 'var(--color-suspension)',
        click: 'var(--color-click)',
        special: 'var(--color-special)',
        disabled: 'var(--color-disabled)',
        textDisabled: 'var(--color-text-disabled)',
        lightSuspension: 'var(--color-light-suspension)',
      },
    },
    spacing: Array.from({ length: 6000 }).reduce((map, _, index) => {
      (map as any)[index] = `${index}px`

      return map
    }, {}),
  },
  plugins: [],
}
