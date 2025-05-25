import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

// — Tarea 1 (carrusel) —
import photo1 from "./assets/tarea1/01.jpg";
import photo2 from "./assets/tarea1/02.jpg";
import photo3 from "./assets/tarea1/03.jpg";
import photo4 from "./assets/tarea1/04.jpg";
import photo5 from "./assets/tarea1/05.jpg";

// — Tarea 2 (shots) —
import fullshot1 from "./assets/tarea2/fullshot/01.jpg";
import fullshot2 from "./assets/tarea2/fullshot/02.jpg";
import fullshot3 from "./assets/tarea2/fullshot/03.jpg";
import americanShot1 from "./assets/tarea2/americanShot/01.jpg";
import americanShot2 from "./assets/tarea2/americanShot/02.jpg";
import americanShot3 from "./assets/tarea2/americanShot/03.jpg";
import mediumShot1 from "./assets/tarea2/mediumShot/01.jpg";
import mediumShot2 from "./assets/tarea2/mediumShot/02.jpg";
import mediumShot3 from "./assets/tarea2/mediumShot/03.jpg";
import closeUp1 from "./assets/tarea2/closeUp/01.jpg";
import closeUp2 from "./assets/tarea2/closeUp/02.jpg";
import closeUp3 from "./assets/tarea2/closeUp/03.jpg";
import closeUp4 from "./assets/tarea2/closeUp/04.jpg";
import bigCloseUp1 from "./assets/tarea2/bigCloseUp/01.jpg";
import bigCloseUp2 from "./assets/tarea2/bigCloseUp/02.jpg";
import bigCloseUp3 from "./assets/tarea2/bigCloseUp/03.jpg";
import bigCloseUp4 from "./assets/tarea2/bigCloseUp/04.jpg";
import extremeCloseUp1 from "./assets/tarea2/extremeCloseUp/01.jpg";
import extremeCloseUp2 from "./assets/tarea2/extremeCloseUp/02.jpg";
import extremeCloseUp3 from "./assets/tarea2/extremeCloseUp/03.jpg";
import tightShot1 from "./assets/tarea2/tightShot/01.jpg";
import tightShot2 from "./assets/tarea2/tightShot/02.jpg";
import tightShot3 from "./assets/tarea2/tightShot/03.jpg";
import tightShot4 from "./assets/tarea2/tightShot/04.jpg";
import picada1 from "./assets/tarea2/picada/01.jpg";
import picada2 from "./assets/tarea2/picada/02.jpg";
import picada3 from "./assets/tarea2/picada/03.jpg";
import picada4 from "./assets/tarea2/picada/04.jpg";
import contraPicada1 from "./assets/tarea2/contraPicada/01.jpg";
import contraPicada2 from "./assets/tarea2/contraPicada/02.jpg";
import holandes1 from "./assets/tarea2/holandes/01.jpg";
import holandes2 from "./assets/tarea2/holandes/02.jpg";
import longShot1 from "./assets/tarea2/longShot/01.jpg";

// — Tarea 3 (vídeo) —
import videoT3 from "./assets/tarea3/Movimientos de Camara.mp4";

// — Tarea 4 (pairsCarousel) —
import r1 from "./assets/tarea4/01.jpg";
import r1Grid from "./assets/tarea4/01-grid.jpg";
import r2 from "./assets/tarea4/02.jpg";
import r2Grid from "./assets/tarea4/02-grid.jpg";
import r3 from "./assets/tarea4/03.jpg";
import r3Grid from "./assets/tarea4/03-grid.jpg";
import r4 from "./assets/tarea4/04.jpg";
import r4Grid from "./assets/tarea4/04-grid.jpg";
import r5 from "./assets/tarea4/05.jpg";
import r5Grid from "./assets/tarea4/05-grid.jpg";
import r6 from "./assets/tarea4/06.jpg";
import r6Grid from "./assets/tarea4/06-grid.jpg";
import r7 from "./assets/tarea4/07.jpg";
import r7Grid from "./assets/tarea4/07-grid.jpg";
import r8 from "./assets/tarea4/08.jpg";
import r8Grid from "./assets/tarea4/08-grid.jpg";
import r9 from "./assets/tarea4/09.jpg";
import r9Grid from "./assets/tarea4/09-grid.jpg";
import r10 from "./assets/tarea4/10.jpg";
import r10Grid from "./assets/tarea4/10-grid.jpg";

// — Tarea 5 (parallax) —
import food1 from "./assets/tarea5/01.jpg";
import food2 from "./assets/tarea5/02.jpg";
import food3 from "./assets/tarea5/03.jpg";
import food4 from "./assets/tarea5/04.jpg";
import food5 from "./assets/tarea5/05.jpg";
import food6 from "./assets/tarea5/06.jpg";
import food7 from "./assets/tarea5/07.jpg";

// — Tarea 6 (flip cards) —
import prod1 from "./assets/tarea6/01.jpg";
import prod2 from "./assets/tarea6/02.jpg";
import prod3 from "./assets/tarea6/03.jpg";
import prod4 from "./assets/tarea6/04.jpg";
import prod5 from "./assets/tarea6/05.jpg";

