import React from 'react';
import PropTypes from 'prop-types';
import '../../../../scss/pages/home/component/heroItem.scss';

const HeroItem = ({
  item: {
    id, name, ell1, ell2, ell3
  }
}) => {
  return (
    <>
      <span className="heroItem__span">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
      </span>
      <span className="heroItem__span">
Name:
        {name}
      </span>
      <span className="heroItem__span">
Gender:
        {ell1}
      </span>
      <span className="heroItem__span">
birth:
        {ell2}
      </span>
      <span className="heroItem__span">
eye:
        {ell3}
      </span>
    </>
  );
};

HeroItem.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  gender: PropTypes.string,
  birth: PropTypes.string,
  eye: PropTypes.string,
};

HeroItem.defaultProps = {
  id: 0,
  name: '',
  gender: '',
  birth: '',
  eye: '',
};

export default HeroItem;
