import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  users: [
    { name: 'admin', role: 'admin' },
    { name: 'A', role: 'analyst' },
    { name: 'B', role: 'analyst' },
    { name: 'C', role: 'analyst' },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { name } = action.payload;
      const user = state.users.find(user => user.name === name);
      if (user) {
        state.currentUser = user;
      } else {
        state.currentUser = null;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
