import React from 'react';


const heroItem = (props) => {
    const {name, gender, birth, eye} = props.info;
    return (
        <li>
            <span className='heroItem__span'>Name: {name}</span>
            <span className='heroItem__span'>Gender: {gender}</span>
            <span className='heroItem__span'>birth: {birth}</span>
            <span className='heroItem__span'>eye: {eye}</span>
        </li>
    )
};

export default heroItem;
