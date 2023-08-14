import React, {useState} from "react"
import '../sheetsstyle/FormularioTarea.css'
import {v4 as uuidv4} from 'uuid'

function TareaFormulario(props) {


  const [input, setInput] = useState('')

  const manejarCambio = e =>{
    setInput(e.target.value)
  };

  const manejarEnvio = e =>{
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input, 
      completada: false
    }

    //onSubmit xq podemos decir que es un estandar
    //que va a ocurrir cuando el form se intente enviar
    props.onSubmit(tareaNueva)
  };

  return (
    
    <form onSubmit={manejarEnvio} className='tarea-formulario'>
        <input 
        className='tarea-input'
        type="text" 
        placeholder='Escriba una tarea'
        name="text0"
        onChange={manejarCambio}
        />
        <button className='tarea-boton'>Agregar tarea</button>
    </form>
    
  )
}

export default TareaFormulario