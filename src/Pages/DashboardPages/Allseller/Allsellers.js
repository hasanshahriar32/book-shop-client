import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Allseller from './Allseller';

const Allsellers = () => {
    const allseller = useLoaderData();
    return (
        <Container>
            <div className=''>
            {
                allseller?.map(allsell => <Allseller
                    key={allsell._id}
                    allsell={allsell}
                ></Allseller>)
            }
        </div>
        
        </Container>
    );
};

export default Allsellers;