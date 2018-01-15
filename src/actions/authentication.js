import authenticate from '../api/authentication';
import { makeApiAction } from './api';

export const SET_LOGGED_USER_START = 'AUTH/SET_LOGGED_USER_START';
export const SET_LOGGED_USER_ERROR = 'AUTH/SET_LOGGED_USER_ERROR';
export const SET_LOGGED_USER_SUCCESS = 'AUTH/SET_LOGGED_USER_SUCCESS';
export const ENTITY = 'AUTH';

const storeLoggedUser = (data) => {
  const { user, token } = data;
  if (user && token) {
    localStorage.user = JSON.stringify(user);
    localStorage.token = JSON.stringify(token);
  }
};

const setUserTokenActionPayload = {
  apiFn: authenticate,
  entity: ENTITY,
  startAction: SET_LOGGED_USER_START,
  successAction: SET_LOGGED_USER_SUCCESS,
  errorAction: SET_LOGGED_USER_ERROR,
  sideEffect: storeLoggedUser,
};

export const setUserToken = makeApiAction(setUserTokenActionPayload);

