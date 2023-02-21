import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => (
  <li>{todo.title}</li>
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

TodoItem.defaultProps = { todo: {} };
export default TodoItem;
