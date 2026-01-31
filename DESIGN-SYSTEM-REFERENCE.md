# Nordic Minimal Design System - Quick Reference

**For**: Guillermo Bernal - Lead DevOps Engineer Portfolio
**System**: Nordic Minimal with CSS Custom Properties + Tailwind CSS
**Version**: 1.0 | **Status**: Production Ready

---

## FILES INCLUDED

| File | Purpose | Usage |
|------|---------|-------|
| `/css/nordic-design-system.css` | Complete design system with CSS variables & components | Primary styling file - required |
| `/tailwind-config.js` | Tailwind CSS configuration object | Optional - for Tailwind CDN usage |
| `/NORDIC-DESIGN-GUIDE.md` | Comprehensive implementation guide | Reference documentation |
| `/nordic-template-example.html` | Full-page HTML template example | Reference & template |
| `/DESIGN-SYSTEM-REFERENCE.md` | This file - quick reference | Quick lookup |

---

## COLOR PALETTE AT A GLANCE

### Primary Colors
```
Background:     #f9fafb  (var(--color-background))
Surface:        #ffffff  (var(--color-surface))
Text Primary:   #1f2937  (var(--color-text-primary))
Text Secondary: #6b7280  (var(--color-text-secondary))
```

### Accent Color (Nordic Teal)
```
Primary:    #0d9488  (var(--color-accent))
Light:      #14b8a6  (var(--color-accent-light))
Dark:       #0f766e  (var(--color-accent-dark))
```

### Gray Scale
```
50:   #f9fafb
100:  #f3f4f6
200:  #e5e7eb
300:  #d1d5db
400:  #9ca3af
500:  #6b7280
600:  #4b5563
700:  #374151
800:  #1f2937
900:  #111827
```

### Functional Colors
```
Success: #10b981
Warning: #f59e0b
Error:   #ef4444
Info:    #3b82f6
```

---

## TYPOGRAPHY QUICK REFERENCE

### Font Stack
```
Primary:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Fallback: System fonts + Helvetica Neue
Code:     'Menlo', 'Monaco', 'Courier New', monospace
```

### Font Sizes
```
xs:    0.75rem  (12px)
sm:    0.875rem (14px)
base:  1rem     (16px) ← Default body text
lg:    1.125rem (18px)
xl:    1.25rem  (20px)
2xl:   1.5rem   (24px)
3xl:   1.875rem (30px)
4xl:   2.25rem  (36px)
5xl:   3rem     (48px) ← Hero/main headings
```

### Font Weights
```
Light:      300
Regular:    400 ← Default
Medium:     500
Semibold:   600
Bold:       700
```

### Line Heights
```
Tight:    1.25  ← Headings
Normal:   1.5   ← Body text (default)
Relaxed:  1.625 ← Longer passages
Loose:    2     ← Hero/intro text
```

---

## SPACING SCALE (8px Base Unit)

```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
6:   24px
8:   32px
12:  48px
16:  64px
20:  80px
24:  96px
32:  128px
40:  160px
48:  192px
```

### Spacing Guidelines
- **Micro** (1-3): Within components
- **Element** (4-8): Between related items
- **Section** (12-24): Major section breaks
- **Container**: Default 24px (--space-6)

---

## BORDER RADIUS

```
none:   0
sm:     4px
base:   6px
md:     8px   ← Buttons/inputs
lg:     12px  ← Cards
xl:     16px
2xl:    24px
full:   9999px ← Pills/circles
```

---

## SHADOWS

| Level | CSS Value |
|-------|-----------|
| none | `none` |
| sm | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` |
| base | `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)` |
| md | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` |
| lg | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)` |
| xl | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` |

---

## TRANSITIONS

```
Fast:  150ms ease-in-out
Base:  200ms ease-in-out ← Default
Slow:  300ms ease-in-out
```

### Usage Example
```html
<button class="transition-all duration-200 hover:shadow-md">
  Hover me
</button>
```

---

## COMMON COMPONENT SNIPPETS

### Primary Button
```html
<button class="bg-accent hover:bg-accent-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:shadow-md">
  Button Text
</button>
```

### Secondary Button
```html
<button class="border-2 border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-gray-50">
  Button Text
</button>
```

### Card
```html
<div class="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all">
  Content
</div>
```

### Badge
```html
<span class="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
  Badge
</span>
```

### Form Input
```html
<input type="text"
       class="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10">
```

### Section with Whitespace
```html
<section class="py-24 px-6">
  <div class="container">
    <!-- Content with abundant whitespace -->
  </div>
</section>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Items automatically responsive -->
</div>
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile:   < 640px (default, no prefix)
Tablet:   sm: 640px
          md: 768px
          lg: 1024px
Desktop:  xl: 1280px
          2xl: 1536px
```

### Example
```html
<div class="text-2xl md:text-3xl lg:text-4xl">
  Responsive text
</div>
```

---

