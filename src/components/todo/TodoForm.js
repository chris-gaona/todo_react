import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleInputChange}
        value={props.currentTodo} />
    </form>
  )
};

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default TodoForm;