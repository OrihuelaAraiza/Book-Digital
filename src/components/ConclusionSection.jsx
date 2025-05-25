import React from "react";
import PropTypes from "prop-types";
import "./ConclusionSection.css";

export default function ConclusionSection({ text }) {
  return (
    <div className="conclusion-section">
      <p className="conclusion-text">{text}</p>
    </div>
  );
}

ConclusionSection.propTypes = {
  text: PropTypes.string.isRequired,
};