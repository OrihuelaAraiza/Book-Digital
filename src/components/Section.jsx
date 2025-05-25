// src/components/Section.jsx

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import ShotsSection from "./ShotsSection";
import PairsCarousel from "./PairsCarousel";
import ParallaxSection from "./ParallaxSection"; 
import FlipGallery from "./FlipGallery";
import GenreMasonry from "./GenreMasonry";
import TiltGallery from "./TiltGallery";
import "./Section.css";

export default function Section({
  id,
  title,
  type,
  photos,
  shots,
  videoSrc,
  pairs,
  items,  
  genres,         
items: tiltItems,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0 } // threshold 0 para que aparezca al mínimo scroll
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="section__title">{title}</h2>
      <p className="section__desc">
        {{
          carousel: "Carrusel automático de cinco fotos.",
          shots: "Ejemplos de distintos encuadres con hasta cuatro imágenes.",
          video: "Mira este videoreel con movimientos destacados.",
          pairsCarousel:
            "Comparativa original vs regla de tercios / ley de la mirada.",
          parallax: "Fotografía de comida con un copy llamativo.",
          flip: "Galería de producto: gira cada tarjeta para ver la frase.",
          masonry: "Mosaico de géneros musicales.",
          tilt: "Modelaje temático: Diablos Rojos."
        }[type] || "Aquí va la descripción de la actividad."}
      </p>

      {type === "carousel" && <Carousel photos={photos} />}
      {type === "shots" && <ShotsSection shots={shots} />}
      {type === "video" && (
        <div className="video-container">
          {videoSrc.startsWith("http") ? (
            <iframe
              src={videoSrc}
              className="video-player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={title}
            />
          ) : (
            <video
              src={videoSrc}
              controls
              className="video-player"
            />
          )}
        </div>
       )}
      {type === "pairsCarousel" && <PairsCarousel pairs={pairs} />}
      {type === "parallax" && <ParallaxSection items={items} />}
      {type === "flip"           && <FlipGallery items={items} />}
      {type === "masonry"      && <GenreMasonry genres={genres} />}
      {type === "tilt"          && <TiltGallery items={items} />}
      
      

      {!type && <div className="media-grid">{/* grid genérico */}</div>}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  photos: PropTypes.array,
  shots: PropTypes.array,
  videoSrc: PropTypes.string,
  pairs: PropTypes.array,
  items: PropTypes.array,   
  genres: PropTypes.array,  
  items: PropTypes.array,
};