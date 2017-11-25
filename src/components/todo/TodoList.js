import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodoList = props => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
          // ...todo will take all key/value pairs of todo and spread them out as own props in component
          <TodoItem
            key={todo.id}
            handleToggle={props.handleToggle}
            {...todo}
            handleRemove={props.handleRemove} />
        )}
      </ul>
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TodoList;