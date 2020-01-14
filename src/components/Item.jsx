import React from "react";
import "../App.css";

const Item = ({ element, removeTodo, markCompleteTodo }) => {
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

    return (
        <div className=" item input-group mb-1">
            <label className="input-group-prepend m-0">
                <div className="input-group-text">
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={() => markComplete(id)}
                        // onClick={}
                    />
                </div>
            </label>
            <div className={"title " + line_through}>{title}</div>
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