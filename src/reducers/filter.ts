import { Reducer } from 'redux';

const filter: Reducer = (state = 'all', action) => {
  if (action.type === 'FILTER') {
    return action.filter;
  }
  return state;
};

export default filter;
