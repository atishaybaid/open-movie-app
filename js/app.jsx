import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import ConnectedForm from "./ClientApp.jsx";
import TimerContainer from "./TimerContainer.jsx";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ConnectedForm} />
      <Route exact path="/timer" component={TimerContainer} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
