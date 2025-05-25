import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./pairsCarousel.css";

export default function PairsCarousel({ pairs, interval = 4000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % pairs.length),
      interval
    );
    return () => clearInterval(id);
  }, [pairs.length, interval]);

  return (
    <div className="pairs-carousel">
      {pairs.map((pair, i) => (
        <div
          key={i}
          className={`pairs-carousel__slide ${i === active ? "is-active" : ""}`}
        >
          <img
            src={pair.original}
            alt={`Original ${i + 1}`}
            className="pairs-carousel__img"
          />
          <img
            src={pair.grid}
            alt={`Grid ${i + 1}`}
            className="pairs-carousel__img"
          />
        </div>
      ))}

      <div className="pairs-carousel__indicators">
        {pairs.map((_, i) => (
          <button
            key={i}
            className={`pairs-carousel__dot ${i === active ? "dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Ir al par ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

PairsCarousel.propTypes = {
  pairs: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string.isRequired,
      grid: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
};