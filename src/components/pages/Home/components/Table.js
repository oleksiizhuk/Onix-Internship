import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Elements/Button/Button';
import Input from '../../../Elements/Input/Input';


const Table = ({
  onSortTable, tableItems, onTableLabelChange, onTableYearChange, onTableSubmit, tableLabel, tableYear
}) => {
  return (
    <div className="section-4" id="section-4">
      <div className="container">
        <form className="section-4__form">
          <Button
            text="Cортировка"
            className="section-4__sort-button"
            type="button"
            onClick={onSortTable}
          />
          <ul>
            {tableItems}
          </ul>
          <Input
            type="number"
            placeholder="year"
            min="1900"
            max={new Date().getFullYear()}
            value={tableYear}
            onChange={onTableYearChange}
            className="section-4__input-year"
          />
          <Input
            type="text"
            placeholder="event"
            value={tableLabel}
            onChange={onTableLabelChange}
            className="section-4__input-text"
          />
          <Button
            text="Добавить"
            className="section-4__add-button"
            onClick={onTableSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Table;

Table.propTypes = {
  tableItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  tableLabel: PropTypes.string,
  tableYear: PropTypes.string,
  onSortTable: PropTypes.func,
  onTableLabelChange: PropTypes.func,
  onTableYearChange: PropTypes.func,
  onTableSubmit: PropTypes.func,
};

Table.defaultProps = {
  tableItems: [],
  tableLabel: '',
  tableYear: '',
  onSortTable: () => {
  },
  onTableLabelChange: () => {
  },
  onTableYearChange: () => {
  },
  onTableSubmit: () => {
  }
};
