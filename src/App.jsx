import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";
import Footer from "./components/Footer.jsx";
import MovieModal from "./components/MovieModal.jsx";

function App() {
  const [page, setPage] = useState("home");
  const [selectedId, setSelectedId] = useState(null);

  function openModal(id) {
    setSelectedId(id);
  }

  function closeModal() {
    setSelectedId(null);
  }

  return (
    <div>
      <Navbar page={page} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "movies" && <Movies openModal={openModal} />}

      <Footer />

      {selectedId !== null && (
        <MovieModal movieId={selectedId} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
