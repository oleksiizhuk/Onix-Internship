import React, {Component} from "react";
import Spiner from '../spiner';
import './planet.css';

import SwapiService from '../../../services/swapi-service';

export default class planet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: {
                id: 2,
                ell1: null,
                ell2: null,
                ell3: null
            },
            filter: 'planets',
            loading: true,
        }
    }

    buttons = [
        {name: 'planets', label: "planets"},
        {name: 'characters', label: "characters"}
    ];

    swapiService = new SwapiService();

    static generationRandomId() {
        return Math.floor(Math.random() * 10 + 2);
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    getPerson() {
        this.swapiService.getPerson(planet.generationRandomId())
            .then((info) => {
                this.setState({
                    info: info,
                    loading: false
                });
            });
    }

    getPlanet = () => {
        this.swapiService.getPlanet(planet.generationRandomId())
            .then((info) => {
                this.setState({
                    info: info,
                    loading: false
                });
            });
    };

    onLoadingFalse() {
        this.setState(
            {loading: true}
        )
    }

    filter(filter) {
        this.onLoadingFalse();
        switch (filter) {
            case 'planets':
                return this.getPlanet();
            case "characters" :
                return this.getPerson();
            default:
                console.log("default");
        }
    }

    componentDidMount() {
        const {filter} = this.state;
        this.filter(filter);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.filter !== this.state.filter) {
            this.filter(nextState.filter)
        }
    }

    render() {

        const {info, filter, loading} = this.state;

        if (loading) {

            return (
                <div className='section-5'>
                    <div className="container">
                        <div className="random-planet jumbotron rounded">
                            <Spiner/>
                        </div>
                    </div>
                </div>)
        }

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'active-button' : 'btn-outline-secondary';
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={label}
                        onClick={() => this.onFilterChange(name)}>
                    {name}
                </button>
            )
        });

        return (
            <div className='section-5'>
                <div className="container">
                    <div className='button-block'>
                        {buttons}
                    </div>
                    <div className="random-planet jumbotron rounded">

                        {loading ? <Spiner/> :
                            <img className="planet-image" alt={this.state.id}
                                 src={`https://starwars-visualguide.com/assets/img/${this.state.filter}/${info.id}.jpg`}/>
                        }
                        <div>
                            <h4>{info.name}</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span className="term">Population</span>
                                    <span>{info.ell1}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Rotation Period</span>
                                    <span>{info.ell2}</span>
                                </li>
                                <li className="list-group-item">
                                    <span className="term">Diameter</span>
                                    <span>{info.ell3}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}