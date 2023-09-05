import React, { useContext } from 'react'
import { useLanguagesContext } from '../context'


const Body = () => {
    
    /* CONSEJO: Utilizar useContext */
    
    //const {language, setLanguages} = useLanguagesContext()
    const { language } = useLanguagesContext()
    
    return (
        <div>
            {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
            <h1>{language.text.title}</h1>
            <p>{language.text.description}</p>
        </div>
    )
}

export default Body