import React from 'react';
import { FilterOptions}  from '../constants/Init';

const FiltersBlock = ({search}) => {
    return(
        <div className="filters">
                <label htmlFor="search">Поиск</label>
                <input type="text" name="search" id="search" onChange={(e) => {e.persist();search(e.target.value, null)}}/>
                <label htmlFor="filter">Фильтр</label>
                <select name="filter" id="filter" onChange={(e) => {e.persist();search(null, e.target.value)}}>
                    {FilterOptions.map(option => <option value={option.value} key={option.value}>{option.label}</option>)}
                </select>
        </div>
    )
}

export default FiltersBlock;