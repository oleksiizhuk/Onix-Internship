import React, {Component} from 'react';

export default class tableItem extends Component {

    render() {
        const {0: [age], 1: [text]} = this.props;
        const {onDeleteItem} = this.props;
        return (
            <span className='section-4__item-block'>
                <span className='section-4__item-age'>{age}</span>
                <span className='section-4__item-text'>{text}</span>
                <button
                    type='button'
                    className='section-4__item-button-delete'
                    onClick={onDeleteItem}><i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}
