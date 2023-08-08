import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import Lista from './components/Lista'

let pizzas = [
  { id: 1, tipo: 'Muzzarella' },
  { id: 2, tipo: 'Fugazza' },
  { id: 3, tipo: 'Napolitana' },
  { id: 4, tipo: 'Rucula y crudo'},
  { id: 5, tipo: 'Especial' },
]


function App() {

  const[lista, setLista] = useState([]);

  const add = (tipo) =>{
      setLista([...lista, tipo])
      console.log(tipo)
  } 

  return (
    <div>
    
    <div>
      {pizzas.map((pizza)=>{
        return(
          <Card opcion={pizza} key={pizza.id} agrega={add}/>
          
        )
      })}

    </div>
    <div>
      <Lista opcion={lista} />  
            
    </div>
    </div>
    
  )
}

export default App
