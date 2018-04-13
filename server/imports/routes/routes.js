import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';



const User = (props) => {
  return ( <h1> Welcome User {(props.username).toUpperCase()} </h1>)
}

export const routes = (
  <Router>
    <Switch>
      <Route path="/" exact strict render={
        () => {
          return ( <h1>Welcome Home</h1>);
        }
      }/>
      <Route path="/about" exact strict render={
        () => {
          return ( <h1>Welcome About</h1>);
        }
      }/>
      <Route path="/users/:username" exact strict render={ ({ match })=> (<User username={ match.params.username }/>) }/>
      <Route path="*" render = { () => {
        return (<h1>Page Not Found</h1>)
      }}/>
    </Switch>
  </Router>
);
  