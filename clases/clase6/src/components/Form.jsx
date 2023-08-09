import React from 'react'
import { useState } from 'react'
import '../styles/Card.css'

function Form() {
    const [nombre, setNombre] = useState()
  const [edad, setEdad] = useState()
  const [mensaje, setMensaje] = useState()

  const onChangeNombre = (e) => setNombre(e.target.value)
  const onChangeEdad = (e) => setEdad(e.target.value)
   

  const bajarEdad = 10
  
    /*Validaciones*/

  const validarNombre = (nombre) =>{
    const nombreSinEspacios = nombre.trim()
    if(nombreSinEspacios.length > 2){
      return true
    }else{
      return false
    }

  }  

  const validarEdad = (edad) => {
    const edadSinEspacios = edad.trim()
    if(/^\d*$/.test(edadSinEspacios)){
      //setEdad(edadSinEspacios - 10)
      return true
    }else{
      return false
    }


  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    const nombreValido = validarNombre(nombre)
    const edadValida = validarEdad(edad)
    if(!nombreValido || !edadValida ){
      setMensaje("Algunos de los datos ingresados no son correctos")
      //alert("Algunos de los datos ingresados no son correctos")
    }
    else {
      setMensaje(`Hola ${nombre} ahora tenes ${edad - bajarEdad} anios`)
      //alert(`Hola ${nombre} ahora tenes ${edad - bajarEdad} anios`)
    }
  
  }
    return (

        <div className='card'>
        <div className='card2'>
      
      <form onSubmit={onSubmitForm} className='form'>
      <h2 id="heading">Ingrese sus datos</h2>
        <input 
          type="text" 
          placeholder='Nombre'
          className='input-field'
          onChange={onChangeNombre}  
        />

        <input 
          type="" 
          placeholder='Edad'
          className='input-field'
          onChange={onChangeEdad}  
        />
        <p className='par'>{mensaje}</p>

        <button type='submit' className='button'>Enviar</button>




      </form>


      </div>
    </div>

  )
}

export default Form