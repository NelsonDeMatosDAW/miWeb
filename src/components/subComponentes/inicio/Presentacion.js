import React from 'react'
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { FaJava, FaHtml5, FaReact   } from "react-icons/fa";
import { TbFileTypePhp } from "react-icons/tb";
import { MdPhp } from "react-icons/md";

export const Presentacion = () => {
  return (
    <>
      <div className='presentacion'>

        <div className='contenedorIconoReact'>
          <FaReact className='iconoReact'></FaReact>
        </div>


        <div className='iconosLenguajes'>
          <FaHtml5 className='iconos'/>
          <FaJava className='iconos'/>
          <IoLogoCss3 className='iconos'/>
          <MdPhp className='iconos' />
          <IoLogoJavascript className='iconos'/>
        </div>

          

        <div className='contenedorPresentacion'>
          <h1>Hi, I'm Nelson de Matos</h1>
          <h2>Web Developer & Designer</h2>
        </div>

      </div>
    </>
  )
}
