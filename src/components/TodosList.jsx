import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodosList;
