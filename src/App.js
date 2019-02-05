import React, { Component } from 'react';
import './App.css';
import About from "./components/About";
import CreateAccount from "./components/CreateAccount";
// import Game from "./components/Game";
import Resources from "./components/Resources";
import SignIn from "./components/SignIn";
import "./App.css";

const App = () => (
  <div className="container-fluid mainContainer">
    <About />
    <CreateAccount /> 
    {/* <Game /> */}
    <Resources />
    <SignIn />   
  </div>
);

export default App;
