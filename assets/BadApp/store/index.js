import { createStore } from 'redux';
import mainReducer from '../reducers';

const generateStore = initialState => createStore(mainReducer, initialState);

export default function configureStore(initialState) {
  const store = generateStore(initialState);

  return store;
}
