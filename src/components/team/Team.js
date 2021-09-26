import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Member from '../member/Member';
import './Team.css';

const Team = () => {
    // state for members
    const [members, setMembers] = useState([]);

    // state for cart
    const [cart, setCart] = useState([]);

    // fetch
    useEffect(() => {
        fetch('./police.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])

    // Handle add to list button
    const handleAddToList = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }



    return (
        // container
        <div className="team-cont">
            <div className="member-cont bg-secondary">
                {
                    members.map(member => <Member
                        key={member.sl}
                        member={member}
                        handleAddToList={handleAddToList}
                    ></Member>)
                }
            </div>
            <div className="cart-cont">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Team;