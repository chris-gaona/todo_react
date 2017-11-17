import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = props => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
          // ...todo will take all key/value pairs of todo and spread them out as own props in component
          <TodoItem key={todo.id} {...todo} />
        )}
      </ul>
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;