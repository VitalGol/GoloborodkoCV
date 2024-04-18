/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        jakarta: 'Plus Jakarta Sans',
      },
      colors: {
        'color-bg-photo': '#689cca',
        'color-surname': '#2d4661',
        'color-text-light': '#121212',
      },
    },
    letterSpacing: {
      super: '0.8rem',
      normal: '0.2rem',
    },
    screens: {
      ls: { min: '300px', max: '474px' },
      xs: { min: '475px', max: '639px' },
      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: { min: '1280px' },
    },
  },
  plugins: [],
  darkMode: 'class',
};
