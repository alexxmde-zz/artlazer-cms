/* eslint-disable no-underscore-dangle, react/jsx-filename-extension */
import React from 'react';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from '../../reducers';
import Login from '../login';
import Dashboard from '../dashboard';
import { Container } from '../common/responsive';
import { isLoggedIn } from '../../utils';
import PageContainer from '../../pages/pageContainer';

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  Map({}),
  composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history))),
);

const AppRoutes = () => (
  <PageContainer>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </PageContainer>
);
const Routes = () => (
  <Container>
    <Route exact path="/login" component={Login} />
    <Route
      path="/"
      exact
      render={() => (isLoggedIn() ? <AppRoutes /> : <Redirect exact to="/login" />)}
    />
  </Container>);

export default () => (
  <ConnectedRouter history={history}>
    <Routes />
  </ConnectedRouter>);

