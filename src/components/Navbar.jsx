// ---------------- src/components/Navbar.jsx ----------------
import React, { useState } from "react";
import PropTypes from "prop-types";

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
        {sections.map((s) => (
          <li key={s.id} className="navbar__item">
            <a
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="navbar__link"
            >
              {s.title.split("·")[0].trim() /* Solo "Tarea X" */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  sections: PropTypes.array.isRequired,
};