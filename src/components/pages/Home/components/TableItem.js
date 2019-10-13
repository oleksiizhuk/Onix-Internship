import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../../../сontext/ThemeContext';

const TableItem = ({
  age, text, onDeleteItem
}) => {
  return (
    <ThemeConsumer>
      {
        ({ theme }) => (
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
        )
      }
    </ThemeConsumer>
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
