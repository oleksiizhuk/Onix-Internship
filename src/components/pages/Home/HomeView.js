import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Portfolio from './components/portfolio/portfolio'
import About from './components/about/about';
import GetInTouch from './components/getInTouch/getInTouch';
import Table from './components/table/table';
import RandomPlanetsOrCharacters from './components/randomPlanetsOrCharacters/randomPlanetsOrCharacters';
import Hero from './components/hero/hero';
import ErrorButton from "./components/errorButton/errorButton";

const homeView = (props) => {

    const {date, tableItems, tableLabel, tableYear, onTableLabelChange, onTableYearChange, onTableSubmit, addItemObject, onSortTable} = props;
    const {planetButtons, planetLoading, planetInfo, planetFilter} = props;
    const {heroItems, heroError, loadingHero} = props;
    return (
        <Fragment>
            <Portfolio/>
            <About date={date}/>
            <Table
                tableItems={tableItems}
                tableLabel={tableLabel}
                tableYear={tableYear}
                onAddItem={addItemObject}
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
            <GetInTouch/>
            <ErrorButton/>
        </Fragment>
    )
};

homeView.propTypes = {
    date: PropTypes.object,
    tableItems: PropTypes.array,
    tableLabel: PropTypes.string,
    tableYear: PropTypes.string,
    onAddItem: PropTypes.func,
    onSortTable: PropTypes.func,
    onTableLabelChange: PropTypes.func,
    onTableYearChange: PropTypes.func,
    onTableSubmit: PropTypes.func,

    planetButtons: PropTypes.array,
    planetLoading: PropTypes.bool,
    planetInfo: PropTypes.object,
    planetFilter: PropTypes.string,

    heroItems: PropTypes.array,
    heroError: PropTypes.bool,
    loadingHero: PropTypes.bool
};

export default homeView;
