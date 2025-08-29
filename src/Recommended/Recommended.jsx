 import React from 'react'
 import './Recommended.css'
 
 const Recommended = ({ onSelectCompany }) => {
   return (
     <div className='recommended'>
       <h2>Recommended</h2>
      <div className="recommended-flex">
        <button className='btns' onClick={() => onSelectCompany(null)}>All Products</button>
        <button className='btns' onClick={() => onSelectCompany('Nike')}> Nike</button>
        <button className='btns' onClick={() => onSelectCompany('Adidas')}>Adidas</button>
        <button className='btns' onClick={() => onSelectCompany('Puma')}>Puma</button>
        <button className='btns' onClick={() => onSelectCompany('Vans')}>Vans</button>
      </div>
     </div>
   )
 }
 
 export default Recommended