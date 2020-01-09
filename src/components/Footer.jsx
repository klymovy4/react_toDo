import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';

function Footer({ setFilterTodos }) {

    return (
        <div className="btn-group w-100" role="group" aria-label="Basic example">
            <button
                type="button"
                onClick={() => setFilterTodos('all')}
                className="add-text btn btn-outline-secondary all_btn">
                All0
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
        </div>
    )
}

export default Footer;
