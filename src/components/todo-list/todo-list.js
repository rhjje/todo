import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.scss';

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {
  const elements = items.map((item) => {
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

export default TodoList;
