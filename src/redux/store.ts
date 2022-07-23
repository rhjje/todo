import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { filter, search, todos } from './reducers';

export type AppState = ReturnType<typeof store.getState>;

export const store = createStore(combineReducers({ filter, search, todos }));
