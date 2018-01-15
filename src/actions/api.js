/* eslint-disable import/prefer-default-export, no-console */
export const API_REQUEST = 'API_REQUEST';

export const makeApiAction = function a({
  apiFn, entity, startAction, successAction, errorAction, sideEffect,
}) {
  return params => dispatch => new Promise((resolve, reject) => {
    const payload = {
      apiFn, entity, startAction, successAction, errorAction, params, resolve, reject, sideEffect,
    };
    dispatch({ type: API_REQUEST, payload });
  });
};

