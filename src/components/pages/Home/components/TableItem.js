import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../сontext/ThemeContext';

const TableItem = ({
  age, text, onDeleteItem
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <span className="section-4__item-block">
      <span className="section-4__item-age">{age}</span>
      <span className="section-4__item-text">{text}</span>
      <button
        type="button"
        className={`section-4__item-button-delete ${theme}`}
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
