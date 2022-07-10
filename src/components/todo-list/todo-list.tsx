import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleDone, toggleImportant } from '../../actions/actions';

import TodoListItem from '../todo-list-item/todo-list-item';
import { TodoItem, Filter } from '../../types/types';
import './todo-list.scss';

interface TodoListProps {
  items: TodoItem[];
  search: string;
  filter: Filter;
  toggleDone: (id: string) => void;
  toggleImportant: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({
  items,
  search,
  filter,
  toggleDone,
  toggleImportant,
  deleteTodo,
}: TodoListProps) => {
  const searchItems = (todos: TodoItem[], searchFilter: string) => {
    if (searchFilter.length === 0) {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.label.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
    });
  };

  const filterItems = (todos: TodoItem[], activeFilter: Filter) => {
    if (activeFilter === 'active') {
      return todos.filter((item) => !item.done);
    }
    if (activeFilter === 'done') {
      return todos.filter((item) => item.done);
    }
    return todos;
  };

  const visibleItems = searchItems(filterItems(items, filter), search);

  const elements = visibleItems.map((item) => {
    const { id, label, important, done } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          label={label}
          important={important}
          done={done}
          onToggleDone={() => toggleDone(id)}
          onToggleImportant={() => toggleImportant(id)}
          onDelete={() => deleteTodo(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

const mapStateToProps = (state: any) => {
  return {
    items: state.todos,
    search: state.search,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  toggleDone,
  toggleImportant,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
