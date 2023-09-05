import { createContext, useContext, useState } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    portugues: {
        id:"PTBR",
        text: PTBR
    }, 
    spanish:{
        id:"ES",
        text: ES
    }
    /* SUGERENCIA: agregue los demás idiomas */
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const RecipeLanguage = createContext()
const idionaInicial = languages.english


const LanguageContext = ({children}) =>{
    const[language, setLanguage] = useState(idionaInicial)
    const handleChangeLA = () => {
        setLanguage(() => {
          
        })
      }
    return(
        <RecipeLanguage.Provider value={{language, handleChangeLA}}>
            {children}
        </RecipeLanguage.Provider>
    )
};

export default LanguageContext;
export const useLanguagesContext = () => useContext(RecipeLanguage)