import { createContext, useState } from "react";
//Crear contexto
export const CartContext = createContext()
//crear provider 
export function CartProvider ({children}){
    const [cart, setCart] = useState([])

    const addToCart = product =>{
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
    }
    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart, 
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider >    
    )
}