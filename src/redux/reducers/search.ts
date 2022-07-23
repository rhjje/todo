import { Reducer } from 'redux';
import { ActionType } from 'redux/types';
import { Action } from 'redux/actions/actions';

export const search: Reducer<string, Action> = (state = '', action) => {
  if (action.type === ActionType.Search) {
    return action.text;
  }
  return state;
};
