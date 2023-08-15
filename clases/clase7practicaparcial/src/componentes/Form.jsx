import React, {useState} from 'react'
import Card from './Card'


function Form({setUsuario, setMensajeError}) {

    // const [usuario, setUsuario] = useState({
    //     nombre: '',
    //     apellido: '',
    //     telefono: ''

    // })
    const mensajeError = '';
    //const [mensajeError, setMensajeError] = useState()

    const [telefonoIngresado, setTelefono] = useState()
    const [nombreIngresado, setNombre] = useState()
    const [apellidoIngresado, setApellido] = useState() 

    const onNombre = (e)=>{ setNombre(e.target.value)}
    const onApellido = (e) =>{ setApellido(e.target.value)}
    const onTelefono = (e) =>{ setTelefono(e.target.value)}

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if (nombreIngresado.length > 3 && apellidoIngresado.length > 5 && telefonoIngresado.length > 7) {
            setUsuario({
              nombre: nombreIngresado,
              apellido: apellidoIngresado,
              telefono: telefonoIngresado,
            });
            const mensajeError= SetMensajeError;
          } else {
            setMensajeError('Por favor, ingrese la información correctamente.');
          }

           
            
            // if(usuario.keys.length===0){
            // return mensajeError}
            // else{
            //     return usuario
            // }
              
    }
     

  return (
    <div>
        <form onSubmit={handleSubmit}>

        <label >Nombre</label>
        <input 
            type="text"
            onChange={onNombre}
             
        />
        <label >Apellido</label>
        <input 
            type="text"
            onChange={onApellido} 
        />
        
        <label >Telefono</label>
        <input 
            type="text" 
            onChange={onTelefono}
        />

        <button>Enviar</button>

            
            
        </form>    
        <div>
        <Card mensajeError={mensajeError} />
    </div>

    </div>
   
  )
}

export default Form