# GaraHerb

Landing page for GaraHerb, a natural vitality supplement for men. Built with Vite, SCSS, and Vanilla JavaScript.

## Link to video explaining the project decisions
https://youtu.be/17BXteD7gZ0


## Tech Stack

- **Vite** 8 — build tool and development server
- **Sass** (sass-embedded) — CSS preprocessor
- **Vanilla JS** — ES Modules, no frameworks
- **Inter Variable** (@fontsource-variable/inter) — typography

## Pages Sections

| Section | Description |
|---|---|
| Hero | Main call-to-action with background image and benefit highlights |
| Advantages | Trust signals: secure payment, 60-day guarantee, one-time fee, natural formula |
| Pricing | Three product tiers (Starter, Best Seller, Standard) with pricing cards |
| About | Formula overview with supporting imagery |
| Ingredients | Showcase of 6 key ingredients with descriptions |
| Benefits | Doctor-approved claims with supporting imagery |
| Testimonials | Customer social proof section |

## Project Structure

```
GaraHerb/
├── index.html
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.js
    ├── faq.js
    ├── assets/
    │   ├── backgrounds/
    │   ├── icons/
    │   ├── images/
    │   └── vectors/
    └── styles/
        ├── main.scss
        ├── abstracts/
        │   └── _variables.scss
        ├── base/
        │   ├── _reset.scss
        │   └── _typography.scss
        ├── components/
        │   ├── _button.scss
        │   ├── _card.scss
        │   └── _faq.scss
        ├── layout/
        │   ├── _container.scss
        │   └── _sections.scss
        ├── pages/
        │   └── _home.scss
        └── utilities/
            ├── _display.scss
            └── _img.scss
```

### SCSS Architecture

The stylesheet follows a simplified 7-1 pattern:

- **abstracts** — design tokens (colors, typography scale)
- **base** — CSS reset and global typography
- **components** — isolated UI components (button, card, faq)
- **layout** — container widths and section spacing
- **pages** — page-specific overrides
- **utilities** — single-purpose helper classes

## Getting Started

**Requirements:** Node.js 18+

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

## Components

### FaqTab (`src/faq.js`)

Accessible accordion component initialized via data attributes, similar to Bootstrap's plugin pattern.

**HTML usage:**

```html
<div data-faq>

    <div class="faq-item" data-faq-item>
        <button
            class="faq-item__trigger"
            data-faq-trigger
            aria-expanded="false"
            aria-controls="faq-1"
            data-faq-parent="#faq-container"
        >
            Question text
            <span class="faq-item__icon" aria-hidden="true"></span>
        </button>
        <div
            class="faq-item__body"
            id="faq-1"
            role="region"
            aria-labelledby="faq-1"
            data-faq-body
        >
            <div class="faq-item__content">
                Answer text.
            </div>
        </div>
    </div>

</div>
```

**Data attributes:**

| Attribute | Element | Description |
|---|---|---|
| `data-faq` | container | Initializes the component |
| `data-faq-item` | item wrapper | Groups trigger and body |
| `data-faq-trigger` | `<button>` | Opens/closes the panel |
| `data-faq-body` | panel `<div>` | Collapsible content area |
| `data-faq-parent="#selector"` | `<button>` | Closes siblings on open (accordion mode) |

**Programmatic usage:**

```js
import FaqTab from './faq.js'

FaqTab.init()
FaqTab.init(someContainerElement)
```
