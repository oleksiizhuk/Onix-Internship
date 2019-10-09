import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View) => {
  return class extends Component {
    render() {
      // eslint-disable-next-line no-console
      console.log(View);
      const planetButtons = false;
      const planetLoading = false;
      if (!planetLoading) {
        return (
          <div className="section-5">
            <div className="container">
              <div className="button-block">
                {planetButtons}
              </div>
              <div className="random-planet jumbotron rounded">
                <Spinner />
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="section-5">
          <div className="container">
            <div className="button-block">
              {planetButtons}
            </div>
            <View {...this.props} planetLoading />
          </div>
        </div>
      );
    }
  };
};

withData.propTypes = {
  planetButtons: PropTypes.arrayOf(PropTypes.node),
};

withData.defaultProps = {
  planetButtons: [],
};

export default withData;
