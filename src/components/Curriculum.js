import React from 'react'
import { Cv } from './subComponentes/curriculum/Cv';

export const Curriculum = () => {

  const cv1props = {
    titulo: 'Conóceme',
    texto: [
      'Soy un joven apasionado del desarrollo y diseño web con un sólido conjunto de habilidades técnicas y experiencia en la creación de experiencias digitales excepcionales. Mi enfoque se centra en aprovechar mis conocimientos en tecnologías de programación, incluyendo Java, JavaScript, PHP, HTML, CSS y Bootstrap, para desarrollar sitios web innovadores y funcionales.',
      'Mis capacidades no se limitan sólo al especto técnico, ya que también poseo una sólida comprensión de los principios fundamentales de los sistemas informáticos y la gestión de bases de datos SQL. Además, tengo experiencia en el control de versiones con Git, lo que me permite colaborar eficazmente en equipos de desarrollo y mantener un flujo de trabajo ordenado.',
      'Sigo comprometido con mi desarrollo profesional continuo en el campo del desarrollo web, manteniéndome al tanto de las últimas tendencias y tecnologías. Mi objetivo es utilizar mis habilidades para crear experiencias digitales atractivas y funcionales que cumplan con los estándares más altos de calidad y usabilidad.',
      'Le invito a explorar mis proyectos más recientes y mi portafolio en mi perfil de LinkedIn y mi sitio web personal, donde podrá ver ejemplos de mi trabajo en acción.'
    ],
    claseDiv: 'columna1Cv',
    url: process.env.PUBLIC_URL + '/assets/cv.pdf',
    rutaImagen: process.env.PUBLIC_URL + '/img/Fondo.jpg',
  };

  return (
    <>
      <Cv {...cv1props} />
    </>
    
  )
}
