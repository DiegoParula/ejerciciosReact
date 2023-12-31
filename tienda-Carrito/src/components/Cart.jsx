import React from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import { useId } from 'react'
import './Cart.css'
import useCart from '../hooks/useCart'


function CartItem({thumbnail, price, title, quantity, addToCart}){
  return (
    <li>
        <img 
        src={thumbnail} 
        alt={title}
        />
    
    <div>
      <strong>{title}</strong> - ${price}
    </div>
    <footer>
      <small >
        Qty: {quantity}
      </small>
      <button onClick={addToCart} >+</button>
    </footer>
    </li>
  )

}

const Cart = () => {

  const cartCheckBoxId = useId()
  const {cart, clearCart, addToCart } = useCart()



  return (
    <>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkbox" hidden /> 

        <aside className='cart'>
            <ul>
              {cart.map(product => (
                <CartItem 
                key={product.id}
                addToCart={()=> addToCart(product)} 
                {...product} />
                ))}

                <li>

                </li>
            </ul>
            <button onClick={clearCart}>
              <ClearCartIcon />
            </button>
        </aside>
    </>
  ) 
}

export default Cart