// — Tarea 7 (masonry) —
import conc1 from "./assets/tarea7/conciertos/01.jpg";
import conc2 from "./assets/tarea7/conciertos/02.jpg";
import conc3 from "./assets/tarea7/conciertos/03.jpg";
import conc4 from "./assets/tarea7/conciertos/04.jpg";
import conc5 from "./assets/tarea7/conciertos/05.jpg";
import conc6 from "./assets/tarea7/conciertos/06.jpg";
import conc7 from "./assets/tarea7/conciertos/07.jpg";
import conc8 from "./assets/tarea7/conciertos/08.jpg";
import conc9 from "./assets/tarea7/conciertos/09.jpg";
import dep1  from "./assets/tarea7/deportiva/01.jpg";
import dep2  from "./assets/tarea7/deportiva/02.jpg";
import dep3  from "./assets/tarea7/deportiva/03.jpg";
import dep4  from "./assets/tarea7/deportiva/04.jpg";
import dep5  from "./assets/tarea7/deportiva/05.jpg";
import dep6  from "./assets/tarea7/deportiva/06.jpg";
import dep7  from "./assets/tarea7/deportiva/07.jpg";
import pas1  from "./assets/tarea7/paisaje/01.jpg";
import pas2  from "./assets/tarea7/paisaje/02.jpg";
import pas3  from "./assets/tarea7/paisaje/03.jpg";
import pas4  from "./assets/tarea7/paisaje/04.jpg";
import pas5  from "./assets/tarea7/paisaje/05.jpg";
import pas6  from "./assets/tarea7/paisaje/06.jpg";
import pas7  from "./assets/tarea7/paisaje/07.jpg";
import pas8  from "./assets/tarea7/paisaje/08.jpg";
import pas9  from "./assets/tarea7/paisaje/09.jpg";

import model1  from "./assets/tarea8/01.jpg";
 import model2  from "./assets/tarea8/02.jpg";
 import model3  from "./assets/tarea8/03.jpg";
 import model4  from "./assets/tarea8/04.jpg";
 import model5  from "./assets/tarea8/05.jpg";
 import model6  from "./assets/tarea8/06.jpg";
 import model7  from "./assets/tarea8/07.jpg";
 import model8  from "./assets/tarea8/08.jpg";
 import model9  from "./assets/tarea8/09.jpg";
 import model10 from "./assets/tarea8/10.jpg";
 import model11 from "./assets/tarea8/11.jpg";
 import model12 from "./assets/tarea8/12.jpg";
 import model13 from "./assets/tarea8/13.jpg";
 import model14 from "./assets/tarea8/14.jpg";
 import model15 from "./assets/tarea8/15.jpg";
 import model16 from "./assets/tarea8/16.jpg";
 import model17 from "./assets/tarea8/17.jpg";


