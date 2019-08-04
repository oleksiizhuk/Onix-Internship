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
        const {items = [], onDeleteItem} = this.props;
        const newElements = items.map((item, index) => {
            return (
                <li key={index}>
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
                    <form className="table"
                          onSubmit={this.onSubmit}>
                        <ul>
                            {newElements}
                        </ul>
                        <input type="text"
                               onChange={this.onYearChange}
                               value={this.state.year}
                               placeholder='year'
                        />
                        <input type="text"
                               onChange={this.onLabelChange}
                               value={this.state.label}
                               placeholder='event'
                        />
                        <button>Добавить</button>
                    </form>
                </div>
            </div>
        )
    };
}
