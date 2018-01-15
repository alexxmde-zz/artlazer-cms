export const SET_POPUP = 'POPUP/SET_POPUP';

export const setPopup = popUpObject => ({
  type: SET_POPUP,
  ...popUpObject,
});

