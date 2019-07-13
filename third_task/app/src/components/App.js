import React, {Fragment, Component} from 'react';

import Header from './header';
import Body from './body';
import Footer from './footer'

import './style/index.css';

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Body/>
                <Footer/>
            </Fragment>
        );
    }
}
