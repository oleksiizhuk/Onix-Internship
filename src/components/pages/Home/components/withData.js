import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const withData = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        info: null,
        loading: false,
        userChoice: 'planets',
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
      if (prevProps.userChoice !== this.props.userChoice) {
        this.query();
      }
    }

    query = () => {
      const { userChoice } = this.props;
      if ('characters' == this.props) {
        console.log('tessdfsdfsdfsdf')
      }
      this.getInfo(userChoice, 2)
        .then((info) => {
          this.setState({
            info
          });
        });
    };

    getInfo = async (url, id) => {
      const apiBase = process.env.REACT_APP_API_BASE;
      console.log(`${apiBase}/${url}/${id}/`)
      const res = await fetch(`${apiBase}/${url}/${id}/`);
      const transformResult = await res.json();
      const { userChoice } = this.state;
      console.log(transformResult);
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
      console.log(info)
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
