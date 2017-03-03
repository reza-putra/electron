import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state.todo,
  };
}

export default connect(mapStateToProps)(TodoList);
