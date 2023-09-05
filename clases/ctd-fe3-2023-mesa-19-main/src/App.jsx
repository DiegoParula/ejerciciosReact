import './App.css'
import React, { useState } from 'react'
//import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { Context } from 'react';
import LanguageContext from './context';


function App() {

  //const [language, setLanguage] = useState(languages.english);

  //const handleChangeLA = () => {
 //   setLanguage(() => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
//    })
 // }

  return (
    <div className="App">
      <>{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
      
      <LanguageContext>
        <Navbar />
        <Body />
      </LanguageContext> 
      </>
    </div>
  )
}

export default App