import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './BookingModal.css'
import { AuthContext } from '../../Context/UserContext';

const BookingModal = ({books}) => {
    const { name, location, original_price, resale_price, seller_name, years_of_use, img_url, category_id } = books;
    const {user} = useContext(AuthContext)
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
        <Form.Control type="text" defaultValue={user?.displayName} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" defaultValue={user?.email} disabled  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text"  defaultValue={`Price: ${resale_price}`} disabled/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Address" />
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