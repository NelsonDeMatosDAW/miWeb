import React from 'react'
import { trabajos } from '../../../data/trabajos';

export const Proyectos = ({titulo, texto, url, rutaImagen}) => {
  return (
    <>
    
        <div className='contentPortafolio'>
                <h1>Proyectos personales</h1>
                <section className='works'>
                {trabajos.map(trabajo => (

                    <article key={trabajo.id} className='articuloTrabajo'>
                        <div className='mask'>
                            <img src={"/img/"+trabajo.id+".jpg"} alt={trabajo.nombre} id={trabajo.id === 'conversor' ? 'imgConversor' : null} />
                        </div>
                    
                        <div className='infoWorks'>
                            <h1>{trabajo.nombre}</h1>
                            <p><strong>URL:</strong> {trabajo.url}</p>
                            <p><strong>Tecnologías:</strong> {trabajo.tecnologias}</p>
                            <div id='descripcion'>
                            <p><strong>Descripción:</strong></p>
                            {trabajo.descripcion.split('\n').map((parrafo, index) => (
                                <p key={index}>{parrafo}</p>
                            ))}
                            </div>
                            <div className='divBtnAcceder'>
                            <a href={trabajo.url} id='btnAcceder' target='blanck'>Acceder</a>
                            </div>
                        </div>

                    </article>
                ))}
                </section>
            </div>

    </>
  )
}
