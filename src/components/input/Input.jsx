import React, { useState } from "react";
import "../../App.css";

const Input = ({ addTodo }) => {

    const [newValue, setNewValue] = useState("")

    const onsubmitHandler = () => {
        addTodo(newValue);
        setNewValue("");

    }
    const addNewText = (event) => {
        
        setNewValue(event.target.value);
        
    }
    const keyCode =(event) =>{
        if (event.keyCode === 13) {
            console.log(123);
        }
    }


    return (
        <div

            className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="add todo"
                value={newValue}
                onChange={addNewText}
                onClick={keyCode}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    // type="button"
                    onClick={onsubmitHandler}
                >Add...
                </button>
            </div>
        </div>
    )
}

export default Input;