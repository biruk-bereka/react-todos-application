import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChange, delTodo }) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
    {todo.title}
    <button type="button" onClick={() => delTodo(todo.id)}>Delete</button>
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

TodoItem.defaultProps = { todo: {} };
export default TodoItem;
