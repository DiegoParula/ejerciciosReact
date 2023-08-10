import React from 'react'
import { useState } from 'react'

function Card() {

    const [usuario, setUsuario] = useState({
        nombre: "",
        edad: "",
        pokemon: ""
    })

    const[show, setShow] = useState(false)
    const[error, setError] = useState(false) 

    const onChangeNombre = (e) => setUsuario(...usuario, {nombre: e.target.value})
    console.log(usuario.nombre)
    const onChangeEdad = (e) => setUsuario.edad(...usuario, e.target.value)
    const onChangePoke = (e) => setUsuario.pokemon(...usuario, e.target.value)

    
    
    
    const onCarga = (onCarga) => {
        error.preventDefault()
        

    }


  return (
    <div>
        <form onSubmit={onCarga}>
            <h2>Ingresar datos</h2>
            <label >Ingresar nombre</label>
            <input 
                type="text"
                onChange={onChangeNombre} 

            />
            <label>Ingresar edad</label>
            <input 
                type="" 
                onChange={onChangeEdad}

            />
            
            <label >Ingresar Pokemon Favorito</label>
            <input 
                type="text"
                onChange={onChangePoke}

            />
            <button>Ingresar</button>
        </form>
    </div>
  )
}

export default Card