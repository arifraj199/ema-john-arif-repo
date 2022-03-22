import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name,img,price,seller,ratings} = props.product;
    const {product} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-title'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-manufacture'><small>Manufacure: {seller}</small></p>
                <p className='product-rating'><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={()=> props.handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;