import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Input from "./components/input/Input";
import Items from './components/items/Items';
import uuid from 'uuid';
import Footer from "./components/Footer";
import MyProvider from "./components/Context";

let date = new Date();

function App() {

  return (
    <>
      <MyProvider>
        <div className="App container">

          <div className="header">
            <h3>Add Todo</h3>
            <div className="date text-right">
              {/* {date.getMonth() + 1 + " : " + date.getDate() + " : " + date.getFullYear()} */}
            </div>
          </div>
          <Input />
          <Items />
          <Footer />

        </div>
      </MyProvider>
    </>
  );
}

export default App;
