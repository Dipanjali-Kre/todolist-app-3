import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          aria-label={`Mark ${todo.text} as complete`}
        />
        <span>{todo.text}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>Delete</button>
    </li>
  );
}

export default TodoItem;
