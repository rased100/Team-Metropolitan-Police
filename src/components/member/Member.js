import React from 'react';
import './Menber.css';

const Member = (props) => {

    // destructuring
    const { Name, Rank, Salary, Email, img, Mobile } = props.member;
    return (

        // single member
        <div className="member">
            <img src={img} alt="" />
            <b><p>Name: {Name}</p></b>
            <p>Rank: {Rank}</p>
            <i><p>Salary: {Salary}</p></i>
            <p>Mobile: {Mobile}</p>
            <p>Email: {Email}</p>
            <button className="addtolist-btn" onClick={() => props.handleAddToList(props.member)}
            > <i className="fas fa-user-plus"></i> Add to List</button><br />
            <a href="/#"><i className="fab fa-facebook-square police-icon"></i></a>
            <a href="/#"><i className="fab fa-instagram-square police-icon"></i></a>
            <a href="/#"><i className="fab fa-twitter-square police-icon"></i></a>
            <a href="/#"><i className="fab fa-whatsapp-square police-icon"></i></a>
        </div>
    );
};

export default Member;