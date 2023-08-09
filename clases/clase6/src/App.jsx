import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Form'
import Form from './components/Form'
import FormDos from './components/FormDos'


function App() {


  return (
    <>
    <div className='App'>
      <div className='forms'>
      <Form />
      </div>
      <div className='forms'>
      <FormDos />
      </div>
      </div>
    </>
  )
}

export default App
