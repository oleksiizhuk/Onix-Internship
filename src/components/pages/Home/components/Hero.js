import React from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from './ErrorIndicator';
import Spinner from './Spinner';
import '../../../../scss/pages/home/component/hero.scss';

const Hero = ({
  heroItems, heroError, loadingHero
}) => {
  const error = heroError ? <ErrorIndicator /> : null;
  const items = (loadingHero || !error) ? heroItems : null;
  const spinner = (!loadingHero) ? <Spinner /> : null;
  return (
    <div className="section-6">
      <div className="container">
        <ul className="draggable__ul">
          {error}
          {spinner}
          {items}
        </ul>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroItems: PropTypes.arrayOf(PropTypes.node),
  heroError: PropTypes.bool,
  loadingHero: PropTypes.bool
};

Hero.defaultProps = {
  heroItems: [],
  heroError: false,
  loadingHero: false
};

export default Hero;
