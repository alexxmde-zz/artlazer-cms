import { fromJS } from 'immutable';
import * as actions from '../actions/authentication';

const initialState = fromJS({
  data: {
    user: {},
    token: null,
  },
  status: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_LOGGED_USER:
      return fromJS({ status: action.status, data: action.data, error: action.error });
    default:
      return state;
  }
};
