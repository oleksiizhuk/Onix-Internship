import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text, className, type, onClick
}) => {
  return (
    <button
      className={className}
      type={type || 'submit'}
      onClick={onClick}
      tabIndex="0"
    >
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  className: '',
  type: 'submit' || 'button' || 'reset',
  onClick: undefined
};

export default Button;
