import React, { Component, ChangeEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';
import { Input } from 'components/core/Input';
import { Button } from 'components/core/Button';

import './item-add-form.scss';

interface ItemAddFormProps {
  addTodo: (value: string) => void;
}

class ItemAddForm extends Component<ItemAddFormProps> {
  state = {
    label: '',
  };

  onLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTodo(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <Input
          type="text"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
        />
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(ItemAddForm);
