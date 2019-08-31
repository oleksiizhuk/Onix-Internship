import React, {Component} from 'react';

import SwapiService from '../../../services/swapi-service';
import HeroItems from '../hero-items'
import './hero.css';


export default class hero extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
            ready: false,
            activeElement: ''
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

    onDragStart = (e, index) => {
        this.draggedItem = this.state.heroes[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        //e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = index => {
        const draggedOverItem = this.state.heroes[index];
        if (this.draggedItem === draggedOverItem) {
            return;
        }
        let heroes = this.state.heroes.filter(item => item !== this.draggedItem);
        heroes.splice(index, 0, this.draggedItem);
        this.setState({heroes});
    };

    onDragEnd = () => {
        this.draggedIdx = null;
    };

    handleClick = (e, index) => {
        if (!e.altKey) {
            return;
        }
        this.setState({
            activeElement: index
        });
        console.log(this);
        console.log(this.li);
        console.log(e.target);
        console.log(index);
        const div = e.target;
    };

    heroItem = () => {
        const {heroes} = {...this.state};
        const {activeElement} = this.state;
        const items = heroes.map((item, index) => {
            return (
                <li
                    className='draggable__item__li'
                    key={index}
                    onDragOver={() => this.onDragOver(index)}
                    onClick={(e) => this.handleClick(e, index)}>
                    <div
                        className={"drag " + (activeElement === index ? 'drag__active' : '')}
                        draggable
                        onDragStart={(e) => this.onDragStart(e, index)}
                        onDragEnd={this.onDragEnd}
                    >
                        <HeroItems
                            info={item}
                        />
                    </div>
                </li>
            )
        });
        return items;
    };


    render() {
        const {ready} = this.state;
        const items = ready ? this.heroItem() : null;
        return (
            <div className='section-6'>
                <div className='container'>
                    <h3 className='section-6__title'>List of heroes</h3>
                    <ul className='draggable__ul'>
                        {items}
                    </ul>
                </div>
            </div>
        )
    }


}
