import React from 'react'
import Filters from './Filters.jsx'

const Header = ({changeFilters}) => {
  return (
    <header>
    <div>React Shop</div>
    <Filters onChange={changeFilters}/>
    </header>
  )
}

export default Header