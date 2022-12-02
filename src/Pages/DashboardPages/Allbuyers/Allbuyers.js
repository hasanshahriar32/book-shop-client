import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Allbuyer from './Allbuyer';

const Allbuyers = () => {
    const allbuyers = useLoaderData();
    console.log(allbuyers)
    return (
        <Container>
            <div className=''>
            {
                allbuyers?.map(allbuy => <Allbuyer
                    key={allbuy._id}
                    allbuy={allbuy}
                ></Allbuyer>)
            }
        </div>
        
        </Container>
    );
};

export default Allbuyers;