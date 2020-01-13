import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Item from '../Item';
import { MyContext } from "../Context";

const Items = () => {
    const {
            todos,
            filter
            } = useContext(MyContext);

    const showTodos = () => {
        let todosFiltered = todos;

        if (filter !== 'all') {
            todosFiltered = todos.filter(el =>
                filter === 'compl' ? el.done : !el.done
            )
        }
        return todosFiltered.map(element =>
            <Item
                element={element}
                key={element.id}
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


