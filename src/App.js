import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserFeed from "./UserFeed";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Every Interaction Twitter Homepage</title>
        </Helmet>
        <Router>
          <div>
            <Route path="/EveryInteraction" component={UserFeed} />
            <Redirect from="/" to="EveryInteraction" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
