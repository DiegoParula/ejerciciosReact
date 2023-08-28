import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'

function Navbar() {
  return (
    <div className='navBar'>
        <nav>

            <Link className='nav' to='/home' style={{paddingLeft: 13, textDecoration: 'none'}}>Home</Link>
            <Link className='nav' to='/about' style={{paddingLeft: 13, textDecoration: 'none'}}>About</Link>
            <Link className='nav' to='/faqs' style={{paddingLeft: 13, textDecoration: 'none'}}>Faqs</Link>
      

        </nav>
    </div>
  )
}

export default Navbar