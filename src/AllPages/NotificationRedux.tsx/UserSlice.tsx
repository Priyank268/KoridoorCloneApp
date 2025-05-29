import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface user {
  firstName: string;
  lastName: string;
  id: string;
}

const initialState: user[] = [];

const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<user>) => {
      state.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      return state.filter(user => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<user>) => {
      const index = state.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {addUser, deleteUser, editUser} = UserSlice.actions;
export default UserSlice.reducer;
