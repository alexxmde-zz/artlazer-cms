/* eslint-disable no-underscore-dangle, react/jsx-filename-extension, react/no-typos */
import React from 'react';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from '../../reducers';
import Login from '../login';
import Dashboard from '../dashboard';
import { Container } from '../common/responsive';
import { isLoggedIn } from '../../utils';
import PageContainer from '../../pages/pageContainer';
import selector from './selector';
import PopUp from '../common/popUp';
import sagas from '../../sagas';

const history = createHistory();
const logger = createLogger({
  collapsed: true,
  stateTransformer: state => state.toJS(),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  Map({}),
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history), logger)),
);

sagas.forEach(saga => sagaMiddleware.run(saga));

const AppRoutes = () => (
  <PageContainer>
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </PageContainer>
);
const Routes = ({ popUp }) => (
  <Container>
    <PopUp
      status={popUp.get('status')}
      title={popUp.get('title')}
      message={popUp.get('message')}
      type={popUp.get('popUpType')}
    />
    <Route exact path="/login" component={Login} />
    <Route
      path="/"
      exact
      render={() => (isLoggedIn() ? <AppRoutes /> : <Redirect exact to="/login" />)}
    />
  </Container>);

Routes.propTypes = {
  popUp: ImmutablePropTypes.map.isRequired,
};

const ConnectedRoutes = connect(selector)(Routes);

export default () => (
  <ConnectedRouter history={history}>
    <ConnectedRoutes />
  </ConnectedRouter>);

