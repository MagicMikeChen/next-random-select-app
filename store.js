import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  CHANGE_COUNT_DOWN_STATE,
  SET_RESULT_NAME,
  RESET_ALL_STATUS,
} from "./actions/action";

let store;

const nameList = [
  { nameId: 1, name: "美國瑜" },
  { nameId: 2, name: "泰國瑜" },
  { nameId: 3, name: "蔡台語" },
  { nameId: 4, name: "蔡日文" },
  { nameId: 5, name: "李白" },
  { nameId: 6, name: "李黑" },
  { nameId: 7, name: "蘇東坡" },
  { nameId: 8, name: "蘇西坡" },
  { nameId: 9, name: "蘇北坡" },
];

const initialState = {
  isCountDown: false,
  resultName: "",
  nameList: nameList,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ALL_STATUS:
      return {
        ...state,
        isCountDown: false,
        resultName: "",
      };
    case SET_RESULT_NAME:
      return {
        ...state,
        resultName: action.payload.resultName,
      };
    case CHANGE_COUNT_DOWN_STATE:
      return {
        ...state,
        isCountDown: !state.isCountDown,
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
