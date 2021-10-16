import React from 'react';
import { Delete, Edit } from '@material-ui/icons';

export function ListItem(props) {
  return (
    <article>
      <span>{props.value}</span>
      <button onClick={() => props.removeTodo()}>
        <span className="material-icons">
          <Delete />
        </span>
      </button>
      <button onClick={() => props.editTodoInfo()}>
        <span className="material-icons">
          <Edit />
        </span>
      </button>
    </article>
  );
}
