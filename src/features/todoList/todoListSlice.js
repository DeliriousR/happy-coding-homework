import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const todoListSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { add } = todoListSlice.actions;

export const selectItems = (state) => state.todos.items;

export default todoListSlice.reducer;
