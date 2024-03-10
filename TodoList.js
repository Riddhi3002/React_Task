import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = todos.slice();
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos(todos.concat(inputValue));
      }
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>{editIndex !== null ? 'Edit' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
