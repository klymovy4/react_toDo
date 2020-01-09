import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


const Input = ({ getValue }) => {
    const [todoTitle, setTodoTitle] = useState("")
    
    const changeTitle = (event) => {
        setTodoTitle(event.target.value)
    }

    const onSubmitHeandler = (event) => {
        event.preventDefault();
        if(todoTitle === "") return;
        getValue(todoTitle)
        setTodoTitle("");
    }

    return (
        <form onSubmit={onSubmitHeandler}>
            <div className="input-group mb-1">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add Todo..."
                    value={todoTitle}
                    onChange={changeTitle}
                />

                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary add-text add_button"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Input;