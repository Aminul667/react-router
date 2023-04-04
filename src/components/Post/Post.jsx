import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>Show post details</button>
        </div>
    );
};

export default Post;