import React from "react";
import PropTypes from "prop-types";
import "./genreMasonry.css";

export default function GenreMasonry({ genres }) {
  return (
    <>
      {genres.map((genre) => (
        <div key={genre.key} className="genre-section">
          <h3 className="genre-section__title">{genre.label}</h3>
          <div className="masonry-grid">
            {genre.items.map((item, i) => (
              <div key={i} className="masonry-item">
                <img
                  src={item.img}
                  alt={`${genre.label} ${i + 1}`}
                    loading="lazy"
                  className="masonry-img"
                />
                <p className="masonry-caption">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

GenreMasonry.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          img: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};