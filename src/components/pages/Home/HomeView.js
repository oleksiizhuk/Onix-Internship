import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './components/Portfolio';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import Table from './components/Table';
import Hero from './components/Hero';

import ChoicePlanetOrPerson from './components/ChoicePlanetOrPerson';

const HomeView = (
  {
    person, tableItems, tableLabel, tableYear, onTableLabelChange, onTableYearChange, onTableSubmit, onSortTable,
    planetButtons, userChoice,
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
  userChoice: '',

  heroItems: [],
  heroError: false,
  loadingHero: false
};

export default HomeView;
