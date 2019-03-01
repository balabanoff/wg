import React, { useState } from 'react';

import Checkbox from './Checkbox';
import SelectedElements from './SelectedElements';
import {ListElements}  from '../constants/ListElements';

import "../styles/components/choose-dialog.scss";

export default function ChooseDialog({updateSelectedList, closeDialog, selectedElements}) {

    const [selectedCheckbox, updateCheckBox] = useState();

    const updateCheckBoxhandler = () => updateCheckBox();

    const elements = ListElements.map(el => {
        return {
            ...el,
            checked: selectedElements && selectedElements.find(selected =>  el.id === selected.id) !== undefined,
            disabled: selectedElements && selectedElements.length >= 3        
        }
    });
    return(
        <div className="choose-dialog">
            <p className="dialog-head">
                <span>Диалог выбора элементов</span>
                <span onClick={closeDialog}>X</span>
            </p>
            <div className="filters">
                <label htmlFor="search">Поиск</label>
                <input type="text" name="search" id="search"/>
                <label htmlFor="filter">Фильтр</label>
                <select name="filter" id="filter">
                    <option value="0">Без фильтра</option>
                    <option value="10">Номер > 10</option>
                    <option value="100">Номер > 100</option>
                    <option value="200">Номер > 200</option>
                </select>
            </div>
            <div className="checkbox">
                {elements.map(e => {
                    return  <Checkbox key={e.id} 
                                      value={e.value} 
                                      id={e.id} 
                                      checked={e.checked} 
                                      disabled={e.disabled}
                                      change={updateCheckBoxhandler}/>
                })}               
            </div>
            <p>Выбранные элементы на данный момент:</p>
            <div>
                <SelectedElements selectedElements={selectedElements} deleteElement={()=>{}}/>
            </div>
            <div className="dialog-buttons">
                <button onClick={() => updateSelectedList(selectedCheckbox)}>Cохранить</button>
                <button onClick={closeDialog}>Отмена</button>
            </div>
        </div>
    );
}