import React, { useState, useContext } from "react";
import "../../App.css";
import { myContext } from "../Context";

const Input = () => {
const {addTodo} = useContext(myContext)
    const [newValue, setNewValue] = useState("")

    const onsubmitHandler13 = (event) => {
        if(newValue === "") return;
        if (event.keyCode === 13) {
            addTodo(newValue);
            setNewValue("");
        }
    }

    const onsubmitHandler = () => {
        if(newValue === "") return;
        addTodo(newValue);
        setNewValue("");
    }

    const addNewText = (event) => {
        setNewValue(event.target.value);
    }


    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="add todo"
                value={newValue}
                onChange={addNewText}
                onKeyUp={onsubmitHandler13}
            />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    onClick={onsubmitHandler}
                >Add...
                </button>
            </div>
        </div>
    )
}

export default Input;