import React from 'react';
import './App.css';
import About from "./components/About";
import Game from "./components/Game";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div className="container-fluid mainContainer">
  
    <About />
    <Game />
    {/* <Resources /> */}
    <Footer />
  </div>
);

export default App;
