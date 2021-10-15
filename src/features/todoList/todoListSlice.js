import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const todoListSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => (item.id !== action.payload));
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export const selectItems = (state) => state.todos.items;

export default todoListSlice.reducer;
