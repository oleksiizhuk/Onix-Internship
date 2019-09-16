import React, {Fragment} from 'react';
import Portfolio from './components/portfolio'
import About from './components/about';
import GetInTouch from './components/getInTouch';
import Table from './components/table';
/*
import Planet from './components/planet'
import Hero from './components/hero';
import ErrorIndicator from './components/error-indicator';
*/
import ErrorButton from "./components/error-button";

const homeView = (props) => {

    const {date, items} = props;
    console.log(props);

    return (
        <Fragment>
            <div>
                <Portfolio/>

                <About date={date}/>

                <Table
                    onAddItem={props.addItemObject}
                    items={items}
                    onDeleteItem={props.deleteItem}
                    onSortTable={props.sortObject}
                />
                {/*
                <Planet/>
                <Hero/>
*/}

                <GetInTouch/>

                <ErrorButton/>
            </div>
        </Fragment>
    )
};

export default homeView;
