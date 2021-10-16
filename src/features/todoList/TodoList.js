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

export function TodoList(props) {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  const filter = props.filter;

  const [title, setTitle] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  let addStyle;
  if (submitDisabled) {
    addStyle = {
      color: '#065712',
      opacity: 0.5,
    };
  } else {
    addStyle = {
      color: '#065712',
    };
  }

  let saveStyle;
  if (submitDisabled) {
    saveStyle = {
      color: '#060a57',
      opacity: 0.5,
    };
  } else {
    saveStyle = {
      color: '#060a57',
    };
  }

  let submitIcon;
  if (editing) {
    submitIcon = (
      <span className="material-icons" style={saveStyle}>
        <Save />
      </span>
    );
  } else {
    submitIcon = (
      <span className="material-icons" style={addStyle}>
        <AddCircle />
      </span>
    );
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

  let filteredItems;
  switch(filter) {
    case 'incomplete':
      filteredItems = items.filter(item => !item.completed);
      break;
    case 'completed':
      filteredItems = items.filter(item => item.completed);
      break;
    default:
      filteredItems = items;
  }

  const listItems = filteredItems.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        value={item.info}
        editId={editId}
        completed={item.completed}
        removeTodo={() => removeTodo(item.id)}
        editTodoInfo={() => editTodoInfo(item.id)}
        toggleTodoStatus={() => toggleTodoStatus(item.id)}
      />
    );
  });

  return (
    <div className='listContainer'>
      <form onSubmit={submitTodo}>
        <div className='inputContainer'>
          <input 
            type="text"
            className='todoInput'
            data-qa="inputBar"
            placeholder={!editing ? '添加新任務' : '編輯任務内容'}
            value={title}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" data-qa="submitButton" disabled={submitDisabled}>
            {submitIcon}
          </button>
        </div>
      </form>

      {listItems}
    </div>
  );
}
