import React from 'react';
import PropTypes from 'prop-types';
import Portfolio from './components/Portfolio';
import About from './components/About';
import GetInTouch from './components/GetInTouch';
import Table from './components/Table';
import RandomPlanetsOrCharacters from './components/RandomPlanetsOrCharacters';
import Hero from './components/Hero';

const HomeView = (
  {
    date, tableItems, tableLabel, tableYear, onTableLabelChange, onTableYearChange, onTableSubmit, onSortTable,
    planetButtons, planetLoading, planetInfo, planetFilter,
    heroItems, heroError, loadingHero
  }
) => {
  return (
    <>
      <Portfolio />
      <About date={date} />
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
        planetFilter={planetFilter}
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
  date: PropTypes.objectOf,
  tableItems: PropTypes.arrayOf,
  tableLabel: PropTypes.string,
  tableYear: PropTypes.string,
  onSortTable: PropTypes.func,
  onTableLabelChange: PropTypes.func,
  onTableYearChange: PropTypes.func,
  onTableSubmit: PropTypes.func,

  planetButtons: PropTypes.arrayOf,
  planetLoading: PropTypes.bool,
  planetInfo: PropTypes.objectOf,
  planetFilter: PropTypes.string,

  heroItems: PropTypes.arrayOf,
  heroError: PropTypes.bool,
  loadingHero: PropTypes.bool
};

HomeView.defaultProps = {
  date: {},
  tableItems: [],
  tableLabel: '',
  tableYear: '',
  onSortTable: () => {},
  onTableLabelChange: () => {},
  onTableYearChange: () => {},
  onTableSubmit: () => {},

  planetButtons: [],
  planetLoading: false,
  planetInfo: {},
  planetFilter: '',

  heroItems: [],
  heroError: false,
  loadingHero: false
};

export default HomeView;
