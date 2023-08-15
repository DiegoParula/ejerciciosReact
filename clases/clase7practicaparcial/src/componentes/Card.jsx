import React from 'react'

function Card({usuario, mensajeError}) {
  return (
    <div>
    <div>
        <p>{usuario.nombre}</p>
        </div>
    <div>
        <p>{mensajeError}</p>
        </div>
        </div>

  )
}

export default Card