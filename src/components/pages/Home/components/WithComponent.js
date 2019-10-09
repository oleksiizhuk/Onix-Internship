import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View, planetButtons, planetLoading) => {
  return class extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        filter: 'planets',
        planetFilter: 'planets'
      };
    }

    componentDidMount() {
      const { filter } = this.state;
      let query;
      if (filter === 'planets') {
        query = this.getPlanet(2);
      } else {
        query = this.getPerson(2);
      }
      query(this.generationRandomId())
        .then((planetInfo) => {
          this.setState({
            planetInfo,
            loading: false
          });
        });
    }

    getResource = async (url) => {
      const apiBase = process.env.REACT_APP_API_BASE;
      const res = await fetch(`${apiBase}${url}`);
      return res.json();
    };

    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this.transformPerson(person);
    };


    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this.transformPlanet(planet);
    };

    transformPlanet(planet) {
      return {
        id: this.extractId(planet),
        name: planet.name,
        ell1: planet.population,
        ell2: planet.rotation_period,
        ell3: planet.diameter
      };
    }

    transformPerson(person) {
      return {
        id: this.extractId(person),
        name: person.name,
        ell1: person.gender,
        ell2: person.birth_year,
        ell3: person.eye_color
      };
    }

    render() {
      const { planetInfo } = this.state;
      // eslint-disable-next-line no-console
      console.log(View);
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
            <View planetInfo={planetInfo} planetLoading />
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

export default withData();
