import {
  POST_USER_DETAIL_LOADING,
  POST_USER_DETAIL_SUCCESS,
  POST_USER_DETAIL_FAIL,
} from "../Action/actionTypes";

export const initialState = {
  userData: [],
  isError: false,
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case POST_USER_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case POST_USER_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userData: action.payload,
      };
    case POST_USER_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
