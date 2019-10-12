import React, { Component } from 'react';
import Spinner from '../components/pages/Home/components/Spinner';

const WithData = (View, userChoice) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        info: {},
        userChoice,
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
      if (prevState.info !== info) {
        this.loading();
      }
    }

    query = () => {
      this.getInfo(userChoice, 2)
        .then((info) => {
          this.setState({
            info
          });
        });
    };

    getInfo = async (url, id) => {
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
        info, planetLabel, personLabel, loading
      } = this.state;
      const labelName = userChoice === 'planets' ? planetLabel : personLabel;
      if (!loading) {
        return <Spinner />;
      }
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <View {...this.props} info={info} labelName={labelName} />
      );
    }
  };
};

export default WithData;
