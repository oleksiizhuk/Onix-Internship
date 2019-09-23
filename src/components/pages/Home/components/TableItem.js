import React from 'react';
import PropTypes from 'prop-types';

const TableItem = ({
  age, text, onDeleteItem
}) => {
  return (
    <span className="section-4__item-block">
      <span className="section-4__item-age">{age}</span>
      <span className="section-4__item-text">{text}</span>
      <button
        type="button"
        className="section-4__item-button-delete"
        onClick={onDeleteItem}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

TableItem.propTypes = {
  age: PropTypes.string,
  text: PropTypes.string,
  onDeleteItem: PropTypes.func
};


TableItem.defaultProps = {
  age: '',
  text: '',
  onDeleteItem: undefined,
};

export default TableItem;
