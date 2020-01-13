import React from "react";
import "../App.css";
import style from "./item.module.css";

const Item = ({ done, title, id, removeTodo, markCompleteTodo }) => {
    const line_through = done ? "line_throgh" : "";
    console.log(line_through, done);
    
    // title = el.title
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
                        onClick={() => markComplete(id)}
                    />
                </div>
            </label>
            <div className={"title " + style.line_through}>{title}</div>
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