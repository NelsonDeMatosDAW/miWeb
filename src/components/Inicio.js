import React from 'react';

import "../index.css";
import "./css/inicio.css";

import { Presentacion } from './subComponentes/inicio/Presentacion';
import { Bienvenido } from './subComponentes/inicio/Bienvenido';

export const Inicio = () => {

  const fila1props = {
    titulo: 'Formación',
    texto: [
      '¡Bienvenido a mi página web! Soy Nelson de Matos, un apasionado del desarrollo y diseño web, con sólidas habilidades técnicas y experiencia en la creación de experiencias digitales excepcionales',
      'Utilizo lenguajes como JavaScript y PHP para desarrollar sitios web innovadores y funcionales. Mi pasión por JavaScript me ha llevado a especializarme en React JS, Node JS, Express JS y MongoDb, formando parte del stack MERN.',
      'Además tengo experiencia en principios fundamentales de sistemas informáticos, gestión de bases de datos SQL y control de versiones con GIT.'
       
    ],
    claseImagen: 'columna2Bienvenido',
  };

  const fila2props = {
    titulo: 'Experiencia',
    texto: [
      'Durante mi formación en Desarrollo de Aplicaciones Web tuve la oportunidad de realizar prácticas en la Academia del Transportista, donde brindé apoyo integral al equipo de desarrollo web y al equipo de soporte técnico. Mis responsabilidades incluyeron colaborar en el diseño, desarrollo y mantenimiento de aplicaciones web, así como proporcionar asistencia técnica para resolver problemas y mejorar la experiencia de usuario de los productos digitales de la compañia',
      'Esta experiencia me permitió aplicar mis conocimientos teóricos en un entorno profesional y desarrollar habilidades prácticas en el campo del desarrollo web. Colaborando en la actualización de su página web, la cual se está elabrando con las tecnologías que forman el stack MERN.'
      
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
