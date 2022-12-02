import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Reported from './Reported';
import './reported.css'

const Reportitem = () => {
    const report = useLoaderData()
    console.log(report)
    return (
        <div>
            <Container>
            <div className='reported_container'>
            {
                report?.map(repot => <Reported
                    key={repot._id}
                    repot={repot}
                ></Reported>)
            }
        </div>
        
        </Container>
        </div>
    );
};

export default Reportitem;