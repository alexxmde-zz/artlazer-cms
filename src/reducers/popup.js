import { fromJS } from 'immutable';
import { ERROR, VISIBLE } from '../constants/popup';
import * as actions from '../actions/popup';
import * as authActions from '../actions/authentication';
import { t, makeErrorMessage } from '../utils';

const initialState = fromJS({
  popUpType: null,
  title: null,
  message: null,
  status: null,
});

const errorPopUp = error => fromJS({
  popUpType: ERROR,
  title: t('common.errorOcurred'),
  message: makeErrorMessage(error),
  status: VISIBLE,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case authActions.SET_LOGGED_USER_ERROR:
      return errorPopUp(action.error);
    case actions.SET_POPUP:
      return fromJS({
        status: action.status,
        popUpType: action.popUpType,
        title: action.title,
        message: action.message,
      });
    default:
      return state;
  }
};
