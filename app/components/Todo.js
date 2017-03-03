import React, { PropTypes } from 'react';

const Todo = ({ name, id }) => (
  <div>
    <span>{name}</span>
    <span>{id}</span>
  </div>
);

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
