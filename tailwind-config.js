/**
 * Tailwind CSS Configuration
 * Nordic Minimal Design System
 * For: Guillermo Bernal - Lead DevOps Engineer Portfolio
 *
 * Usage with CDN:
 * <script src="https://cdn.tailwindcss.com"></script>
 * <script>
 *   tailwind.config = { ... paste this config ... }
 * </script>
 */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],

  theme: {
    extend: {
      // Color Palette
      colors: {
        // Grays
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Accent Color - Teal/Cyan (Nordic)
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5ee7db',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },

        // Custom named colors
        primary: '#0d9488',
        secondary: '#6b7280',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },

      // Typography
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          '"Courier New"',
          'monospace',
        ],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },

      // Spacing Scale
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
      },

      // Border Radius
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        base: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },

      // Shadows
      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },

      // Transitions & Animations
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },

      animation: {
        fadeIn: 'fadeIn 500ms ease-out',
        slideUp: 'slideUp 600ms ease-out',
        slideInLeft: 'slideInLeft 600ms ease-out',
        slideInRight: 'slideInRight 600ms ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },

      // Opacity
      opacity: {
        0: '0',
        25: '0.25',
        50: '0.5',
        75: '0.75',
        100: '1',
      },

      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2rem',
        },
      },

      // Max Width
      maxWidth: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
      },

      // Aspect Ratio
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        '4/3': '4 / 3',
        '21/9': '21 / 9',
      },

      // Z-Index
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        auto: 'auto',
      },
    },
  },

  plugins: [],

  // Enable dark mode support
  darkMode: 'media',

  // Coreicons and variants
  corePlugins: {
    preflight: true,
  },
};

/**
 * USAGE WITH CDN
 *
 * Add this to your HTML <head>:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 * <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
 * <script src="https://cdn.tailwindcss.com"></script>
 * <script>
 *   tailwind.config = {
 *     // ... paste the theme configuration from above ...
 *   }
 * </script>
 * <link rel="stylesheet" href="/css/nordic-design-system.css">
 *
 * COMPONENT EXAMPLES:
 *
 * ==================== BUTTONS ====================
 * <button class="bg-accent hover:bg-accent-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-base hover:shadow-md">
 *   Primary Button
 * </button>
 *
 * <button class="bg-white border-2 border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
 *   Secondary Button
 * </button>
 *
 * ==================== CARDS ====================
 * <div class="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-base">
 *   <h3 class="text-2xl font-bold mb-4 text-gray-900">Card Title</h3>
 *   <p class="text-gray-600 mb-6">Card content goes here.</p>
 *   <a href="#" class="text-accent font-medium hover:text-accent-700">Learn More →</a>
 * </div>
 *
 * ==================== NAVIGATION ====================
 * <nav class="bg-white border-b border-gray-200 sticky top-0 z-100">
 *   <div class="container flex items-center justify-between py-4">
 *     <h1 class="text-2xl font-bold text-accent">Logo</h1>
 *     <ul class="flex gap-8">
 *       <li><a href="#" class="text-gray-900 hover:text-accent font-medium">Home</a></li>
 *       <li><a href="#" class="text-gray-900 hover:text-accent font-medium">About</a></li>
 *       <li><a href="#" class="text-gray-900 hover:text-accent font-medium">Portfolio</a></li>
 *     </ul>
 *   </div>
 * </nav>
 *
 * ==================== BADGES ====================
 * <span class="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">Primary</span>
 * <span class="bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">Secondary</span>
 *
 * ==================== FORM ====================
 * <div class="mb-6">
 *   <label class="block text-sm font-semibold text-gray-900 mb-2">Name</label>
 *   <input type="text" class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10" />
 * </div>
 *
 * ==================== PORTFOLIO GRID ====================
 * <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 *   <div class="relative overflow-hidden rounded-lg aspect-square group">
 *     <img src="portfolio-image.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-base" />
 *     <div class="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-base">
 *       <h3 class="text-2xl font-bold">Project Name</h3>
 *       <p class="text-sm text-white/90">Description</p>
 *     </div>
 *   </div>
 * </div>
 *
 * ==================== HERO SECTION ====================
 * <section class="bg-gradient-to-r from-accent-400 to-accent py-32 text-white text-center">
 *   <div class="container">
 *     <h1 class="text-5xl font-bold mb-6">Welcome to Guillermo's Portfolio</h1>
 *     <p class="text-xl text-white/95 mb-8 max-w-2xl mx-auto">Lead DevOps Engineer specializing in Kubernetes, CI/CD, and Cloud Infrastructure</p>
 *     <button class="bg-white text-accent px-8 py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-base">Get In Touch</button>
 *   </div>
 * </section>
 */
