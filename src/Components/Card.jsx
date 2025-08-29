import React from 'react'
import products from '../db/data';

const Card = ({ items }) => {
  const list = Array.isArray(items) && items.length > 0 ? items : products
  return (
    <div className="products-wrapper">
      <section className='card-container'>
      {list.map((item, index) => (
        <section className="card" key={index}>
          <img 
            src={item.img}
            alt={item.title} 
            className='card-img'
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://static.nike.com/a/images/t_default/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png';
            }}
          />
          <div className="card-details">
            <h3 className="card-title">{item.title}</h3>
            <div className="card-reviews">
              {item.reviews}
            </div>
            <div className="card-price">
              <span className="price">{item.newPrice}</span>
              <span className="price-old">{item.prevPrice}</span>
            </div>
          </div>
        </section> 
      ))}
    </section>
    </div>
  )
}

export default Card