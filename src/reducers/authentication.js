import { fromJS } from 'immutable';
import * as actions from '../actions/authentication';
import { LOADING, LOADED, ERROR } from '../constants/fetch';

const initialState = fromJS({
  data: {
    user: {},
    token: null,
  },
  status: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOGGED_USER_START:
      return fromJS({ status: LOADING, data: null, error: null });
    case actions.SET_LOGGED_USER_SUCCESS:
      return fromJS({ status: LOADED, data: action.data });
    case actions.SET_LOGGED_USER_ERROR:
      return fromJS({ status: ERROR, error: action.error });
    default:
      return state;
  }
};
