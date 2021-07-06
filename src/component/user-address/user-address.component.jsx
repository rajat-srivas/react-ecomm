import React from 'react';
import './user-address.style.scss';

const UserAddress = ({ id, address1, address2, city, pincode, phone, state, handleChange, checked }) => (
    <div className="billing-address">
        <div className="details">
            <span className='details__main'>{address1}, {address2}</span>
            <span className="city-state">{city}, {state}</span>
            <span className="pincode">{pincode}</span>
        </div>
        <div className="selector">
            <input type="checkbox" onChange={handleChange(id)} checked=
                {checked} name="shipping-address" id="" />
            <span>Deliver to this address</span>
        </div>
    </div>
);

export default UserAddress;