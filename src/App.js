import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Input from "./components/input/Input";
import { myContext } from "./components/Context";

const App = () => {
  const {showComplete} = useContext(myContext);
    return (
            <div className="container app">
                <div>
                    <Header />
                    <Input />
                    {showComplete()}
                </div>
                <Footer />
            </div>
    )
}

export default App;