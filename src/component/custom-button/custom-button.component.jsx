import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'goolge-sign-in' : ''}  custom-button`} {...otherProps} >
        {children}
    </button>
)
    ;
export default CustomButton;