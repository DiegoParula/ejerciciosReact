import React from 'react'
import { useState } from 'react'
import '../styles/Card.css'

function Card() {

    const [usuario, setUsuario] = useState({
        nombre: "",
        edad: "",
        pokemon: ""
    })

    const[show, setShow] = useState(false)
    const[error, setError] = useState()
    
    const[mensaje, setMensaje] = useState()
    

    const onChangeNombre = (e) => {
        setError("")
        const nombreCapt = e.target.value
        if(/^[a-zA-Z]+$/.test(nombreCapt)){
            setUsuario({...usuario, nombre: e.target.value})
             
         }else {
             setError("Debe ingresar un nombre valido")
         }    

    }//setUsuario({...usuario, nombre: e.target.value})
    
    const onChangeEdad = (e) => {
        setError("")
        const nombreCapt = e.target.value
        if(/^\d*$/.test(nombreCapt) || nombreCapt > 0){
            setUsuario({...usuario, edad: e.target.value})
       
         }else {
             setError("Debe ingresar solo números")
         }    
        }
    
    const onChangePoke = (e) => setUsuario({...usuario, pokemon: e.target.value})
    //console.log(usuario)
    //const cambioUsuario = (e) =>setUsuario({...usuario, value: e.target.value})
    
/*    const validaNombre = (str) =>{
        if(/^[a-zA-Z]+$/.test(str)){
           return true
            
        }else {
            return false
        }
    }*/
    
    const onCarga = (e) => {
        e.preventDefault()

        if(usuario.nombre == "" || usuario.edad == "" || usuario.pokemon == "")
        {
            setError("Por favor ingrese bien la informacion")
        }else{
            setError("")
            setShow(true)
        }
       /* const nombreValido = validaNombre(usuario.nombre)
        console.log(nombreValido)


        if(nombreValido){
            setShow(true)
            setError(false)
        }
        else {
            setShow(false)
            setError(true)
        }
*/
        

    }


  return (
    <div className='form'>
        <form className= 'form-contenedor'onSubmit={onCarga}>
            <h2 className='signup'>Ingresar datos</h2>
            
            <input 
                type="text"
                onBlur={onChangeNombre }
                className='form--input'
                placeholder='Nombre' 

            />
            <input 
                type="" 
                onBlur={onChangeEdad}
                className='form--input'
                placeholder='Edad'
            />
            
            <input 
                type="text"
                onBlur={onChangePoke}
                placeholder='Pokemon'
                className='form--input'

            />
            <button className='form--submit'>Ingresar</button>

            <p>{error}</p>
            {show ? <p>Hola {usuario.nombre}</p> : null}    

            <div className='respuesta'>
            <p>{error}</p>
            {show ? <p>Hola {usuario.nombre}</p> : null}
            </div>

        </form>
    </div>
  )
}

export default Card