import React from 'react';
import { connect } from 'react-redux';
import './app-header.scss';

const AppHeader = ({ items }) => {
  const done = items.filter((item) => item.done).length;
  const toDo = items.length - done;

  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{`${toDo} more to do, ${done} done`}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.todos,
  };
};

export default connect(mapStateToProps)(AppHeader);
