import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text, className, onClick
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      tabIndex="0"
      type="button"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  className: '',
  onClick: undefined
};

export default Button;
