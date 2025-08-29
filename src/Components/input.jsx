import React from 'react'

const Input = ({handlechange, value, title, name, }) => {
  return (
    <div className='input-container'>
      <label className='sidebar-label-container'>
        <input onChange={handlechange} type="radio" name={name} value={value} />
        <span className="checkmark"></span>{title}
       </label>
    </div>
  )
}

export default Input