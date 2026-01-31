# Nordic Minimal Design System Implementation Guide

**Portfolio**: Guillermo Bernal - Lead DevOps Engineer
**Design System**: Nordic Minimal with Tailwind CSS & Custom CSS Properties

---

## Overview

This design system embodies Nordic Minimal principles:
- **Abundant whitespace** - Generous spacing throughout
- **Single accent color** - Teal/Cyan (#0d9488) primary accent
- **Clean typography** - Inter font family for professional appearance
- **Subtle animations** - Smooth, purposeful transitions
- **Professional & understated** - No visual clutter
- **Light mode primary** - Dark mode optional via media query

---

## Quick Start

### Option 1: Using Tailwind CSS via CDN

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google Fonts - Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      // ... see tailwind-config.js for full configuration
    }
  </script>

  <!-- Custom Nordic Design System CSS -->
  <link rel="stylesheet" href="/css/nordic-design-system.css">
</head>
<body>
  <!-- Content here -->
</body>
</html>
```

### Option 2: Using Custom CSS Only

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google Fonts - Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Nordic Design System CSS -->
  <link rel="stylesheet" href="/css/nordic-design-system.css">
</head>
<body>
  <!-- Content here -->
</body>
</html>
```

---

## Color Palette

### Primary Colors

| Color | Hex Code | CSS Variable | Tailwind | Usage |
|-------|----------|--------------|----------|-------|
| White | `#ffffff` | `--color-white` | `white` | Surfaces, buttons |
| Background | `#f9fafb` | `--color-background` | `gray-50` | Page background |
| Surface | `#ffffff` | `--color-surface` | `white` | Cards, containers |
| Surface Secondary | `#f3f4f6` | `--color-surface-secondary` | `gray-100` | Hover states |

### Text Colors

| Color | Hex Code | CSS Variable | Tailwind | Usage |
|-------|----------|--------------|----------|-------|
| Primary Text | `#1f2937` | `--color-text-primary` | `gray-800` | Headings, main content |
| Secondary Text | `#6b7280` | `--color-text-secondary` | `gray-500` | Body text, descriptions |
| Tertiary Text | `#9ca3af` | `--color-text-tertiary` | `gray-400` | Meta, disabled |

### Accent Colors (Nordic Teal)

| Color | Hex Code | CSS Variable | Tailwind | Usage |
|-------|----------|--------------|----------|-------|
| Accent Primary | `#0d9488` | `--color-accent` | `accent-600` | Links, buttons, highlights |
| Accent Light | `#14b8a6` | `--color-accent-light` | `accent-500` | Hover states, gradients |
| Accent Dark | `#0f766e` | `--color-accent-dark` | `accent-700` | Active states, borders |

### Functional Colors

```css
--color-success: #10b981;  /* Green - For success messages */
--color-warning: #f59e0b;  /* Amber - For warnings */
--color-error: #ef4444;    /* Red - For errors */
--color-info: #3b82f6;     /* Blue - For info messages */
```

### Borders & Dividers

```css
--color-border: #e5e7eb;        /* Standard border */
--color-border-light: #f3f4f6;  /* Subtle divider */
```

---

## Typography

### Font Stack

```css
/* Sans-serif (Primary) */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
             'Helvetica Neue', sans-serif;

/* Serif (Optional) */
font-family: 'Georgia', 'Cambria', 'Times New Roman', 'Times', serif;

/* Monospace (Code) */
font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
```

### Font Sizes & Scale

```
--text-xs:  0.75rem   (12px)   /* Small labels, metadata */
--text-sm:  0.875rem  (14px)   /* Body small, helper text */
--text-base: 1rem     (16px)   /* Body text (default) */
--text-lg:  1.125rem  (18px)   /* Larger body text */
--text-xl:  1.25rem   (20px)   /* Subheadings */
--text-2xl: 1.5rem    (24px)   /* Section headings */
--text-3xl: 1.875rem  (30px)   /* Major headings */
--text-4xl: 2.25rem   (36px)   /* Page headings */
--text-5xl: 3rem      (48px)   /* Hero titles */
```

