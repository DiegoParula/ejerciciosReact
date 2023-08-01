import React from 'react'
import viteLogo from '/vite.svg'
import '../sheetsstyle/logo.css'

function Logo() {
  return (
    <div className='contenedor-logo'>
    <img src={viteLogo} 
    className ='logo' 
    />
  </div>
  )
}

export default Logo