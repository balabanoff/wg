import React from 'react';
import ChosenElement from './ChosenElement';

const SelectedElements = ({selectedElements, deleteElement}) => {
    return(
        <div className="selected-list">
            <div>
                {selectedElements && selectedElements.map(element => {
                    return <ChosenElement key={element.id} 
                                          value={element.value}
                                          id={element.id}
                                          deleteElement={deleteElement}/>
                })}
            </div>
        </div>
    );
}

export default SelectedElements;