import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/actions';

import './search-panel.scss';

const SearchPanel = ({ term, searchTodo }) => {
  const onTermChange = (event) => {
    searchTodo(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={term}
      onChange={onTermChange}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    term: state.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTodo: (id) => {
      dispatch(search(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
