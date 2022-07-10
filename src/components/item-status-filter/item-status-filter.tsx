import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions/actions';

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
    const classNames = `btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`;

    return (
      <button
        key={name}
        type="button"
        onClick={() => toggleFilter(name)}
        className={classNames}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  toggleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemStatusFilter);
