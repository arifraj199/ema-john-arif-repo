import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([0]);

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='products'>
            <div className="products-cart">
                {
                    products.map(product => <Product
                    key={product.id} 
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-cart">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;