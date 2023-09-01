import React, {useContext}  from 'react'
import '../index.css'
import ThemeContext from '../context'

const NavBar = () => {
  const {theme, handleChangeTheme} = useContext(ThemeContext)

  return (
    <div className="navbar">
    <p>Inicio</p>
    <button
    onClick={handleChangeTheme}
    style={{background: theme.background, color:theme.font}}>
      Change Theme
    </button>
    </div>
  )
}

export default NavBar