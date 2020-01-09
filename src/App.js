import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Input from "./components/input/Input";
import Items from './components/items/Items';
import uuid from 'uuid';
import Footer from "./components/Footer";


const data = [
  {
    id: uuid.v4(),
    value: "Task 1",
    done: false
  },
  {
    id: uuid.v4(),
    value: "Task 2",
    done: false
  },
  {
    id: uuid.v4(),
    value: "Task 3",
    done: false
  },
]

// let date = new Date();




function App() {
  const [todos, setTodos] = useState(data);

  const addTodo = (textInInput) => {
    setTodos([...todos, {
      id: uuid.v4(),
      value: textInInput,
      done: false
    }]);
  }

  const remove = (id) => {
    setTodos(todos.filter(el => el.id !== id))

  }

  const markComplite = (id) => {
    setTodos(todos.map(el => {
      if (el.id === id) {
        el.done = !el.done
      }
      return el
    })
    )
  }

  const updateTodoText = (id, newValue) => {
    setTodos(todos.map(el => {
      if (el.id === id) {
        el.value = newValue;
      }
      return el;
    }))
  }



  const [filterTodos, setFilterTodos] = useState("all"); // all, compl, non

  return (
    <div className="App container">
      <div className="header">
        <h3>Add Todo</h3>
        {/* {date.getFullYear() +" : "+ date.getHours() +" : "+ date.getHours() +" : "+ date.getMinutes()} */}
      </div>
      <Input
        getValue={addTodo}
      />
      <Items todos={todos}
        updateTodoText={updateTodoText}
        remove={remove}
        markComplite={markComplite}
        filter={filterTodos}
      />
      <Footer
        setFilterTodos={setFilterTodos}
      />
    </div>
  );
}

export default App;
