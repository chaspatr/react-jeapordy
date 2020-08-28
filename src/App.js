import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import NoMatch from "./components/no-match/NoMatch";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="Navigation">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Chase" />}
          />
          <Route
            path="/welcome/:name"
            render={(props) => (
              <Welcome {...props} name={props.match.params.name} />
            )}
          />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/jeopardy" component={Jeopardy} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
