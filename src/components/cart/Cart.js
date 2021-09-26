import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart)
    // const [{ Name }] = props.cart;
    return (
        <div>
            <h4>Name:
                {/* {props.cart[0].Name} */}
            </h4>

        </div>
    );
};

export default Cart;