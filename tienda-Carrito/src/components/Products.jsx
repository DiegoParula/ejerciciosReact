import React from 'react'
import { AddToCartIcon } from './Icons'
import './Products.css'



const Products = ({products}) => {
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
                    <button>
                        <AddToCartIcon />
                    </button>
                </div>
                </li>)}
        </ul>
    </main>
    
  )
}

export default Products