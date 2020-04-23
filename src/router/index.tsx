import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import loadable from './Loadable';

import Home from '@/view/Home/Home';
/* 懒加载组件 */

export default function Routers() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Switch>
        <Route
          exact
          path="/login"
          component={loadable(() => import('@/view/Login/Login'))}
        />
        <Route path="*" component={loadable(() => import('@/view/NotFind'))} />
      </Switch>
    </Router>
  );
}
