// src/Reducer/CombinedStore.ts

import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../AllPages/NotificationRedux.tsx/UserSlice';
import cartReducer from './Addtocart';

export const combinedStore = configureStore({
  reducer: {
    users: userReducer,
    cart: cartReducer, // Add your original store slices here
  },
});

export type RootState = ReturnType<typeof combinedStore.getState>;
export type AppDispatch = typeof combinedStore.dispatch;
