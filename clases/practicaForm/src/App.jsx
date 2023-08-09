import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/Card.css'

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    alert(`Bienvenido: ${userName}`);
    
    };

  return (
    
      <div className="card">
        <h3 className='title'>Iniciar Sesión</h3>

        <form onSubmit={onSubmitForm}>
        <div className='input-group'>
        <label for="username">Nombre de usuario</label>  
        <input
          type="text"
          value={userName}
          onChange={onChangeUserName}
        />
        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
        />

        <button type="submit" className='sign'>Enviar</button>
        </div>
        </form>
      </div>    
  )
}

export default App
