// @flow
import { ADDTODO, HIDETODO } from '../actions/todo';

type todoType = {
  id: number,
  name: string,
  completed: boolean
};

export type todos = {
  list: Array<todoType>,
  visibility: string
};

type actionType = {
  type: string,
  todo: todoType
};

export default function todoReducer(
  state: todos = {
    list: [],
    visibility: '',
  },
  action: actionType = {
    type: '',
    todo: {
      id: 0,
      name: '',
      completed: false,
    },
  },
) {
  console.log(action);
  switch (action.type) {
    case ADDTODO:
      state.list.push(action.todo);
      return state;
    case HIDETODO:
      return action.todo;
    default:
      return state;
  }
}
