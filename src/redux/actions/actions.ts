import { ActionType } from 'redux/types';
import { Filter } from 'types/types';

export const addTodo = (label: string) => ({
  type: ActionType.AddTodo as const,
  id: Date.now().toString(),
  label,
  important: false,
  done: false,
});

export const deleteTodo = (id: string) => ({
  type: ActionType.DeleteTodo as const,
  id,
});

export const toggleDone = (id: string) => ({
  type: ActionType.ToggleDone as const,
  id,
});

export const toggleImportant = (id: string) => ({
  type: ActionType.ToggleImportant as const,
  id,
});

export const search = (text: string) => ({
  type: ActionType.Search as const,
  text,
});

export const toggleFilter = (filter: Filter) => ({
  type: ActionType.ToggleFilter as const,
  filter,
});

export type Action = ReturnType<
  | typeof addTodo
  | typeof deleteTodo
  | typeof toggleDone
  | typeof toggleImportant
  | typeof search
  | typeof toggleFilter
>;
