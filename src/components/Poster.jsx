
import React from "react";
import "./Poster.css";

export default function Poster() {
  return (
    <div className="poster">
      <h1 className="poster__title">
        Book Digital de Fotografía
      </h1>
      <h2 className="poster__subtitle">
        Lo que aprendí y cómo veo los audiovisuales hoy
      </h2>
      <ul className="poster__list">
        <li>📐 Composición: regla de tercios, ley de la mirada y puntos de fuga</li>
        <li>🔍 Encuadres y tomas: del gran plano general al extreme close-up</li>
        <li>🎥 Movimientos de cámara: pan, tilt, travelling… dinamizan la historia</li>
        <li>🖼️ Géneros: retrato, documental, paisaje, concierto y más, cada uno con su estilo</li>
        <li>🎨 Técnicas: stopmotion con Legos, timelapses desafiando la luz y parallax creativo</li>
        <li>🛠️ Producto y modelo: flip cards, masonry y tilt para mostrar tu brand</li>
      </ul>
      <p className="poster__footer">
        Ahora veo las producciones audiovisuales como un arte que combina técnica y creatividad. Cada toma, cada movimiento de cámara, cada elección de encuadre cuenta una historia. La fotografía no es solo capturar imágenes; es transmitir emociones y narrar relatos visuales. Estoy emocionado por seguir explorando este mundo y aplicar lo aprendido en mis futuros proyectos.
      </p>
    </div>
  );
}