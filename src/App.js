import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Input from "./components/input/Input";
import Item from "./components/Item";
import uuid from "uuid";
// import RealContext from "./components/Context"

const data = [{
    id: uuid.v4(),
    done: false,
    title: "hello from date 1"
}
]

const App = () => {
    const [todos, setTodos] = useState(data);
    const [compl, setCompl] = useState("all");


    const changeText = (id, text) => {
        setTodos(todos.map(el => {
            if (el.id === id) {
                el.title = text
            }
            return el;
        }))
    }

    const showComplete = () => {
        let newFilter = todos;
        if (compl !== "all") {
            newFilter = todos.filter(el =>
                compl === "comple" ? el.done : !el.done
            )
        }
        return newFilter.map(el =>
            <Item
                key={el.id}
                element={el}
                removeTodo={removeTodo}
                onchangeText={changeText}
                markCompleteTodo={markCompleteTodo}
            >
                {el.title}
            </Item>)
    }

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

                    {showComplete()}
                </div>
                <Footer
                    setCompl={setCompl}
                />
            </div>
       
    )
}

export default App;