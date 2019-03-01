import React, { useState } from 'react';

import SelectedElements from './components/SelectedElements';
import ChooseDialog from './ChooseDialog';
import {InitSelected}  from './constants/Init';

import {removeList} from "./selectors/commonSelectors";

import "./styles/components/select-widget.scss";

export default function SelectWidget() {
  const [isChooseDialogOpen, changeChoise] = useState(false);
  const [selectedElements, updateSelectedList] = useState(InitSelected);
  const deleteElementHandler = (id) => updateSelectedList(removeList(selectedElements,id));
  const updateSelectedListHandler = (arr) => {
    updateSelectedList(arr);
    changeChoise(false);
  };

  return (
    <div className="select-widget">
      <h2>Выбор элементов</h2>
      <p>На данный момент у вас выбранно {selectedElements && selectedElements.length} элемента</p>      
      <SelectedElements selectedElements={selectedElements} 
                        deleteElement={deleteElementHandler}/>
      <button className="btn-ctrl" 
              onClick={() => changeChoise(!isChooseDialogOpen)}>
              Изменить мой выбор
      </button>

      {isChooseDialogOpen && <ChooseDialog selectedElements={selectedElements} 
                                           updateList={updateSelectedListHandler} 
                                           closeDialog={() => changeChoise(false)}/>}      
    </div>
  );
}
