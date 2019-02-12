import React from 'react';
import './App.css';
import About from "./components/About";
import Game from "./components/Game";
// import Resources from "./components/Resources";
import Footer from "./components/Footer";
//import Resources from "./components/Resources";
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
