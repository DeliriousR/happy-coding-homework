import React from 'react';
import { Delete, Edit } from '@material-ui/icons';

export function ListItem(props) {
  const checkboxId = `checkbox${props.id}`;

  const editStyle = {
    color: '#34b7eb',
  };

  let deleteStyle;
  if (props.id === props.editId) {
    deleteStyle = {
      color: '#960909',
      opacity: 0.5,
    };
  } else {
    deleteStyle = {
      color: '#960909',
    };
  }

  return (
    <article className='listItemContainer'>
      <span>
        <input
          type="checkbox"
          id={checkboxId}
          checked={props.completed}
          onChange={() => props.toggleTodoStatus()}
        />
        <label htmlFor={checkboxId}></label>
      </span>
      <span className='todoText'>{props.value}</span>
      <button onClick={() => props.editTodoInfo()}>
        <span className="material-icons" style={editStyle}>
          <Edit />
        </span>
      </button>
      <button onClick={() => props.removeTodo()} disabled={props.id === props.editId}>
        <span className="material-icons" style={deleteStyle}>
          <Delete />
        </span>
      </button>
    </article>
  );
}
