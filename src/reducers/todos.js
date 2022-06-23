const initialState = [
  { id: 1, label: 'Learn javaScript', important: false, done: true },
  { id: 2, label: 'Learn React + redux', important: true, done: false },
  { id: 3, label: 'Learn Redux', important: true, done: false }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          important: action.important,
          done: action.done
        }
      ];
    case 'DELETE_TODO': {
      const index = state.findIndex((item) => item.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    case 'TOGGLE_DONE': {
      const index = state.findIndex((item) => item.id === action.id);
      const oldItem = state[index];
      oldItem.done = !oldItem.done;
      return [
        ...state.slice(0, index),
        oldItem,
        ...state.slice(index + 1)
      ];
    }
    case 'TOGGLE_IMPORTANT': {
      const index = state.findIndex((item) => item.id === action.id);
      const oldItem = state[index];
      oldItem.important = !oldItem.important;
      return [
        ...state.slice(0, index),
        oldItem,
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
};

export default todos;
