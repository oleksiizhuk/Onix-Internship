import React, {Component} from "react";
import TableItem from '../table-item';


export default class table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: '',
            year: ''
        }
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


    render() {
        const {items = [], onDeleteItem, onSortTable} = this.props;
        const newElements = items.map((item, index) => {
            return (
                <li key={index} className='section-4__item-li'>
                    <TableItem
                        {...item}
                        onDeleteItem={() => onDeleteItem(item[0], item[1])}
                    />
                </li>
            )
        });

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
                        className='section-4__add-button'>Добавить</button>
                    </form>
                </div>
            </div>
        )
    };
}
