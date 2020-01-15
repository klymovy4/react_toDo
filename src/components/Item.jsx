import React, { useState } from "react";
import "../App.css";

const Item = ({ element, removeTodo, markCompleteTodo, onchangeText }) => {
    const [input, setInput] = useState(false)
    const [newValueInput, setNewValueInput] = useState(element.title)




    const id = element.id,
        title = element.title,
        done = element.done,
        line_through = done ? "line-through" : "";

    const remove = () => {
        removeTodo(id);
    }
    const markComplete = () => {
        markCompleteTodo(id)
    }

    const changeTextInInput = (e) => {
        setNewValueInput(e.target.value);

    }

    const changeText = () => {
        onchangeText(id, newValueInput);
        setInput(false)
    }
    const changeText13 = (e) => {
        if(e.keyCode === 13){
            onchangeText(id, newValueInput);
            setInput(false)
        }
    }


    return (
        <div className="item input-group mb-1">
            <label className="input-group-prepend m-0">
                <div className="input-group-text">
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={() => markComplete(id)}
                    />
                </div>
            </label>


            {input ?
                (
                    <input
                        value={newValueInput}
                        onChange={changeTextInInput}
                        onBlur={changeText}
                        onKeyDown={changeText13}
                    />
                ) : (

                    <div
                        className={"title " + line_through}
                        type="text"
                        onDoubleClick={() => setInput(true)}
                    >
                        {title}
                    </div>
                )
            }










            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => remove(id)}
                >Del</button>
            </div>
        </div>
    )
}

export default Item;