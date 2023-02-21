import PropTypes from 'prop-types';

const TodoItem = ({ todo, handleChange }) => (
  <li>
    <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
    {todo.title}
  </li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  }),
  handleChange: PropTypes.func.isRequired,
};

TodoItem.defaultProps = { todo: {} };
export default TodoItem;
