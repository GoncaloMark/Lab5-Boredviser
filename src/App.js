import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <Navbar />
    </Router>
    </>
  );
}


export default App;
