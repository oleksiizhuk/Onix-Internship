import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, className, value, placeholder, min, max, onChange
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  type: '',
  className: '',
  value: '',
  placeholder: '',
  min: '',
  max: '',
  onChange: undefined
};

export default Input;
