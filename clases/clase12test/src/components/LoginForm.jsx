import React from 'react'

const LoginForm = ({handleClick}) => {

    // const [nombre, setNombre] = useState()
    // const onChangeNombre = (e) => setNombre(e.target.value)

    

    // const regex = /^[^\d]*$/;
    // const onChangeNombre = vi.fn((input) =>{
    //     if(regex.test(input)){
    //         return true
    //     }else {
    //         return false
    //     }

    // })
  
    return (
    <div>
        <h1>Debe loguearse antes de continuar:</h1>
        <input role='email' type="email" />
        <input data-testid='password' type="password" />
        <input 
            role='nombre'
            type="text" 
           // onChange={onChangeNombre}
           
        />
        <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default LoginForm