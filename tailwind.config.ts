import { type Config } from 'tailwindcss';

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsla(var(--color-primary), <alpha-value>)',
        secondary: 'hsla(var(--color-secondary), <alpha-value>)',
      },
    },
  },
} satisfies Config;
