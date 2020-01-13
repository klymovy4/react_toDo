import React, { useState } from 'react';
import uuid from 'uuid';

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
export const MyContext = React.createContext();
const MyProvider = (props) => {
    const [todos, setTodos] = useState(data);
    const [filter, setFilterTodos] = useState("all");

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

    return (

        <MyContext.Provider value={{
            todos,
            addTodo,
            remove,
            markComplite,
            updateTodoText,
            filter,
            setFilterTodos
        }}>
            {props.children}
        </MyContext.Provider>
    );

}


export default MyProvider;