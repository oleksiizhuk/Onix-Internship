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
    >
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  className: '',
  type: 'submit',
  onClick: () => {}
};

export default Button;
