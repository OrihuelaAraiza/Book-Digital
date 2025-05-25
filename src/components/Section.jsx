import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Carousel         from "./Carousel";
import ShotsSection     from "./ShotsSection";
import PairsCarousel    from "./PairsCarousel";
import ParallaxSection  from "./ParallaxSection";
import FlipGallery      from "./FlipGallery";
import GenreMasonry     from "./GenreMasonry";
import TiltGallery      from "./TiltGallery";
import ProfileSection   from "./ProfileSection";
import Poster            from "./Poster";

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
  profile,
  conclusionText,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section--visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const descriptions = {
    carousel:      "Prepara una presentación con cinco fotos que encuentramos en internet.",
    shots:         "Una toma requiere un sujeto; el encuadre, que puede prescindir de él, provoca sensaciones; y, a diferencia de los movimientos de cámara, no implica desplazamiento.",
    video:         "Los movimientos de cámara son los desplazamientos o giros  para cambiar la perspectiva y aportar dinamismo a la escena.",
    pairsCarousel: "Regla de tercios: divide el encuadre en nueve partes para equilibrar la composición.ley de la mirada: deja espacio hacia donde mira el sujeto;cuadrícula: guía de alineación de elementos; puntos de fuga: convergencia de líneas para crear profundidad.",
    parallax:      "Preparamos una presentación con 5 fotos de comida, como si fueran un post de Instagram, y añade a cada una un “copy”: un texto breve que enganche, persuada y motive a tu audiencia..",
    flip:          "Galería de producto: gira cada tarjeta para ver la fras, En 90 minutos montamos fondo y superficie, colocamos luces principales y de relleno para sacar la textura sin sombras duras, ajustamos ángulos, alturas y balances de blancos mientras disparábamos en orden, y aprovechamos trípode y disparador remoto para cambiar rápido de toma; así optimizamos tiempo y logramos fotos nítidas y bien iluminadas..",
    masonry:       "Los géneros fotográficos son esas categorías que agrupan las fotos según su propósito, tema o estilo —por ejemplo, retrato, documental o publicitaria— y marcan tanto la forma de plantear la toma (encuadres, luces, ángulos) como el objetivo final (emocionar, informar, vender, crear arte, etc.).",
    tilt:          "Sesión temática de béisbol con modelo en uniforme, poses de  lanzamiento, iluminación natural y ángulos bajos para transmitir la energía del juego en clave de moda deportiva.",
    profile:       "Presentación del fotógrafo con tus redes sociales.",
    conclusion:    "Cierre con reflexiones y aprendizajes.",
    stopmotion:   "Un StopMotion es capturar fotograma a fotograma para simular movimiento; elegí Legos por sus múltiples articulaciones y su versatilidad y colores vibrantes.",
     timelapse:    "Timelapse: lidiar con exposiciones largas y cambios de luz constantes para comprimir horas en segundos.",
  };

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="section__title">{title}</h2>
      {descriptions[type] && (
        <p className="section__desc">{descriptions[type]}</p>
      )}

      {type === "carousel"      && <Carousel photos={photos} />}
      {type === "shots"         && <ShotsSection shots={shots} />}
      {(type === "video" || type === "stopmotion" || type === "timelapse") && (
        <div className="video-container video-container--neon">
          {videoSrc.startsWith("http") ? (
            <iframe
              src={videoSrc}
              className="video-player video-player--neon"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={title}
            />
          ) : (
            <video
              src={videoSrc}
              controls
              className="video-player video-player--neon"
            />
          )}
        </div>
      )}
      {type === "pairsCarousel" && <PairsCarousel pairs={pairs} />}
      {type === "parallax"      && <ParallaxSection items={items} />}
      {type === "flip"          && <FlipGallery items={items} />}
      {type === "masonry"       && <GenreMasonry genres={genres} />}
      {type === "tilt"          && <TiltGallery items={items} />}
      {type === "profile"       && <ProfileSection profile={profile} />}
{type === "conclusion" && <Poster text={conclusionText} />}

      {!type && <div className="media-grid">{/* fallback genérico */}</div>}
    </section>
  );
}

Section.propTypes = {
  id:             PropTypes.string.isRequired,
  title:          PropTypes.string.isRequired,
  type:           PropTypes.string,
  photos:         PropTypes.arrayOf(PropTypes.string),
  shots:          PropTypes.array,
  videoSrc:       PropTypes.string,
  pairs:          PropTypes.array,
  items:          PropTypes.array,
  genres:         PropTypes.array,
  profile:        PropTypes.shape({
    name:         PropTypes.string.isRequired,
    artisticName: PropTypes.string.isRequired,
    avatar:       PropTypes.string.isRequired,
    social:       PropTypes.array.isRequired,
  }),
  conclusionText: PropTypes.string,
};