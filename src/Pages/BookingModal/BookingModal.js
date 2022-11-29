import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './BookingModal.css'

const BookingModal = ({books}) => {
    const { name, location, original_price, resale_price, seller_name, years_of_use, img_url, category_id } = books;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='book_btn' onClick={handleShow}>
                Book Now
            </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@email.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" placeholder="Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

    </Form>
        </Modal.Body>
        <Modal.Footer className='mx-auto p-0 pb-2'>
          <button className='text-center book_btn pe-5 ps-5' onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
        </>
    );
};

export default BookingModal;