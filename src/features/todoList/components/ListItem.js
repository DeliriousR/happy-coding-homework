import React from 'react';
import { Delete } from '@material-ui/icons';

export function ListItem(props) {
  return (
    <article key={props.id}>
      <span>{props.value}</span>
      <span className="material-icons">
        <Delete />
      </span>
    </article>
  );
}
