import React, {Fragment} from 'react';
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

export default homeView;
