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
      
      const findUser = (inputName) => {
        const user = state.users.find(user => user.name === inputName);
        if (user) {
          return user;
        } else {
          const newInput = window.prompt('User not found. Enter valid user name:');
          return findUser(newInput);
        }
      };

      const user = findUser(name);
      if (user) {
        state.currentUser = user;
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;