import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  selectItems,
} from './todoListSlice';
import { AddCircle } from '@material-ui/icons';
import { ListItem } from './components/ListItem';

export function TodoList() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const submitTodo = (e) => {
    e.preventDefault();
    const newItem = {id: Date.now().toString(), info: title};
    dispatch(addTodo(newItem));
    setTitle('');
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const listItems = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        value={item.info}
        removeTodo={() => removeTodo(item.id)}
      />
    );
  });

  return (
    <div>
      <form onSubmit={submitTodo}>
        <div>
          <input 
            type="text"
            placeholder="添加新任務"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">
            <span className="material-icons">
              <AddCircle />
            </span>
          </button>
        </div>
      </form>

      {listItems}
    </div>
  );
}
