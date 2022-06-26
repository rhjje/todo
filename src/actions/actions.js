export const addTodo = (label) => ({
  type: 'ADD_TODO',
  id: Date.now().toString(),
  label,
  important: false,
  done: false,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const toggleDone = (id) => ({
  type: 'TOGGLE_DONE',
  id,
});

export const toggleImportant = (id) => ({
  type: 'TOGGLE_IMPORTANT',
  id,
});

export const search = (text) => ({
  type: 'SEARCH',
  text,
});

export const toggleFilter = (filter) => ({
  type: 'FILTER',
  filter,
});
