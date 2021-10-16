import React from 'react';
import { Delete, Edit } from '@material-ui/icons';

export function ListItem(props) {
  const checkboxId = `checkbox${props.id}`;

  return (
    <article>
      <span>
        <input
          type="checkbox"
          id={checkboxId}
          checked={props.completed}
          onChange={() => props.toggleTodoStatus()}
        />
        <label for={checkboxId}></label>
      </span>
      <span>{props.value}</span>
      <button onClick={() => props.editTodoInfo()}>
        <span className="material-icons">
          <Edit />
        </span>
      </button>
      <button onClick={() => props.removeTodo()} disabled={props.id === props.editId}>
        <span className="material-icons">
          <Delete />
        </span>
      </button>
    </article>
  );
}
