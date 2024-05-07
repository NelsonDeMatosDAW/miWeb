import React from 'react'

export const Cv = ({titulo, texto, claseDiv, url, rutaImagen}) => {
  return (
    <>
        <div className="cv">
            
            <div className='columna1Cv'>

                <div className='textoCv'>
                    <div className='divTextCv'>
                        <h1 id='titCv'>{titulo}</h1>

                        {texto.map((parrafo, index) => (
                            <p key={index}>{parrafo}</p>
                        ))}
                    </div>
                    

                    <div className='divBtnCv'>
                        <a href={url} download='cv_nelson.pdf' id='btnCv'>Descárgate mi CV</a>
                    </div>
                    

                </div>
                
                <div className='imgCv'> 
                    <img src={rutaImagen} alt="Descripción de la imagen" />
                </div>
                
            </div>
        </div>
    </>
  )
}
