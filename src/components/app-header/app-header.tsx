import React from 'react';
import { connect } from 'react-redux';
import { TodoItem } from '../../types/types';
import './app-header.scss';

interface AppHeaderProps {
  items: TodoItem[];
}

const AppHeader = ({ items }: AppHeaderProps) => {
  const done = items.filter((item) => item.done).length;
  const toDo = items.length - done;

  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{`${toDo} more to do, ${done} done`}</h2>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    items: state.todos,
  };
};

export default connect(mapStateToProps)(AppHeader);
