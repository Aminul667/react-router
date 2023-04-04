import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {email, name, id, phone} = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <h3>email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <p><Link to={`/friend/${id}`}>Show details</Link></p>
        </div>
    );
};

export default Friend;