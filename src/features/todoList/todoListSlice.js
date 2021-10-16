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
    editTodo: (state, action) => {
      const stateItems = [...state.items];
      const updatedList = stateItems.map(item => {
        if (item.id === action.payload.editId) {
          return {...item, info: action.payload.title};
        }
        return item;
      })
      state.items = [...updatedList];
    }
  },
});

export const { addTodo, deleteTodo, editTodo } = todoListSlice.actions;

export const selectItems = (state) => state.todos.items;

export default todoListSlice.reducer;
