import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editTodo) {
      setName(editTodo.name);
      setDescription(editTodo.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editTodo]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addTodo(name, description);
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Todo Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="input-field"
      />
      <input 
        type="text" 
        placeholder="Todo Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="input-field"
      />
      <button type="submit">{editTodo ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;
