import React, {Fragment} from 'react';
import './hero-item.css';

const heroItem = (props) => {
    const {id, name, gender, birth, eye} = props.info;

    return (
        <Fragment>
            <span className='heroItem__span'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </span>
            <span className='heroItem__span'>Name: {name}</span>
            <span className='heroItem__span'>Gender: {gender}</span>
            <span className='heroItem__span'>birth: {birth}</span>
            <span className='heroItem__span'>eye: {eye}</span>

        </Fragment>
    )
};

export default heroItem;
