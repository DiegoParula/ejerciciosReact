import { useState, useEffect } from 'react'

const FuncComponent = () => {
    const [name, setName] = useState('Valentin')
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    console.log('Se ejecuta la lógica de componente de función')

    useEffect(() => {
        console.log('Se montó el componente de función')
        return () => {
            console.log('Se desmontó el componente de función')
        }
    }, [])
    useEffect(() => {
        console.log('Se actualizó el estado name o count')
    }, [name, count])

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
        }, 3000)
    }, [])
    
  return (
    <div>
        { loading ? 'Cargando...' :
        <>
            {console.log('Se ejecuta el render')}
            <h1>Componente de función</h1>
            <h2>Hola, {name}</h2>
            <button onClick={() => setName('Patricio')}>Este no es mi nombre</button>
            <button onClick={() => setCount(count +1)}>Sumar {count}</button>
        </>}
    </div>
  )
}

export default FuncComponent