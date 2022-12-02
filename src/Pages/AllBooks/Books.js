import React from 'react';
import Card from 'react-bootstrap/Card';
import PrivateRoute from '../../Routes/PriveteRoute/PrivateRoute';
import BookingModal from '../BookingModal/BookingModal';

const Books = ({books}) => {
    const {_id, name, location, original_price, resale_price, seller_name, years_of_use, img_url } = books;
    const handleReportToAdmin = (_id) => {
        const reportedItem = {
          name: name,
          img_url: img_url,
          item_id: _id,
          time: new Date(),
        };
        fetch(`https://book-shop-server.vercel.app/reported/${_id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(reportedItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              alert("Successfully Reported!");
            } else {
              alert("Something went worng.");
            }
          })
          .catch((err) => console.error(err));
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
                <PrivateRoute>
                <BookingModal
                    books={books}      
                    ></BookingModal>
                    <button onClick={() => handleReportToAdmin(_id)} className='book_btn ms-2'>Reported Item</button>
                </PrivateRoute>
            </Card.Body>
          </Card>
    );
};

export default Books;