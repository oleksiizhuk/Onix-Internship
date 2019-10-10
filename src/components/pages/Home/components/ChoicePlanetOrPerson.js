import React from 'react';
import PropTypes from 'prop-types';
import GetPlanet from './GetPlanet';

const ChoicePlanetOrPerson = (
  {
    planetButtons, userChoice
  }
) => {
  return (
    <div className="section-5">
      <div className="container">
        <div className="button-block">
          {planetButtons}
        </div>
        <GetPlanet userChoice={userChoice} />
      </div>
    </div>
  );
};

ChoicePlanetOrPerson.propTypes = {
  planetButtons: PropTypes.objectOf(PropTypes.array),
  userChoice: PropTypes.string
};

ChoicePlanetOrPerson.defaultProps = {
  planetButtons: {},
  userChoice: ''
};

export default ChoicePlanetOrPerson;
