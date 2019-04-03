import { createStore, combineReducers } from 'redux';
import data from '../reducers/data';
import user from '../reducers/user';
import filters from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({data,user,filters})
  );
  store.subscribe(() => {
    console.log(store.getState());
  });
  return store;
};
