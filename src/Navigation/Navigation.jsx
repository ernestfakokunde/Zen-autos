import React from 'react'
import './Navigation.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const Navigation = ({ value, onChange }) => {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <h1>Zen</h1>
      </div>
      <div className="nav-container">
        <input type="text" placeholder='Enter your search shoes' className='search-input' value={value} onChange={onChange}/>
      </div>
      <div className="profile-container">
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