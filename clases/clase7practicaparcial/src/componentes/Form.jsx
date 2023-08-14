import React, {useState} from 'react'
import Card from './Card'


function Form() {

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        telefono: ''

    })
    
    const [mensajeError, setMensajeError] = useState()

    const [telefonoIngresado, setTelefono] = useState()
    const [nombreIngresado, setNombre] = useState()
    const [apellidoIngresado, setApellido] = useState() 

    const onNombre = (e)=>{ setNombre(e.target.value)}
    const onApellido = (e) =>{ setApellido(e.target.value)}
    const onTelefono = (e) =>{ setTelefono(e.target.value)}

    const onSubmit = (e) =>{
        e.preventDefault()
        
            if(nombreIngresado.length > 3){
                setUsuario({...usuario, nombre: nombreIngresado})
            }
            else{
                setMensajeError('Ingrese bien el nombre')    
            }
        

        
            if(apellidoIngresado.length > 5){
                setUsuario({...usuario, apellido: apellidoIngresado})
            }
            else {
                setMensajeError('Ingrese bien el apellido')
            }
        

        
            if(telefonoIngresado.length > 7){
                setUsuario({...usuario, telefono: telefonoIngresado})
            }else{
                setMensajeError('Ingrese bien el telefono')
            }
        
              
    }
     

  return (
    <div>
        <form onSubmit={onSubmit}>

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