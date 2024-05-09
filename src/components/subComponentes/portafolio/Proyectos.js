import React from 'react'
import { trabajos } from '../../../data/trabajos';

import { Link } from 'react-router-dom';

export const Proyectos = ({titulo, url, texto, rutaImagen}) => {
  return (
    <>
    
        <div className='contentPortafolio'>
                <h1>Proyectos personales</h1>

                <section className='works'>
                    {trabajos.map(trabajo => (

                        <article key={trabajo.id} className='articuloTrabajo'>
                            <a href={trabajo.url} target='blank'>
                                <div className='mask'>
                                    <img src={`${process.env.PUBLIC_URL}/img/${trabajo.id}.JPG`}  alt={trabajo.nombre} id={trabajo.id === 'conversor' ? 'imgConversor' : null} />
                                </div>
                                
                            </a>
                            
                            <div className='infoWorks'>
                                <h1>{trabajo.nombre}</h1>
                                {/*<p><strong>URL:</strong> {trabajo.url}</p>*/}
                                <p><strong>Tecnologías:</strong> {trabajo.tecnologias}</p>
                                    
                                <div className='divBtnAcceder'>
                                    <a href='#' id='btnVerMas' target='blanck'>
                                        <Link to={`portafolio/detalle/${trabajo.id}`}>Ver más</Link>
                                    </a>
                                </div>
                            </div>
                            
                        </article>
                    ))}
                </section>
            </div>

    </>
  )
}
