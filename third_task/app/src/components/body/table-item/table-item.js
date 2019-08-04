import React, {Component} from 'react';

export default class tableItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {0: [age], 1: [text]} = this.props;
        const {onDeleteItem} = this.props;
        return (
            <span>
                <span>{age}</span>
                <span>{text}</span>
                <button
                    type='button'
                    onClick={onDeleteItem}>x
                </button>
            </span>
        )
    }
}
