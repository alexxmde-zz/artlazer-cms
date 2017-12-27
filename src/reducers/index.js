import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { routerReducer as routing } from 'react-router-redux';
import data from './data';
import authentication from './authentication';

export default combineReducers({
  data,
  form: formReducer,
  authentication,
  routing,
});

