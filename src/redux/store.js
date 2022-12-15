// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth-slice';

// const initialStore = {
//   email: '',
//   token: '',
// };

// const reducer = state => {
//   return state;
// };

// const store = configureStore(
//   reducer,
//   initialStore,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
