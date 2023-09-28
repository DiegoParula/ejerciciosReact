import React, { useState } from 'react'
import './Filters.css'

const Filters = ({ onChange }) => {
    const[minPrice, setMinPrice] = useState()

    const handleChangeMinPrice = (e) =>{
        setMinPrice(e.target.value)
        onChange(prevState => ({
            ... prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) =>{
        onChange(prevState => ({
            ... prevState,
            category: e.target.value
        }))
    } 
//me quedé en el min 28:33
  return (
    <section className='filters'>

    <div>
        <label htmlFor="price">Price</label>
        <input 
        type="range"
        id='price'
        min='0'
        max='10000' 
        onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
    </div>
    <div>
        <label htmlFor="category"></label>
        <select id="category" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Notebooks</option>
            <option value="smartphones">Celulares</option>
            <option value="all">Todas</option>
        </select>
    </div>

    </section>
  )
}

export default Filters