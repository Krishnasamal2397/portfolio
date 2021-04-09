import axios from "axios";
import {  all,call, put, takeLatest } from "redux-saga/effects";
import {
  postuserdetailsuccess,
  postuserdetailfail,
  postuserdetailloading,
} from "./actionCreator";
// import { POST_USER_DETAIL_LOADING } from "./actionTypes";
// console.log("this is component is been called")
// export function* workerUserData(action) {
//   // console.log("this is been called")
//   try {
//     // const payload = yield axios.post("http://localhost:5000/api/post",action.data)
//     // .then(response => response.json())
//     yield put(postuserdetailloading())
//     const payload = yield call (getData,action)
//     // console.log(payload,"data is coming there")
//     yield put(postuserdetailsuccess(payload));
//   } catch (e) {
//     yield put(postuserdetailfail(e));
//   }
// }

// export const getData=(data)=> {
//   // console.log("this is getting called",data)
//        let res = axios.post("http://localhost:5000/api/post",data)
//         .then(response => response.json())
//         return res;
//   }
function* workerUserData(action) {
    console.log("step3 Is this working")

  try {
    yield put(postuserdetailloading());
    const data = yield call(() => {
      return axios.post("http://localhost:3001/api/post", action).then((res) =>
        res.json()
      );
    });
    yield put(postuserdetailsuccess(data));
  } catch (error) {
    yield put(postuserdetailfail(error));
  }
}
export default function* watchuserquery() {
  // while (true) {
    // console.log("Is this working")

    yield all([takeLatest('POST_USER_DETAIL_LOADING', workerUserData)]);
  // }
}
