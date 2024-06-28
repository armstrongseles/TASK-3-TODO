import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editTodo, setEditTodo] = useState(null);

  // Function to add a new todo
  const addTodo = (name, description) => {
    if (editTodo) {
      updateTodo(editTodo.id, { ...editTodo, name, description });
      setEditTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        name,
        description,
        status: 'Not Completed',
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Function to update an existing todo
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit a todo
  const editExistingTodo = (todo) => {
    setEditTodo(todo);
  };

  // Filter todos based on the selected status
  const filteredTodos = todos.filter(todo => 
    filter === 'All' ? true : todo.status === filter
  );

  return (
    <div className="app">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} />
      <div className="filter">
        <label>Status Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="status-dropdown">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <h2 className="my-todos">My Todos</h2>
      <TodoList 
        todos={filteredTodos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
        editExistingTodo={editExistingTodo} 
      />
    </div>
  );
};

export default App;
