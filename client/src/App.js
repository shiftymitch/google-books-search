import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";

function App() {
  return ( 
    <Router>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Footer />
    </Router>
  );
}

export default App;
