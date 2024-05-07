import React from 'react';

import "../index.css";
import { Presentacion } from './subComponentes/inicio/Presentacion';
import { Bienvenido } from './subComponentes/inicio/Bienvenido';

export const Inicio = () => {

  const fila1props = {
    titulo: 'Formación',
    texto: [
      '¡Bienvenido a mi página web! Soy Nelson de Matos, un profesional recién graduado en Desarrollo de Aplicaciones Web (DAW) y también poseo un grado en Ciencia Política y Administración Pública por la Universidad de Salamanca.',
      'Durante mi formación como Desarrollador y Diseñador Web, adquirí habilidades sólidas en diseño, programación y desarrollo de aplicaciones web. Formándome principalmente en lenguajes de programación como JavaScript, PHP y Java, los cuales sigo aprendiendo y desarrollando  una vez finalizado el grado.',
      'Actualmente me encuentro realizando un master en React. Durante este programa, mi objetivo principal es adquirir habilidades sólidas en diversas áreas de desarrollo web con React, abarcando desde conceptos fundamentales hasta tecnologías avanzadas. Empezando por los conceptos esenciales de React para construir interfaces de usuario robustas y eficientes, los Hooks, el React Router DOM, context API, dominio del MERN Stack  y finalizando con APIs RESTful con NodeJS, Express y MongoDB.'
    ],
    claseImagen: 'columna2Bienvenido',
  };

  const fila2props = {
    titulo: 'Versatilidad',
    texto: [
      'Además, mi formación en Ciencia Política y Administración Pública me ha proporcionado una profunda comprensión de los procesos políticos y las estructuras administrativas en el sector público. Reconozco la importancia de la transparencia, la eficiencia y la responsabilidad en la administración pública. Esta formación me ha brindado una perspectiva única que aplico al desarrollo de aplicaciones y sistemas que apoyan el trabajo de las instituciones públicas.',
      'También me apasiona trabajar en proyectos personales donde desarrollo mis habilidades con programas de Adobe como Illustrator (AI), Premiere Pro y Lightroom. Te invito a visitar mi Instagram @nmgravity_visuals, donde comparto contenido relacionado con mis proyectos.',
      'La combinación de mis habilidades en el desarrollo de aplicaciones web, mi formación en Ciencia Política y mi pasión por el diseño gráfico y la edición de video me permite abordar los proyectos desde diferentes perspectivas y encontrar soluciones creativas y efectivas.',
      'Si estás interesado en conocer más sobre mí y mi perfil profesional, no dudes en contactarme. Estoy emocionado por tener la oportunidad de aplicar mis habilidades y conocimientos en tu proyecto o empresa. Juntos podemos alcanzar grandes resultados.'
    ],
    claseImagen: 'columna2Versatilidad',
  }

  return (
    
    <>
      <Presentacion />

      <Bienvenido {...fila1props}/>

      <Bienvenido {...fila2props}/>

    </>
  )
}
