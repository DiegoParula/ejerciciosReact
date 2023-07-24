import React from 'react';
import '../stylessheets/Testimonio.css';
import '../img/foto-uno.png'
/*props nos sirven para crear componentes reutilizables*/ 
export function Testimonio (props) {
  
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={`../img/foto${props.imagen}.png`}
      alt='Imagen de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"
        </p>
      </div>
    </div>  

  )

}

