import React from 'react';
import { AppHeader } from 'components/AppHeader';
import { TodoList } from 'components/TodoList';
import { SearchInput } from 'components/SearchInput';
import { ItemStatusFilter } from 'components/ItemStatusFilter';
import { ItemAddForm } from 'components/ItemAddForm';
import styles from './App.module.scss';
import './global.scss';

export const App = () => {
  return (
    <div className={styles.TodoApp}>
      <AppHeader />
      <div className={styles.SearchPanel}>
        <SearchInput />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </div>
  );
};
