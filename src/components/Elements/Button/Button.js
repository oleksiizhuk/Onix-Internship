import React from 'react';

const button = (props) => {

    const {text, className, type, onClick} = props;
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
