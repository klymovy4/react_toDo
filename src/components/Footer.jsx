import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';

function Footer({ setFilterTodos, clearList }) {



    return (
        <div className="btn-group w-100" role="group" aria-label="Basic example">
            <button
                type="button"
                onClick={() => setFilterTodos('all')}
                className="add-text btn btn-outline-secondary all_btn">
                All
                    </button>
            <button
                type="button"
                onClick={() => setFilterTodos('compl')}
                className="add-text btn btn-outline-secondary completed_btn">
                Completed
                    </button>
            <button
                onClick={() => setFilterTodos('non')}
                type="button"
                className="add-text btn btn-outline-secondary noncomp_btn">
                Not Completed
            </button>

                {/* {(context) => (
                    <button
                    onClick={clearList}
                    type="button"
                    className="clear_text btn btn-outline-secondary noncomp_btn">
                        clear List
                </button> */}
                {/* )} */}
                        {/* <MyContext.Consumer> */}
            {/* </MyContext.Consumer> */}
        </div>
    )
}

export default Footer;
