/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import store from './store';

function Todos({ todos, addTodo }) {
  console.log('toto');
  const [todo, setTodo] = useState('');
  //const [todos, setTodos] = useState([]);

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
    payload: todo.trim(),
  });

  setTodo('');

  return (
    <div>
      <form onSubmit={submiHandler}>
        <input type="text" value={todo} onChange={changeHandler} />
        <button>add</button>
      </form>
      <ol>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ol>
    </div>
  );
}

export default Todos;
