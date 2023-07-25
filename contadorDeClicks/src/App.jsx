
import './App.css'
import logoReact from './assets/react.svg'
import Boton from './components/Boton'
import Contador from './components/Contador'
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () =>{
  
   setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () =>{
    setNumClicks(0)
  }

  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img 
      className='logo' 
      src={logoReact} 
      alt="Logo de React" />
     </div>
     <div className='contenedor-contador'>
      <Contador 
        numClicks={numClicks}
        />
      <Boton 
        texto='Click'
        esBotondeClic={true}
        manejarClick={manejarClick}/>
        <Boton 
        texto='Reiniciar'
        esBotondeClic={false}
        manejarClick={reiniciarContador}/>
     </div>
    </div>
  )
}

export default App
