import React from 'react'
import { Cursos } from './subComponentes/portafolio/Cursos';
import { Proyectos } from './subComponentes/portafolio/Proyectos';

import "./css/portafolio.css";



export const Portafolio = () => {


  return (
    <>
    <div className='divContenedorPortafolio'>
      <h1>Portafolio</h1>

      <Proyectos></Proyectos>
      <Cursos></Cursos>
    </div>

      
      
    </>
  )
}
