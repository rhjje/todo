export interface TodoItem {
  id: string;
  label: string;
  important: boolean;
  done: boolean;
}

export type Filter = 'all' | 'active' | 'done';
