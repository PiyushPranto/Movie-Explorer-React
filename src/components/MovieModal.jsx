import { useState, useEffect } from "react";

const API_BASE = "https://api.tvmaze.com";

function MovieModal({ movieId, closeModal }) {
  const [show, setShow] = useState(null);

  useEffect(() => {
    setShow(null);

    fetch(API_BASE + "/shows/" + movieId)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieId]);

  function handleOverlayClick(e) {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={closeModal}>
          ✕
        </button>

        {show === null && <p>Loading details...</p>}

        {show !== null && (
          <div>
            <img
              src={
                show.image && show.image.original
                  ? show.image.original
                  : "https://via.placeholder.com/650x350?text=No+Image"
              }
              alt={show.name}
            />
            <h2>{show.name}</h2>
            <div className="modal-meta">
              ⭐ {show.rating && show.rating.average ? show.rating.average : "N/A"}
              &nbsp;|&nbsp; 📅 {show.premiered ? show.premiered : "N/A"}
              &nbsp;|&nbsp;{" "}
              {show.genres && show.genres.length > 0
                ? show.genres.join(", ")
                : "N/A"}
            </div>
            <p
              className="summary"
              dangerouslySetInnerHTML={{
                __html: show.summary ? show.summary : "No summary available.",
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieModal;
