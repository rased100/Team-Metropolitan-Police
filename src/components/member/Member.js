import React from 'react';
import './Menber.css';

const Member = (props) => {
    // console.log(props.member)
    const { Name, Rank, Salary, Email, img, Mobile } = props.member;
    return (
        <div className="member">
            <img src={img} alt="" />
            <b><p>Name: {Name}</p></b>
            <p>Rank: {Rank}</p>
            <i><p>Salary: {Salary}</p></i>
            <p>Mobile: {Mobile}</p>
            <p>Email: {Email}</p>
            <button onClick={() => {
                props.handleAddToList(props.member)
            }}>Add to List</button>
        </div>
    );
};

export default Member;