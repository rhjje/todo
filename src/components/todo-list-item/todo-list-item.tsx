import React from 'react';
import { Icons } from 'components/core/Icons';
import { Button } from 'components/core/Button';
import styles from './TodoListItem.module.scss';
import './todo-list-item.scss';

interface TodoListItemProps {
  label: string;
  important: boolean;
  done: boolean;
  onToggleDone: () => void;
  onToggleImportant: () => void;
  onDelete: () => void;
}

const TodoListItem = ({
  label,
  important,
  done,
  onToggleDone,
  onToggleImportant,
  onDelete,
}: TodoListItemProps) => {
  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }

  return (
    <div className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>
      <div className={styles.Buttons}>
        <Button
          type="button"
          color="green"
          size="small"
          onClick={onToggleImportant}
        >
          <Icons.Exclamation />
        </Button>
        <Button type="button" color="red" size="small" onClick={onDelete}>
          <Icons.Trash />
        </Button>
      </div>
    </div>
  );
};

export default TodoListItem;
