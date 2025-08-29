import React, { useState } from 'react'
import './Navigation.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { HiMenuAlt2 } from 'react-icons/hi'

const Navigation = ({ value, onChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="nav-bar">
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <HiMenuAlt2 className='nav-icons'/>
      </div>
      <div className="logo-container">
        <h1>Zen</h1>
      </div>
      <div className="nav-container">
        <input type="text" placeholder='Enter your search shoes' className='search-input' value={value} onChange={onChange}/>
      </div>
      <div className={`profile-container ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="#"> 
          <FiHeart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
        <a href="#">
          <AiOutlineUser className='nav-icons'/>
        </a>
      </div>
    </nav>
  )
}


export default Navigation