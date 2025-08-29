import React, { useState } from 'react'
import './Sidebar.css'
import { FiMenu, FiShoppingCart } from 'react-icons/fi'
import Colors from './Color/Color'
import Category from './Category/Category'
import Price from './Price/Price'

const Sidebar = ({handlechange, handleColorChange}) => {
  console.log(handlechange)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu />
      </button> 
      <div className="cart-logo-container">
        <h1><FiShoppingCart /></h1>
      </div>

      <Category handlechange={handlechange}/>
      <Colors handlechange={handleColorChange}/>
      <Price handlechange={handlechange}/>
    </div>
  )
}

export default Sidebar