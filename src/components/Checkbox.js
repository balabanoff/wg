import React from 'react';

const CheckBox = ({value, id, checked, disabled, change}) => {
    return(
        <p>
            <input type="checkbox" name={value} value={id} 
                   checked={checked} disabled={disabled} 
                   onChange={() => change(id, value, !checked)}/>
            <span>{value}</span>
        </p>
    );
}

export default CheckBox;