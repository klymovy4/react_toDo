import React from "react";
import "../App.css";

const Item = ({ done, title, id,removeTodo, markCompleteTodo }) => {
    // const id = el.id;
        // title = el.title
    const remove = () => {
        // console.log(id);
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
                        onClick={() => markComplete(id)}
                    />
                </div>
            </label>
            <div className="title">{title}</div>
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