import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from 'actions/actions';
import { Button } from 'components/core/Button';
import { GroupButtons } from 'components/core/GroupButtons';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
];

interface ItemStatusFilterProps {
  filter: string;
  toggleFilter: (value: string) => void;
}

const ItemStatusFilter = ({ filter, toggleFilter }: ItemStatusFilterProps) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;

    return (
      <Button
        key={name}
        type="button"
        onClick={() => toggleFilter(name)}
        color={isActive ? 'blue' : 'grey'}
      >
        {label}
      </Button>
    );
  });

  return <GroupButtons>{buttons}</GroupButtons>;
};

const mapStateToProps = (state: any) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  toggleFilter,
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemStatusFilter);

export { ConnectedComponent as ItemStatusFilter };