### Font Weights

```css
--font-weight-light:      300
--font-weight-regular:    400
--font-weight-medium:     500
--font-weight-semibold:   600
--font-weight-bold:       700
```

### Line Heights

```css
--line-height-tight:     1.25   /* For headings */
--line-height-normal:    1.5    /* For body text */
--line-height-relaxed:   1.625  /* For longer passages */
--line-height-loose:     2      /* For hero text */
```

### Typography Examples

```html
<!-- Heading 1 -->
<h1 class="text-5xl font-bold leading-tight mb-8">
  Main Page Title
</h1>

<!-- Heading 2 -->
<h2 class="text-4xl font-bold mb-6">
  Section Heading
</h2>

<!-- Body Text -->
<p class="text-base text-gray-600 leading-relaxed mb-6">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

<!-- Lead Paragraph -->
<p class="text-xl font-light text-gray-900 leading-loose">
  A larger, lighter introductory paragraph.
</p>

<!-- Small Text -->
<small class="text-sm text-gray-500">
  Small metadata or helper text
</small>
```

---

## Spacing Scale

All spacing follows an 8px base unit for consistency:

```css
--space-0:   0
--space-1:   0.25rem   (4px)
--space-2:   0.5rem    (8px)
--space-3:   0.75rem   (12px)
--space-4:   1rem      (16px)
--space-6:   1.5rem    (24px)
--space-8:   2rem      (32px)
--space-12:  3rem      (48px)
--space-16:  4rem      (64px)
--space-20:  5rem      (80px)
--space-24:  6rem      (96px)
--space-32:  8rem      (128px)
--space-40:  10rem     (160px)
--space-48:  12rem     (192px)
```

### Spacing Guidelines

- **Micro spacing** (`--space-1` to `--space-3`): Padding within components
- **Element spacing** (`--space-4` to `--space-8`): Between related elements
- **Section spacing** (`--space-12` to `--space-24`): Between major sections
- **Container padding** (default: `--space-6`): Horizontal padding on containers

### Spacing Examples

```html
<!-- Generous margins for Nordic whitespace -->
<section class="py-24 px-6">
  <div class="container">
    <h1 class="mb-8">Section Title</h1>
    <p class="mb-6">Content with spacious margins</p>
  </div>
</section>

<!-- Compact spacing within components -->
<button class="px-6 py-3 rounded-md">Button</button>

<!-- Grid with whitespace -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- gap-8 = 32px between items -->
</div>
```

---

## Components

### Buttons

#### Primary Button
```html
<button class="bg-accent hover:bg-accent-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:shadow-md">
  Primary Action
</button>
```

#### Secondary Button
```html
<button class="bg-white border-2 border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-all duration-200">
  Secondary Action
</button>
```

#### Ghost Button
```html
<button class="border border-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-all duration-200">
  Ghost Button
</button>
```

#### Button Sizes
```html
<!-- Small -->
<button class="px-4 py-2 text-sm rounded-md">Small Button</button>

<!-- Medium (Default) -->
<button class="px-6 py-3 text-base rounded-md">Medium Button</button>

<!-- Large -->
<button class="px-8 py-4 text-lg rounded-md">Large Button</button>

<!-- Full Width -->
<button class="w-full px-6 py-3 rounded-md">Full Width Button</button>
```

### Cards

```html
<!-- Standard Card -->
<div class="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md hover:border-accent transition-all duration-200">
  <h3 class="text-2xl font-bold mb-4 text-gray-900">Card Title</h3>
  <p class="text-gray-600 mb-6 leading-relaxed">Card description or content goes here.</p>
  <a href="#" class="text-accent font-semibold hover:text-accent-700">Learn More →</a>
</div>

<!-- Compact Card -->
<div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
  <h4 class="text-lg font-bold mb-2">Compact Card</h4>
  <p class="text-sm text-gray-600">Smaller card for grids.</p>
</div>

<!-- Card with Header & Footer -->
<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
  <div class="border-b border-gray-200 p-6">
    <h3 class="text-xl font-bold">Card Header</h3>
  </div>
  <div class="p-8">
    <p class="text-gray-600 mb-6">Card content here.</p>
  </div>
  <div class="border-t border-gray-200 bg-gray-50 p-6 flex justify-end gap-4">
    <button class="text-gray-600 hover:text-gray-900">Cancel</button>
    <button class="bg-accent text-white px-6 py-2 rounded-md font-semibold hover:bg-accent-700">Save</button>
  </div>
</div>
```

