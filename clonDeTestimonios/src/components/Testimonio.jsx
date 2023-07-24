import React from 'react';
import img from '../img/logo-with-shadow.png'


export function Testimonio () {
  return (
    <div className='contendor-testimonio'>
      <img className='imagen-testimonio'
      src={img}
      alt='Imagen de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testionio'> Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingenieria de software en spotify</p>
        <p className='texto-testimonio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa obcaecati dignissimos pariatur, aliquid ea, iure asperiores quidem sit voluptatibus ducimus atque accusamus a, eveniet iusto nesciunt? Reiciendis, beatae quis!
        </p>
      </div>
    </div>  

  )

}

