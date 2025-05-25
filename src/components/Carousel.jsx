// ---------------- src/components/Carousel.jsx ----------------
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./carousel.css";

export default function Carousel({ photos, interval = 3500 }) {
  const [active, setActive] = useState(0);

  // Avance automático
  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % photos.length),
      interval
    );
    return () => clearInterval(id);
  }, [photos.length, interval]);

  return (
    <div className="carousel">
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Foto ${i + 1}`}
          className={`carousel__img ${i === active ? "is-active" : ""}`}
        />
      ))}

      <div className="carousel__indicators">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Ir a foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};