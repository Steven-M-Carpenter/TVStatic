import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import NoMatch from "./pages/NoMatch";
import Authenticate from "./pages/Authenticate";

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Authenticate} />
            {/* <Route exact path="/login" component={LandingPage} /> */}
            {/* <Route exact path="/auth" render={() => (
              this.state.isLoggedIn ? (
                <Redirect to="/auth/deal" />
              ) : (
                <LandingPage handleLoginStatus={this.handleLoginStatus} />
              ))} /> */}
            {/* <Route exact path="/auth/deal" component={DealForm} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
