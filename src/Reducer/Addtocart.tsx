// import {createSlice} from '@reduxjs/toolkit';

// const AddToCart = createSlice({
//   // ✅ Renamed to match your file
//   name: 'cart', // ✅ Name should match usage in store
//   initialState: {
//     // addedIds: [], // 🆕 This holds IDs of items in cart
//     items: [],
//   },
//   reducers: {
//     toggleCartItem: (state, action) => {
//       // ✅ Toggle logic
//       const id = action.payload;

//       if (state.items.includes(id)) {
//         state.items = state.items.filter(item => item !== id);
//       } else {
//         state.items.push(id);
//       }
//     },
//   },
// });

// export const {toggleCartItem} = AddToCart.actions; // ✅ Export action
// export default AddToCart.reducer; // ✅ Export reducer

// 22222222222222222222222222222222222222222222222222222222222222222222

import {createSlice} from '@reduxjs/toolkit';

const AddToCart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    toggleCartItem: (state, action) => {
      const newItem = action.payload;

      const exists = state.items.find(item => item.id === newItem.id); // 🔧 check by `id`

      if (exists) {
        state.items = state.items.filter(item => item.id !== newItem.id); // 🔧 remove by `id`
      } else {
        state.items.push(newItem); // 🔧 add full object
      }
    },
  },
});

export const {toggleCartItem} = AddToCart.actions;
export default AddToCart.reducer;
