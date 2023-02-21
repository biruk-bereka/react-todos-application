import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.shape(
    [],
  ),
};

TodosList.defaultProps = {
  todosProps: [],
};

export default TodosList;