### Navigation

```html
<nav class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
  <div class="container flex items-center justify-between py-4">
    <div class="text-2xl font-bold text-accent">Portfolio</div>

    <ul class="hidden md:flex gap-8">
      <li><a href="#home" class="text-gray-900 font-medium hover:text-accent transition-colors duration-200">Home</a></li>
      <li><a href="#about" class="text-gray-900 font-medium hover:text-accent transition-colors duration-200">About</a></li>
      <li><a href="#portfolio" class="text-gray-900 font-medium hover:text-accent transition-colors duration-200">Portfolio</a></li>
      <li><a href="#contact" class="text-gray-900 font-medium hover:text-accent transition-colors duration-200">Contact</a></li>
    </ul>

    <!-- Mobile menu button -->
    <button class="md:hidden text-gray-900 font-bold text-xl">☰</button>
  </div>
</nav>
```

### Badges & Tags

```html
<!-- Solid Badge -->
<span class="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
  Primary
</span>

<!-- Outline Badge -->
<span class="border border-accent text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
  Secondary
</span>

<!-- Subtle Badge -->
<span class="bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
  Subtle
</span>

<!-- Status Badges -->
<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Available</span>
<span class="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">In Progress</span>
<span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Unavailable</span>
```

### Forms

```html
<form class="max-w-2xl mx-auto">
  <!-- Text Input -->
  <div class="mb-6">
    <label class="block text-sm font-semibold text-gray-900 mb-2">Name</label>
    <input type="text"
           class="w-full px-4 py-3 border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
           placeholder="Your name" />
  </div>

  <!-- Email Input -->
  <div class="mb-6">
    <label class="block text-sm font-semibold text-gray-900 mb-2">Email</label>
    <input type="email"
           class="w-full px-4 py-3 border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
           placeholder="your.email@example.com" />
  </div>

  <!-- Textarea -->
  <div class="mb-6">
    <label class="block text-sm font-semibold text-gray-900 mb-2">Message</label>
    <textarea class="w-full px-4 py-3 border border-gray-200 rounded-md text-gray-900 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 min-h-32"
              placeholder="Your message"></textarea>
  </div>

  <!-- Checkbox -->
  <div class="mb-6">
    <label class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-accent focus:ring-2 focus:ring-accent" />
      <span class="text-sm text-gray-600">I agree to the terms and conditions</span>
    </label>
  </div>

  <!-- Submit Button -->
  <button type="submit" class="w-full bg-accent hover:bg-accent-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:shadow-md">
    Send Message
  </button>
</form>
```

### Portfolio Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Portfolio Item -->
  <div class="relative overflow-hidden rounded-lg aspect-square group shadow-md hover:shadow-lg transition-all duration-200">
    <img src="portfolio-image.jpg"
         alt="Project"
         class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-200">
      <h3 class="text-2xl font-bold mb-2">Project Name</h3>
      <p class="text-sm text-white/90 text-center px-6">Project description or category</p>
    </div>
  </div>

  <!-- Repeat for more items -->
</div>
```

### Hero Section

```html
<section class="relative min-h-screen bg-gradient-to-r from-accent-400 to-accent flex items-center justify-center text-white py-32 px-6">
  <div class="container text-center">
    <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      Guillermo Bernal
    </h1>
    <h2 class="text-2xl md:text-3xl font-light mb-8 text-white/95">
      Lead DevOps Engineer
    </h2>
    <p class="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
      Specializing in Kubernetes, CI/CD, Cloud Infrastructure, and automation.
      Experienced in both cloud-native and on-premises environments.
    </p>
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <button class="bg-white text-accent px-8 py-4 rounded-md font-semibold hover:shadow-lg transition-all duration-200">
        View Portfolio
      </button>
      <button class="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all duration-200">
        Get In Touch
      </button>
    </div>
  </div>
