import React, {Component} from 'react';

import SwapiService from '../../../services/swapi-service';
import HeroItems from '../hero-items'
import './hero.css';


export default class hero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
            ready: false
        }
    }

    swapi = new SwapiService();

    componentDidMount() {
        this.swapi.getAllPeople().then((heroes) => {
            console.log(heroes);
            this.setState({
                heroes,
                ready: true
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    heroItem = () => {
        const {heroes} = {...this.state};
        console.log(heroes);
        console.log(this.state);
        const items = heroes.map((item, index) => {
            return (
                <HeroItems
                    info={item}
                />
            )
        });
        return items;
    };

    render() {
        const {ready} = this.state;
        const items = ready ? this.heroItem() : null;
        return (
            <div>
                <ul>
                    <li>{process.env.REACT_APP_TEST}</li>
                    <li>2</li>
                    <li>3</li>
                    {items}
                </ul>
            </div>
        )
    }


}
