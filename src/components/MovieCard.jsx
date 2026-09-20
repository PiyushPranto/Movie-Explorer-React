function MovieCard({ movie, openModal }) {
  let posterUrl = "https://via.placeholder.com/300x260?text=No+Image";
  if (movie.image && movie.image.medium) {
    posterUrl = movie.image.medium;
  }

  let year = "N/A";
  if (movie.premiered) {
    year = movie.premiered.substring(0, 4);
  }

  let rating = "N/A";
  if (movie.rating && movie.rating.average) {
    rating = movie.rating.average;
  }

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.name} />
      <div className="movie-card-body">
        <h4>{movie.name}</h4>
        <div className="movie-meta">
          ⭐ {rating} &nbsp;|&nbsp; 📅 {year}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => openModal(movie.id)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
