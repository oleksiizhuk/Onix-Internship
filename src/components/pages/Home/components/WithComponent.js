import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View, planetButtons, data) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filter: null
      };
    }

    render() {
      if (!data) {
        return (
          <>
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
          </>
        );
      }

      return <View />;
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
