import React from 'react';
import PropTypes from 'prop-types';
import GetPlanet from './GetPlanet';
import GetPerson from './GetPerson';

const ChoicePlanetOrPerson = (
  {
    planetButtons, userChoice
  }
) => {
  const View = userChoice === 'planets' ? <GetPlanet userChoice={userChoice} /> : <GetPerson userChoice={userChoice} />;
  return (
    <div className="section-5">
      <div className="container">
        <div className="button-block">
          {planetButtons}
        </div>
        {View}
      </div>
    </div>
  );
};

ChoicePlanetOrPerson.propTypes = {
  planetButtons: PropTypes.arrayOf(PropTypes.node),
  userChoice: PropTypes.string
};

ChoicePlanetOrPerson.defaultProps = {
  planetButtons: {},
  userChoice: ''
};

export default ChoicePlanetOrPerson;
