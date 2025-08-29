import React from 'react'
import './product.css'
import products from '../db/data'
import Card from '../Components/Card'

const Products = ({ items }) => {
  return (
   <Card items={items}/>
  )
}

export default Products