import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View) => {
  return class extends Component {
    render() {
      // eslint-disable-next-line no-console
      console.log(this.props);
      const planetButtons = false;
      const planetLoading = true;
      if (!planetLoading) {
        console.log('test')
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
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {console.log('test')}
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
