import React from 'react';

const Input = ({type, value, className, placeholder, min, max, onChange}) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={className}
            min={min}
            max={max}
            onChange={onChange}
        />
    )
};

export default Input
