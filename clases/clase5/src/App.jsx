import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import Lista from './components/Lista'

let pizzas = [
  { id: 1, tipo: 'Muzzarella'},
  { id: 2, tipo: 'Fugazza' },
  { id: 3, tipo: 'Napolitana' },
  { id: 4, tipo: 'Rucula y crudo'},
  { id: 5, tipo: 'Especial' },
]


function App() {

  const[lista, setLista] = useState([]);



  const add = (tipo) =>{
   
    setLista([...lista, tipo])
    const existeTipo = lista.find(item => item.id === tipo.id)
    
    if(existeTipo){
        const listaActaulizada = lista.map(item => 
        item.id === tipo.id ? {...item, cantidad: item.cantidad + 1} : item)
        setLista(listaActaulizada)
        
      }
      else{
        setLista([...lista, {...tipo, cantidad: 1} ])
      }
    
    
   /* setLista([...lista, tipo])
      console.log(lista)*/
  } 

  return (
    <div className='contenedor-principal'>
    
    <div>
      {pizzas.map((pizza)=>{
        return(
          <Card opcion={pizza} key={pizza.id} agrega={add}/>
          
        )
      })}
 
    </div>
    <div>
        
            
    </div>

    <div>
    {lista.map((prod, index)=>{
       return (<Lista opcion={prod.tipo} key={`${prod.id}-${index}`} cant={prod.cantidad}/>) 
      })}
    </div>
    </div>
    
  )
}

export default App
