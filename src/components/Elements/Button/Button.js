import React from 'react';

const button = ({text, className, type, onClick}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
};
export default button;
