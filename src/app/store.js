import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../features/todoList/todoListSlice';
import { getLocalStorage } from './utils';

const preloadedState = {
  todos: {
    items: getLocalStorage(),
  }
}

export const store = configureStore({
  reducer: {
    todos: todoListReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState().todos.items));
})
