import React from "react";
import PropsType from 'prop-types';
import Button from '../../../../Elements/Button/Button';
import Input from '../../../../Elements/input/input'


const table = (props) => {

    const {onSortTable, tableItems, onTableLabelChange, onTableYearChange, onTableSubmit, tableLabel, tableYear} = props;
    return (
        <div className='section-4' id='section-4'>
            <div className="container">
                <form className="section-4__form">
                    <Button
                        text={'Cортировка'}
                        className={'section-4__sort-button'}
                        type={'button'}
                        onClick={onSortTable}
                    />
                    <ul>
                        {tableItems}
                    </ul>
                    <Input
                        type={'number'}
                        placeholder={'year'}
                        min={'1900'}
                        max={new Date().getFullYear()}
                        value={tableYear}
                        onChange={onTableYearChange}
                        className={'section-4__input-year'}

                    />
                    <Input
                        type={'text'}
                        placeholder={'event'}
                        value={tableLabel}
                        onChange={onTableLabelChange}
                        className={'section-4__input-text'}

                    />
                    <Button
                        text={'Добавить'}
                        className={'section-4__add-button'}
                        onClick={onTableSubmit}
                    />
                </form>
            </div>
        </div>
    )

};

export default table;

table.propTypes = {
    items: PropsType.object,
    onAddItem: PropsType.func,
    onDeleteItem: PropsType.func,
    onSortTable: PropsType.func
};