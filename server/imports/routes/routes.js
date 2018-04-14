import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import IndexPage from '../ui/IndexPage';
import LoginPage from '../ui/LoginPage';


const User = (props) => {
  return ( <h1> Welcome User {(props.username).toUpperCase()} </h1>)
}

export const routes = (
  <Router>
    <Switch>
      <Route path="/" exact strict component = { IndexPage }/>
      <Route path="/login" exact strict component = { LoginPage }/>
      <Route path="/users/:username" exact strict render={ ({ match })=> (<User username={ match.params.username }/>) }/>
      <Route path="*" render = { () => {
        return (<h1>Page Not Found</h1>)
      }}/>
    </Switch>
  </Router>
);
  