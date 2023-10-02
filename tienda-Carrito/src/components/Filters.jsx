import React, { useState, useId } from 'react'
import './Filters.css'

const Filters = ({ onChange }) => {
    const[minPrice, setMinPrice] = useState()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

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

  return (
    <section className='filters'>

    <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
        type="range"
        id={minPriceFilterId}
        min='0'
        max='10000' 
        onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
    </div>
    <div>
        <label htmlFor={categoryFilterId}></label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
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