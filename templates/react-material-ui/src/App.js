import React from "react";
import AppBarWrapper from "./components/AppBarWrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExampleList from "./views/register/ExampleList";
import ExampleForm from "./views/register/ExampleForm";
import ExampleDetail from "./views/register/ExampleDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <AppBarWrapper />

      <Switch>
        <Route exact path="/autores">
          <ExampleList />
        </Route>

        <Route exact path="/autores/novo">
          <ExampleForm />
        </Route>

        <Route exact path="/livros/:id">
          <ExampleDetail />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
