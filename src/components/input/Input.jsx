import React from "react";
// import Header from "../components/Header";
import "../../App.css";

const Input = () => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="add todo" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add...</button>
            </div>
        </div>
    )
}

export default Input;