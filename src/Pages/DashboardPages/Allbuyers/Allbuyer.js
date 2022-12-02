import React from 'react';
import './Allbuyer.css';

const Allbuyer = ({allbuy}) => {
    
    const{userName, userEmail} = allbuy;
    return (
        <div>
            <div className='allbuyer_containers'>
                <div>
                    <span className='ps-1'>Buyer Name: {userName}</span>
                </div>
                <div>
                <span className='ps-1'>Buyer Email: {userEmail}</span>
                </div>
            </div>
        </div>
    );
};

export default Allbuyer;