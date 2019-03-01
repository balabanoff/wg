import React, { useState } from 'react';

import CheckboxList from './components/CheckboxList';
import SelectedElements from './components/SelectedElements';
import FiltersBlock from './components/FiltersBlock';

import {checkBoxSelector, searchSelector} from "./selectors/dialogSelectors";
import {removeList, addList} from "./selectors/commonSelectors";
import {ListElements} from "./constants/Init";

import "./styles/components/choose-dialog.scss";

export default function ChooseDialog({updateList, closeDialog, selectedElements}) {
    const [selectedList, updateSelectedList] = useState(selectedElements);
    const [checkboxList] = useState(ListElements);
    const [showinglist, updateShowingList] = useState(checkBoxSelector(selectedList, ListElements));
    const [search, updateSearch] = useState({str: '', num: 0});

    const searchHandler = (str, num) => {
        const searchStr = str != null ? str : search.str;
        const searchNum = num != null ? parseInt(num) : search.num;
        updateSearch({str: searchStr, num: searchNum});
        updateShowingList(checkBoxSelector(selectedList, searchSelector(checkboxList, searchStr, searchNum)))    
    }
    const deleteElementHandler = (id) => {
        const newch = removeList(selectedList, id);
        updateSelectedList(newch);
        updateShowingList(checkBoxSelector(newch, showinglist));
    };
    const updateCheckBoxhandler = (id, value, checked) => {
        const newch = checked ? addList(selectedList, {id, value}) : removeList(selectedList, id);
        updateSelectedList(newch);
        updateShowingList(checkBoxSelector(newch, showinglist));
    };   
    
    return(
        <div className="choose-dialog">
            <p className="dialog-head">
                <span>Диалог выбора элементов</span>
                <span onClick={closeDialog}>X</span>
            </p>
            <FiltersBlock search={searchHandler}/>
            <CheckboxList checkboxList={showinglist} updateCheckBox={updateCheckBoxhandler}/>
            <p>Выбранные элементы на данный момент:</p>
            <SelectedElements selectedElements={selectedList} deleteElement={deleteElementHandler}/>
            <div className="dialog-buttons">
                <button onClick={() => updateList(selectedList)}>Cохранить</button>
                <button onClick={closeDialog}>Отмена</button>
            </div>
        </div>
    );
}