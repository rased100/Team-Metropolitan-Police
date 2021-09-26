import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)

    let memberName = ' ';
    let total = 0;
    for (const member of cart) {
        console.log(member)
        total = total + member.Salary;
        memberName = memberName + member.Name + '. ';
    }
    return (
        <div className="cart">
            <h5>Total Member added: {props.cart.length}</h5>
            <h5>Name: {memberName}</h5>
            <h6>Total Money Need: {total
            }</h6>

        </div>
    );
};

export default Cart;