import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import { MyContext } from "./Context";

const Item = ({ element }) => {
    const { remove, markComplite, updateTodoText } = useContext(MyContext);
    const [edit, setEdit] = useState(false);
    const [newValue, setNewValue] = useState(element.value);
    const
        done = element.done,
        line_through = done ? "line_through" : "",
        value = element.value,
        id = element.id;

    const onTextChange = e => setNewValue(e.target.value);

    const saveNewValue = () => {
        setEdit(false);
        updateTodoText(id, newValue);
    }

    const resetValue = () => {
        setNewValue(value);
        setEdit(false);
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            saveNewValue();
        } else if (e.keyCode === 27) {
            resetValue();
        }

    }

    return (
        <>

            <div className="input-group mb-1 ">
                <label className="input-group-text">
                    <input type="checkbox" onChange={() => markComplite(id)} checked={done} />
                </label>

                {!edit
                    ? (
                        <div
                            className={"div_form_control form-control " + line_through}
                            onDoubleClick={() => setEdit(true)}
                        >
                            {value}
                        </div>
                    ) : (
                        <input
                            className="chenge_input"
                            value={newValue}
                            onChange={onTextChange}
                            onBlur={saveNewValue}
                            onKeyDown={onKeyDown}
                        />
                    )
                }

                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary add-text del_button"
                        type="button"
                        onClick={() => remove(id)}
                    >
                        Delete
                </button>
                </div>


            </div>

            {/* <MyContext.Consumer> */}
            {/* {value}  */}
            {/* </MyContext.Consumer> */}
        </>
    )
}

export default Item;