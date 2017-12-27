/* eslint-disable import/prefer-default-export, no-console */
import { LOADED, LOADING, ERROR } from '../constants/fetch';

export const makeApiAction = (apiFn, action) =>
  params =>
    async (dispatch) => {
      dispatch({ type: action, data: {}, status: LOADING });

      try {
        const data = await apiFn(params);
        dispatch({ type: action, data, status: LOADED });
        return data;
      } catch (error) {
        dispatch({
          type: action, data: {}, status: ERROR, error,
        });
        console.error(error);
        throw error;
      }
    };
