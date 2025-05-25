// src/components/ParallaxSection.jsx
import React from "react";
import PropTypes from "prop-types";
import "./parallaxSection.css";

export default function ParallaxSection({ items }) {
  return (
    <>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="parallax"

          style={{ backgroundImage: `url(${item.img})` }}
          
        >

          <div className="parallax__text">{item.copy}</div>
        </div>
      ))}
    </>
  );
}

ParallaxSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
    })
  ).isRequired,
};