import React from 'react';
import PropTypes from 'prop-types';
import '../../../../scss/pages/home/component/returnToTop.scss';

const ReturnArrow = ({
  scrollToTop
}) => {
  return (
    <button
      onClick={scrollToTop}
      className="return-to-top"
      type="button"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
};

ReturnArrow.propTypes = {
  scrollToTop: PropTypes.func
};

ReturnArrow.defaultProps = {
  scrollToTop: undefined
};

export default ReturnArrow;
