export interface TodoItem {
  id: number;
  label: string;
  important: boolean;
  done: boolean;
}

export type Filter = 'all' | 'active' | 'done';
