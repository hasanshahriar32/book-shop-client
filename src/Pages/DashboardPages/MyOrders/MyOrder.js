import React from 'react';
import Card from 'react-bootstrap/Card';

const MyOrder = ({my_order}) => {
    const { productName, address, userName, price,  img_url } = my_order;
    return (
        <Card >
        
            <Card.Body>
                <h2>{productName}</h2>
                <h6>Location: {address}</h6>
                <h4> {price}$</h4>
                <h6>Seller Name: {userName}</h6>
            </Card.Body>
          </Card>
    );
};

export default MyOrder;