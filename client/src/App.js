import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router>
        <Nav />
        <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
