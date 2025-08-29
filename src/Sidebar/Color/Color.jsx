import React from 'react'
import './Color.css'
import Input from '../../Components/input'

const Color = ({ handlechange }) => {
  return (
    <div className='sidebar-label-container'>
      <h2 className="sidebar-title"> Colors</h2>
       <div>
          <div className='input-container'>
            <label className='sidebar-label-container'>
              <input onChange={handlechange} type="radio" name='color' value='' />
              <span className="checkmark"></span> All
            </label>
          </div>
          <Input handlechange={handlechange} name='color' value='White' title='White' />
          <Input handlechange={handlechange} name='color' value='Black' title='Black' />
          <Input handlechange={handlechange} name='color' value='Red' title='Red' />
          <Input handlechange={handlechange} name='color' value='Blue' title='Blue' />
       </div>
    </div>
  )
}

export default Color