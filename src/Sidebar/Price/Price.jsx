import React from 'react'
import './Price.css'
import Input from '../../Components/input'
const Price = ({ handlechange }) => {
  return (
    <div className='price-container'>
      <h2 className="sidebar-title">
        Price
      </h2>

    <div>
      <div className='input-container'>
        <label className='sidebar-label-container' data-price="all">
          <input onChange={handlechange} type="radio" name='price' value='all' />
          <span className="checkmark"></span> All
        </label>
      </div>
      <Input handlechange={handlechange} name='price' value='0-50' title='$0 - $50' dataColor='0-50' />
      <Input handlechange={handlechange} name='price' value='50-100' title='$50 - $100' dataColor='50-100' />
      <Input handlechange={handlechange} name='price' value='100-150' title='$100 - $150' dataColor='100-150' />
      <Input handlechange={handlechange} name='price' value='150+' title='$150+' dataColor='150+' />
    </div>
       
    </div>
  )
}

export default Price