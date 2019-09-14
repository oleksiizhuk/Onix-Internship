import React, {Component, Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageView from './PageView';

export default class Page extends Component {
    render() {

        return (
            <Fragment>
                <Header/>
                <PageView {...this.props.children}/>
                <Footer/>
            </Fragment>
        )
    }


}

