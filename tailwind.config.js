/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: {
          50: '#0c0c10',
          100: '#13131a',
          200: '#1c1c24',
          300: '#262632',
          400: '#343444',
        },
        brand: {
          red: '#ef4444',
          scarlet: '#dc2626',
          ruby: '#f43f5e',
          darkred: '#991b1b',
          crimson: '#e11d48',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -4px rgba(239, 68, 68, 0.35)',
        'glow-crimson': '0 0 45px -8px rgba(220, 38, 38, 0.45)',
        'glow-ruby': '0 0 20px -3px rgba(244, 63, 94, 0.3)',
      }
    },
  },
  plugins: [],
}
