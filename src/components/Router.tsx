import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '@src/pages/Main';

const SignIn = React.lazy(() => import('@src/pages/SignIn'));
const SignUp = React.lazy(() => import('@src/pages/SignUp'));

const Router: React.FC = () => {
  return (
    <React.Suspense fallback="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  )
}

Router.displayName = 'Route';
export default Router;