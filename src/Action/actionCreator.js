import {
  POST_USER_DETAIL_LOADING,
  POST_USER_DETAIL_SUCCESS,
  POST_USER_DETAIL_FAIL,
} from "./actionTypes";

export const postuserdetailloading = (data) => {
  console.log("step 2 is working",data)
  return { type: POST_USER_DETAIL_LOADING, data: data };
};
export const postuserdetailsuccess = (payload) => {
  
  return { type: POST_USER_DETAIL_SUCCESS, payload: payload };
};
export const postuserdetailfail = (error) => {
  return { type: POST_USER_DETAIL_FAIL, error: error };
};
// export const fetchDog = () => {
//   return { type: 'FETCHED_DOG' }
// };