const sections = [
  {
    id: "tarea1",
    title: "Tarea 1 · 5 fotos de Internet",
    type: "carousel",
    photos: [photo1, photo2, photo3, photo4, photo5],
  },
  {
    id: "tarea2",
    title: "Tarea 2 · Ejemplos de tomas",
    type: "shots",
    shots: [
      { key: "fullshot",      label: "Fullshot",       description: "Plano general: cuerpo entero y entorno.",       photos: [fullshot1, fullshot2, fullshot3] },
      { key: "americanShot",   label: "American Shot",  description: "De la cabeza a mitad del muslo.",                photos: [americanShot1, americanShot2, americanShot3] },
      { key: "mediumShot",     label: "Medium Shot",    description: "Del pecho hacia arriba, enfatiza gesto.",         photos: [mediumShot1, mediumShot2, mediumShot3] },
      { key: "closeUp",        label: "Close Up",       description: "Rostro y hombros, resalta detalles faciales.",     photos: [closeUp1, closeUp2, closeUp3, closeUp4] },
      { key: "bigCloseUp",     label: "Big Close Up",   description: "Solo ojos y boca, máxima expresión.",             photos: [bigCloseUp1, bigCloseUp2, bigCloseUp3, bigCloseUp4] },
      { key: "extremeCloseUp", label: "Extreme Close Up",description: "Detalle extremo de rasgos faciales.",            photos: [extremeCloseUp1, extremeCloseUp2, extremeCloseUp3] },
      { key: "tightShot",      label: "Tight Shot",     description: "Del mentón al entrecejo, foco muy ajustado.",     photos: [tightShot1, tightShot2, tightShot3, tightShot4] },
      { key: "picada",         label: "Picada",         description: "Ángulo cenital: cámara encima del sujeto.",       photos: [picada1, picada2, picada3, picada4] },
      { key: "contraPicada",   label: "Contra Picada",  description: "Ángulo contrapicado: cámara desde abajo.",        photos: [contraPicada1, contraPicada2] },
      { key: "holandes",       label: "Holandés",       description: "Inclinación lateral, efecto dinámico.",          photos: [holandes1, holandes2] },
      { key: "longShot",       label: "Long Shot",      description: "Plano muy abierto: destaca el entorno.",          photos: [longShot1] },
    ],
  },
  {
    id: "tarea3",
    title: "Tarea 3 · Videoreel con movimientos",
    type: "video",
    videoSrc: videoT3,
  },
  {
    id: "tarea4",
    title: "Tarea 4 · Regla de tercios y ley de la mirada",
    type: "pairsCarousel",
    pairs: [
      { original: r1,   grid: r1Grid },
      { original: r2,   grid: r2Grid },
      { original: r3,   grid: r3Grid },
      { original: r4,   grid: r4Grid },
      { original: r5,   grid: r5Grid },
      { original: r6,   grid: r6Grid },
      { original: r7,   grid: r7Grid },
      { original: r8,   grid: r8Grid },
      { original: r9,   grid: r9Grid },
      { original: r10,  grid: r10Grid },
    ],
  },
  {
    id: "tarea5",
    title: "Tarea 5 · Fotografía de comida",
    type: "parallax",
    items: [
      { img: food1, copy: "La belleza de lo sutil. Un postre que juega con la textura, el equilibrio y la sorpresa." },
      { img: food2, copy: "El mar y la tierra se encuentran en este plato para contar una historia de elegancia y contraste." },
      { img: food3, copy: "Tómate un respiro. Nosotros ponemos el sabor." },
      { img: food4, copy: "Crujido del alga, suavidad del salmón, ese toque de wasabi… ¿quién se apunta?." },
      { img: food5, copy: "Cinco cortes. Cinco momentos de perfección. La esencia de Japón, directo a tu paladar." },
      { img: food6, copy: "¿Aguacate lovers? Esta es su nueva adicción. Cherry fresco, pan artesanal y un toque de fuego." },
      { img: food7, copy: "Esto no se comparte. Se disfruta en silencio y con tortilla en mano." },
    ],
  },
  {
    id: "tarea6",
    title: "Tarea 6 · Fotografía de producto",
    type: "flip",
    items: [
      { img: prod1, text: "The time of your life." },
      { img: prod2, text: "Every second counts." },
      { img: prod3, text: "Your wrist deserves it." },
      { img: prod4, text: "Time's Ticking." },
      { img: prod5, text: "Built to last." },
    ],
  },
  {
    id: "tarea7",
    title: "Tarea 7 · Géneros fotográficos",
    type: "masonry",
    genres: [
      {
        key: "conciertos",
        label: "Conciertos",
        items: [
          { img: conc1 },
          { img: conc2 },
          { img: conc3},
          { img: conc4 },
          { img: conc5 },
          { img: conc6 },
          { img: conc7 },
          { img: conc8 },
          { img: conc9 },
        ],
      },
      {
        key: "deportiva",
        label: "Deportiva",
        items: [
          { img: dep1 },
          { img: dep2 },
          { img: dep3 },
          { img: dep4 },
          { img: dep5 },
          { img: dep6 },
          { img: dep7 },
  
        ],
      },
      {
        key: "paisaje",
        label: "Paisaje",
        items: [
          { img: pas1 },
          { img: pas2 },
          { img: pas3 },
          { img: pas4 },
          { img: pas5 },
          { img: pas6 },
          { img: pas7 },
          { img: pas8 },
          { img: pas9 },
        ],
      },
    ],
  },
   {
     id: "tarea8",
     title: "Tarea 8 · Modelaje Temático",
     type: "tilt",
     items: [
       { img: model1 },  { img: model2 },  { img: model3 },
       { img: model4 },  { img: model5 },  { img: model6 },
       { img: model7 },  { img: model8 },  { img: model9 },
       { img: model10 }, { img: model11 }, { img: model12 },
       { img: model13 }, { img: model14 }, { img: model15 },
       { img: model16 }, { img: model17 },
     ],
   },
  { id: "tarea9",  title: "Tarea 9 · Stopmotion" },
  { id: "tarea10", title: "Tarea 10 · Timelapse" },
  { id: "datos",   title: "Datos personales del fotógrafo" },
  { id: "conclusion", title: "Conclusión final de la materia" },
];

export default function App() {
  return (
    <>
      <Navbar sections={sections} />

      <header className="hero">
        <h1 className="hero__title">Book Digital de Fotografía</h1>
        <p className="hero__subtitle">
          Un recorrido por mis prácticas, tareas y experimentos visuales.
        </p>
      </header>

      {sections.map(
        ({
          id,
          title,
          type,
          photos,
          shots,
          videoSrc,
          pairs,
          items,
          genres,
        }) => (
          <Section
            key={id}
            id={id}
            title={title}
            type={type}
            photos={photos}
            shots={shots}
            videoSrc={videoSrc}
            pairs={pairs}
            items={items}
            genres={genres}
          />
        )
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} Juan Pablo Orihuela · Todos los derechos reservados</p>
      </footer>
    </>
  );
}