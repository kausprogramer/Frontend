import React from 'react'
import './mobileCard.css';
export default function MobileCard(props) {
    let {image, name, price}= props;
  return (
    <div className='card'>
        <div>
        <img  className='image' src={image}></img>
        </div>
        <div>
        <h1>{name}</h1>
        <p>${price}</p>
        <button>Add to cart</button>
        </div>
        </div>
  )
}
