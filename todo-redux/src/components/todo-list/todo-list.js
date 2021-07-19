import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleDone, toggleImportant } from '../../actions/actions';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.scss';

const TodoList = ({ items, search, filter, onToggleImportant, onToggleDone, onDelete }) => {
  const searchItems = (todos, searchFilter) => {
    if (searchFilter.length === 0) {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.label.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
    });
  };

  const filterItems = (todos, activeFilter) => {
    if (activeFilter === 'active') {
      return todos.filter((item) => (!item.done));
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
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onDelete={() => onDelete(id)}
        />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{elements}</ul>);
};

const mapStateToProps = (state) => {
  return {
    items: state.todos,
    search: state.search,
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleDone: (id) => {
      dispatch(toggleDone(id));
    },
    onToggleImportant: (id) => {
      dispatch(toggleImportant(id));
    },
    onDelete: (id) => {
      dispatch(deleteTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
