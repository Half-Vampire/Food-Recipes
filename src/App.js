import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Default from "./pages/Default";
import SingleRecipe from "./pages/SingleRecipe";
import Recipes from "./pages/Recipes";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/recipes" exact component={Recipes}></Route>
            <Route path="/recipes/:id" component={SingleRecipe}></Route>
            <Route component={Default}></Route>
          </Switch>
        </main>
      </Router>
    );
  }
}
