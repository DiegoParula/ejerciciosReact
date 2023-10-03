import React from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import { useId } from 'react'
import './Cart.css'

const Cart = () => {

  const cartCheckBoxId = useId()


  return (
    <>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkbox" hidden /> 

        <aside className='cart'>
            <ul>
                <li>

                </li>
            </ul>
        </aside>
    </>
  ) 
}

export default Cart