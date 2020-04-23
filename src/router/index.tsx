import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '@/view/Home/Home';
import Login from '@/view/Login/Login';
import NotFind from '@/view/NotFind';
export default function Routers() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFind />
        </Route>
      </Switch>
    </Router>
  );
}
