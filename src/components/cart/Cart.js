import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // cart update
    let memberName = ' ';
    let total = 0;
    for (const member of cart) {
        total = total + member.Salary;
        memberName = memberName + member.Name + '. ';

    }
    return (
        <div className="cart">
            <h4>Total Member added: {props.cart.length}</h4>
            <h6 className="name">Names: </h6>
            <h6 className="name">{memberName}</h6>
            <h6>Total Money Need: ${total
            }</h6>
            <button className="select-btn"><i class="fas fa-check-circle"></i> Select</button>

        </div>
    );
};

export default Cart;