import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Input } from 'components/core/Input';
import { search } from 'actions/actions';

interface SearchPanelProps {
  term: string;
  search: (value: string) => void;
}

const SearchInput = ({ term, search }: SearchPanelProps) => {
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

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export { ConnectedComponent as SearchInput };
