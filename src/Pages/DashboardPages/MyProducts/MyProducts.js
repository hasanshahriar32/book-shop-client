import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import MyProduct from './MyProduct';
import './MyProduct.css'

const MyProducts = () => {
    const myproudct = useLoaderData()
    console.log(myproudct)
    return (
        <div>
            <Container>
            <div className='my_product_container'>
            {
                myproudct?.map(my_pro => <MyProduct
                    key={my_pro._id}
                    my_pro={my_pro}
                ></MyProduct>)
            }
        </div>
        
        </Container>
        </div>
    );
};

export default MyProducts;