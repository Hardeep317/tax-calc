import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
        <div className='logo'>
            <h2>Tax Calculators</h2>
        </div>
        <ul className='navLinks'>
            <Link to='/'><li>Income Tax Calculator</li></Link>
            <Link to='/hra'><li>HRA Calculator</li></Link>
        </ul>
    </div>
  )
}

export default Navbar