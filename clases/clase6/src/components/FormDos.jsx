import React from 'react'
import { useState } from 'react';
import '../styles/CardForm2.css'

function FormDos() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
  
    const onSubmitForm = (e) => {
      e.preventDefault();
      alert(`Bienvenido: ${userName}`);
      
      };

  return (
    <div className="card3">
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

export default FormDos