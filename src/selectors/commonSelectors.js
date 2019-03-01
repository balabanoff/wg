export const removeList = (list, id) => list.filter(item => item.id !== id);
export const addList = (list, item) =>  [...list, {...item}];