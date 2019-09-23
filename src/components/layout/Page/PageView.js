import React from 'react';
import PropTypes from 'prop-types';

const PageView = ({ childrens }) => {
  return (
    <>
      {childrens}
    </>
  );
};


PageView.propTypes = {
  childrens: PropTypes.node
};

PageView.defaultProps = {
  childrens: <h2>Hello world</h2>
};

export default PageView;
