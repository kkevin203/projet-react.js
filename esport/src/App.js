import './App.css';
import React, { useState } from 'react';
import store from './store';

function App() {
  const [todo, seTodo] = usestate('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (event) => {
    setTodo(event.targer.value);
  };

  const submiHandler = (event) => {
    event.preventDefault();
  };
  if (todo.trim().lenght === 0) {
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
        {todos.map((todo) => <li>{todo}</li>)}
        ;
      </ol>;
    </div>
  );
}

export default App;
