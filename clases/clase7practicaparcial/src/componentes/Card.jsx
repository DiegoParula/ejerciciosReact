import React from 'react'

function Card({usuario}) {
  return (
    <div>
    <div>
        <p>{usuario.nombre}</p>
        <p>{usuario.apellido}</p>
        <p>{usuario.telefono}</p>
        </div>
    <div>
        <p></p>
        </div>
        </div>

  )
}

export default Card