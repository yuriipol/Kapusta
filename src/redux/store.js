import { createStore } from 'redux';

const initialStore = {
  email: '',
  token: '',
};

const reducer = state => {
  return state;
};

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
