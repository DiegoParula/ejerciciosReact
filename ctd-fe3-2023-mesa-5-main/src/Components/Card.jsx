import React from 'react'

function Card() {
  return (
    <div>
        <ul>
        <li>
          <h2>{productos[0].nombre}</h2>
          <img src={productos[0].imagen} />
          <h3>{productos[0].precio}</h3>
        </li>

        <li>
          <h2>{productos[1].nombre}</h2>
          <img src={productos[1].imagen} />
          <h3>{productos[1].precio}</h3>
        </li>

        <li>
          <h2>{productos[2].nombre}</h2>
          <img src={productos[2].imagen} />
          <h3>{productos[2].precio}</h3>
        </li>
      </ul>
    </div>
  )
}

export default Card