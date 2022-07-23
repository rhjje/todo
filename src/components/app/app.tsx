import React from 'react';
import { AppHeader } from 'components/AppHeader';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import { ItemAddForm } from 'components/ItemAddForm';

import './app.scss';

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

export default App;
