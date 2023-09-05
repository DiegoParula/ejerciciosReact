import React, { useContext } from 'react'
import "../App.css"
import { useLanguagesContext } from '../context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
    */

    const { language, handleChangeLA } = useLanguagesContext()

    //console.log(language)
    //
    return (
        <div className="navbar">
            {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
            <p>{language.text.home}</p> 
            <p>{language.text.current}: {language.id} </p>
            <button onClick={handleChangeLA}>{language.text.button}</button>
        </div>
    )
}

export default Navbar