import React, {Fragment} from 'react';

import Header from './header';
import Body from './body';
import Footer from './footer'

import './style/index.css';

function App() {
    return (
        <Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </Fragment>
    );
}

export default App;