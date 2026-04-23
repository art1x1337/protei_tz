import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        page: '#061739',
        ink: '#f2f6fb',
        cyan: '#39c3ff',
        cyanSoft: '#78dfff',
        panel: '#102a55',
        panelDeep: '#081b39',
        borderGlow: 'rgba(75, 198, 255, 0.72)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(75, 198, 255, 0.28), 0 18px 48px rgba(6, 18, 48, 0.4)',
        card: '0 18px 30px rgba(3, 8, 28, 0.28)',
      },
      backgroundImage: {
        page: 'radial-gradient(circle at 18% 18%, rgba(118, 214, 255, 0.28), transparent 26%), radial-gradient(circle at 88% 82%, rgba(33, 156, 255, 0.24), transparent 22%), linear-gradient(180deg, #091a3d 0%, #071634 44%, #05132c 100%)',
        card: 'linear-gradient(135deg, rgba(18, 50, 95, 0.98) 0%, rgba(8, 24, 54, 0.98) 100%)',
        button: 'linear-gradient(90deg, #80d9ee 0%, #1f9fde 100%)',
        hero: 'radial-gradient(circle at 28% 18%, rgba(117, 221, 255, 0.38), transparent 24%), radial-gradient(circle at 74% 72%, rgba(80, 174, 255, 0.28), transparent 24%), linear-gradient(135deg, #0a214c 0%, #071631 46%, #081a3a 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
