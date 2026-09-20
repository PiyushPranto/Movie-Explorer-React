import { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";

const API_BASE = "https://api.tvmaze.com";

function Movies({ openModal }) {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    loadDefaultShows();
  }, []);

  function loadDefaultShows() {
    setLoading(true);
    setErrorMsg("");

    fetch(API_BASE + "/shows")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.slice(0, 40));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Something went wrong loading shows.");
        setLoading(false);
      });
  }

  function handleSearch() {
    const query = searchText.trim();

    if (query === "") {
      loadDefaultShows();
      return;
    }

    setLoading(true);
    setErrorMsg("");

    fetch(API_BASE + "/search/shows?q=" + query)
      .then((res) => res.json())
      .then((data) => {
        const results = data.map((item) => item.show);
        setMovies(results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Something went wrong searching.");
        setLoading(false);
      });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <section className="page">
      <div className="search-wrap">
        <h2>Browse Movies</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie or show..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyUp={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {errorMsg && <p style={{ textAlign: "center" }}>{errorMsg}</p>}

      {!loading && movies.length === 0 && !errorMsg && (
        <p style={{ textAlign: "center" }}>No results found.</p>
      )}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} openModal={openModal} />
        ))}
      </div>
    </section>
  );
}

export default Movies;
