
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const Toasty = () => {

    const endToast = () => {
        toast.success("The Item Is Booked",{
            position:"top-center"
        });
    }
    return (
        <div>
            <button onClick={endToast}></button>
            
          <ToastContainer/>
        </div>
    );
};

export default Toasty;