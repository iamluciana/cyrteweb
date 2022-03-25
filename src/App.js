import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import Landing from "./Pages/Landing";
import Items from "./Pages/Items";
import Modes from "./Pages/Modes";
import Footer from "./Pages/Footer";

import React from "react";

function App() {
  return (
    <div className="App">
      <Landing/>
      <Items/>
      <Modes/>
      <Footer/>
    </div>
  );
}

export default App;
