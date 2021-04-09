import { all,fork  } from "redux-saga/effects";
import  watchuserquery  from '../Action/Apicall';

export default function* watchersrootSaga() {
  yield all([fork(watchuserquery)]);
}
