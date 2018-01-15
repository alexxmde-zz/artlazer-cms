/* eslint-disable import/prefer-default-export, no-console */
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOADED, LOADING, ERROR } from '../constants/fetch';
import { API_REQUEST } from '../actions/api';

function* apiRequest(action) {
  const {
    payload: {
      apiFn, params, startAction, successAction, errorAction, resolve, reject, sideEffect,
    },
  } = action;
  try {
    yield put({ type: startAction, data: {}, status: LOADING });
    const data = yield call(apiFn, params);
    yield put({ type: successAction, data, status: LOADED });
    sideEffect(data);
    return resolve(data);
  } catch (error) {
    yield put({
      type: errorAction, data: {}, status: ERROR, error,
    });
    console.error(error);
    return reject(error);
  }
}

export function* apiRequestSaga() {
  yield takeEvery(API_REQUEST, apiRequest);
}
