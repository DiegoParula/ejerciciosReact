import { useState, useMemo } from 'react'
import ThemeContext, {themes} from './context'
import './App.css'
import NavBar from './components/NavBar'
import Layout from './components/Layout'
import Body from './components/Body'

// Traemos el componente ThemeContext que viene con Key para completar, 
// como porejemplo, el Provider que vamos a usar.
// Luego, dentro de nuestro componente App, vamos a agregar un state 
// dejando el themes.light como defaultValue, y creamos una función que se 
// encargue de cambiar el theme.
// En el return utilizamos nuestro componente themeContext.Provider y le 
// damos los valores theme (font y background) y la función para cambiar el
// color.



function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
    }

    const providerValue = useMemo(()=>({theme,
      handleChangeTheme}),[theme,handleChangeTheme])//
  return (
    <>
      <ThemeContext.Provider value={providerValue}>
      <Layout>
        <NavBar />
        <Body />
      </Layout>

      <div>
        CONTEXT TUTORIAL
      </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
