function Home({ setPage }) {
  return (
    <section className="page">
      <div className="hero">
        <div className="hero-text">
          <h1>Discover Movies</h1>
          <p>
            Explore and discover your favorite movies and shows from around
            the world. Search anything, find everything.
          </p>
          <button
            className="btn btn-primary btn-big"
            onClick={() => setPage("movies")}
          >
            Explore Now
          </button>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>🔍 Search</h3>
          <p>Type any show name and find it in seconds using the TVmaze database.</p>
        </div>
        <div className="info-card">
          <h3>⭐ Ratings</h3>
          <p>See ratings, release dates and genres before you decide what to watch.</p>
        </div>
        <div className="info-card">
          <h3>📺 Details</h3>
          <p>Click a card to open full details including summary and network info.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
