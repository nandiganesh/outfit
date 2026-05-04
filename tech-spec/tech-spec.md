# Tech Spec: OUTFIT® by ++hellohello

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | DOM renderer |
| react-router-dom | ^6.26.0 | SPA routing (Home, Product, Bag) |
| framer-motion | ^11.0.0 | Page transitions, animations |
| lucide-react | ^0.400.0 | Icons (arrow, bag, plus/minus) |

## Component Inventory

### Layout

| Component | Source | Reuse |
|-----------|--------|-------|
| `Header` | Custom | All pages |
| `Footer` | Custom | All pages |
| `ThemeProvider` | Custom | App root (context + data-theme) |

### Sections (Home page)

| Component | Source | Notes |
|-----------|--------|-------|
| `HeroSection` | Custom | Massive OUTFIT® text, horizontal rule |
| `InfoBar` | Custom | 4-column description links |
| `ProductGrid` | Custom | Asymmetric masonry layout |
| `StatementSection` | Custom | "Made to be worn..." block |

### Pages

| Component | Route | Notes |
|-----------|-------|-------|
| `HomePage` | `/` | All sections composed |
| `ProductPage` | `/product/:slug` | Split layout, size/qty selectors |
| `BagPage` | `/bag` | Cart items list, total |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| `ProductCard` | Custom | ProductGrid |
| `ThemeSwitcher` | Custom | Header |
| `SizeSelector` | Custom | ProductPage |
| `QuantitySelector` | Custom | ProductPage, BagPage |
| `BagBadge` | Custom | Header |
| `AnimatedPrice` | Custom | ProductPage (digit counter) |
| `Logo` | Custom (SVG) | Header, Footer |
| `ApparelBadge` | Custom | ProductCard |

## Animation Implementation

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page load hero reveal | Framer Motion | `initial={{ y: 20, opacity: 0 }}` → `animate={{ y: 0, opacity: 1 }}`, duration 0.8s |
| Product grid stagger | Framer Motion | `variants` with `staggerChildren: 0.1` on container |
| Theme color transition | CSS | `transition: color 300ms ease, background-color 300ms ease` on all themed elements |
| Product image hover | CSS | `transform: scale(1.02)`, `transition: transform 400ms ease-out` |
| Link hover underline | CSS | `background-size` technique or `::after` pseudo-element |
| Card hover lift | CSS | `transform: translateY(-2px)` |
| Price digit animation | Framer Motion | `useMotionValue` + `animate` for counting effect |
| Page transitions | Framer Motion | `AnimatePresence` with fade/slide on route change |
| Bag count update | Framer Motion | `AnimatePresence` for enter/exit on badge number |

## State & Logic Plan

### Theme System
- **Context**: `ThemeContext` with `theme: 'red' | 'black' | 'cream'`
- **Persistence**: `localStorage` key `outfit-theme`
- **Application**: `data-theme` attribute on `<html>` element
- **CSS Strategy**: CSS custom properties `--bg`, `--fg`, `--fg-secondary` switch values per `[data-theme]` selector

### Bag/Cart State
- **Context**: `BagContext` with array of `{ product, size, quantity }`
- **Persistence**: `localStorage` key `outfit-bag`
- **Actions**: `addItem`, `removeItem`, `updateQuantity`, `clearBag`
- **Derived**: `totalItems`, `totalPrice`

### Routing
```
/              → HomePage
/product/:slug → ProductPage (slug maps to product data)
/bag           → BagPage
```

## Key Technical Decisions

1. **No external CSS framework**: All styles via Tailwind with custom CSS variables. The design is too bespoke for pre-built components.

2. **CSS Variables for theming**: All color references use `var(--fg)` and `var(--bg)` instead of hardcoded values. This enables instant global theme switching with a single attribute change.

3. **Product data as static array**: No backend needed. 13 products with all metadata (name, price, description, sizes, image mapping) in a TypeScript file.

4. **Image strategy**: All 13 product images extracted as JPG files in `/public/assets/`. Product pages reference the same image as the grid.

5. **Grid layout**: Custom CSS Grid with explicit template areas per row, not a generic masonry library. The asymmetry is intentional and fixed.

6. **Font loading**: Google Fonts `Outfit` loaded via `<link>` in index.html with weights 300-900.

## CSS Architecture

```css
/* Global theme variables */
:root {
  --bg: #EDE7E0;
  --fg: #FF0000;
  --fg-secondary: #FF0000;
}

[data-theme="black"] {
  --bg: #000000;
  --fg: #EDE7E0;
  --fg-secondary: #EDE7E0;
}

[data-theme="cream"] {
  --bg: #EDE7E0;
  --fg: #000000;
  --fg-secondary: #000000;
}

/* All themed elements transition */
* {
  transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease;
}
```

## File Structure

```
src/
├── App.tsx                    # Router + ThemeProvider + AnimatePresence
├── main.tsx                   # Entry point, font loading
├── index.css                  # Global styles, CSS variables, Tailwind
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx               # ++ SVG mark
│   ├── ThemeSwitcher.tsx
│   ├── ProductCard.tsx
│   ├── ApparelBadge.tsx
│   ├── SizeSelector.tsx
│   ├── QuantitySelector.tsx
│   ├── BagBadge.tsx
│   └── AnimatedPrice.tsx
├── sections/
│   ├── HeroSection.tsx
│   ├── InfoBar.tsx
│   ├── ProductGrid.tsx
│   └── StatementSection.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── ProductPage.tsx
│   └── BagPage.tsx
├── context/
│   ├── ThemeContext.tsx
│   └── BagContext.tsx
├── data/
│   └── products.ts            # All 13 products with metadata
└── types/
    └── index.ts               # Product, BagItem, Theme types
```

## Tailwind Config Extensions

```js
// tailwind.config.js
{
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        'fg-secondary': 'var(--fg-secondary)',
        cream: '#EDE7E0',
        red: '#FF0000',
      },
    }
  }
}
```
