import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clase3 from './components/clase3'

function App() {
 let name = 'Juan'
 const suma = (a, b) => {return a + b}

  return (
    <>
      <div>
        <Clase3 
        nombre = {name} 
        resultado = {suma}
        valor1 = {3}
        valor2 = {3}
       
        />
      </div>
      
    </>
  )
}

export default App
