import React, { useContext } from 'react'


const Body = () => {
    
    /* CONSEJO: Utilizar useContext */
    
    //const {language, setLanguages} = useLanguagesContext()
    
    return (
        <div>
            {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
            <h1>Título</h1>
            <p>Descrição</p>
        </div>
    )
}

export default Body