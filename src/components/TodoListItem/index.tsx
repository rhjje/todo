import React from 'react';
import classNames from 'classnames';
import { Icons } from 'components/core/Icons';
import { Button } from 'components/core/Button';
import { textStyles } from 'utils/styles';
import styles from './TodoListItem.module.scss';

interface TodoListItemProps {
  label: string;
  important: boolean;
  done: boolean;
  onToggleDone: () => void;
  onToggleImportant: () => void;
  onDelete: () => void;
}

export const TodoListItem = ({
  label,
  important,
  done,
  onToggleDone,
  onToggleImportant,
  onDelete,
}: TodoListItemProps) => {
  return (
    <div className={styles.TodoListItem}>
      <span
        className={classNames(
          styles.Label,
          done && styles.LabelDone,
          important && textStyles.ImportantText,
        )}
        onClick={onToggleDone}
      >
        {label}
      </span>
      <div className={styles.Buttons}>
        <Button
          className={styles.Button}
          type="button"
          color="green"
          size="small"
          onClick={onToggleImportant}
        >
          <Icons.Exclamation />
        </Button>
        <Button
          className={styles.Button}
          type="button"
          color="red"
          size="small"
          onClick={onDelete}
        >
          <Icons.Trash />
        </Button>
      </div>
    </div>
  );
};
