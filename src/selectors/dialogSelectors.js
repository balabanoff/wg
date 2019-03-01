export const searchSelector = (list, string, num) => list.filter(item => item.value.indexOf(string) !== -1 && item.id > num);
export const checkBoxSelector =  (selectedList, showinglist) => showinglist.map(item => {
    return {
        ...item,
        checked: selectedList && selectedList.find(selected =>  item.id === selected.id) !== undefined,
        disabled: selectedList && selectedList.length >= 3        
    }
});

