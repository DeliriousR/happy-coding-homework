import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
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
    dispatch(add(newItem));
    setTitle('');
  };

  const listItems = items.map((item) => {
    return (
      <ListItem id={item.id} value={item.info} />
    );
  });

  console.log(listItems);

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
