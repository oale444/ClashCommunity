import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/Profile";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Players} />
        <Route exact path="/users/:id" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
