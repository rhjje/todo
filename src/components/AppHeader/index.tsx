import React from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../../types/types';
import { textStyles } from 'utils/styles';
import styles from './AppHeader.module.scss';

interface AppHeaderProps {
  items: TodoItem[];
}

const AppHeader = ({ items }: AppHeaderProps) => {
  const done = items.filter((item) => item.done).length;
  const toDo = items.length - done;

  return (
    <div className={styles.AppHeader}>
      <h1 className={textStyles.Heading1}>Todo List</h1>
      <h2
        className={`${textStyles.Heading2} ${textStyles.GreyText}`}
      >{`${toDo} more to do, ${done} done`}</h2>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.todos,
  };
};

const ConnectedComponent = connect(mapStateToProps)(AppHeader);

export { ConnectedComponent as AppHeader };
