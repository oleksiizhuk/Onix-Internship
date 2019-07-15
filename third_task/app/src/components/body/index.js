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
                    job: 'frontend web developer',
                    social: [
                        {
                            fb: 'https://www.facebook.com/profile.php?id=100007163145347',
                            twitter: 'https://twitter.com/Oleksii82814989',
                            gMail: 'oleksiizhuk.att@gmail.com',
                            github: 'https://github.com/oleksiizhuk',
                            linkedIn: 'https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%B6%D1%83%D0%BA-317a92162/'
                        }
                    ]
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
