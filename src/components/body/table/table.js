import React, {Component} from "react";
import PropsType from 'prop-types';
import TableItem from '../table-item';

export default class table extends Component {

    static propTypes = {
        items: PropsType.object,
        onAddItem: PropsType.func,
        onDeleteItem: PropsType.func,
        onSortTable: PropsType.func
    };

    constructor(props) {
        super(props);
        this.state = {
            label: '',
            year: ''
        };
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onYearChange = (e) => {
        this.setState({
            year: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {onAddItem} = this.props;
        onAddItem(this.state.year, this.state.label);
        this.setState({
            label: '',
            year: ''
        });
    };
    createTable = (age, text, index, func) => {
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

    render() {
        const {onDeleteItem, onSortTable} = this.props;
        const items = this.props.items;
        const newElements = [];
        for (let index in items) {
            if (items.hasOwnProperty(index)) { // ESLint - просит что бы я поставли такую проверку, не могу понять зачем ???
                newElements[index] = this.createTable(items[index].age, items[index].events, index, onDeleteItem);
            }
        }

        return (
            <div className='section-4' id='section-4'>
                <div className="container">
                    <form className="section-4__form"
                          onSubmit={this.onSubmit}>
                        <button
                            className='section-4__sort-button'
                            type='button'
                            onClick={onSortTable}
                        >
                            Сортировка
                        </button>

                        <ul>
                            {newElements}
                        </ul>
                        <input type="number"
                               min='1900'
                               max={new Date().getFullYear()}
                               onChange={this.onYearChange}
                               value={this.state.year}
                               placeholder='year'
                               className='section-4__input-year'
                        />
                        <input type="text"
                               onChange={this.onLabelChange}
                               value={this.state.label}
                               placeholder='event'
                               className='section-4__input-text'
                        />
                        <button
                            className='section-4__add-button'>Добавить
                        </button>
                    </form>
                </div>
            </div>
        )
    };
}
