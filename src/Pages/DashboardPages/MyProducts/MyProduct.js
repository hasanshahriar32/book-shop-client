import React from 'react';

import Card from 'react-bootstrap/Card';

const MyProduct = ({my_pro}) => {
    
    const {_id, name, location, original_price, resale_price, seller_name, years_of_use, img_url } = my_pro;

    const handleAdvertise = () => {
        const advertise = {
          name: name,
          img_url: img_url,
          time: new Date(),
          resale_price: resale_price,
          original_price: original_price,
          years_of_use: years_of_use,
        };
        fetch("http://localhost:5000/advertize", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(advertise),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              alert("Successfully adversitse");
            }
          });
      };
    return (
        <Card >
            <Card.Img className='img_container' variant="top" src={img_url} />
            <Card.Body>
                <h2>{name}</h2>
                <h6>Location: {location}</h6>
                <h6>Product Price: $ {original_price}</h6>
                <h4>Resell Price: $ {resale_price}</h4>
                <h6>Uses: {years_of_use} years</h6>
                <h6>Seller Name: {seller_name}</h6>
                <button className='book_btn' onClick={() => handleAdvertise(_id)}>Advertize</button>
            </Card.Body>
          </Card>
    );
};

export default MyProduct;