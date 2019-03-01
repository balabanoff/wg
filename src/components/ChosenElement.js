import React from 'react';
import '../styles/components/chosen-element.scss';

const ChosenElement = ({value, id, deleteElement}) => {
    return(
        <div className="chosen-element">
           <span className="value">{value}</span>
           <span className="button" onClick={() => deleteElement(id)}><span>X</span></span>
        </div>
    );
}

export default ChosenElement;