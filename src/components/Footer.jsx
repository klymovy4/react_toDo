import React from "react";
// import Header from "../components/Header";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({todos}) => {
    return (
        <div className="footer">
            {/* <div className="btn-group" role="group" aria-label="Basic example"> */}
                <button type="button" className="btn btn-secondary">Left</button>
                <button type="button" className="btn btn-secondary">Middle</button>
                <button type="button" className="btn btn-secondary">Right</button>
            {/* </div> */}
        </div>
    )
}

export default Footer;