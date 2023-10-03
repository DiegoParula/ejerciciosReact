import React from 'react'
import { AddToCartIcon } from './Icons'
import './Products.css'
import useCart from '../hooks/useCart'


//me quede en 1:27:13
const Products = ({products}) => {
    const {addToCart} = useCart()
  return (
    <main className='products'>
        <ul>
            {products.slice(0, 10).map(product =>//slice para que solo muestre 10 articulos  
                <li key={product.id}>
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                />
                <div>
                    <strong>{product.title} - ${product.price}</strong>
                </div>
                <div>
                    <button onClick={()=>addToCart(product)}>
                        <AddToCartIcon />
                    </button>
                </div>
                </li>)}
        </ul>
    </main>
    
  )
}

export default Products