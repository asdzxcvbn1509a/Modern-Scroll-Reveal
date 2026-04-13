# Modern Scroll Reveal

A vanilla JavaScript workshop project demonstrating scroll-triggered text and image reveal animations using the Intersection Observer API.

## Demo

As the user scrolls down the page, content sections (image + text pairs) fade in and slide up into view. Even-numbered sections are mirrored (image on the right) for visual variety.

## Features

- Scroll-triggered reveal animations powered by `IntersectionObserver`
- Alternating left/right image-text layout
- Subtle image hover scale effect
- Responsive design — stacks to single column on mobile
- Google Fonts (Prompt) for clean typography

## Tech Stack

- HTML5
- CSS3 (Flexbox, transitions, media queries)
- Vanilla JavaScript (no dependencies)

## How It Works

**[script.js](script.js)** selects all `.content` sections and registers each with an `IntersectionObserver`. When a section enters the viewport at 20% visibility (`threshold: 0.2`), the class `show-reveal` is added.

**[style.css](style.css)** sets each `.content` section to start invisible (`opacity: 0`) and slightly offset (`translateY(40px)`). Adding `show-reveal` transitions it to fully visible at its natural position over 0.8 seconds.

## Project Structure

```
Text Reveal/
├── index.html   # Page markup — three content sections
├── style.css    # Layout, animation states, responsive styles
└── script.js    # Intersection Observer setup and callback
```

## Getting Started

Open `index.html` directly in a browser — no build step or server required.

```bash
# Or serve locally with any static server, e.g.:
npx serve .
```
