# MovieExplorer

A simple movie searching app made with React + Vite for the Foundation Program assignment.

## Tech used
- React (with Vite)
- Plain CSS (no Tailwind)
- TVmaze API (free, no API key needed) — https://www.tvmaze.com/api

## Features
- Home page with a hero banner
- Movies page where you can search for a show by name
- Shows a grid of movie cards (poster, rating, year)
- Click "See Details" to open a modal with the full summary, genre, and rating
- Works on mobile and desktop

## How to run this project

1. Install dependencies:
```
npm install
```

2. Run the dev server:
```
npm run dev
```

3. Open the link it gives you (usually http://localhost:5173) in your browser.

## Folder structure
```
src/
  components/
    Navbar.jsx
    Home.jsx
    Movies.jsx
    MovieCard.jsx
    MovieModal.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

## Notes
I didn't use React Router for this, I just used useState in App.jsx to switch
between the Home page and the Movies page. Felt simple enough for this size
of project.
