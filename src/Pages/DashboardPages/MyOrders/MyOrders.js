import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyOrders = () => {
    const myOrder = useLoaderData();
    console.log(myOrder)
    return (
        <div>
            <h3>My orders</h3>
        </div>
    );
};

export default MyOrders;