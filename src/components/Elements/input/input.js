import React from 'react';

const input = (props) => {

    const {type, value, className, placeholder, min, max, onChange} = props;
    const state = {
        text: value
    };
    return (
        <input
            type={type}
            value={state.text}
            placeholder={placeholder}
            className={className}
            min={min}
            max={max}
            onChange={onChange}
            onFocus={}
            onBlur={}
        />
    )
};

export default input
