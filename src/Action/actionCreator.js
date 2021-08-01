import {
  POST_USER_DETAIL_LOADING,
  POST_USER_DETAIL_SUCCESS,
  POST_USER_DETAIL_FAIL,
} from "./actionTypes";
import axios from "axios";

export const postUserDetailLoading = () => {
  return { type: POST_USER_DETAIL_LOADING };
};
export const postUserDetailSuccess = (payload) => {
  
  return { type: POST_USER_DETAIL_SUCCESS, payload: payload };
};
export const postUserDetailFail = (error) => {
  return { type: POST_USER_DETAIL_FAIL, error: error };
};
const headers= {
  "Accept": "application/json",
  "Content-Type": "application/json",
}

export const PostUserDetail = (action) => {
  console.log(action)
  return (dispatch) => {
    dispatch(postUserDetailLoading());
    axios.post("http://localhost:3001/api/post", action,{headers})
      .then((res) => res.json())
      .then((data) => {
        dispatch(postUserDetailSuccess(data));
      })
      .catch((err) => {
        dispatch(postUserDetailFail(err));
      });
  };
};
