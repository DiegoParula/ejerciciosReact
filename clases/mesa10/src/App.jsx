import { useState } from 'react'
import './App.css'
import CardPoke from './components/CardPoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardPoke />
    </>
  )
}

export default App
