import { Reducer } from 'redux';
import { ActionType } from 'redux/types';
import { Action } from 'redux/actions/actions';

const initialState = [
  { id: '1', label: 'Learn JavaScript', important: false, done: true },
  { id: '1', label: 'Learn TypeScript', important: false, done: true },
  { id: '2', label: 'Learn React', important: false, done: true },
  { id: '3', label: 'Learn Node.js', important: true, done: false },
];

interface Todos {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export const todos: Reducer<Todos[], Action> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.AddTodo:
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          important: action.important,
          done: action.done,
        },
      ];
    case ActionType.DeleteTodo: {
      const index = state.findIndex((item: any) => item.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case ActionType.ToggleDone: {
      const index = state.findIndex((item: any) => item.id === action.id);
      const oldItem = state[index];
      oldItem.done = !oldItem.done;
      return [...state.slice(0, index), oldItem, ...state.slice(index + 1)];
    }
    case ActionType.ToggleImportant: {
      const index = state.findIndex((item: any) => item.id === action.id);
      const oldItem = state[index];
      oldItem.important = !oldItem.important;
      return [...state.slice(0, index), oldItem, ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};
