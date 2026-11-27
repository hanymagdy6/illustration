# Hany Magdy, Iconographer

![Site screenshot](docs/screenshot.png)

Portfolio website of Hany Magdy, an iconographer and illustrator based in Minya and Cairo. It shows Byzantine and Coptic icons, classical studies, portraits and printmaking.

**Live site:** https://hanymagdy6.github.io/illustration/

## The idea

One page that shows the work first: icons, murals, studies and prints, grouped by type, with a process page that shows how an icon is made, an about page and a contact section.

## Design decisions

- Navy (#1b3d5a) and orange (#f79a2d) as the brand colors.
- English and Arabic versions. Arabic switches the whole page to right-to-left. The chosen language is remembered in the browser.
- Artworks are shown whole, never cropped or compressed.
- Motion is subtle and continuous, and it stops when the visitor's device asks for reduced motion.
- The navigation stays on one line at every screen width.

## Structure

```
index.html        page markup (all views, hash-routed: #about, #work, #process, #contact)
privacy.html      privacy page
pantocrator/     case study page for the apse mural
work-stages/    step by step page for icons and portraits
css/style.css     all styles, with a comment above each section
js/content.js     the site text in English and Arabic (edit text here)
js/main.js        behavior: language switch, routing, animations
images/           artwork and site images
fonts/            web fonts
docs/             README screenshot
```

## Tech

Plain HTML, CSS and JavaScript. No framework and no build step. To run it locally, serve the folder with any static server, for example `python3 -m http.server`, and open http://localhost:8000. It is hosted on GitHub Pages and every push to `main` goes live.
