import React from 'react';

const Cart = ({cart}) => {
    // const {cart} = props;
    return (
        <div>
            <h2>Order Summery</h2>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;