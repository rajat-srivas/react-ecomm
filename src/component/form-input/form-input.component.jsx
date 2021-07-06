import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, error, ...otherProps }) => (
    <div className="group">
        <input className={`form-input ${error ? 'error' : ''}`} onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
        }
    </div>
)

export default FormInput;
