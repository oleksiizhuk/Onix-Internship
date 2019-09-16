import React, {Component} from 'react';
import Page from './components/layout/Page/Page';
import Home from './components/pages/Home/Home';
import './scss/index.css';

class App extends Component {

    render() {
        return (
            <Page>
                <Home/>
            </Page>
        );
    }
}

export default App;
