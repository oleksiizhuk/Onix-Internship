import React, {Component} from 'react';

export default class tableItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const [item] = this.props;
        const {onDeleteItem} = this.props;
        return (
            <li key={1}>
                <span>{item[0]} </span>
                <span>{item[1]}</span>
                <button
                    onClick={onDeleteItem}>x</button>
            </li>
        )
    }
}
