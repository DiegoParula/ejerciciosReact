
import './App.css'
import {Testimonio} from './components/Testimonio.jsx'



function App() {

  return (
    
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='-uno'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos curos pero este es el mejo de todos"
        />
        <Testimonio 
          nombre='Shawn Wan'
          pais='Japon'
          imagen='-uno'
          cargo='Analsita de datos'
          empresa='Google'
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos curos pero este es el mejo de todos"
        />
        <Testimonio 
          nombre='Sara'
          pais='USA'
          imagen='-uno'
          cargo='Marketing'
          empresa='Twitter'
          testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos curos pero este es el mejo de todos"
        />
      </div>
    </div>
     
  );
}

export default App
