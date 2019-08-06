import React, {Fragment, Component} from 'react';
import Portfolio from './portfolio'
import About from './about';
import GetInTouch from './getInTouch';
import Table from './table';

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
            chronology: [
                [['1993'], ['родился']],
                [['2000'], ['поступил в школу']],
                [['2008'], ['закончил школу']],
                [['2009'], ['поступил в коледж']]]
        };
    }

    createItem = (years, text) => {
        return [
            [years], [text]
        ]
    };

    addItem = (years, text) => {
        const newItem = this.createItem(years, text);
        this.setState(({chronology}) => {
            const newArray = [...chronology, newItem];
            return {
                chronology: newArray
            }
        });

    };

    deleteItem = (year, text) => {
        const [...arr] = this.state.chronology;
        const newArr = arr.filter((item) => item[0] !== year && item[1] !== text
        );
        this.setState({
            chronology: newArr
        });
    };

    sort = () => {
        const [...arr] = this.state.chronology;
        const newArr = arr.sort((a, b) => a[0] - b[0]
        );
        console.log(newArr);
        this.setState({
            chronology: newArr
        })
    };

    render() {
        const {person} = this.state;
        const {chronology} = this.state;
        return (
            <Fragment>
                <Portfolio/>
                <About date={person}/>
                <Table
                    onAddItem={this.addItem}
                    items={chronology}
                    onDeleteItem={this.deleteItem}
                    onSortTable={this.sort}
                />
                <GetInTouch/>
            </Fragment>
        )
    }
}
