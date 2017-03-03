import React, { PropTypes } from 'react';

const AddTodo = ({ onClick }) => (
  <form>
    <input type="text" name="name" />
    <button onClick={onClick}> Add Todo </button>
  </form>
);

AddTodo.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddTodo;
