// loosely based off my pokesearch lab, I just want to create this for fun
import React, { Component } from 'react';
import Home from "./Home.js";
import Gaang from "./Gaang.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
        <header>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
          <NavLink exact activeClassName='active' to='/Gaang'>Gaang</NavLink>
        </header>
        <Switch>
          <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps}/>}
          />
          <Route
          path="/Gaang"
          exact
          render={(routerProps)=> <Gaang {...routerProps}/>}
          />
        </Switch>
        </Router>
      </>
    )
  }
}




