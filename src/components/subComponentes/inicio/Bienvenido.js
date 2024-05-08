import React from 'react';
import "./css/inicio.css";

export const Bienvenido = ({titulo, texto, claseImagen}) => {
  return (
    <>
        <div className="bienvenido">
              
            <div className='columna1Bienvenido'>
                <h1>{titulo}</h1>
                  {texto.map((parrafo, index) => (
                    <p key={index}>{parrafo}</p>
                  ))}
            </div>

            <div className={`${claseImagen}`}>
                    <span></span>
            </div>
        </div> 

    </>
  )
}
