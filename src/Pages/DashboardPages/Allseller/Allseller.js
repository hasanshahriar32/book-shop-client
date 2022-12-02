import React from 'react';
import './Allseller.css'

const Allseller = ({allsell}) => {
    
    const{userName, userEmail} = allsell;
    return (
        <div>
            <div className='allseller_containers'>
                <div>
                    <span className='ps-1'>Seller Name: {userName}</span>
                </div>
                <div>
                <span className='ps-1'>Seller Email: {userEmail}</span>
                </div>
            </div>
        </div>
    );
};

export default Allseller;