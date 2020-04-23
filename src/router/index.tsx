import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from './Loadable';

import Home from '@/view/Home/Home';
/* 懒加载组件 */

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/login"
          component={loadable(() =>
            import(/* webpackChunkName: "Login" */ '@/view/Login/Login')
          )}
        />
        <Route
          path="*"
          component={loadable(() =>
            import(/* webpackChunkName: "NotFind" */ '@/view/NotFind')
          )}
        />
      </Switch>
    </Router>
  );
}
