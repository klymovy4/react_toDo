import React, { useState } from "react";

export const myContext = React.createContext();

const RealContext = (props) => {

    const [compl, setCompl] = useState("all");

    return (
        <myContext.Provider value={
            setCompl,
            compl
        }>
            {props.children}
        </myContext.Provider>




    )
}


export default RealContext;