import React from 'react';
import {  useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions'
import './index.css';

import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId, item, qty}) => {

    const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(productId,  1));
   
   
  }
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
        <button type="button" className="info__button" onClick={handleClick }
       
       >
                  Add To Cart 
            
                </button>
      </div>
    </div>
  );
};

export default Product;