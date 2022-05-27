/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import store from './store';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    store.subscribe(()=>{
      setTodos(store.getState().todos)
    })
  },[]);

  const changeHandler = (event) => {
    setTodo(event.targer.value);
  };

  const submiHandler = (event) => {
    event.preventDefault();
  };

  if (todo.trim().length === 0) {
    return;
  }

  store.dispatch({
    type: 'ADD_TODO',
    payload: todo.trim()
  });

  setTodo('');

  return (
    <div>
      <form onSubmit={submiHandler}>
        <input type="text" value={todo} onChange={changeHandler} />
        <button>add</button>
      </form>
      <ol>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
        ;
      </ol>
      ;
    </div>
  );
}

export default App;