</section>
```

### Timeline / Experience

```html
<div class="timeline max-w-3xl mx-auto py-12">
  <!-- Timeline Item -->
  <div class="timeline-item pb-12 mb-12 border-b border-gray-200">
    <div class="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
      2022 - Present
    </div>
    <h3 class="text-2xl font-bold mb-2 text-gray-900">
      Lead DevOps Engineer
    </h3>
    <p class="text-gray-600 company-name font-medium mb-4">
      Quartz Network
    </p>
    <p class="text-gray-600 leading-relaxed">
      Supervise DevOps projects, manage cloud security, optimize costs with AI tools,
      and ensure smooth infrastructure access for IT teams.
    </p>
  </div>

  <!-- Repeat for more timeline items -->
</div>
```

### Skills Bar

```html
<div class="max-w-2xl mx-auto py-8">
  <!-- Skill Item -->
  <div class="mb-8">
    <div class="flex justify-between items-center mb-2">
      <span class="font-semibold text-gray-900">Kubernetes & Docker</span>
      <span class="text-sm font-semibold text-accent">90%</span>
    </div>
    <div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-accent to-accent-400 rounded-full"
           style="width: 90%; animation: slideRight 800ms ease-out;"></div>
    </div>
  </div>

  <!-- Repeat for more skills -->
</div>
```

---

## Shadows & Elevation

```css
--shadow-none:   none
--shadow-sm:     0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-base:   0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)
--shadow-md:     0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg:     0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-xl:     0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

### Usage Examples

```html
<!-- Subtle shadow (default for interactive elements) -->
<button class="shadow-sm hover:shadow-md transition-shadow"></button>

<!-- Card elevation -->
<div class="shadow-base hover:shadow-md"></div>

<!-- Prominent elements -->
<div class="shadow-lg"></div>

<!-- Maximum depth -->
<div class="shadow-xl"></div>
```

---

## Border Radius

```css
--radius-none:   0
--radius-sm:     0.25rem   (4px)
--radius-base:   0.375rem  (6px)
--radius-md:     0.5rem    (8px)
--radius-lg:     0.75rem   (12px)
--radius-xl:     1rem      (16px)
--radius-2xl:    1.5rem    (24px)
--radius-full:   9999px    (pill-shaped)
```

### Usage

```html
<!-- Minimal rounding -->
<div class="rounded-sm">Slightly rounded</div>

<!-- Standard buttons/inputs -->
<button class="rounded-md">Button</button>

<!-- Cards -->
<div class="rounded-lg">Card</div>

<!-- Pills/badges -->
<span class="rounded-full">Badge</span>
```

---

## Transitions & Animations

### Transition Durations

```css
--transition-fast:  150ms ease-in-out
--transition-base:  200ms ease-in-out
--transition-slow:  300ms ease-in-out
```

### Available Animations

```css
@keyframes fadeIn        /* Opacity 0 → 1 over 500ms */
@keyframes slideUp       /* translateY(20px) → 0 over 600ms */
@keyframes slideInLeft   /* translateX(-20px) → 0 over 600ms */
@keyframes slideInRight  /* translateX(20px) → 0 over 600ms */
@keyframes pulse         /* 2s infinite opacity pulse */
```

### Animation Examples

```html
<!-- Fade in -->
<div class="animate-fade-in">Content fades in on load</div>

<!-- Slide up -->
<div class="animate-slide-up">Content slides up on load</div>

<!-- Hover effects -->
<button class="transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]">
  Animated Button
</button>

<!-- Pulse animation -->
<div class="animate-pulse">Loading indicator</div>

<!-- Custom transitions -->
<div class="transition-colors duration-200 hover:bg-accent hover:text-white">
  Hover to change colors
</div>
```

---

## Dark Mode Support

The design system includes dark mode support via the `prefers-color-scheme: dark` media query.

