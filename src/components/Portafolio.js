import React from 'react'
import { Cursos } from './subComponentes/portafolio/Cursos';
import { Proyectos } from './subComponentes/portafolio/Proyectos';



export const Portafolio = () => {


  return (
    <>
      <h1>Portafolio</h1>

      <Proyectos></Proyectos>
      <Cursos></Cursos>
      
      
    </>
  )
}
