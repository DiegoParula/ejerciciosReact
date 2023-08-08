import React from 'react'



const Card = ({opcion, agrega}) => {

    
  return (
    <div>
        <h2>{opcion.tipo}</h2>
        <div>
        <button onClick={() => agrega(opcion)}>Agregar</button>
        </div>
        

    </div>
  )
}

export default Card