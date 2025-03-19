/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  important: true,
  theme: {
      screens: {
          xs: "540px",
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          lg_992: '992px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lexend: ['var(--font-lexend)'],
      },
      container: {
          center: true,
          padding: {
              DEFAULT: '12px',
              sm: '1rem',
              lg: '45px',
              xl: '5rem',
              '2xl': '13rem',
          },
      },
      extend: {
          colors: {
              primary: {
                  50: '#e6f0f7',
                  100: '#cce1ef', 
                  200: '#99c3df',
                  300: '#66a5cf',
                  400: '#3387bf',
                  500: '#2271b1',
                  600: '#1b5a8e',
                  700: '#14436a',
                  800: '#0e2c47',
                  900: '#071523'
              },
              secondary: {
                  50: '#f8fafc',
                  100: '#f1f5f9',
                  200: '#e2e8f0',
                  300: '#cbd5e1',
                  400: '#94a3b8',
                  500: '#64748b',
                  600: '#475569',
                  700: '#334155',
                  800: '#1e293b',
                  900: '#0f172a',
              },
          },
          boxShadow: {
              sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
              DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
              md: '0 5px 13px rgb(60 72 88 / 0.20)',
              lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
              xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
              '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
              inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
              testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
          },

          spacing: {
              0.75: '0.1875rem',
              3.25: '0.8125rem'
          },

          maxWidth: ({
              theme,
              breakpoints
          }) => ({
              '1200': '71.25rem',
              '992': '60rem',
              '768': '45rem',
          }),

          zIndex: {
              1: '1',
              2: '2',
              3: '3',
              999: '999',
          },
          keyframes: {
            slideUp: {
              '0%': { transform: 'translateY(100%)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 },
            },
            'fade-in-up': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(20px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                }
            }
          },
          animation: {
            'slideUp': 'slideUp 0.5s ease forwards',
            'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
          },
      },
  },

  plugins: [
    require('autoprefixer')
  ]

}