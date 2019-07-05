import React, {Fragment} from 'react';
import Portfolio from './portfolio'
import About from './about';
import GetInTouch from './getInTouch';

function body() {
    return (
        <Fragment>
            <Portfolio/>
            <About/>
            <GetInTouch/>
        </Fragment>
    )
}

export default body;

