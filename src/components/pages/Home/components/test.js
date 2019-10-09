import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import '../../../../scss/pages/home/component/randomPlanetsOrCharacters.scss';

const test = ({
  planetLoading, planetInfo, planetFilter
}) => {
  return (
    <div className="random-planet jumbotron rounded">

      {planetLoading ? <Spinner />
        : (
          <img
            className="planet-image"
            alt="test"
            src={`https://starwars-visualguide.com/assets/img/${planetFilter}/${planetInfo.id}.jpg`}
          />
        )}
      <div>
        <h4>{planetInfo.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{planetInfo.ell1}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{planetInfo.ell2}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{planetInfo.ell3}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

test.propTypes = {
  planetLoading: PropTypes.bool,
  planetInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  planetFilter: PropTypes.string,
};

test.defaultProps = {
  planetLoading: true,
  planetInfo: {},
  planetFilter: '',
};
export default test;
