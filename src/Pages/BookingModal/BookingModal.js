import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './BookingModal.css'
import { AuthContext } from '../../Context/UserContext';
import Toasty from '../Utilities/Toast/Toasty';

const BookingModal = ({books}) => {
    const { name,  resale_price } = books;
    const {user} = useContext(AuthContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [book, setBook] = useState({})
    const time = new Date();
    const [currentTime, setcurrentTime] = useState(time);
    const handleAddUser = event =>{
      event.preventDefault();
      fetch('http://localhost:5000/booking', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(book)
      })
      .then(res => res.json())
      .then(data => {
          if(data.acknowledged){
              // alert('Booked');
              event.target.reset();
          }
      })
  }

  const handleInputBlur = event => {
      const field = event.target.name;
      const value = event.target.value;
      let time = new Date();
      setcurrentTime(time);
      const newBook = {...book,currentTime}
      newBook[field] = value;
      setBook(newBook)
  }
    return (
        <>
            <button className='book_btn' onClick={handleShow}>
                Book Now
            </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Book is Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleAddUser}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="userName" onBlur={handleInputBlur} defaultValue={`Book: ${name}`} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="userName" onBlur={handleInputBlur} defaultValue={user?.displayName} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="userEmail" onBlur={handleInputBlur} defaultValue={user?.email} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="price" onBlur={handleInputBlur}  defaultValue={`Price: ${resale_price}`} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="number" onBlur={handleInputBlur} placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="address" onBlur={handleInputBlur} placeholder="Address" />
      </Form.Group>
        <div className='text-center'>
        <button type='submit' className='text-center book_btn pe-5 ps-5 mx-aut0' >
            Submit
          </button>
        </div>
        </Form>
        </Modal.Body>
      </Modal>
        </>
    );
};

export default BookingModal;