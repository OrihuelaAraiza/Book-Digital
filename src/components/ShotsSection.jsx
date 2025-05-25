// ---------------- src/components/ShotsSection.jsx ----------------
import React from "react";
import PropTypes from "prop-types";
import "./shotsSection.css";

export default function ShotsSection({ shots }) {
  console.log("🔎 ShotsSection recibo shots:", shots);
  return (
    <div className="shots-section">
      {shots.map((shot) => (
        <div key={shot.key} className="shots-section__item">
          <h3 className="shots-section__title">{shot.label}</h3>
          <p className="shots-section__desc">{shot.description}</p>
          <div className="shots-grid">
            {shot.photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${shot.label} ${i + 1}`}
                loading="lazy"    
                className="shots-grid__img"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

ShotsSection.propTypes = {
  shots: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};