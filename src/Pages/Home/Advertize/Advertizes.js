import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Advertze from './Advertze';
import './Advertizes.css'

const Advertizes = () => {
    const [advertize, setAdvertize] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/advertize`)
      .then((res) => res.json())
      .then((data) => setAdvertize(data));
    }, [])
    return (
        <Container>
            <div className=' mt-5'>
            <h3 className='text-center'>Here Is Product</h3>
            <div className='advertize_container'>
            
            {
                advertize?.map(addvert => <Advertze
                    key={addvert._id}
                    addvert={addvert}
                ></Advertze>)
            }
                </div>
            </div>
        </Container>
    );
};

export default Advertizes;