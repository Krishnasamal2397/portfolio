// import axios from "axios";
// import { all, call, put, takeLatest } from "redux-saga/effects";
// import {
//   postuserdetailsuccess,
//   postuserdetailfail,
//   postuserdetailloading,
// } from "./actionCreator";

// function* workerUserData(action) {
//   try {
//     yield put(postuserdetailloading());
//     const data = yield call(() => {
//       return axios
//         .post("http://localhost:3001/api/post", action)
//         .then((res) => res.json());
//     });
//     yield put(postuserdetailsuccess(data));
//   } catch (error) {
//     yield put(postuserdetailfail(error));
//   }
// }
// export default function* watchuserquery() {
//   yield all([takeLatest("POST_USER_DETAIL_LOADING", workerUserData)]);
// }
