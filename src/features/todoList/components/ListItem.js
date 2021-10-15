import React from 'react';
import { Delete } from '@material-ui/icons';

export function ListItem(props) {
  return (
    <article>
      <span>{props.value}</span>
      <button onClick={() => props.removeTodo()}>
        <span className="material-icons">
          <Delete />
        </span>
      </button>
    </article>
  );
}
