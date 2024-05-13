import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: Array.from({ length: 6000 }).reduce((map, _, index) => {
      (map as any)[index] = `${index}px`

      return map
    }, {}),
    screens: {
      // => @media (max-width: 1535px) { ... }
      'max-2xl': { max: '1535px' },
      // => @media (max-width: 1279px) { ... }
      'max-xl': { max: '1279px' },
      // => @media (max-width: 1023px) { ... }
      'max-lg': { max: '1023px' },
      // => @media (max-width: 895px) { ... }
      'max-2md': { max: '895px' },
      // => @media (max-width: 767px) { ... }
      'max-md': { max: '767px' },
      // => @media (max-width: 639px) { ... }
      'max-sm': { max: '639px' },
      // => @media (max-width: 500px) { ... }
      'max-xs': { max: '500px' },
      // => @media (min-width: 1535px) { ... }
      'min-2xl': { min: '1535px' },
      // => @media (min-width: 1279px) { ... }
      'min-xl': { min: '1279px' },
      // => @media (min-width: 1023px) { ... }
      'min-lg': { min: '1023px' },
      // => @media (min-width: 767px) { ... }
      'min-md': { min: '767px' },
      // => @media (min-width: 639px) { ... }
      'min-sm': { min: '639px' },
    },
  },
  plugins: [],
}
