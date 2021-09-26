import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Member from '../member/Member';
import './Team.css';

const Team = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./police.json')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])

    const handleAddToList = (member) => {
        // console.log(member)
        let cart = [];
        const newCart = [...cart, member];
        setCart(newCart);
    }



    return (
        <div className="team-cont">


            <div className="list-cont bg-secondary">
                {
                    members.map(member => <Member
                        key={member.sl}
                        member={member}
                        handleAddToList={handleAddToList}
                    ></Member>)
                }

            </div>


            <div className="cart-cont">
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Team;