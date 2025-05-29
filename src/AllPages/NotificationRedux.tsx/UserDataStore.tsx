import {configureStore} from '@reduxjs/toolkit';
import useReducer from './UserSlice';

export const UserDataStore = configureStore({
  reducer: {
    users: useReducer,
  },
});

export type RootState = ReturnType<typeof UserDataStore.getState>;
export type AppDispatch = typeof UserDataStore.dispatch;
