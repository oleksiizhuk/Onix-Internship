import React, {Component} from 'react';
import ErrorIndicator from './components/errorIndicator/errorIndicator';
import SWApiService from '../../../services/swapi-service';
import HomeView from './HomeView';
import TableItem from "./components/tableItem/tableItem";
import HeroItems from "./components/heroItems/heroItem";

export default class Home extends Component {
    swapiService = new SWApiService();

    constructor(props) {
        super(props);

        this.state = {
            person: {
                id: 1,
                name: 'oleksii',
                surname: 'zhuk',
                age: '26',
                city: 'krop',
                interests: "computer science",
                hobby: "TV show, travel",
                job: 'frontend web developer',
                social: {
                    fb: 'https://www.facebook.com/profile.php?id=100007163145347',
                    twitter: 'https://twitter.com/Oleksii82814989',
                    gMail: 'oleksiizhuk.att@gmail.com',
                    github: 'https://github.com/oleksiizhuk',
                    linkedIn: 'https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%B6%D1%83%D0%BA-317a92162/'
                }
            },
            chronology: {
                items: {
                    0: {age: '2993', events: 'родился'},
                    1: {age: '2000', events: 'поступил в школу'},
                    2: {age: '1000', events: 'тест'}
                }
            },
            lastIndex: {
                id: 2
            },
            info: null,
            hasError: false,
            tableLabel: '',
            tableYear: '',

            infoPlanet: {
                id: 2,
                ell1: null,
                ell2: null,
                ell3: null
            },
            filterPlanet: 'planets',
            loading: true,

            heroes: [],
            error: false,
            loadingHero: false,
            activeElement: null,
            planetButtons: [
                {name: 'planets', label: "planets"},
                {name: 'characters', label: "characters"}
            ]
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

// table
    createTableObject = (year, text, index) => {
        return {
            [index]: {age: year, events: text}
        }
    };

    addItemObject = () => {
        const {tableYear, tableLabel, lastIndex: {id: lastIndex}, chronology: {items}} = this.state;
        const newIndex = lastIndex + 1;
        const newItem = this.createTableObject(tableYear, tableLabel, newIndex);
        this.setState({
            chronology: {items: {...items, ...newItem}},
            lastIndex: {id: newIndex}
        });
    };

    deleteTableItem = (id) => {
        const newItems = {...this.state.chronology.items};
        const newObject = Object.keys(newItems).reduce((item, index) => {
            if (index !== id) {
                item[index] = newItems[index]
            }
            return item
        }, {});
        this.setState({
            chronology: {items: {...newObject}}
        });
    };

    tableSortObject = () => {
        const data = {...this.state.chronology.items};
        const sorted = {};
        Object
            .keys(data).sort((a, b) => {
            return data[a].age - data[b].age;
        })
            .forEach((key, index) => {
                sorted[index] = {...data[key]};
            });
        this.setState({
            chronology: {items: {...sorted}}
        });
    };

    onLabelChange = (e) => {
        this.setState({
            tableLabel: e.target.value
        });
    };

    onYearChange = (e) => {
        this.setState({
            tableYear: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.addItemObject(this.state.tableYear, this.state.tableLabel);
        this.setState({
            tableLabel: '',
            tableYear: ''
        });
    };

    createTable = () => {
        const {chronology: {items}} = {...this.state};
        const newElements = [];
        for (let index in items) {
            if (items.hasOwnProperty(index)) {
                newElements[index] = this.createTableItem(items[index].age, items[index].events, index, this.deleteTableItem);
            }
        }
        return newElements;
    };

    createTableItem = (age, text, index, func) => {
        return (
            <li key={index} className='section-4__item-li'>
                <TableItem
                    age={age}
                    text={text}
                    onDeleteItem={() => func(index)}
                />
            </li>
        )
    };
//Table ***

//Planet ***
    createButtons = () => {
        const {filterPlanet, planetButtons} = this.state;
        return planetButtons.map(({name, label}) => {
            const isActive = filterPlanet === name;
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
    };

    onFilterChange = (filterPlanet) => {
        this.setState({filterPlanet});
    };

    generationRandomId = () => Math.floor(Math.random() * 10 + 2);

    getItem = (query) => {
        query(this.generationRandomId())
            .then((infoPlanet) => {
                this.setState({
                    infoPlanet: infoPlanet,
                    loading: false
                });
            });
    };

    onLoadingFalse() {
        this.setState(
            {loading: true}
        )
    }

    filter(filterPlanet) {
        this.onLoadingFalse();
        switch (filterPlanet) {
            case 'planets':
                return this.getItem(this.swapiService.getPlanet);
            case "characters" :
                return this.getItem(this.swapiService.getPerson);
            default:
                console.log("default");
        }
    }

    componentDidMount() {
        const {filterPlanet} = this.state;
        this.filter(filterPlanet);

        this.swapiService.getAllPeople().then((heroes) => {
            this.setState({
                heroes,
                loadingHero: true
            });
        }).catch(() => {
            const {error} = this.state;
            this.setState({error: !error});
        });
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.filterPlanet !== this.state.filterPlanet) {
            this.filter(nextState.filterPlanet)
        }
    }

//Planet ***

// hero ***
    heroItem = () => {
        const {heroes} = {...this.state};
        const {activeElement} = this.state;
        const items = heroes.map((item, index) => {
            return (
                <li
                    className={'draggable__item__li ' + (activeElement === index ? 'drag__active' : '')}
                    key={index}
                    onDragOver={() => this.onDragOver(index)}
                    onClick={(e) => this.handleClick(e, index)}>
                    <div
                        className="drag"
                        draggable
                        onDragStart={(e) => this.onDragStart(e, index)}
                    >
                        <HeroItems
                            info={item}
                        />
                    </div>
                </li>
            )
        });
        return (items);
    };

    onDragStart = (e, index) => {
        this.draggedItem = this.state.heroes[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
    };

    onDragOver = index => {
        const draggedOverItem = this.state.heroes[index];
        if (this.draggedItem === draggedOverItem) {
            return;
        }
        let heroes = this.state.heroes.filter(item => item !== this.draggedItem);
        heroes.splice(index, 0, this.draggedItem);
        this.setState({heroes, activeElement: index});
    };

    handleClick = (e, index) => {
        if (e.ctrlKey || e.metaKey) {
            const {activeElement} = this.state;
            if (activeElement === index) {
                this.setState({
                    activeElement: null
                })
            }
            return;
        }
        if (e.altKey) {
            this.setState({
                activeElement: index
            });
        }
    };

    //hero ***
    render() {
        const {
            person,
            hasError,
            tableLabel,
            tableYear,
            loading,
            infoPlanet,
            filterPlanet,
            loadingHero,
            error
        } = this.state;
        const tableItems = this.createTable();
        const buttons = this.createButtons();

        const itemsHero = (loadingHero || !error) ? this.heroItem() : null;
        if (hasError) {
            return <ErrorIndicator/>
        }
        return (
            <HomeView
                date={person}

                tableItems={tableItems}
                tableLabel={tableLabel}
                tableYear={tableYear}
                onAddItem={this.addItemObject}
                onDeleteItem={this.deleteTableItem}
                onSortTable={this.tableSortObject}
                onTableLabelChange={this.onLabelChange}
                onTableYearChange={this.onYearChange}
                onTableSubmit={this.onSubmit}

                planetButtons={buttons}
                planetLoading={loading}
                planetInfo={infoPlanet}
                planetFilter={filterPlanet}

                heroItems={itemsHero}
                heroError={error}
                loadingHero={loadingHero}
            />
        )
    }
};
