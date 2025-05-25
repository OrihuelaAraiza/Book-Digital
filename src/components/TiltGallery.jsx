import React from "react";
import PropTypes from "prop-types";
import "./tiltGallery.css";

export default function TiltGallery({ items }) {
  return (
    <div className="tilt-masonry">
      {items.map((item, i) => (
        <div key={i} className="tilt-item">
          <div className="tilt-card-inner">
            <img src={item.img} alt={`Modelaje ${i + 1}`} className="tilt-img" />
            <div className="tilt-overlay">
        
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

TiltGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};