import React from 'react';
import Checkbox from './Checkbox';

const CheckboxList = ({checkboxList, updateCheckBox}) => {
    return(
        <div className="checkbox">
                {checkboxList.map(checkbox => {
                    return  <Checkbox key={checkbox.id} 
                                      value={checkbox.value} 
                                      id={checkbox.id} 
                                      checked={checkbox.checked} 
                                      disabled={checkbox.disabled}
                                      change={updateCheckBox}/>
                })}               
            </div>
    )
}

export default CheckboxList;