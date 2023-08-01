import React from 'react'
import '../styles/style.css'



const Clase3 = ({nombre,resultado, valor1, valor2 }) => {
  return (
    <div>
        <h1>Hola {nombre}</h1>
        <p className='parr'>{resultado(valor1, valor2)}</p>
    </div>
  )
}

export default Clase3