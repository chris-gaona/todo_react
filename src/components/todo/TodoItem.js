import React from 'react';

const TodoItem = props => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete} /> {props.name}
    </li>
  )
};

export default TodoItem;