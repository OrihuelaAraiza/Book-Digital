import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FaHome,
  FaCameraRetro,
  FaVideo,
  FaImage,
  FaHamburger,
  FaCube,
  FaTheaterMasks,
  FaStopCircle,
  FaClock,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import "./navbar.css"; // Asegúrate de importar tus estilos

// Mapea cada sección a un icono
const iconMap = {
  tarea1: FaHome,
  tarea2: FaCameraRetro,
  tarea3: FaVideo,
  tarea4: FaImage,
  tarea5: FaHamburger,        // ejemplo: comida
  tarea6: FaCube,             // producto / 3D
  tarea7: FaTheaterMasks,     // géneros
  tarea8: FaCube,             // modelaje (use el mismo o diferente)
  tarea9: FaStopCircle,
  tarea10: FaClock,
  datos: FaUser,
  conclusion: FaCheckCircle,
};

export default function Navbar({ sections }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${open ? "navbar--open" : ""}`}>
      <div
        className="navbar__brand"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        BookDigital
      </div>

      <button
        className="navbar__toggle"
        aria-label="Menú"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className="navbar__list">
        {sections.map((s) => {
          const Icon = iconMap[s.id] || FaCheckCircle;
          return (
            <li key={s.id} className="navbar__item">
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="navbar__link"
              >
                <Icon style={{ marginRight: "0.5rem" }} />
                {s.title.split("·")[0].trim()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};