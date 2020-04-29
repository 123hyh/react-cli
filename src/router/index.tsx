import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import loadable from './Loadable';

import Home from '@/view/Home/Home';

/**
 * 路由组件
 *@return {JSX}
 */
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
            import(/* webpackChunkName: "login" */ '@/view/Login/Login'),
          )}
        />
        <Route
          path="*"
          component={loadable(() =>
            import(/* webpackChunkName: "notFind" */ '@/view/NotFind'),
          )}
        />
      </Switch>
    </Router>
  );
}
