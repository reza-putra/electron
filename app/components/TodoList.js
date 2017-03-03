import React from 'react';
import Todo from './Todo';
// import type todo from '../reducers/todo';

const TodoList = ({ todos }) => (
  <ul>
    {todos.list.map(t => <Todo key={t.id} name={t.name} id={t.id} />)}
  </ul>
);


export default TodoList;
