import React from 'react';
import PropTypes from 'prop-types';
import {partial} from "../../lib/utils";

const TodoItem = props => {

  const handleToggle = partial(props.handleToggle, props.id);

  return (
    <li>
      <input
        type="checkbox"
        checked={props.isComplete}
        onChange={handleToggle} /> {props.name}
    </li>
  )
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoItem;