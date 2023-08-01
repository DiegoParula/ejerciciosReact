import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clase3 from './components/clase3'

function App() {
 let name = 'Juan'

 let a = 3
 let b = 3
 
 const suma = () => {return a + b}

  return (
    <>
      <div>
        <Clase3 
        nombre = {name} 
       
        />
      </div>
      
    </>
  )
}

export default App
