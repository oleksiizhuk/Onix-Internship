import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        info: {},
        loading: false,
        planetLabel: ['id', 'name', 'Population', 'Rotation Period', 'Diameter'],
        personLabel: ['id', 'name', 'Gender', 'birth', 'eye'],
      };
    }

    componentDidMount() {
      this.query();
    }

    componentDidUpdate(prevProps, prevState) {
      const { info } = this.state;
      const { userChoice } = this.props;
      if (prevState.info !== info) {
        this.loading();
      }
      const prevPropsUserChoice = prevProps.userChoice;
      if (prevPropsUserChoice !== userChoice) {
        this.query();
      }
    }

    query = () => {
      const { userChoice } = this.props;
      const query = userChoice === 'planets' ? 'planets' : 'people';
      this.getInfo(query, 2)
        .then((info) => {
          this.setState({
            info
          });
        });
    };

    getInfo = async (url, id) => {
      const { userChoice } = this.props;
      const apiBase = process.env.REACT_APP_API_BASE;
      const res = await fetch(`${apiBase}/${url}/${id}/`);
      const transformResult = await res.json();
      return userChoice === 'planets' ? this.transformPlanet(transformResult) : this.transformPerson(transformResult);
    };

    loading = () => {
      this.setState({
        loading: true
      });
    };

    extractId = ({ url }) => {
      const idRegExp = /\/(\d*)\/$/;
      return url.match(idRegExp)[1];
    };

    transformPerson(person) {
      return {
        id: this.extractId(person),
        name: person.name,
        ell1: person.gender,
        ell2: person.birth_year,
        ell3: person.eye_color
      };
    }

    transformPlanet(planet) {
      return {
        id: this.extractId(planet),
        name: planet.name,
        ell1: planet.population,
        ell2: planet.rotation_period,
        ell3: planet.diameter
      };
    }


    render() {
      const {
        info, planetLabel, personLabel
      } = this.state;
      const { userChoice } = this.props;
      const labelName = userChoice === 'planets' ? planetLabel : personLabel;
      if (!info) {
        return <Spinner />;
      }
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <View {...this.props} info={info} labelName={labelName} />
      );
    }
  };
};

withData.propTypes = {
  planetButtons: PropTypes.objectOf(PropTypes.node),
  userChoice: PropTypes.string
};

withData.defaultProps = {
  planetButtons: [],
  userChoice: ''
};

export default withData;
