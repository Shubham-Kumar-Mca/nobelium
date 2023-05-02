import React from 'react';
import "./dashboard.css"
import { products } from '../../data';
import SingleProducts from '../singleproducts/SingleProducts';

const Dashboard = ({ searchTitle }) => {
  const filtering = products.filter(product => product.title.toLowerCase().includes(searchTitle.toLowerCase()));

  return (filtering.length > 0 ?
    <div className='products__container'>
      {
        filtering.map(product => (
          <SingleProducts key={product.id} {...product} />
        ))
      }
    </div> : <h2 style={{ width: "80%",marginTop : "25%", marginLeft : "30%" }}>The product you searched is not available with us!</h2>
  )
}

export default Dashboard