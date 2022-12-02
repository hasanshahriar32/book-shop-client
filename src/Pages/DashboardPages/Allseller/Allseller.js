import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Allseller = () => {
    const allseller = useLoaderData();
    console.log(allseller)
    return (
        <div>
            <h3>allseller</h3>
        </div>
    );
};

export default Allseller;