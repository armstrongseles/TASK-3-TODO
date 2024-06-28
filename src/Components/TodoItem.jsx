import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo, editExistingTodo }) => {
  // Handle status change
  const handleStatusChange = (e) => {
    const updatedTodo = { ...todo, status: e.target.value };
    updateTodo(todo.id, updatedTodo);
  };

  return (
    <div className="todo-item">
      <p><strong>Name:</strong> {todo.name}</p>
      <p><strong>Description:</strong> {todo.description}</p>
      <p><strong>Status:</strong> 
        <select value={todo.status} onChange={handleStatusChange} className="status-dropdown">
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <button className="edit-btn" onClick={() => editExistingTodo(todo)}>Edit</button>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
