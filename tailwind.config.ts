import { type Config } from 'tailwindcss';

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mobile: {
          max: '640px',
        },
        'min-tablet': '640px',
        'max-tablet': {
          max: '1024px',
        },
        desktop: {
          min: '1024px',
        },
      },
      colors: {
        primary: 'hsla(var(--color-primary), <alpha-value>)',
        secondary: 'hsla(var(--color-secondary), <alpha-value>)',
        text: 'hsla(var(--app-text-color), <alpha-value>)',
        background: 'hsla(var(--app-bg-color), <alpha-value>)',
      },
    },
  },
} satisfies Config;
