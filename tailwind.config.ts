import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class', // Using class strategy for dark mode as seen in the project (light-mode class on body, usually opposite of default or vice versa)
  theme: {
    extend: {
      colors: {
        theme: {
          bg: {
            DEFAULT: 'var(--theme-bg-color)',
          },
          color: 'var(--theme-color)',
        },
        inactive: 'var(--inactive-color)',
        content: {
          title: 'var(--content-title-color)',
          bg: 'var(--content-bg)',
        },
        button: {
          inactive: 'var(--button-inactive)',
        },
        dropdown: {
          bg: 'var(--dropdown-bg)',
          hover: 'var(--dropdown-hover)',
        },
        popup: {
          bg: 'var(--popup-bg)',
          title: 'var(--popup-title-bg)',
          header: 'var(--popup-header-bg)',
        },
        search: {
          bg: 'var(--search-bg)',
        },
        overlay: 'var(--overlay-bg)',
        border: 'var(--border-color)',
        scrollbar: 'var(--scrollbar-bg)',
        hover: {
          menu: 'var(--hover-menu-bg)',
        },
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