Dark mode automatically applies when user's OS/browser prefers dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #111827;
    --color-surface: #1f2937;
    --color-surface-secondary: #374151;
    --color-text-primary: #f3f4f6;
    --color-text-secondary: #d1d5db;
    --color-text-tertiary: #9ca3af;
    --color-border: #374151;
    --color-border-light: #4b5563;
  }
}
```

To force dark mode:

```html
<html class="dark">
```

---

## Responsive Design Breakpoints

```
Mobile:        Default (< 640px)
Tablet:        sm:  (640px)
               md:  (768px)
               lg:  (1024px)
Desktop:       xl:  (1280px)
               2xl: (1536px)
```

### Responsive Examples

```html
<!-- Stack on mobile, 3 columns on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Items -->
</div>

<!-- Hide on mobile -->
<div class="hidden md:block">Visible on tablet and up</div>

<!-- Different padding on mobile vs desktop -->
<section class="px-6 md:px-12 py-12 md:py-24">
  <!-- Content -->
</section>

<!-- Responsive text sizes -->
<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>
```

---

## Best Practices

### 1. Whitespace is Key
- Use generous spacing between sections
- Don't be afraid of empty space
- Nordic design celebrates simplicity

### 2. Color Usage
- Use the accent color (#0d9488) sparingly for emphasis
- Maintain high contrast for readability
- Trust the neutral grays for most content

### 3. Typography
- Stick to the Inter font for consistency
- Use the defined font sizes and weights
- Maintain proper line-height for readability

### 4. Components
- Use the pre-built component patterns
- Customize with spacing and colors as needed
- Keep animations subtle and purposeful

### 5. Dark Mode
- Test all components in dark mode
- Ensure sufficient contrast in both modes
- Use CSS custom properties for flexibility

### 6. Performance
- Lazy load images in portfolios
- Use Tailwind's purge for production
- Minimize CSS custom property recalculation

---

## File Structure

```
/css/
├── nordic-design-system.css    (Complete design system)
├── default.css                  (Legacy - can be removed)
├── layout.css                   (Legacy - can be removed)
└── media-queries.css            (Legacy - can be removed)

/tailwind-config.js              (Tailwind configuration)
/NORDIC-DESIGN-GUIDE.md          (This file)
```

---

## Migration Guide (From Current Design)

### Step 1: Add New CSS
```html
<link rel="stylesheet" href="/css/nordic-design-system.css">
```

### Step 2: Add Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Step 3: Optional - Add Tailwind CDN
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = { /* ... config from tailwind-config.js ... */ }
</script>
```

### Step 4: Update HTML Classes
Replace old Skeleton CSS classes with new semantic classes:
- `.container` → use `.container` (updated styles)
- Buttons → use `.button` + color modifiers
- Cards → use `.card` class
- Forms → use updated form classes with `.focus:border-accent`

---

## Customization

### Changing the Accent Color

To change from teal to another color, update in both files:

**nordic-design-system.css:**
```css
:root {
  --color-accent: #YOUR_COLOR;
  --color-accent-light: #LIGHTER_SHADE;
  --color-accent-dark: #DARKER_SHADE;
}
```

**tailwind-config.js:**
```js
colors: {
  accent: {
    600: '#YOUR_COLOR',
    500: '#LIGHTER_SHADE',
    700: '#DARKER_SHADE',
  }
}
```

### Changing Typography

Update the font imports and font-family in both files.

### Adjusting Spacing

All spacing uses CSS variables for easy adjustment:
```css
:root {
  --container-padding: var(--space-6);  /* Change default container padding */
}
```

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11 with fallbacks
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Resources

- **Typography**: https://fonts.google.com/specimen/Inter
- **Tailwind CSS**: https://tailwindcss.com
- **Nordic Design**: https://www.designmodo.com/nordic-design/
- **CSS Custom Properties**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

---

## Support & Feedback

For improvements or issues with the design system, consider:
1. Reviewing the component examples above
2. Checking the CSS custom properties reference
3. Testing in both light and dark modes
4. Ensuring responsive design on all breakpoints

---

**Last Updated**: January 31, 2026
**Design System Version**: 1.0
**Status**: Production Ready
