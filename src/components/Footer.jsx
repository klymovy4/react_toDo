import React, { useContext } from "react";
// import Header from "../components/Header";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {myContext} from "./Context";

const Footer = ({ 
    // setCompl 
}) => {
const setCompl = useContext(myContext)


    const btns = [{
        title: "All",
        class: "btn btn-secondary",
        filter: 'all',

    },
    {
        title: "Complete",
        class: "btn btn-secondary",
        filter: "comple"
    },
    {
        title: "Uncomplete",
        class: "btn btn-secondary",
        filter: "unComple"
    }]

    return (
        <div className="footer">
            {btns.map((el, index) => <button
                key={index}
                onClick={() => setCompl(el.filter)}
                className={el.class}
            >{el.title}</button>)}
        </div>
    )
}

export default Footer;