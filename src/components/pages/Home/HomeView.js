import React, {Fragment} from 'react';
import Portfolio from './components/portfolio'
import About from './components/about';
import GetInTouch from './components/getInTouch';
import Table from './components/table';
import Planet from './components/planet'
import Hero from './components/hero';
import ErrorButton from "./components/error-button";

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
            <Planet
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
