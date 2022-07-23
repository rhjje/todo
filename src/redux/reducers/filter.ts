import { Reducer } from 'redux';
import { ActionType } from 'redux/types';
import { Action } from 'redux/actions/actions';
import { Filter } from 'types/types';

export const filter: Reducer<Filter, Action> = (state = 'all', action) => {
  if (action.type === ActionType.ToggleFilter) {
    return action.filter;
  }
  return state;
};
