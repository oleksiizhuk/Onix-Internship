import React from 'react';
import PropTypes from 'prop-types';

import '../../../../scss/pages/home/component/randomPlanetsOrCharacters.scss';
import withData from './withData';

const getPlanet = (props) => {
  const {
    info, labelName, userChoice,
  } = props;
  console.log(props);
  return (
    <div className="random-planet jumbotron rounded">
      <img
        className="planet-image"
        alt="test"
        src={`https://starwars-visualguide.com/assets/img/${userChoice}/${info.id}.jpg`}
      />
      <div>
        <h4>
          {labelName[1]}
: 
          {' '}
          {info.name}
        </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">{labelName[2]}</span>
            <span>{info.ell1}</span>
          </li>
          <li className="list-group-item">
            <span className="term">{labelName[3]}</span>
            <span>{info.ell2}</span>
          </li>
          <li className="list-group-item">
            <span className="term">{labelName[4]}</span>
            <span>{info.ell3}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

getPlanet.propTypes = {
  info: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  userChoice: PropTypes.string,
  labelName: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};

getPlanet.defaultProps = {
  info: {
    name: '',
    ell1: '',
    ell2: '',
    ell3: ''
  },
  userChoice: '',
  labelName: []
};
export default withData(getPlanet);
