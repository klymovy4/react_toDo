import React from "react";
import "../../App.css";

const Input = ({ addTodo, setTodos }) => {

    const addNewTodo = (addNewText) => {
        addTodo(addNewText);
        // setTodos("");
    }
    const addNewText = (event) => {
        console.log(event.target.value);

    }



    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="add todo"
                onChange={(event) => addNewText(event)}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={addNewTodo}
                >Add...</button>
            </div>
        </div>
    )
}

export default Input;