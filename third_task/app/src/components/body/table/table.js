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

    removeItem() {

    }

    createElements = () => {
        const {items = [], onDeleteItem} = this.props;
        const test = items.map((item, index) =>
            (
                <li key={index}>
                    <span>{item[0]} </span>
                    <span>{item[1]}</span>
                    <button
                    onClick={onDeleteItem}>x</button>
                </li>
            )
        );
        return test;
    };

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
        const elements = this.createElements();
        const {onDeleteItem} = this.props;
        return (
            <div className='section-4' id='section-4'>
                <div className="container">
                    <form className="table"
                          onSubmit={this.onSubmit}>
                        <ul>
                            <TableItem
                                {...elements}
                                onDeleteItem={onDeleteItem}
                            />

                            {/*<li><span>1993</span> <span>родился</span>
                                <button>X</button>
                            </li>
                            <li><span>2000</span> <span>поступил в школу</span>
                                <button>X</button>
                            </li>
                            <li><span>2008</span> <span>закончил школу</span>
                                <button>X</button>
                            </li>
                            <li><span>2009</span> <span>поступил в коледж</span>
                                <button>X</button>
                            </li>*/}
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
