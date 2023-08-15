import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componentes/Card'
import Form from './componentes/Form'

function App() {
 
  const [usuarioData, setUsuarioData] = useState({})  
  const [mensajeErrorData, setMensajeErrorData] = useState()



  return (
    <>
      <Form setUsuario={setUsuarioData} setMensajeError={setMensajeErrorData}/>
      <Card usuario={usuarioData} mensaje={mensajeErrorData}/>

    </>
  )
}

export default App
