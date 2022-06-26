import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';

import './item-add-form.scss';

class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control new-todo-label"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (id) => {
      dispatch(addTodo(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemAddForm);
