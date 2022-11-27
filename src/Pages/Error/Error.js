import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error-container'>
            <Link to={'/'}><button className='btn-error'>Back to Home</button></Link>
        </div>
    );
};

export default Error;