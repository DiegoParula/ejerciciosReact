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

    const onChangeNombre = (e) => setUsuario({...usuario, nombre: e.target.value})
    const onChangeEdad = (e) => setUsuario({...usuario, edad: e.target.value})
    const onChangePoke = (e) => setUsuario({...usuario, pokemon: e.target.value})
    console.log(usuario)
    //const cambioUsuario = (e) =>setUsuario({...usuario, value: e.target.value})
    
    
    const onCarga = (e) => {
        e.preventDefault()
        

    }


  return (
    <div>
        <form onSubmit={onCarga}>
            <h2>Ingresar datos</h2>
            <label >Ingresar nombre</label>
            <input 
                type="text"
                onBlur={onChangeNombre } 

            />
            <label>Ingresar edad</label>
            <input 
                type="" 
                onBlur={onChangeEdad}

            />
            
            <label >Ingresar Pokemon Favorito</label>
            <input 
                type="text"
                onBlur={onChangePoke}

            />
            <button>Ingresar</button>
        </form>
    </div>
  )
}

export default Card