import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TestComponent } from "./TestComponent";
import AppBarWrapper from "./components/AppBarWrapper";

function App() {
  return (
    <Router>
      <AppBarWrapper />
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
