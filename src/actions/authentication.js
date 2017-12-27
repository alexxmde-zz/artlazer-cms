import authenticate from '../api/authentication';
import { makeApiAction } from './utils';

export const SET_LOGGED_USER = 'AUTH/SET_LOGGED_USER';

export const setUserToken = makeApiAction(authenticate, SET_LOGGED_USER);
