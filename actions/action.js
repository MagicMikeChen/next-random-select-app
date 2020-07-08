import { createAction } from "redux-actions";

// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_COUNT_DOWN_STATE = "CHANGE_COUNT_DOWN_STATE";
export const SET_RESULT_NAME = "SET_RESULT_NAME";
export const RESET_ALL_STATUS = "RESET_ALL_STATUS";

// ------------------------------------
// Actions
// ------------------------------------

export const changeCountDownState = createAction(CHANGE_COUNT_DOWN_STATE);
export const resetAllStatus = createAction(RESET_ALL_STATUS);
export const setResultName = createAction(SET_RESULT_NAME, (resultName) => ({
  resultName,
}));
