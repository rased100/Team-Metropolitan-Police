import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const member of cart) {
        console.log(member)
        total = total + member.Salary;
    }
    return (
        <div>
            <h5>Total Member added: {props.cart.length}</h5>
            <h5>Name: {props.cart.Name}</h5>
            <h3>Total Money Need: {total
            }</h3>

        </div>
    );
};

export default Cart;