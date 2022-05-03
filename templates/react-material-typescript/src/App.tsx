import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { TestComponent } from "./TestComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TestComponent />
        </Route>
        <Route exact path="/autores">
          <TestComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
