import { useState } from "react";

function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(newPage) {
    setPage(newPage);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => goTo("home")}>
          🎬 MovieExplorer
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#" onClick={() => goTo("home")}>
            Home
          </a>
          <a href="#" onClick={() => goTo("movies")}>
            Movies
          </a>
          <button className="btn btn-primary" onClick={() => goTo("movies")}>
            Browse Movies
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
