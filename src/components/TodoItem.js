import React from 'react';

function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(index)}>
        {todo.isComplete ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
