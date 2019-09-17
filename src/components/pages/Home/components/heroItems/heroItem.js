import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './hero-item.css';

const heroItem = ({info: {id, name, gender, birth, eye}}) => {

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

heroItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    birth: PropTypes.string,
    eye: PropTypes.string,
};


export default heroItem;
