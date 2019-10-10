import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './components/Portfolio';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import Table from './components/Table';
import RandomPlanetsOrCharacters from './components/RandomPlanetsOrCharacters';
import Hero from './components/Hero';

import ChoicePlanetOrPerson from './components/ChoicePlanetOrPerson';

const HomeView = (
  {
    person, tableItems, tableLabel, tableYear, onTableLabelChange, onTableYearChange, onTableSubmit, onSortTable,
    planetButtons, planetLoading, planetInfo, userChoice,
    heroItems, heroError, loadingHero
  }
) => {
  return (
    <>
      <Portfolio />
      <About person={person} />
      <Table
        tableItems={tableItems}
        tableLabel={tableLabel}
        tableYear={tableYear}
        onSortTable={onSortTable}
        onTableLabelChange={onTableLabelChange}
        onTableYearChange={onTableYearChange}
        onTableSubmit={onTableSubmit}
      />
      <RandomPlanetsOrCharacters
        planetButtons={planetButtons}
        planetLoading={planetLoading}
        planetInfo={planetInfo}
        userChoice={userChoice}
      />
      <ChoicePlanetOrPerson
        planetButtons={planetButtons}
        userChoice={userChoice}
      />
      <Hero
        heroItems={heroItems}
        heroError={heroError}
        loadingHero={loadingHero}
      />
      <GetInTouch />
    </>
  );
};

HomeView.propTypes = {
  person: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.string)
  ])),
  tableItems: PropTypes.arrayOf(
    PropTypes.node
  ),
  tableLabel: PropTypes.string,
  tableYear: PropTypes.string,
  onSortTable: PropTypes.func,
  onTableLabelChange: PropTypes.func,
  onTableYearChange: PropTypes.func,
  onTableSubmit: PropTypes.func,

  planetButtons: PropTypes.arrayOf(PropTypes.node),
  planetLoading: PropTypes.bool,
  planetInfo: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  userChoice: PropTypes.string,

  heroItems: PropTypes.arrayOf(PropTypes.node),
  heroError: PropTypes.bool,
  loadingHero: PropTypes.bool
};

HomeView.defaultProps = {
  person: {
    socials: {}
  },
  tableItems: [],
  tableLabel: '',
  tableYear: '',
  onSortTable: undefined,
  onTableLabelChange: undefined,
  onTableYearChange: undefined,
  onTableSubmit: undefined,

  planetButtons: [],
  planetLoading: false,
  planetInfo: {},
  userChoice: '',

  heroItems: [],
  heroError: false,
  loadingHero: false
};

export default HomeView;
