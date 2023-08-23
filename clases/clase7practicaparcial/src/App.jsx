import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/Card'
import Form from './componentes/Form'

function App() {
 
  const [usuarioData, setUsuarioData] = useState({})  
  //const [mensajeErrorData, setMensajeErrorData] = useState()

  const manejarDatos = (usuario) =>{
    setUsuarioData(usuario)
  }
  
  return (
    <div className='App'>
      <Form enviarDatos={manejarDatos}/>
      <Card usuario={usuarioData} />

    </div>
  )
}

export default App
