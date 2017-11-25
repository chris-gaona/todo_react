export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (list, updated)  => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    // take existing list and slice up to updated index
    // takes all items before the item we want to update & spread them out in this array
    ...list.slice(0, updatedIndex),
    // update the chosen item
    updated,
    // add whatever is left in the array
    // takes all items from updatedIndex to end of array & spread them out in this array
    ...list.slice(updatedIndex + 1)
  ]
};

export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id);

  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex + 1)
  ]
};