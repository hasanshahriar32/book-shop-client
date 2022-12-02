import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const myOrder = useLoaderData();
    console.log(myOrder)
    return (
        <Container>
            <div className='my_product_container'>
            {
                myOrder?.map(my_order => <MyOrder
                    key={my_order._id}
                    my_order={my_order}
                ></MyOrder>)
            }
        </div>
        
        </Container>
    );
};

export default MyOrders;