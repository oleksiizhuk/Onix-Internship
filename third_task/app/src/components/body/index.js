import React, {Fragment, Component} from 'react';
import Portfolio from './portfolio'
import About from './about';
import GetInTouch from './getInTouch';

export default class body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [
                {
                    id: 1,
                    name: 'oleksii',
                    surname: 'zhuk',
                    age: '26',
                    city: 'krop',
                    interests: "computer science",
                    hobby: "TV show, travel",
                }
            ]
        };

    }

    render() {
        return (
            <Fragment>
                <Portfolio/>
                <About date={this.state}/>
                <GetInTouch/>
            </Fragment>
        )
    }
}
