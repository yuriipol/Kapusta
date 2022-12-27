import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authSlice } from './auth/auth-slice';
import { userSlice } from './user/user-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
