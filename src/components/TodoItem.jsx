import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  todo, handleChange, delTodo, setUpdate,
}) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, todo.id);
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChange(todo.id)} />
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(todo.id)}>Delete</button>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={todo.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

TodoItem.defaultProps = { todo: {} };
export default TodoItem;
