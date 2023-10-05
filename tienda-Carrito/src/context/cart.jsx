import { createContext, useReducer, useState } from "react";
//Crear contexto
export const CartContext = createContext()

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []




const initialState = []

//update const localStorage with state for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const reducer = (state, action) =>{
    const{type: actionType, payload: actionPayload} = action
    switch(actionType){
    case 'ADD_TO_CART':{
        const {id} = actionPayload
        const productInCartIndex = state.findIndex(item => item.id === id) 
        if(productInCartIndex >= 0 ){
          /*  //una forma usando structureclone 
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity += 1  
            updateLocalStorage(newState)
            return newState*/
              // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
        }

        const newState = [
         //producto no esta en el carrito 
            ...state,{
                ...actionPayload,//product 
                quantity: 1
            }
        ]
        updateLocalStorage(newState)
        return newState
    

    }
    case 'REMOVE_FROM_CART':{
        const {id} = actionPayload
        const newState = state.filter(item => item.id !== id)
        updateLocalStorage(newState)
        return newState
    }
    case 'CLEAR_CART':{
        
        updateLocalStorage([])
        return []
    }
    }
        return state
}



//crear provider 
export function CartProvider ({children}){
   const [state, dispatch] = useReducer(reducer, initialState)
    //const [cart, setCart] = useState([])

  /*  const addToCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if(productInCartIndex >= 0 ){
            //una forma usando structureclone 
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1  
            return setCart(newCart)  
        }
        //producto no esta en el carrito 
        setCart(prevState => ([
            ...prevState,{
                ...product, quantity: 1
            }
        ]))
    }*/

   /* const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id)) 
    }



    const clearCart = () => {
        setCart([])
    }*/

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
      
    })


    return(
        <CartContext.Provider value={{
            cart: state, 
            addToCart,
            clearCart, 
            removeFromCart
        }}>
            {children}
        </CartContext.Provider >    
    )
}