import React from 'react';

import "./css/cv.css";

export const Cv = ({titulo, texto, claseDiv, url, rutaImagen}) => {
  return (
    <>
        <div className="cv">    
            <div className={claseDiv}>
                <div className='textoCv'>
                    <div className='divTextCv'>
                        <h1 id='titCv'>{titulo}</h1>

                        {texto.map((parrafo, index) => (
                            <p key={index}>{parrafo}</p>
                        ))}
                    </div>
{url&&(
                        <div className='divBtnCv'>
                            <a href={url} download='cv_nelson.pdf' id='btnCv'>Descárgate mi CV</a>
                        </div>
)}

                </div>                
            </div>
{rutaImagen&&(
            <div className='columna2Cv'> 
                <img src={rutaImagen} alt="Ilustracion Nelson de Matos" className='ilustracion_cv'/>
            </div>
)}

        </div>
    </>
  )
}
