import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Input from "./components/input/Input";
import Item from "./components/Item";
import uuid from "uuid";


const data = [{
  id: uuid.v4(),
  done: false,
  title: "hello from date 1"
},
{
  id: uuid.v4(),
  done: false,
  title: "hello from date 2"
},
{
  id: uuid.v4(),
  done: false,
  title: "hello from date 3"
},
{
  id: uuid.v4(),
  done: false,
  title: "hello from date 4"
},
]

const App = () => {
  const [todos, setTodos] = useState(data);


  const removeTodo = (id) => {
    setTodos(todos.filter(el => el.id !== id)

    )
  }

  const markCompleteTodo = (id) => {
    setTodos(todos.map(el => {
      if (el.id === id) {
        el.done = !el.done
      }
      return el;
    }))
  }

  const addTodo = (changeText) => {
    setTodos([...todos, {
      id: uuid.v4(),
      title: changeText,
      done: false
    }])
    return todos;
  }





  return (
    <div className="container app">
      <div>
        <Header />
        <Input
          addTodo={addTodo}
        />

        {todos.map(el =>
          <Item
            key={el.id}
            todos={todos}
            title={el.title}
            done={el.done}
            id={el.id}
            removeTodo={removeTodo}
            markCompleteTodo={markCompleteTodo}
          >{el.title}</Item>

        )}
      </div>
      <Footer
      />
    </div>
  )
}

export default App;