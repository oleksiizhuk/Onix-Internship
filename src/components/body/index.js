import React, {Fragment, Component} from 'react';
import Portfolio from './portfolio'
import About from './about';
import GetInTouch from './getInTouch';
import Table from './table';
import Planet from './planet'
import Hero from './hero';
import ErrorIndicator from './error-indicator';
import ErrorButton from "./error-button";

export default class body extends Component {

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
            hasError: false
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

    render() {
        const {person, hasError} = this.state;
        const {chronology: {items}} = {...this.state};

        if (hasError) {
            return <ErrorIndicator/>
        }

        return (
            <Fragment>
                <Portfolio/>
                <About date={person}/>
                <Table
                    onAddItem={this.addItemObject}
                    items={items}
                    onDeleteItem={this.deleteItem}
                    onSortTable={this.sortObject}
                />
                <Planet/>
                <Hero/>
                <GetInTouch/>
                <ErrorButton/>
            </Fragment>
        )
    }
}
