import React from 'react'
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { FaJava, FaHtml5, FaReact, FaNode   } from "react-icons/fa";
import { TbFileTypePhp } from "react-icons/tb";
import { MdPhp } from "react-icons/md";

import "./css/inicio.css";
import { SiExpress, SiMongodb } from 'react-icons/si';

export const Presentacion = () => {
  return (
    <>
      <div className='presentacion'>

        <div className='contenedorIconoReact'>
          <FaReact className='iconoReact'></FaReact>
        </div>
        <div className='iconosLenguajes'>
          <SiMongodb className='iconos'/>
          <SiExpress className='iconos'/>
          <FaNode className='iconos'/>
        </div>

        <div className='iconosLenguajes'>
          <FaHtml5 className='iconos'/>
          <FaJava className='iconos'/>
          <IoLogoCss3 className='iconos'/>
          <MdPhp className='iconos' />
          <IoLogoJavascript className='iconos'/>
        </div>

        <div className='contenedorPresentacion'>
          <h1>Hi, I'm <br></br>Nelson de Matos</h1>
          <h2>Web Developer<br></br> & <br></br> Designer</h2>
        </div>

      </div>
    </>
  )
}
