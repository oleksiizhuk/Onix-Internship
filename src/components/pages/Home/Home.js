import React, {Component} from 'react';
import ErrorIndicator from './components/error-indicator';
import SwapiService from '../../../services/swapi-service';
import HomeView from './HomeView';
import TableItem from "./components/table-item";

export default class Home extends Component {
    swapi = new SwapiService();

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
                    2: {age: '2008', events: 'закончил школу'},
                    3: {age: '2009', events: 'поступил в коледж'},
                    4: {age: '1000', events: 'тест'}
                }
            },
            lastIndex: {
                id: 4
            },
            filter: 'Planet',
            info: null,
            hasError: false,
            tableLabel: '',
            yearLabel: ''
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    sortObject = () => {
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

    createItemObj = (year, text) => {
        let lastIndex = {...this.state.lastIndex};
        lastIndex.id = ++lastIndex.id;
        this.setState({
            lastIndex: lastIndex
        });
        return {
            [lastIndex.id]: {age: year, events: text}
        }
    };

    addItemObject = (year = 9999, text = "error") => {
        const newItem = this.createItemObj(year, text);
        const newObject = {...this.state.chronology.items, ...newItem};
        this.setState({
            chronology: {items: {...this.state.chronology.items, ...newObject}}
        }, () => console.log(this.state.chronology));
    };

    deleteItem = (id) => {
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


    // table
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
        const {onAddItem} = this.props;
        onAddItem(this.state.tableYear, this.state.tableLabel);
        this.setState({
            tableLabel: '',
            tableYear: ''
        });
    };

    createTable = () => {
        const {chronology: {items}} = {...this.state};
        const newElements = [];
        for (let index in items) {
            if (items.hasOwnProperty(index)) { // ESLint - просит что бы я поставли такую проверку, не могу понять зачем ???
                newElements[index] = this.createTableItem(items[index].age, items[index].events, index, this.deleteItem);
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

    render() {
        const {person, hasError} = this.state;
        const tableItems = this.createTable();

        if (hasError) {
            return <ErrorIndicator/>
        }

        return (
            <HomeView
                date={person}
                talbeItems={tableItems}
                onAddItem={this.addItemObject}
                onDeleteItem={this.deleteItem}
                onSortTable={this.sortObject}
                onTableLabelChange={this.onLabelChange}
                onTableYearChange={this.onYearChange}
                onTableSubmit={this.onSubmit}
                onTableCreateTable={this.createTable(age, text, index, func)}
            />
        )
    }
};
