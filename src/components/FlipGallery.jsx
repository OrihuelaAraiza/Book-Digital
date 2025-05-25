import React from "react";
import PropTypes from "prop-types";
import "./flipGallery.css";

export default function FlipGallery({ items }) {
  return (
    <div className="flip-gallery">
      {items.map((item, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <img
                src={item.img}
                alt={`Producto ${index + 1}`}
                className="flip-card__img"
              />
            </div>
            <div className="flip-card__back">
              <p className="flip-card__text">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

FlipGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};