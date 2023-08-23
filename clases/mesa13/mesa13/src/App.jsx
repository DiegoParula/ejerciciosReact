import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pedido from './components/Pedido'

function App() {
  
  const [load, setLoad] = useState(true)
  const [show, setShow] = useState(true)


 

  useEffect(() => {
    setTimeout(() =>{
      setLoad(false)
    }, 3000)
    console.log('Se monto el componente')
  },[])

  useEffect(() =>{
    return()=>{
      console.log('Se desmonto el componente')
      
    }
  },[show])

  return (
    <>
      <h1>Su pedido</h1>
      {
        load ? 'Cargando pedido':
        show &&  <Pedido />  
      }

      <button onClick={() => setShow(false)}>Cancelar pedido</button>

    </>
  )
}

export default App
