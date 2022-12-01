import React, { useContext, useState,  } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { AuthContext } from '../../Context/UserContext';
import Loader from '../Utilities/Loader/Loader';


const Register = () => {
    let title = "Book Shop -Register";
    document.title = title;
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {createUser, loading} = useContext(AuthContext);
    const location = useLocation();
    const[role, setRole] = useState('buyer')

    const from = location.state?.from?.pathname || '/'
    if(loading){
        return <Loader></Loader>
    }

    const handleChange = (e) => {
        const info = e.target;
        const value = info.value;
        setRole(value);
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError('Password should be a characters or more.');
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
            const currentUser = {
                userName: userName,
                userEmail: email,
                roleIndentify: role,

            };
            fetch('http://localhost:5000/user', {
                 method: 'POST',
                 headers: {
                'content-type': 'application/json'
            },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((err) => console.error(err));

        })
        .catch(error => console.error(error));
        
        
        

        
    }
    return (
        <div className=' mx-auto login-container'>
            <h3 className='text'>Please Register Now!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <div>
                    <ul style={{listStyle: "none", padding:'0'}}>
                        <li >
                            <input className='me-2 mb-2' onChange={handleChange} type="radio" id="f-option" name='selector' value='Buyer' checked={role === "Buyer"} />
                            <label for="f-option">Buyer</label>
                            <div class="check"></div>
                        </li>
                        <li>
                            <input className='me-2' onChange={handleChange}  type="radio" id="s-option" name='selector' value='Seller' checked={role === "Seller"} />
                            <label for="s-option">Seller</label>
                            <div class="check">
                            </div>
                        </li>
                    </ul>
                </div>
                <button className='login'>Register</button>
                <p className='text-white mt-3'>Already, have an account <Link to='/login'> Login</Link></p>
                <p className='text-error'>{error}</p>
            </Form>
        </div>
    );
};

export default Register;