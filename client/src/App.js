import React from 'react';
import './App.css';
import About from "./components/About";
import Game from "./components/Game";
// import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Resources from "./components/Resources";


const App = () => (
  <div className="container-fluid mainContainer">
  
    <About />
    <Game />
    <Resources />
    <Footer />
  </div>
);

export default App;
