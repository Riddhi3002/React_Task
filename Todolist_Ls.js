import React, { useState, useEffect } from 'react';

function Todolist_Ls() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
      <h1>To-Do List With localStorage</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>{editIndex !== null ? 'Edit' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='todo'>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist_Ls;
