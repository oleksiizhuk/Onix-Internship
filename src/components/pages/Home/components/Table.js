import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Elements/Button/Button';
import Input from '../../../Elements/Input/Input';
import '../../../../scss/pages/home/component/table.scss';
import { ThemeContext } from '../../../../сontext/ThemeContext';

const Table = ({
  onSortTable, tableItems, onTableLabelChange, onTableYearChange, onTableSubmit, tableLabel, tableYear
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`section-4 ${theme}`} id="section-4">
      <div className="container">
        <Button
          text="Cортировка"
          className="section-4__sort-button"
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
      </div>
    </div>

  );
};

export default Table;

Table.propTypes = {
  tableItems: PropTypes.arrayOf(
    PropTypes.node
  ),
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
  onSortTable: undefined,
  onTableLabelChange: undefined,
  onTableYearChange: undefined,
  onTableSubmit: undefined
};
