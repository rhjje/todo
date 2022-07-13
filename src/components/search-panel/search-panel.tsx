import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/actions';
import { Input } from '../core/Input';
import './search-panel.scss';

interface SearchPanelProps {
  term: string;
  search: (value: string) => void;
}

const SearchPanel = ({ term, search }: SearchPanelProps) => {
  const onTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="type to search"
      value={term}
      onChange={onTermChange}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    term: state.search,
  };
};

const mapDispatchToProps = { search };

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
