import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Allbuyers = () => {
    const allbuyers = useLoaderData();
    console.log(allbuyers)
    return (
        <div>
            <h3>allbuyers</h3>
        </div>
    );
};

export default Allbuyers;