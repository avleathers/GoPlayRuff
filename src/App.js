import React from 'react';
import './App.css';
import About from "./components/About";
import Game from "./components/Game";
import Footer from "./components/Footer";
import "./App.css";
import Timer from "./components/timer"


const App = () => (
  <div className="container-fluid mainContainer">
  
    <About />
    <Timer />
    <Game />
    {/* <Resources /> */}
    <Footer />
  </div>
);

export default App;
