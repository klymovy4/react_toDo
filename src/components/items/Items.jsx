import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Item from '../Item';
import { MyContext } from "../Context";

const Items = ({ remove, markComplite, filter, updateTodoText }) => {
    const { todos } = useContext(MyContext);

    const showTodos = () => {
        let todosFiltered = todos;

        if (filter !== 'all') {
            todosFiltered = todos.filter(el =>
                filter === 'compl' ? el.done : !el.done
            )
        }

        // const todosFiltered = todos.reduce((acc, element) => {
        //     if (filter === 'all') {
        //         acc.push(element);
        //     } else if (filter === 'compl' && element.done) {
        //         acc.push(element);
        //     } else if (filter === 'non' && !element.done) {
        //         acc.push(element);
        //     }
        //     return acc;
        // }, []);

        return todosFiltered.map(element =>
            <Item
                // updateTodoText={updateTodoText}
                element={element}
                key={element.id}
                // remove={remove}
                // markComplite={markComplite}
            />
        )
    }

    return (
        <div className="items">
            {showTodos()}
        </div>
    )
}

export default Items;


