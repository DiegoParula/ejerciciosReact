import React from 'react'
import '../Styles/Card.css'

function Card({pro}) {
  return (
    <div className='contenedor-producto'>
        
        
        <div className='contenedor-imagen'>
        <img src={pro.imagen} />
        </div>
        <div className='descripcion'>
          <h2>{pro.nombre}</h2>
          <h3>{pro.precio}</h3>
        </div>
       
        
        
    </div>
  )
}

export default Card