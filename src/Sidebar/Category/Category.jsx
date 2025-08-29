import React from 'react'
import './Category.css'
import Input from '../../Components/input'

const Category = ({handlechange}) => {
  return (
    <div>
       <h2 className="sidebar-title">
        Category
       </h2>
        <div>

        <div className='input-container'>
      <label className='sidebar-label-container'>
        <input onChange={handlechange} type="radio" name='category' value='' />
        <span className="checkmark"></span> All
       </label>
      </div>

          <Input
          handlechange={handlechange}
          value="Sneakers"
          title="Sneakers"
          name="category"
          />

           <Input
          handlechange={handlechange}
          value="Running Shoes"
          title="Running Shoes"
          name="category"
          />
             <Input
          handlechange={handlechange}
          value="Skate Shoes"
          title="Skate Shoes"
          name="category"
          />
           <Input
          handlechange={handlechange}
          value="Casual Shoes"
          title="Casual Shoes"
          name="category"
          />
           
        </div>
    </div>
  )
}

export default Category