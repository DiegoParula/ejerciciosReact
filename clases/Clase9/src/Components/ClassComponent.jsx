import React from 'react'

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Valentin'
        }
        console.log('Se ejecuta el constructor')
    }

    componentDidMount(){
        console.log('Se montó el componente de clase')
    }
    componentDidUpdate(){
        console.log('Se actualizó el componente de clase')
    }
    componentWillUnmount(){
        console.log('Se desmonta el componente de clase')
    }

    render() {
        console.log('Se ejecuta el render')
        return (
            <div>
                <h1>Componente de clase</h1>
                <h2>Hola, {this.state.name}</h2>
                <button onClick={() => this.setState({name: 'Patricio'})}>Este no es mi nombre</button>
            </div>
        )
    }
}