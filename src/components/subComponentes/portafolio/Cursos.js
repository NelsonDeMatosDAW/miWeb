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
                      <a href={cursos.url} target='blank'>
                        <div className='mask'>
                            <img src={`${process.env.PUBLIC_URL}/img/${curso.id}.JPG`} alt={curso.nombre} id={curso.id === 'conversor' ? 'imgConversor' : null} />
                            
                        </div>
                      </a>
                        <div className='infoWorks'>
                            <h1>{curso.nombre}</h1>
                            <p><strong>Tecnologías:</strong> {curso.tecnologias}</p>
                            
                        </div>

                    </article>
                ))}
                </section>
        </div>
    </>
  );
};