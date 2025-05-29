import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './Addtocart';

export const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Linked correct reducer
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
