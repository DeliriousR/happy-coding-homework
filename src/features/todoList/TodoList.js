import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
  selectItems,
} from './todoListSlice';
import { AddCircle, Save } from '@material-ui/icons';
import { ListItem } from './components/ListItem';

export function TodoList() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  let submitIcon;
  if (editing) {
    submitIcon = (
      <span className="material-icons">
        <Save />
      </span>
    )
  } else {
    submitIcon = (
      <span className="material-icons">
        <AddCircle />
      </span>
    )
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }

  const submitTodo = (e) => {
    e.preventDefault();
    if (editing) {
      const updatedInformation = {editId: editId, title: title};
      console.log(updatedInformation);
      dispatch(editTodo(updatedInformation));
      setEditing(false);
      setEditId(null);
    } else {
      const newItem = {id: Date.now().toString(), info: title, completed: false};
      dispatch(addTodo(newItem));
    }
    setTitle('');
    setSubmitDisabled(true)
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  }

  const editTodoInfo = (id) => {
    const toBeEdited = items.find((item) => (item.id === id));
    setEditing(true);
    setEditId(toBeEdited.id);
    setTitle(toBeEdited.info);
    setSubmitDisabled(false);
  }

  const toggleTodoStatus = (id) => {
    dispatch(toggleTodo(id));
  }

  const listItems = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        value={item.info}
        completed={item.completed}
        removeTodo={() => removeTodo(item.id)}
        editTodoInfo={() => editTodoInfo(item.id)}
        toggleTodoStatus={() => toggleTodoStatus(item.id)}
      />
    );
  });

  return (
    <div>
      <form onSubmit={submitTodo}>
        <div>
          <input 
            type="text"
            placeholder={!editing ? '添加新任務' : '編輯任務訊息'}
            value={title}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" disabled={submitDisabled}>
            {submitIcon}
          </button>
        </div>
      </form>

      {listItems}
    </div>
  );
}
