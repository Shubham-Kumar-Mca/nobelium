import React from 'react';
import "./singleproduct.css";

const SingleProducts = ({title,description,price, rating, thumbnail}) => {
  return (
    <div className='Single__Product'>
        <div>
            <img src={thumbnail} alt={`${title}__image`} title={title}/>
        </div>
        <div className={`${description ? "title__desc" : ""}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className='price__rating'>
            <p><span>Price </span>₹{price}</p>
            <p><span>Rating</span> ₹{rating}</p>
        </div>
    </div>
  )
}

export default SingleProducts