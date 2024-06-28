import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo, editExistingTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo} 
          editExistingTodo={editExistingTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;