## ANIMATIONS AVAILABLE

### Keyframe Animations
```
fadeIn:        Opacity 0 → 1 (500ms)
slideUp:       translateY(20px) → 0 (600ms)
slideInLeft:   translateX(-20px) → 0 (600ms)
slideInRight:  translateX(20px) → 0 (600ms)
pulse:         Opacity pulse (2s infinite)
```

### Usage
```html
<div class="animate-fade-in">Content fades in</div>
<div class="animate-slide-up">Content slides up</div>
```

---

## DARK MODE

Automatically enabled via `prefers-color-scheme: dark`

### To Force Dark Mode
```html
<html class="dark">
```

### Dark Mode Colors
```
Background: #111827
Surface:    #1f2937
Text Primary: #f3f4f6
Text Secondary: #d1d5db
Border:     #374151
```

---

## CSS VARIABLES (USE IN CUSTOM CSS)

```css
/* Colors */
var(--color-white)
var(--color-background)
var(--color-surface)
var(--color-surface-secondary)
var(--color-text-primary)
var(--color-text-secondary)
var(--color-text-tertiary)
var(--color-accent)
var(--color-accent-light)
var(--color-accent-dark)
var(--color-border)
var(--color-border-light)

/* Typography */
var(--font-sans)
var(--font-mono)
var(--font-weight-bold)
var(--text-base)
var(--line-height-normal)

/* Spacing */
var(--space-4)
var(--space-6)
var(--space-8)
var(--space-12)

/* Shadows */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)

/* Transitions */
var(--transition-base)
var(--transition-slow)

/* Layout */
var(--max-width)
var(--container-padding)
```

---

## COMMON PATTERNS

### Hero Section Pattern
```
Background:   Teal gradient (accent-light → accent)
Text:         White, large & bold
Spacing:      py-32 or py-48
Alignment:    Center
```

### Card Pattern
```
Background:   White surface
Border:       1px gray-200
Radius:       lg (12px)
Padding:      p-8
Shadow:       sm + hover:md
Hover:        Border changes to accent
```

### Section Pattern
```
Padding:      py-24 px-6 (section) + container
Background:   Alternate between white & gray-50
Max-width:    Container with max-width-4xl
Spacing:      mb-12 for titles, mb-6 for paragraphs
```

### Button Pattern
```
Padding:      px-6 py-3
Font:         Semibold (600)
Border:       None (or 2px for secondary)
Radius:       md (8px)
Hover:        Color change + shadow + translateY(-1px)
Active:       Color darker + no transform
```

---

## NORDIC DESIGN PRINCIPLES APPLIED

✓ **Abundant Whitespace**
  - Large section padding (py-24, py-32)
  - Generous gaps in grids (gap-8)
  - Margins around components

✓ **Single Accent Color**
  - Teal/Cyan (#0d9488)
  - Used for links, buttons, highlights, accents
  - Never more than 10% of layout color

✓ **Clean Typography**
  - Inter font family
  - Proper hierarchy with weights & sizes
  - Comfortable line-heights

✓ **Subtle Animations**
  - Smooth transitions (200ms default)
  - Meaningful hover states
  - No distracting effects

✓ **Professional & Understated**
  - No ornament or decoration
  - Functional design only
  - Clear content hierarchy

✓ **Light Mode Primary**
  - Light backgrounds (#f9fafb, #ffffff)
  - Dark text (#1f2937)
  - Dark mode optional via media query

---

## INSTALLATION

### Option 1: Copy CSS File
```html
<link rel="stylesheet" href="/css/nordic-design-system.css">
```

### Option 2: With Tailwind CDN
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = { /* paste from tailwind-config.js */ }
</script>
<link rel="stylesheet" href="/css/nordic-design-system.css">
```

---

## CUSTOMIZATION CHECKLIST

- [ ] Review color palette - accent color correct?
- [ ] Check typography - Inter font loading?
- [ ] Test spacing - feels Nordic?
- [ ] Verify animations - subtle enough?
- [ ] Check dark mode - contrast OK?
- [ ] Mobile responsive - breakpoints work?
- [ ] Test all components - buttons, cards, forms
- [ ] Verify accessibility - color contrast WCAG AA?
- [ ] Performance check - CSS file size reasonable?
- [ ] Browser testing - works in target browsers?

---

## RESOURCES

- **Font**: https://fonts.google.com/specimen/Inter
- **Tailwind**: https://tailwindcss.com/docs
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Color Tool**: https://colorhexa.com/0d9488

---

## SUPPORT

For questions or issues:
1. Check `/NORDIC-DESIGN-GUIDE.md` for detailed docs
2. Review `/nordic-template-example.html` for examples
3. Examine `/css/nordic-design-system.css` for CSS variables
4. Test in browser dev tools

---

**Created**: January 31, 2026
**Last Updated**: January 31, 2026
**License**: Open for use on this project
**Status**: Production Ready ✓
