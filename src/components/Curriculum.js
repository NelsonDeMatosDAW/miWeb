import React from 'react'
import { Cv } from './subComponentes/curriculum/Cv';

export const Curriculum = () => {

  const cv1props = {
    titulo: 'Conóceme',
    texto: [
      'Desde temprana edad, he tenido una gran pasión por la tecnología. Hace tres años, esta pasión me llevó a iniciar mis estudios en Desarrollo de Aplicaciones Web, donde adquirí habilidades fundamentales en el sector. Sin embargo, mi curiosidad y ganas de superación no se detuvieron ahí; paralelamente a mi formación académica, continué mi aprendizaje de manera autodidacta.',
      'He completado una serie de cursos en las plataformas tecnológicas más relevantes, dominando herramientas como Git y GitHub, y lenguajes de programación como JavaScript. Además, me he especializado en metodologías ágiles como Scrum y he culminado un máster en React, tecnología que definitivamente encendió mi pasión por el desarrollo frontend.',
      'Mi especialización no se limita a un área única, ya que dentro del mundo del desarrollo web he encontrado mi lugar en el stack MERN (MongoDB, Express, React, Node.js), aunque manejo una variedad de tecnologías con fluidez.',
      'Le invito a explorar mis proyectos más recientes y mi portafolio en mi perfil de LinkedIn y mi sitio web personal, donde podrá ver ejemplos de mi trabajo en acción.'
    ],
    claseDiv: 'columna1Cv',
    url: process.env.PUBLIC_URL + '/assets/cv.pdf',
    rutaImagen: process.env.PUBLIC_URL + '/img/fondo_cv_ilustracion.png',
  };

  const cv2props = {
    titulo: 'Mi Misión: Impulsar el Crecimiento a Través de la Tecnología',
    texto: [
      'Creo firmemente en que el crecimiento profesional debe ir de la mano con el éxito de los proyectos que desarrollo. Me esfuerzo por crear soluciones que no solo cumplan los objetivos técnicos, sino que también aporten un valor significativo al usuario final. Esto se traduce en un beneficio mutuo: un crecimiento robusto y sostenible tanto para mi carrera como para las empresas con las que colaboro.',
    ],
    claseDiv: 'columna1Cv',
    rutaImagen: process.env.PUBLIC_URL + '/img/fondo_programer.png',
  };

  const cv3props = {
    titulo: 'Mi Historia Profesional',
    texto: [
      'Mi carrera tomó un giro práctico cuando realicé mis prácticas en la Academia del Transportista, ofreciendo soporte integral tanto al equipo de desarrollo web como al de soporte técnico. Este periodo fue crucial para entender cómo la tecnología se aplica en escenarios de negocio reales y cómo los detalles técnicos se entrelazan con las necesidades comerciales.',
      'Posteriormente, he trabajado en diversos proyectos, destacando GrooveCall, donde apliqué mis conocimientos en React JS, Node.js, Express, y MongoDB. Este proyecto no solo consolidó mi experiencia, sino que también me permitió explorar más profundamente cómo las soluciones tecnológicas pueden mejorar la comunicación y la operatividad empresarial.',
    ],
    claseDiv: 'columna1CvSinfoto',
  };

  const cv4props = {
    titulo: 'Mi Compromiso',
    texto: [
      'Como profesional dedicado y trabajador, mi objetivo es contribuir al crecimiento de la empresa que decida incorporarme a su equipo. Estoy siempre dispuesto a enfrentar nuevos retos y a sumar mi experiencia y conocimiento para alcanzar los objetivos más ambiciosos.',
    ],
    claseDiv: 'columna1Cv',
    rutaImagen: process.env.PUBLIC_URL + '/img/fondo_cv_logo.png',
  };
  return (
    <>
      <Cv {...cv1props} />
      <Cv {...cv2props} />
      <Cv {...cv3props} />
      <Cv {...cv4props} />
    </>
    
  )
}
