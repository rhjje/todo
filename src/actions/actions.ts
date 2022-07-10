export const addTodo = (label: string) => ({
  type: 'ADD_TODO',
  id: Date.now().toString(),
  label,
  important: false,
  done: false,
});

export const deleteTodo = (id: string) => ({
  type: 'DELETE_TODO',
  id,
});

export const toggleDone = (id: string) => ({
  type: 'TOGGLE_DONE',
  id,
});

export const toggleImportant = (id: string) => ({
  type: 'TOGGLE_IMPORTANT',
  id,
});

export const search = (text: string) => ({
  type: 'SEARCH',
  text,
});

export const toggleFilter = (filter: string) => ({
  type: 'FILTER',
  filter,
});
