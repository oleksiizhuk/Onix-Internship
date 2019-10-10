import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      const { userChoice } = this.props;
      this.state = {
        info: null,
        loading: false,
        userChoice,
        planetLabel: ['id', 'name', 'Population', 'Rotation Period', 'Diameter'],
        personLabel: ['id', 'name', 'Gender', 'birth', 'eye'],
      };
    }

    componentDidMount() {
      const { userChoice } = this.state;
      this.getInfo(userChoice, 2)
        .then((info) => {
          this.setState({
            info
          });
        });
    }

    componentDidUpdate(prevProps, prevState) {
      const { info } = this.state;
      if (prevState.info !== info) {
        this.loading();
      }
    }

    getInfo = async (url, id) => {
      const apiBase = process.env.REACT_APP_API_BASE;
      const res = await fetch(`${apiBase}/${url}/${id}/`);
      const transformResult = await res.json();
      const { userChoice } = this.state;
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
        info, userChoice, planetLabel, personLabel 
      } = this.state;
      const labelName = userChoice === 'planets' ? planetLabel : personLabel;
      console.log(labelName);
      console.log(userChoice);
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
  planetButtons: PropTypes.objectOf(PropTypes.node).isRequired,
  userChoice: PropTypes.string
};

withData.defaultProps = {
  planetButtons: [],
  userChoice: ''
};

export default withData;
