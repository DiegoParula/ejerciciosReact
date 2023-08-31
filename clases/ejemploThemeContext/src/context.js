import React, {createContext} from 'react';
export const themes = {
light: {
font: 'black',
background: 'white'
},
dark: {
font: 'white',
background: 'black'
}
};
const ThemeContext = createContext(themes.light);
export default ThemeContext;

// Este cuenta con el objeto con nuestros colores y el createContext 
// para utilizar en nuestro proyecto.
// Con el createContext podemos hacer uso del componente Provider y el 
// Hook de useContext, que nos va a permitir consumir los datos que se 
// pasen por el provider.