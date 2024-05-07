import React from 'react'
import { cursos } from '../../../data/cursos';

export const Cursos = ({titulo, texto, url, rutaImagen}) => {
  return (
    <>
      <hr></hr>
        <div className="contentPortafolio">
            <h1>Cursos</h1>

            <section className='works'>
                {cursos.map(curso => (

                    <article key={cursos.id} className='articuloTrabajo'>
                    
                        <div className='infoWorks'>
                            <h1>{curso.nombre}</h1>
                            <p><strong>Tecnologías:</strong> {curso.tecnologias}</p>
                            <div id='descripcion'>
                            <p><strong>Descripción:</strong></p>
                            {curso.descripcion.split('\n').map((parrafo, index) => (
                                <p key={index}>{parrafo}</p>
                            ))}
                            </div>
                            <div className='divBtnAcceder'>
                            <a href={curso.url} id='btnAcceder' target='blanck'>Acceder</a>
                            </div>
                        </div>
                        
                        <div className='mask'>
                            <img src={"/img/"+curso.id+".jpg"} alt={curso.nombre} id={curso.id === 'conversor' ? 'imgConversor' : null} />
                        </div>

                    </article>
                ))}
                </section>

        </div>
    </>
  );
};